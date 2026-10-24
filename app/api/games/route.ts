import "server-only";

import { NextResponse } from "next/server";
import redis from "@/shared/api/redis";
import db from "@/shared/api/db";
import { instances } from "@/shared/api";
import { count, desc, eq } from "drizzle-orm";

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

	const cache_key = `games:${offset}:${limit}`;
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
		db.select({
			id: instances.id,
			title: instances.title,
			author: instances.author,
			description: instances.description,
			links: instances.links,
			create_at: instances.created_at,
			type: instances.type
		})
		.from(instances)
		.where(
			eq(instances.type, "game")
		)
		.orderBy(
			desc(instances.created_at),
			desc(instances.id)
		)
		.offset(offset)
		.limit(limit),
		db.select({
			total: count()
		})
		.from(instances)
		.where(
			eq(instances.type, "game")
		)
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
