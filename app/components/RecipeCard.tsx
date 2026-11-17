
import type { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
}: {
  recipe: Recipe;
}) {
  return (
    <article className="recipe-card">
      <div className="recipe-card-top">
        <span className="recipe-emoji" aria-hidden="true">
          {recipe.emoji}
        </span>

        <span className="difficulty">
          {recipe.difficulty}
        </span>
      </div>

      <div className="recipe-card-content">
        <p className="cuisine">{recipe.cuisine} Cuisine</p>

        <h2>{recipe.title}</h2>

        <p className="description">
          {recipe.description}
        </p>

        <div className="recipe-details">
          <span>⏱ {recipe.minutes} min</span>
          <span>👥 {recipe.servings} servings</span>
        </div>
      </div>
    </article>
  );
}
