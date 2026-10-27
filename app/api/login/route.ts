import "server-only";

import { verify } from "argon2";
import { eq } from "drizzle-orm";
import db from "@/shared/api/db";
import { users } from "@/shared/api/model/db-schema";
import { signToken } from "@/shared/auth";

export async function POST(request: Request) {
	const {
		login,
		password
	} = await request.json().catch(() => ({}));

	if (typeof login !== "string" || typeof password !== "string") {
		return Response.json({ error: "Enter login and password" }, { status: 400 });
	}

	const [ user ] = await db
		.select()
		.from(users)
		.where(eq(users.login, login))
		.limit(1);

	if (!user || !(await verify(user.password, password))) {
		return Response.json({ error: "Неверный логин или пароль" }, { status: 401 });
	}

	return Response.json(
		{ token: await signToken(user.id) },
		{ headers: { "Cache-Control": "no-store" } }
	);
}
