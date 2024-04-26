"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [ query, setQuery ] = useState("");
  const router = useRouter();

  return (
    <form onSubmit={e => {
      e.preventDefault();
      router.push(`/recipes/search/${query}`);
    }}>
      <div className="form-control">
        <input type="text" placeholder="Search Recipes" className="input input-bordered w-24 md:w-auto" value={query} onChange={e => setQuery(e.target.value)}/>
      </div>
    </form>
  );
} 