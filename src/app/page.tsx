import RecipeCard from "./_components/recipeCard";

const recipes = [
  {id: 0, name: "Tomato Soup", userId: "user_2fblYrgin2pt4pUNFYwF86hTMYA", image: "https://placehold.co/120", shortDescription: "tasty tomato soup made easy", ingredients: "1 Tomato, 1 Soup", description: "Cook tomato, add to soup", upvotes: 0},
  {id: 1, name: "Onion Soup", userId: "user_2fblYrgin2pt4pUNFYwF86hTMYA", image: "https://placehold.co/120", shortDescription: "tasty onion soup made easy", ingredients: "1 Onion, 1 Soup", description: "Cook onion, add to soup", upvotes: 0},
  {id: 2, name: "Garlic Soup", userId: "user_2fblYrgin2pt4pUNFYwF86hTMYA", image: "https://placehold.co/120", shortDescription: "tasty garlic soup made easy", ingredients: "1 Garlic, 1 Soup", description: "Cook garlic, add to soup", upvotes: 0},
  {id: 3, name: "Melon Soup", userId: "user_2fblYrgin2pt4pUNFYwF86hTMYA", image: "https://placehold.co/120", shortDescription: "tasty melon soup made easy", ingredients: "1 Melon, 1 Soup", description: "Cook melon, add to soup", upvotes: 0},
]

export default function HomePage() {
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
            <RecipeCard key={recipe.id} recipe={recipe}/>
          ))}
        </div>
      </div>
    </>
  );
}
