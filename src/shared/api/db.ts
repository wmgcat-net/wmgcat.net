import { loadEnvConfig } from "@next/env";
import fs from "fs";
import pg, { Client } from "pg";
import path from "path";
import { fileURLToPath } from "url";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

const pool = new pg.Pool({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    max: 80,
    min: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
		ssl: process.env.PG_SSL == "true" && {
			rejectUnauthorized: false,
			ca: fs.readFileSync(path.resolve(__dirname, "../../../global-bundle.pem"), "utf8")
		}
});

pool.on("connect", () => console.log("CONENCTE"));
pool.on("error", (err: Error) => console.error("[db]", err.message));

async function runMigration() {
  const client = new Client({
    connectionString: `postgresql://${process.env.PG_USER!}:${process.env.PG_PASS!}@${process.env.PG_HOST!}:${process.env.PG_PORT!}/${process.env.PG_DB!}`,
    ssl: process.env.PG_SSL == "true" && {
			rejectUnauthorized: false,
			ca: fs.readFileSync(path.resolve(__dirname, "../../../global-bundle.pem"), "utf8")
		}
  });

  await client.connect();
  const db = drizzle(client);

  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "./migrations" });
  console.log("Migrations completed successfully!");

  await client.end();
}

runMigration().catch(console.error);
export default drizzle(pool);
