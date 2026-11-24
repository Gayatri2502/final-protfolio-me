import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { Testimonial } from "@/components/ui/design-testimonial";
import { WorkHero } from "@/components/home/WorkHero";
import { FlipBookSection } from "@/components/home/FlipBookSection";
import { VaultFlipSection } from "@/components/home/VaultFlipSection";

export const metadata: Metadata = {
  title: { absolute: "Alphacentauric Studio | AI Automation & Web Design" },
  description: "Alphacentauric Studio builds AI agents, workflow automation, websites, and digital tools for startups and small businesses.",
  alternates: { canonical: "/" },
  verification: { google: "8SgOSLmI1vnVCh6D7iWjlH_-sYAfMcX2fpYF-cOwj2Y" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonial />
      {/* WORK hero — bold horizontal title + interactive folder */}
      <WorkHero />
      <VaultFlipSection />
      <FlipBookSection />
    </>
  );
}