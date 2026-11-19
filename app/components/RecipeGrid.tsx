
"use client";

import { useState } from "react";
import { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

type RecipeGridProps = {
  recipes: Recipe[];
};

export default function RecipeGrid({
  recipes,
}: RecipeGridProps) {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("All");

  const cuisines = [
    "All",
    ...Array.from(
      new Set(recipes.map((recipe) => recipe.cuisine))
    ),
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCuisine =
      cuisine === "All" || recipe.cuisine === cuisine;

    return matchesSearch && matchesCuisine;
  });

  return (
    <section className="recipes-section" id="recipes">
      <div className="section-heading">
        <span className="section-label">OUR COLLECTION</span>
        <h2>Explore Delicious Recipes</h2>
        <p>Find something delicious to cook today.</p>
      </div>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={cuisine}
          onChange={(event) => setCuisine(event.target.value)}
        >
          {cuisines.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
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
        <div className="empty-state">
          <h3>No recipes found</h3>
          <p>Try another search or cuisine.</p>
        </div>
      )}
    </section>
  );
}
