"use client";

import ScrollingAnimation from "@/components/ui/scrolling-animation";
import { UltraQualityShowcaseGrid, type ShowcaseCard } from "@/components/ui/ultra-quality-showcase-grid";





import { ArrowUpRight, FlaskConical } from "lucide-react";
import repositories from "@/data/github-repositories.json";

const planned = new Set(["time-series-forecasting-abi", "llm-evaluation-observability", "f1-race-strategy-predictor", "latent-diffusion-imbalanced-classification"]);
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
  const lab = repositories.filter(repo => repo.lab);
  return (
    <div className="min-h-screen">
      {/* Hero — Scrolling Animation */}
      <ScrollingAnimation title="AI LAB" subtitle="ML Experiments • 2024—2026" />

      {/* Next section — Ultra Quality Showcase Grid */}
      <div className="bg-background border-t border-border">
        <UltraQualityShowcaseGrid cards={labCards} />
      </div>
      <section className="container-custom py-12 md:py-20"><h2 className="mb-8 text-3xl font-bold tracking-tight">Lab projects</h2><div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{lab.map(repo => <article key={repo.name} className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11121a]"><div className="relative h-44 bg-gradient-to-br from-[#263c3e] via-[#141e22] to-[#101116] flex items-center justify-center">{repo.screenshot ? <img src={repo.screenshot} alt="" className="absolute inset-0 h-full w-full object-cover object-top" /> : <FlaskConical className="size-10 text-primary" strokeWidth={1.3} />}</div><div className="flex flex-col flex-1 p-6"><div className="flex gap-2"><span className="font-mono text-[10px] text-primary uppercase tracking-wider">LAB</span>{planned.has(repo.name) && <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">· Planned</span>}</div><h2 className="mt-3 text-xl font-semibold">{repo.name.replace(/[-_]+/g," ")}</h2><p className="mt-3 text-sm leading-relaxed text-zinc-400">{repo.description || (planned.has(repo.name) ? "A planned research project; the repository currently contains an initial outline." : "Explore the project repository for details and documentation.")}</p><a className="mt-auto pt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-white" href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight className="size-4" /></a></div></article>)}</div></section>
    </div>
  );
}