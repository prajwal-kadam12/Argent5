import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function check() {
    try {
        const res = await pool.query(`
      SELECT schemaname, tablename 
      FROM pg_catalog.pg_tables 
      WHERE schemaname NOT IN ('pg_catalog', 'information_schema')
      ORDER BY schemaname, tablename;
    `);
        console.log("ALL_TABLES_START");
        res.rows.forEach(row => console.log(`${row.schemaname}.${row.tablename}`));
        console.log("ALL_TABLES_END");
        process.exit(0);
    } catch (err) {
        console.error("Error connecting to DB:", err);
        process.exit(1);
    }
}

check();
