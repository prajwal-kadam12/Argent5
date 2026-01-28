import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { sql } from "drizzle-orm";
import { productCategories, products } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const contact = await storage.createContactSubmission(input);
      res.status(201).json(contact);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
        });
      }
      throw err;
    }
  });

  app.get(api.products.list.path, async (req, res) => {
    const allProducts = await storage.getProducts();
    res.json(allProducts);
  });

  app.get(api.products.categories.list.path, async (req, res) => {
    const categories = await storage.getCategories();
    res.json(categories);
  });

  // Seed data function
  async function seed() {
    try {
      // Ensure tables exist using raw SQL as a robust fallback
      await db.execute(sql`
        CREATE TABLE IF NOT EXISTS product_categories (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          slug TEXT NOT NULL UNIQUE
        );
        CREATE TABLE IF NOT EXISTS products (
          id SERIAL PRIMARY KEY,
          category_id INTEGER REFERENCES product_categories(id),
          name TEXT NOT NULL,
          description TEXT NOT NULL,
          usage TEXT,
          rate TEXT,
          packing TEXT
        );
        CREATE TABLE IF NOT EXISTS contact_submissions (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          message TEXT NOT NULL
        );
      `);

      const categories = await storage.getCategories();
      if (categories.length === 0) {
        const [cat] = await db.insert(productCategories).values({
          name: "Human Nutrition",
          slug: "human-nutrition",
        }).returning();

        const subTypes = [
          "Edible Oil", "Milk & Dairy", "Rice / FRK", "Flour", "Salt",
          "Bread, Biscuit & Bakery", "Breakfast Cereals"
        ];

        for (const type of subTypes) {
          await db.insert(products).values([
            {
              categoryId: cat.id,
              name: `ULTRAMIX - ${type}`,
              description: "Vitamins A & D fortification",
              usage: "Vitamins A & D fortification",
              rate: "1 KG for 50 MT",
              packing: "1 KG (customizable)",
            },
            {
              categoryId: cat.id,
              name: `ULTRAMIX AD2E - ${type}`,
              description: "Vitamins A & D fortification",
              usage: "Vitamins A & D fortification",
              rate: "1 KG for 20 MT",
              packing: "1 KG (customizable)",
            }
          ]);
        }
      }
    } catch (e) {
      console.error("Error during seeding:", e);
    }
  }

  seed().catch(console.error);

  return httpServer;
}
