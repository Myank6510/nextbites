
import Link from "next/link";
import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function HomePage() {
  return (
    <main>
      <header className="navbar">
        <Link href="/" className="logo">
          🍴 NextBites
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="#recipes">Recipes</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">
            WELCOME TO NEXTBITES
          </span>

          <h1>
            Discover Your Next
            <br />
            <span>Favorite Meal</span>
          </h1>

          <p>
            Explore delicious recipes, discover new cuisines,
            and find inspiration for your next meal.
          </p>

          <Link href="#recipes" className="hero-button">
            Explore Recipes →
          </Link>
        </div>

        <div className="hero-emoji">
          🍽️
        </div>
      </section>

      <RecipeGrid recipes={recipes} />

      <footer className="footer">
        <h2>🍴 NextBites</h2>
        <p>Discover something delicious every day.</p>
        <p>© 2026 NextBites. All rights reserved.</p>
      </footer>
    </main>
  );
}
