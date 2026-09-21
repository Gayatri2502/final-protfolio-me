export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">About</p>
        <h1 className="mt-2 font-display text-2xl font-semibold">Design removed</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This page is intentionally empty. See <a href="/about-new" className="underline hover:text-foreground">/about-new</a> for the new About section.
        </p>
      </div>
    </div>
  );
}
