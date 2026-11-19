
import Link from "next/link";
import { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({
  recipe,
}: RecipeCardProps) {
  return (
    <article className="recipe-card">
      <div className="recipe-emoji">
        {recipe.emoji}
      </div>

      <div className="recipe-card-content">
        <span className="cuisine">
          {recipe.cuisine}
        </span>

        <h2>{recipe.title}</h2>

        <p>{recipe.description}</p>

        <div className="recipe-info">
          <span>⏱️ {recipe.minutes} min</span>
          <span>⭐ {recipe.difficulty}</span>
        </div>

        <Link
          href={`/recipe/${recipe.id}`}
          className="view-button"
        >
          View Recipe →
        </Link>
      </div>
    </article>
  );
}
