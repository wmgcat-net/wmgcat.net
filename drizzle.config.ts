import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

export default defineConfig({
  schema: "./src/shared/api/model/db-schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: `postgresql://${process.env.PG_USER!}:${process.env.PG_PASS!}@${process.env.PG_HOST!}:${process.env.PG_PORT!}/${process.env.PG_DB!}`
  }
});
