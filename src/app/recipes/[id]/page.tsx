import ShareButton from "~/app/_components/shareButton";
import { getRecipe } from "~/server/queries";
import UpvoteButton from "~/app/_components/upvoteButton";
import { didUpvote } from "~/server/queries";
import ShoppingList from "~/app/_components/shoppingList";

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
      <div className="hero h-auto bg-base-200 rounded text-wrap">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {recipe.image && <img src={recipe.image} alt={recipe.name} className="rounded-lg h-28 md:h-80 mr-10" />}
          <div>
            <h1 className="text-2xl md:text-5xl font-bold">{recipe.name}</h1>
            <p className="py-6 w-full text-wrap">{recipe.shortDescription}</p>
            <div className="flex flex-row gap-5 flex-wrap">
              <UpvoteButton recipeId={Number(recipeId)} upvoted={upvoted} />
              <ShareButton />
              <ShoppingList shoppingList={recipe.ingredients}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col m-5 gap-5 w-full text-wrap">
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