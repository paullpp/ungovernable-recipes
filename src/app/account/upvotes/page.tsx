import { getMyUpvotes } from "~/server/queries";
import RecipeCard from "~/app/_components/recipeCard";

/**
 * We're fine with recipe.recipe potentially being null, it won't error, just renders nothing
 */
export default async function MyUpvotes() {
  const recipes = await getMyUpvotes();

  return (
    <div className="flex flex-col m-10">
      <h1 className="text-2xl font-bold text-neutral">My Upvotes</h1>
      <div className="flex flex-wrap gap-5 m-5 mt-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipes!.id} recipeId={recipe.recipes!.id}/>
        ))}
      </div>
    </div>
  );
}