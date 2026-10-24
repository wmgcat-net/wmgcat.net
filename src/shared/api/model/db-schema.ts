import {
  jsonb,
	pgEnum,
	pgTable,
	serial,
	text,
  timestamp
} from "drizzle-orm/pg-core";
import Link from "./link";

export const instanceTypeEnum = pgEnum("type", [ "game", "art" ]);

export const instances = pgTable("instances", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	type: instanceTypeEnum("type").default("game").notNull(),
	author: text("author").default("wmgcat").notNull(),
	description: text("description"),
	links: jsonb("links").$type<Link[]>().default([]),
	created_at: timestamp("created_at").defaultNow().notNull()
});
