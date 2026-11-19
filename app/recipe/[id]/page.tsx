
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRecipe,
  recipes,
} from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: String(recipe.id),
  }));
}

export const dynamicParams = false;

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="detail-page">
      <header className="navbar">
        <Link href="/" className="logo">
          🍴 NextBites
        </Link>

        <Link href="/">← Back to Home</Link>
      </header>

      <section className="detail-container">
        <div className="detail-hero">
          <div className="detail-emoji">
            {recipe.emoji}
          </div>

          <span className="cuisine">
            {recipe.cuisine}
          </span>

          <h1>{recipe.title}</h1>

          <p>{recipe.description}</p>

          <div className="recipe-info">
            <span>⏱️ {recipe.minutes} minutes</span>
            <span>🍽️ {recipe.servings} servings</span>
            <span>⭐ {recipe.difficulty}</span>
          </div>
        </div>

        <div className="detail-sections">
          <section className="detail-box">
            <h2>🥕 Ingredients</h2>

            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section className="detail-box">
            <h2>👨‍🍳 Cooking Instructions</h2>

            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </div>

        <Link href="/" className="view-button">
          ← Explore More Recipes
        </Link>
      </section>
    </main>
  );
}
