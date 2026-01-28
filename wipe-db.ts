import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function wipe() {
    try {
        await pool.query(`
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS product_categories;
      DROP TABLE IF EXISTS contact_submissions;
    `);
        console.log("Tables dropped successfully.");
        process.exit(0);
    } catch (err) {
        console.error("Error wiping DB:", err);
        process.exit(1);
    }
}

wipe();
