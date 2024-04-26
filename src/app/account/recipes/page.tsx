import { getMyRecipes } from "../../../server/queries";
import RecipeCard from "~/app/_components/recipeCard";

export default async function MyRecipes() {
  const recipes = await getMyRecipes();

  return (
    <div className="flex flex-col m-10">
      <h1 className="text-2xl font-bold text-neutral">My Recipes</h1>
      <div className="flex flex-wrap gap-5 m-5 mt-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipeId={recipe.id}/>
        ))}
      </div>
    </div>
  );
}