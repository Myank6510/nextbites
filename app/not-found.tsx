
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="message-page">
      <div className="message-emoji">🔍</div>

      <h1>404 - Recipe Not Found</h1>

      <p>
        Sorry, the recipe you are looking for does not exist.
      </p>

      <Link href="/" className="view-button">
        Back to Home
      </Link>
    </main>
  );
}
