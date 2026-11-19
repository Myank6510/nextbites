
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="message-page">
      <div className="message-emoji">⚠️</div>

      <h1>Something Went Wrong!</h1>

      <p>
        We could not load this page. Please try again.
      </p>

      <button
        className="view-button"
        onClick={reset}
      >
        Try Again
      </button>
    </main>
  );
}
