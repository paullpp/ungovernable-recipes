import EditButton from "./editButton";
import { getRecipe } from "~/server/queries";
import DeleteButton from "./deleteButton";

export default async function RecipeCard(props: { recipeId: number, owner?: boolean }) {
  const recipeId = props.recipeId;
  const owner = props.owner ?? false; 
  const recipe = await getRecipe(recipeId);

  return (
    <>
      <a href={`/recipes/${recipe.id}`} className="card card-compact w-80 bg-neutral-content">
        <figure>{recipe.image && <img src={recipe.image} alt={recipe.name} className="object-fit h-40"/>}</figure>
        <div className="card-body">
          <h2 className="card-title">
            {recipe.name}
          </h2>
          <p> 
            {recipe.shortDescription} 
          </p>
          <div className="flex flex-row gap-5">
            <div className="badge badge-primary text-white p-2">{recipe.upvotes} Upvotes</div>
            {owner && (
              <>
                <EditButton recipeId={recipe.id} />
                <DeleteButton recipeId={recipe.id} />
              </>
            )}
          </div>
        </div>
      </a>
    </>
  );
}