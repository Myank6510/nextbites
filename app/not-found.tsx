
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-emoji">🍽️</div>

      <p className="section-label">OOPS! PAGE NOT FOUND</p>

      <h1>Looks like this recipe is missing!</h1>

      <p>
        The recipe you're looking for doesn't exist.
        Let's find something delicious instead.
      </p>

      <Link href="/" className="hero-button">
        Back to Home →
      </Link>
    </main>
  );
}
