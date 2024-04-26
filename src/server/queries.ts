"use server";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { recipes, recipe_upvotes } from "./db/schema";
import { eq, sql, and } from "drizzle-orm";

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

export async function getPopularRecipes() {
  const recipes = await db.query.recipes.findMany({
    orderBy: (model, { desc }) => desc(model.upvotes),
  });

  return recipes.slice(0, 15);
}

export async function getMyRecipes() {
  const user = auth();

  if (!user.userId) {
    throw new Error ("unauthorized");
  }

  const recipes = await db.query.recipes.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId)
  });

  return recipes;
}

export async function getMyUpvotes() {
  const user = auth();

  if (!user.userId) {
    throw new Error ("unauthorized");
  }

  const results = await db.select()
                          .from(recipe_upvotes)
                          .leftJoin(recipes, eq(recipes.id, recipe_upvotes.recipeId))
                          .where(eq(recipe_upvotes.userId, user.userId));

  return results;
}

export async function didUpvote(id: number) {
  const user = auth();

  if (!user.userId) {
    return false;
  }

  const upvoteCheck = await db.query.recipe_upvotes.findFirst({
    where: (model, { eq }) => and(eq(model.recipeId, id), eq(model.userId, user.userId)),
  });

  return (upvoteCheck ? true : false);
}

export async function queryRecipes(query: string) {
  const recipes = await db.query.recipes.findMany({
    where: (model, { ilike }) => ilike(model.name, `%${query}%`)
  });

  return recipes;
}

export async function editRecipe(id: number, name: string, image: string, shortDescription: string, ingredients: string, instructions: string) {
  const user = auth();

  if (!user.userId) {
    throw new Error("unauthorized");
  }
  
  await db.update(recipes).set({
    name: name,
    image: image,
    shortDescription: shortDescription,
    ingredients: ingredients,
    description: instructions
  }).where(and(eq(recipes.userId, user.userId), eq(recipes.id, id)));
}

export async function deleteRecipe(id: number) {
  const user = auth();

  if (!user.userId) {
    throw new Error("unauthorized");
  }

  await db.delete(recipes).where(and(eq(recipes.userId, user.userId), eq(recipes.id, id)));
}