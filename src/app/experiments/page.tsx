"use client";

import ScrollingAnimation from "@/components/ui/scrolling-animation";
import { UltraQualityShowcaseGrid, type ShowcaseCard } from "@/components/ui/ultra-quality-showcase-grid";





const labCards: ShowcaseCard[] = [
  {
    id: "big",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
    badge: { text: "NEW", colorClass: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/20" },
    subtitle: "Unlimited pipeline",
    title: "Launch experiments, not guesses",
    description: "Submit unlimited test ideas and creative requests. We prioritize by impact, ship fast, and report clearly so learnings stack every week.",
    ctaPrimary: { label: "See case studies", href: "/projects" },
    ctaSecondary: { label: "Start a request", href: "mailto:hello@alphacentauric.dev" },
  },
  {
    id: "requests",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    title: "Requests & revisions",
    description: "Iterate quickly with async requests and structured feedback. Every round ends with clear rationale and next steps.",
  },
  {
    id: "pricing",
    imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80",
    title: "Worry-free pricing",
    description: "Simple plans, no surprises. Pause anytime. Scale up when you're ready.",
  },
  {
    id: "turnaround",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    badge: { text: "NEW", colorClass: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/20" },
    title: "Quick turnaround",
    description: "Most tasks ship in 48–72 hours without sacrificing quality.",
  },
  {
    id: "live",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
    title: "Go live in days",
    description: "From first brief to live campaigns in a week, with tracking and QA handled.",
  },
];

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero — Scrolling Animation */}
      <ScrollingAnimation title="LABORATORY" subtitle="Experiments • 2024—2025" />

      {/* Next section — Ultra Quality Showcase Grid */}
      <div className="bg-background border-t border-border">
        <UltraQualityShowcaseGrid cards={labCards} />
      </div>
    </div>
  );
}