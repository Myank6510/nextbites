
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";

type RecipePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipeDetails({
  params,
}: RecipePageProps) {
  const { id } = await params;

  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail-page">
      <Link href="/" className="back-link">
        ← Back to all recipes
      </Link>

      <section className="detail-hero">
        <div className="detail-emoji" aria-hidden="true">
          {recipe.emoji}
        </div>

        <div>
          <p className="section-label">
            {recipe.cuisine} CUISINE
          </p>

          <h1>{recipe.title}</h1>

          <p className="detail-description">
            {recipe.description}
          </p>

          <div className="detail-meta">
            <span>⏱ {recipe.minutes} minutes</span>
            <span>👥 {recipe.servings} servings</span>
            <span>⭐ {recipe.difficulty}</span>
          </div>
        </div>
      </section>

      <div className="detail-content">
        <section className="detail-panel">
          <h2>Ingredients</h2>

          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={`${recipe.id}-ingredient-${index}`}>
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <section className="detail-panel">
          <h2>Cooking Instructions</h2>

          <ol>
            {recipe.steps.map((step, index) => (
              <li key={`${recipe.id}-step-${index}`}>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
