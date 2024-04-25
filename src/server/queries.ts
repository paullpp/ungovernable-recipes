"use server";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { recipes } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function insertRecipe(name: string, image: string, shortDescription: string, ingredients: string, instructions: string) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db.insert(recipes).values({
    name: name,
    userId: user.userId,
    image: image,
    shortDescription: shortDescription,
    ingredients: ingredients,
    description: instructions,
    upvotes: 0
  });

  redirect("/recipes");
}

export async function getRecipes() {
  const images = await db.query.recipes.findMany();

  return images;
}