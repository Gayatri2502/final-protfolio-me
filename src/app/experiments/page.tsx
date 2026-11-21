import type { Metadata } from "next";

import ScrollingAnimation from "@/components/ui/scrolling-animation";





import { ArrowUpRight, FlaskConical } from "lucide-react";
import repositories from "@/data/github-repositories.json";

const planned = new Set(["time-series-forecasting-abi", "llm-evaluation-observability", "f1-race-strategy-predictor", "latent-diffusion-imbalanced-classification"]);
export const metadata: Metadata = { title: "AI Experiments" };

export default function ExperimentsPage() {
  const lab = repositories.filter(repo => repo.lab);
  return (
    <div className="min-h-screen">
      {/* Hero — Scrolling Animation */}
      <ScrollingAnimation title="AI LAB" subtitle="ML Experiments • 2024—2026" />

      <section className="container-custom py-12 md:py-20"><h2 className="mb-8 text-3xl font-bold tracking-tight">Lab projects</h2><div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{lab.map(repo => <article key={repo.name} className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11121a]"><div className="relative h-44 bg-gradient-to-br from-[#263c3e] via-[#141e22] to-[#101116] flex items-center justify-center">{repo.screenshot ? <img src={repo.screenshot} alt="" className="absolute inset-0 h-full w-full object-cover object-top" /> : <FlaskConical className="size-10 text-primary" strokeWidth={1.3} />}</div><div className="flex flex-col flex-1 p-6"><div className="flex gap-2"><span className="font-mono text-[10px] text-primary uppercase tracking-wider">LAB</span>{planned.has(repo.name) && <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">· Planned</span>}</div><h2 className="mt-3 text-xl font-semibold">{repo.name.replace(/[-_]+/g," ")}</h2><p className="mt-3 text-sm leading-relaxed text-zinc-400">{repo.description || (planned.has(repo.name) ? "A planned research project; the repository currently contains an initial outline." : "Explore the project repository for details and documentation.")}</p><a className="mt-auto pt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-white" href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight className="size-4" /></a></div></article>)}</div></section>
    </div>
  );
}