"use client";

import { Hero } from "@/components/home/Hero";
import { Testimonial } from "@/components/ui/design-testimonial";
import { WorkHero } from "@/components/home/WorkHero";
import { FlipBookSection } from "@/components/home/FlipBookSection";
import { VaultFlipSection } from "@/components/home/VaultFlipSection";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* WORK hero — bold horizontal title + interactive folder */}
      <WorkHero />
      <FlipBookSection />
      <VaultFlipSection />
      {/* Testimonial before CTA for social proof */}
      <section className="relative bg-[#08080A] border-y border-[#F2F0EB]/10">
        <Testimonial />
      </section>
      <CTA />
    </>
  );
}