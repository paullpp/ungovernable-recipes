export default function RecipePage({
  params: { id: recipeId },
}: {
  params: { id: string },
}) {
  return (
    <div className="m-10">
      This is the view for a single recipe 
    </div>
  );
}