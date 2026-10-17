import fs from "fs";
import pg from "pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const db = new pg.Pool({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    max: 80,
    min: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
		ssl: {
			rejectUnauthorized: false,
			ca: fs.readFileSync(path.resolve(__dirname, "../../global-bundle.pem"), "utf8")
		}
});

db.on("connect", () => console.log("CONENCTE"));
db.on("error", (err: Error) => console.error("[db]", err.message));

export default db;
