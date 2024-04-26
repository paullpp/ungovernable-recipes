"use client";
import { upvoteRecipe } from "../../server/queries";
export const dynamic = "force-dynamic";

export default function UpvoteButton(props: { recipeId: number }) {
  const recipeId = props.recipeId;

  return (
    <button className="btn btn-neutral right-0" onClick={async () => await upvoteRecipe(recipeId)}>
      Upvote
    </button>
  )
}