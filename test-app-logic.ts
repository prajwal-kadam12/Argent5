import "dotenv/config";
import { storage } from "./server/storage";
import { db } from "./server/db";
import { sql } from "drizzle-orm";

async function test() {
    try {
        console.log("Testing connection...");
        const res = await db.execute(sql`SELECT 1`);
        console.log("Connection OK:", res.rows);

        console.log("Calling storage.getCategories()...");
        const categories = await storage.getCategories();
        console.log("Success! Categories count:", categories.length);
        process.exit(0);
    } catch (err) {
        console.error("Caught error in test script:", err);
        process.exit(1);
    }
}

test();
