
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

// Generate a static page for every recipe.
export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: String(recipe.id),
  }));
}

// Only allow recipe IDs generated above.
export const dynamicParams = false;

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Find the recipe using its ID.
  const recipe = getRecipe(id);

  // Show the not-found page if the recipe doesn't exist.
  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail">
      <Link href="/">← Back to Home</Link>

      <section className="recipe-detail-content">
        <div className="recipe-emoji">
          {recipe.emoji}
        </div>

        <p>{recipe.cuisine}</p>

        <h1>{recipe.title}</h1>

        <p>{recipe.description}</p>

        <div className="recipe-info">
          <span>⏱️ {recipe.minutes} minutes</span>
          <span>🍽️ {recipe.servings} servings</span>
          <span>⭐ {recipe.difficulty}</span>
        </div>

        <section>
          <h2>Ingredients</h2>

          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Cooking Instructions</h2>

          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </section>
    </main>
  );
}
