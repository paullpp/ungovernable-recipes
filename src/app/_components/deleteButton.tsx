"use client";
import { useRouter } from "next/navigation";
import { deleteRecipe } from "~/server/queries";

export default function EditButton(props: { recipeId: number }) {
  const recipeId = props.recipeId;
  const router = useRouter();

  return (
    <button className="badge badge-neutral p-2 w-15" onClick={async (e) => {
      e.preventDefault();
      await deleteRecipe(recipeId);
      router.refresh();
    }}>
      Delete
    </button>
  );
}