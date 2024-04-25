"use client";
import { useState } from "react";
import { insertRecipe } from "~/server/queries";

export default function RecipeUpload() {
  const [ name, setName ] = useState("");
  const [ image, setImage ] = useState("");
  const [ shortDescription, setShortDescription ] = useState("");
  const [ ingredients, setIngredients ] = useState("");
  const [ instructions, setInstructions ] = useState("");
  
  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      if (name != "" && shortDescription != "" && ingredients != "" && instructions != "") {
        await insertRecipe(name, image, shortDescription, ingredients, instructions);
        setName("");
        setImage("");
        setShortDescription("");
        setIngredients("");
        setInstructions("");
      }
    }}>
      <div className="m-10 flex flex-col gap-5">
        <label className="input input-bordered flex items-center gap-2 bg-white">
          Recipe Name
          <input type="text" className="grow" placeholder="Apple Pie" value={name} onChange={e => setName(e.target.value)} required/>
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-white">
          Image URL
          <input type="text" className="grow" placeholder="imgur.com/..." value={image} onChange={e => setImage(e.target.value)}/>
          <span className="badge badge-info">Optional</span>
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-white">
          A short Description of the Recipe
          <input type="text" className="grow" placeholder="The most delicious apple pie..." value={shortDescription} onChange={e => setShortDescription(e.target.value)} required/>
        </label>
        <textarea className="textarea bg-white input-bordered h-48" placeholder="Ingredients List" value={ingredients} onChange={e => setIngredients(e.target.value)} required/>
        <textarea className="textarea bg-white input-bordered h-80" placeholder="Instructions" value={instructions} onChange={e => setInstructions(e.target.value)} required/>
        <button className="btn btn-neutral rounded w-20" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}