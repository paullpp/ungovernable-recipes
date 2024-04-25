interface Recipe {
  id: number,
  name: string,
  userId: string,
  image: string,
  shortDescription: string,
  ingredients: string,
  description: string,
  upvotes: number,
}

export default function RecipeCard(props: { recipe: Recipe }) {
  const recipe = props.recipe;

  return (
    <>
      <a href="/" className="card card-compact w-80 bg-neutral-content">
        <figure><img src={recipe.image} alt={recipe.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.name}</h2>
          <p> {recipe.shortDescription} </p>
        </div>
      </a>
    </>
  );
}