import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { Testimonial } from "@/components/ui/design-testimonial";
import { WorkHero } from "@/components/home/WorkHero";
import { FlipBookSection } from "@/components/home/FlipBookSection";
import { VaultFlipSection } from "@/components/home/VaultFlipSection";

export const metadata: Metadata = { title: "Home" };

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