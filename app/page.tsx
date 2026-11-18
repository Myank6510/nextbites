
import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero-label">
          WELCOME TO NEXTBITES
        </p>

        <h1>
          Discover your next
          <span> favourite bite.</span>
        </h1>

        <p className="hero-description">
          Explore delicious recipes, discover new flavours,
          and find something amazing to cook today.
        </p>

        <a href="#recipes" className="hero-button">
          Explore Recipes →
        </a>
      </section>

      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <div>
            <p className="section-label">
              FRESH IDEAS FOR YOU
            </p>

            <h2>Explore Recipes</h2>
          </div>

          <p>{recipes.length} delicious recipes</p>
        </div>

        <RecipeGrid recipes={recipes} />
      </section>

      <section className="about-section" id="about">
        <h2>Good food brings people together.</h2>

        <p>
          NextBites makes discovering your next favourite
          recipe simple, fun, and delicious.
        </p>
      </section>
    </main>
  );
}
