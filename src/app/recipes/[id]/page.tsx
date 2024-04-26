import ShareButton from "~/app/_components/shareButton";
import { getRecipe } from "~/server/queries";
import UpvoteButton from "~/app/_components/upvoteButton";
import { didUpvote } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function RecipePage({
  params: { id: recipeId },
}: {
  params: { id: string },
}) {
  const recipe = await getRecipe(Number(recipeId));
  const upvoted = await didUpvote(Number(recipeId));

  return (
    <div className="flex flex-col m-10">
      <div className="hero h-96 bg-base-200 rounded">
        <div className="hero-content flex-col lg:flex-row">
          {recipe.image ?? <img src={recipe.image!} alt={recipe.name} className="max-w-sm rounded-lg" />}
          <div>
            <h1 className="text-5xl font-bold">{recipe.name}</h1>
            <p className="py-6">{recipe.shortDescription}</p>
            <div className="flex flex-row gap-5">
              <UpvoteButton recipeId={Number(recipeId)} upvoted={upvoted} />
              <ShareButton />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col m-5 gap-5">
        <h1 className="text-2xl font-bold text-neutral"> Ingredients </h1>
        <div className="render-newline ml-5">
          {recipe.ingredients}
        </div>
      </div>
      <div className="flex flex-col m-5 gap-5">
        <h1 className="text-2xl font-bold text-neutral"> Instructions </h1>
        <div className="render-newline ml-5">
          {recipe.description}
        </div>
      </div>
    </div>
  );
}