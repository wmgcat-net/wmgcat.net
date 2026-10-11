import db from "@/libs/db";
import redis from "@/libs/redis";
import Art from "@/types/art";
import { NextResponse } from "next/server";

/**
 * [GET] /api/arts
 *
 * Query::
 * @param offset - Offset 
 * @param limit - Limit
 * @returns
*/
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const limit = Number(searchParams.get("limit") ?? 10);
	const offset = Number(searchParams.get("offset") ?? 0);

	const cache_key = `arts:${offset}:${limit}`;
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

	const result = await db.query<Art & { total: number }>(`
		SELECT
			COUNT(*) OVER()::INTEGER as total,
			id,
			author,
			links,
			date_created
		FROM 
			"creatives"
		OFFSET $1
		LIMIT $2
	`, [
		offset,
		limit
	]);

	const items = result?.rows;
	const total = result?.rows?.[0]?.total;
	const data = {
		items,
		meta: {
			offset,
			limit,
			total
		}
	}
	
	redis.writeWithLog(cache_key, JSON.stringify(data));
	return NextResponse.json(data);
}
