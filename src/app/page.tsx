import RecipeCard from "./_components/recipeCard";
import { getPopularRecipes } from "../server/queries";

export default async function HomePage() {
  const recipes = await getPopularRecipes();

  return (
    <>
      <div className="hero min-h-96 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Recipes without Ads</h1>
            <p className="py-6">Browse our great collection of tasty recipes, completely for free and without ads. We have many cool features, so give us a try next time you&apos;re cooking something delicious.</p>
            <p className="py-6 pt-1"> Sign in to upload your own recipes. </p>
            <a href="/recipes" className="btn btn-primary">Browse Recipes</a>
          </div>
        </div>
      </div>
      <div className="m-10 flex flex-col">
        <h1 className="text-3xl font-bold"> Popular Recipes </h1>
        <div className="m-10 flex flex-wrap gap-10">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipeId={recipe.id}/>
          ))}
        </div>
      </div>
    </>
  );
}
