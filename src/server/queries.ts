"use server";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { recipes, recipe_upvotes } from "./db/schema";
import { eq, sql, and } from "drizzle-orm";
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

export async function getRecipe(id: number) {
  const recipe = await db.query.recipes.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!recipe) {
    throw new Error (`No recipe with id ${id} found`);
  } 

  return recipe;
}

export async function upvoteRecipe(id: number) {
  const user = auth();

  if (!user.userId) {
    throw new Error("unauthorized");
  }

  const upvoteCheck = await db.query.recipe_upvotes.findFirst({
    where: (model, { eq }) => and(eq(model.recipeId, id), eq(model.userId, user.userId)),
  });

  if (!upvoteCheck) {
    const recipe = await db.update(recipes)
      .set({upvotes: sql`${recipes.upvotes} + 1`})
      .where(eq(recipes.id, id))
      .returning({ updatedId: recipes.id });
    
    if (!recipe) {
      throw new Error (`Update on recipe with id ${id} failed`);
    }
    await db.insert(recipe_upvotes).values({
      recipeId: id,
      userId: user.userId
    });
  }

}