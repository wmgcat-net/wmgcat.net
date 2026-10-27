import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";
import { readFileSync } from "fs";

loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

export default defineConfig({
  schema: "./src/shared/api/model/db-schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
		host: process.env.PG_HOST!,
		port: Number(process.env.PG_PORT || 5432),
		user: process.env.PG_USER!,
		password: process.env.PG_PASS!,
		database: process.env.PG_DB!,
		ssl: process.env.PG_SSL == "true" && {
			ca: readFileSync("./global-bundle.pem", "utf8"),
			rejectUnauthorized: true
		}
  }
});
