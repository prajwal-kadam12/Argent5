import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error([
    "DATABASE_URL must be set. Did you forget to provision a database?",
    "To run locally, create a .env file with an entry like:",
    "  DATABASE_URL=postgresql://postgres:postgres@localhost:5432/argent_dev",
    "Or run a local Postgres with Docker:",
    "  docker run --name argent-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=argent_dev -p 5432:5432 -d postgres:15",
    "Then retry: npm run dev",
  ].join("\n"));
}

const connectionString = process.env.DATABASE_URL!;
const poolConfig: any = { connectionString };

if (/sslmode=require/i.test(connectionString) || /neon/i.test(connectionString) || process.env.DATABASE_SSL === "true") {
  poolConfig.ssl = { rejectUnauthorized: false };
}

export const pool = new Pool(poolConfig);
export const db = drizzle(pool, { schema });
