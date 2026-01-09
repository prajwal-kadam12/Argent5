import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
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
  }

  seed().catch(console.error);

  return httpServer;
}
