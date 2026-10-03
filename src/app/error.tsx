"use client";

/**
 * Route error boundary. Rendered only when a route throws;
 * steady-state pages are unchanged.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          Something went wrong
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold">
          {error.message || "Unexpected error"}
        </h1>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
