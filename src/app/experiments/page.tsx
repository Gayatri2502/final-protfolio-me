"use client";

import ScrollingAnimation from "@/components/ui/scrolling-animation";
import { UltraQualityShowcaseGrid, type ShowcaseCard } from "@/components/ui/ultra-quality-showcase-grid";





const labCards: ShowcaseCard[] = [
  {
    id: "big",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
    badge: { text: "NEW", colorClass: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/20" },
    subtitle: "Always-on ML pipeline",
    title: "Run AI experiments, not guesses",
    description: "Every idea in this AI/ML portfolio starts as a measured experiment — evals first, ablations logged, learnings stacked every week.",
    ctaPrimary: { label: "See case studies", href: "/projects" },
    ctaSecondary: { label: "Propose an experiment", href: "mailto:hello@alphacentauric.dev" },
  },
  {
    id: "requests",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    title: "Evals & ablations",
    description: "Iterate on models with structured eval suites and logged ablations. Every round ends with metrics and next steps.",
  },
  {
    id: "pricing",
    imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80",
    title: "Open notebook",
    description: "No black boxes — every AI experiment ships with its evals, datasets, and a short note on what worked.",
  },
  {
    id: "turnaround",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    badge: { text: "NEW", colorClass: "bg-emerald-500/20 text-emerald-600 border border-emerald-500/20" },
    title: "Weekly shipping cadence",
    description: "Most ML experiments go from idea to measured result in days — without skipping evals.",
  },
  {
    id: "live",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
    title: "From notebook to production",
    description: "Promising experiments graduate to production ML — with monitoring, rollback, and QA handled.",
  },
];

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero — Scrolling Animation */}
      <ScrollingAnimation title="AI LAB" subtitle="ML Experiments • 2024—2026" />

      {/* Next section — Ultra Quality Showcase Grid */}
      <div className="bg-background border-t border-border">
        <UltraQualityShowcaseGrid cards={labCards} />
      </div>
    </div>
  );
}