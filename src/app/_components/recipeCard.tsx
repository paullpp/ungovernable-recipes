import { getRecipe } from "~/server/queries";

export default async function RecipeCard(props: { recipeId: number }) {
  const recipeId = props.recipeId;
  const recipe = await getRecipe(recipeId);

  return (
    <>
      <a href={`/recipes/${recipe.id}`} className="card card-compact w-80 bg-neutral-content">
        <figure>{recipe.image ?? <img src={recipe.image!} alt={recipe.name} />}</figure>
        <div className="card-body">
          <h2 className="card-title">
            {recipe.name}
          </h2>
          <p> 
            {recipe.shortDescription} 
          </p>
          <div className="badge badge-secondary">{recipe.upvotes} Upvotes</div>
        </div>
      </a>
    </>
  );
}