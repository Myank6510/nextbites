
"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset?: () => void;
  retry?: () => void;
};

export default function Error({
  error,
  reset,
  retry,
}: ErrorProps) {
  function handleTryAgain() {
    // Next.js 16.3+ uses retry().
    // Older versions use reset().
    if (retry) {
      retry();
    } else {
      reset?.();
    }
  }

  return (
    <main className="error-page">
      <div className="error-emoji">😕</div>

      <p className="section-label">SOMETHING WENT WRONG</p>

      <h1>Oops! Something didn't work.</h1>

      <p>
        We couldn't load this page. Please try again.
      </p>

      {error.digest && (
        <p className="error-digest">
          Error reference: {error.digest}
        </p>
      )}

      <button
        onClick={handleTryAgain}
        className="hero-button"
      >
        Try again ↻
      </button>
    </main>
  );
}
