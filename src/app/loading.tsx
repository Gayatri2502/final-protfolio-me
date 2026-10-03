/**
 * Route loading fallback. Rendered only during route transitions;
 * steady-state pages are unchanged.
 */
export default function Loading() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="flex items-center gap-3">
        <span className="size-2 rounded-full bg-primary animate-pulseDot" />
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          Loading
        </span>
      </div>
    </div>
  );
}
