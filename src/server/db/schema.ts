// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `ungovernable-recipes_${name}`);

export const recipes = createTable(
  "recipes",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    userId: varchar("userId", { length: 256 }).notNull(),
    image: varchar("image", { length: 1024 }),
    shortDescription: varchar("shortDescription", { length: 512 }).notNull(),
    ingredients: varchar("ingredients", { length: 8192 }).notNull(),
    description: varchar("description", { length: 65536 }).notNull(),
    upvotes: integer("upvotes").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const recipe_upvotes = createTable(
  "recipe_upvotes",
  {
    id: serial("id").primaryKey(),
    userId: varchar("userId", { length: 256 }).notNull(),
    recipeId: integer("recipeId").references(() => recipes.id).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  }
)
