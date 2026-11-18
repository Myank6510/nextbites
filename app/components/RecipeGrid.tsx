
"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({
  recipes,
}: {
  recipes: Recipe[];
}) {
  const [query, setQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const searchText = query.toLowerCase().trim();

    return (
      recipe.title.toLowerCase().includes(searchText) ||
      recipe.cuisine.toLowerCase().includes(searchText)
    );
  });

  return (
    <div>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search recipes or cuisine..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="recipe-search"
          aria-label="Search recipes by title or cuisine"
        />
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      ) : (
        <p className="no-results" role="status">
          No recipes match "{query}". Try another search!
        </p>
      )}
    </div>
  );
}
