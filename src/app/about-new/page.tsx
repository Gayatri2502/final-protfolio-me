"use client";

import CinematicScrol from "@/components/ui/scroll-triggered-video-hero";

const team = [
  { name: "Toto", portrait: "Red panda wearing round glasses and a plaid scarf", background: "bg-[#211711]", fit: "object-cover object-top" },
  { name: "Mimi", portrait: "White fox with blue eyes", background: "bg-[#151d30]", fit: "object-contain p-5" },
  { name: "Momo", portrait: "Baby penguin with orange feet", background: "bg-[#24243a]", fit: "object-contain p-5" },
];

export default function AboutNewPage() {
  return (
    <div className="min-h-screen">
      <CinematicScrol />
      <section aria-labelledby="ai-team-title" className="border-t border-border bg-background text-foreground">
        <div className="container-custom py-16 md:py-24">
          <p className="mono-label text-primary">Alphacentauric Studio</p>
          <h2 id="ai-team-title" className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Meet the <span className="text-primary">AI team.</span>
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Toto, Mimi, and Momo are the three AI agents helping run Alphacentauric.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {team.map(({ name, portrait, background, fit }) => (
              <li key={name} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className={`aspect-[4/5] ${background}`}>
                  <img src={`/images/team/${name}.png`} alt={portrait} loading="lazy"
                    className={`h-full w-full ${fit}`} />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold">{name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Alphacentauric AI agent</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
