"use client";
import { upvoteRecipe } from "../../server/queries";
import { useState } from "react";
export const dynamic = "force-dynamic";

export default function UpvoteButton(props: { recipeId: number, upvoted: boolean}) {
  const recipeId = props.recipeId;
  const upvoted = props.upvoted;
  const [ disable, setDisable ] = useState(false);

  return (
    <button className={`btn btn-neutral ${(disable || upvoted) ? "btn-disabled" : ""}`} onClick={async () => {
      setDisable(true);
      await upvoteRecipe(recipeId);
    }}>
      {upvoted ? "Upvoted" : "Upvote"}
    </button>
  )
}