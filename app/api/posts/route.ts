import "server-only";
import { randomUUID } from "node:crypto";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3, bucket } from "@/shared/api/s3";
import db from "@/shared/api/db";
import { posts, users } from "@/shared/api/model/db-schema";
import { postSchema } from "@/entities/Post/model/post";
import { publishToTelegram } from "@/shared/api/telegram";
import redis from "@/shared/api/redis";
import { NextResponse } from "next/server";
import { desc, count, eq } from "drizzle-orm";
import { publishToBluesky } from "@/shared/api/bsky";
import { verifyToken } from "@/shared/auth";

export async function POST(request: Request) {
	const authorization = request.headers.get("authorization");
	const token = authorization?.match(/^Bearer\s+(\S+)$/i)?.[1];

	const userId = token ? await verifyToken(token) : null;

	if (userId === null) {
		return Response.json(
			{ error: "Unauthorized" },
			{ status: 401 }
		);
	}	

	const find = await db.select({
		id: users.id
	})
		.from(users)
		.where(eq(users.id, userId));
	
	if (!find?.length)
		return Response.json(
			{ error: "Unauthorized" },
			{ status: 401 }
		);


	const form = await request.formData();
	const result = postSchema
		.pick({ content: true })
		.safeParse({
			content: form.get("content")
		});

  if (!result.success) {
    return Response.json(
      { errors: result.error.issues },
      { status: 400 }
    );
  }

	const content = result.data.content;
	const ru_content = form.get("ru_content");
	const image = form.get("image");

	if (image !== null && !(image instanceof File)) {
		return Response.json(
			{ error: "Image must be a file" },
			{ status: 400 }
		);
	}

	if (image && (!image?.size || image?.size > 5 * 1024 * 1024))
		return Response.json(
			{ error: "Image size range 1 byte, 5mb" },
			{ status: 400 }
		);
	
	const extensions: Record<string, string> = {
		"image/jpeg": "jpg",
		"image/png": "png",
		"image/webp": "webp",
		"image/gif": "gif"
	}

	let imageName;
	if (image) {
		const extension = extensions?.[image?.type];
		if (!extension)
			return Response.json(
				{ error: "Allowed image format: png, jpeg, webp, gif" },
				{ status: 400 }
			);

		imageName = `${randomUUID()}.${extension}`;
		const key = `posts/${imageName}`;

		await s3.send(new PutObjectCommand({
			Bucket: bucket,
			Key: key,
			Body: Buffer.from(await image.arrayBuffer()),
			ContentType: image?.type
		}));
	}

	const row = await db.insert(posts)
		.values({
			content,
			image: imageName
		})
		.returning();

	try {
		await publishToTelegram(ru_content as string, image ?? undefined);
	}
	catch (error) {
		console.error(
			"Telegram publication failed:",
			error instanceof Error ? error.message : "Unknown error"
		);
	}
	try {
		await publishToBluesky(content as string, image ?? undefined);
	}
	catch (error) {
		console.error(
			"Bluesky publication failed:",
			error instanceof Error ? error.message : "Unknown error"
		);
	}

	await redis.delAllWithLog("posts:*");
	return Response.json(row?.[0], { status: 201 });
}

/**
 * [GET] /api/games
 *
 * Query:
 * @param offset - Offset 
 * @param limit - Limit
 * @returns
*/
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const limit = Number(searchParams.get("limit") ?? 10);
	const offset = Number(searchParams.get("offset") ?? 0);

	const cache_key = `posts:${offset}:${limit}`;
	const cache = await redis.readWithLog(cache_key);
	if (cache) {
		try {
			const result = JSON.parse(cache);
			return NextResponse.json(result);
		}
		catch {
			await redis.delWithLog(cache_key);
		}
	}
	
	const [ items, [ stats ] ] = await Promise.all([
		db.select()
		.from(posts)
		.orderBy(
			desc(posts.created_at),
			desc(posts.id)
		)
		.offset(offset)
		.limit(limit),
		db.select({
			total: count()
		})
		.from(posts)
	]);

	const data = {
		items,
		meta: {
			offset,
			limit,
			total: stats.total
		}
	}
	
	redis.writeWithLog(cache_key, JSON.stringify(data));
	return NextResponse.json(data);
}
