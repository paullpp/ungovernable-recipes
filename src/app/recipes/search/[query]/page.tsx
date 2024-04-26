import { queryRecipes } from "~/server/queries";
import RecipeCard from "~/app/_components/recipeCard";

export default async function SearchPage({
  params: { query: query},
}: {
  params: { query: string},
}) {
  const recipes = await queryRecipes(query);

  return (
    <div className="flex flex-col gap-5 m-10">
      <h1 className="text-2xl font-bold text-neutral">Search Results</h1>
      <div className="flex flex-wrap gap-5 m-5">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipeId={recipe.id} />
        ))}
      </div>
    </div>
  );
}