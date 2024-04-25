import { getRecipes } from "~/server/queries";

export default async function RecipePage() {
  const recipes = await getRecipes();

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold m-10 text-neutral pb-5 border-b"> All Recipes </h1>
        <div className="flex flex-wrap gap-10 m-10">
          {recipes.map((recipe) => (
            <a key={recipe.id} href={`/recipes/${recipe.id}`} className="card card-compact w-80 bg-neutral-content">
              <figure>{recipe.image ?? <img src={recipe.image!} alt={recipe.name} />} </figure>
              <div className="card-body">
                <h2 className="card-title">{recipe.name}</h2>
                <p>{recipe.shortDescription}</p>
              </div>
            </a>
          ))}  
        </div>
      </div>
    </>
  );
}