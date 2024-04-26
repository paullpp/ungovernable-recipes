import { getRecipes } from "~/server/queries";
import RecipeCard from "~/app/_components/recipeCard";

export default async function RecipePage() {
  const recipes = await getRecipes();

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold m-10 text-neutral pb-5 border-b"> All Recipes </h1>
        <div className="flex flex-wrap gap-10 m-10">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipeId={recipe.id} />
          ))}  
        </div>
      </div>
    </>
  );
}