"use client";
import { useRouter } from "next/navigation";

export default function EditButton(props: { recipeId: number }) {
  const recipeId = props.recipeId;
  const router = useRouter();

  return (
    <button className="badge badge-neutral p-2 w-12" onClick={() => router.push(`/account/recipes/edit/${recipeId}`)}>
      Edit
    </button>
  );
}