import { contactSubmissions, type InsertContact, type ContactSubmission, products, productCategories, type Product, type ProductCategory } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getProducts(): Promise<Product[]>;
  getCategories(): Promise<ProductCategory[]>;
  getProductsByCategory(categoryId: number): Promise<Product[]>;
  getCategoryBySlug(slug: string): Promise<ProductCategory | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const [contact] = await db
      .insert(contactSubmissions)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getCategories(): Promise<ProductCategory[]> {
    return await db.select().from(productCategories);
  }

  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.categoryId, categoryId));
  }

  async getCategoryBySlug(slug: string): Promise<ProductCategory | undefined> {
    const [category] = await db.select().from(productCategories).where(eq(productCategories.slug, slug));
    return category;
  }
}

export const storage = new DatabaseStorage();
