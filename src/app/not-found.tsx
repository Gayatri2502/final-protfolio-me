import Link from "next/link";

/**
 * 404 page. Styled with the same tokens as the existing empty-state
 * (`/about` stub): mono label + display heading on `bg-background`.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This AI/ML portfolio has no such page — but plenty of models that do exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
