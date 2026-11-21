import type { Metadata } from "next";

import CinematicScrol from "@/components/ui/scroll-triggered-video-hero";

import CurvedLensCarousel, { type LensSlide } from "@/components/ui/3d-curved-carousel";

const team: LensSlide[] = [
  { title: "Momo", image: "/images/team/Momo.png", alt: "Baby penguin with orange feet", kicker: "Alphacentauric AI agent" },
  { title: "Toto", image: "/images/team/Toto.png", alt: "Red panda wearing round glasses and a plaid scarf", kicker: "Alphacentauric AI agent" },
  { title: "Mimi", image: "/images/team/Mimi.png", alt: "White fox with blue eyes", kicker: "Alphacentauric AI agent" },
];

export const metadata: Metadata = { title: "About the Studio" };

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
            Momo, Toto, and Mimi are the three AI agents helping run Alphacentauric.
          </p>
          <CurvedLensCarousel
            slides={team}
            label="Alphacentauric AI team"
            background="transparent"
            height="clamp(480px, 75svh, 760px)"
            className="mt-10 rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
}
