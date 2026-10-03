export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">About · AI/ML Portfolio</p>
        <h1 className="mt-2 font-display text-2xl font-semibold">About lives next door</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This AI/ML portfolio&apos;s about section lives at <a href="/about-new" className="underline hover:text-foreground">/about-new</a> — the cinematic tour through my journey in machine learning.
        </p>
      </div>
    </div>
  );
}
