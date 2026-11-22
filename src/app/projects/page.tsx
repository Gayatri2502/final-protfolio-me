"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Search, Code2, BrainCircuit, Smartphone, ChartNoAxesCombined, Globe, BookOpen } from "lucide-react";
import repositories from "@/data/github-repositories.json";

type Repository = (typeof repositories)[number];

function describe(repo: Repository) {
  if (repo.description?.trim()) return repo.description.trim();
  const name = repo.name.toLowerCase();
  if (name.includes("moonlight")) return "A Japanese dining concept with a sample menu, interactive sushi conveyor and table reservation preview.";
  if (name.includes("aws-certified")) return "Study resources for the AWS Certified Machine Learning Specialty certification.";
  if (name.includes("gesture")) return "A computer vision project exploring hand gesture recognition.";
  if (name.includes("iris")) return "Training a logistic regression model on the Iris dataset.";
  if (name.includes("regression-classification")) return "Notebook implementations of regression and classification models.";
  if (name.includes("business-intelligence")) return "A business intelligence project built with Flutter and Dart.";
  return "Explore the repository for project details, source code and documentation.";
}
function category(repo: Repository) {
  const text = `${repo.name} ${repo.description || ""}`.toLowerCase();
  if (/machine.learning|forecast|iris|regression|nlp|gesture|chatbot|data.extraction/.test(text)) return "AI & Data";
  if (/flutter|app|dart/.test(text) || repo.language === "Dart") return "Apps";
  if (/notes|certified|study|practical/.test(text)) return "Learning";
  return "Web & Code";
}
const visuals = {
  "AI & Data": { Icon: BrainCircuit, label: "INTELLIGENCE / DATA", color: "from-[#263c3e] via-[#141e22] to-[#101116]" },
  Apps: { Icon: Smartphone, label: "MOBILE / PRODUCT", color: "from-[#48332e] via-[#21191d] to-[#101116]" },
  Learning: { Icon: BookOpen, label: "LEARNING / RESEARCH", color: "from-[#34384a] via-[#1b1e2a] to-[#101116]" },
  "Web & Code": { Icon: Globe, label: "DIGITAL / BUILD", color: "from-[#384326] via-[#1c2118] to-[#101116]" },
};

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => repositories.filter((repo) => {
    const matches = `${repo.name} ${repo.description || ""} ${repo.language || ""}`.toLowerCase().includes(query.toLowerCase().trim());
    return matches && (filter === "All" || category(repo) === filter);
  }), [filter, query]);

  return <main className="min-h-screen bg-background text-foreground">
    <section className="container-custom pt-14 pb-12 md:pt-20 md:pb-16 border-b border-white/10">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">04 / The work</p>
      <div className="mt-5 grid lg:grid-cols-12 gap-6 items-end"><div className="lg:col-span-8"><h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95]">PROJECTS<span className="text-primary">.</span></h1><p className="mt-5 max-w-xl text-zinc-400 leading-relaxed">A collection of experiments, applications and ideas I've built and explored. Browse selected projects and open their repositories on GitHub.</p></div><div className="lg:col-span-4 lg:text-right font-mono text-xs uppercase tracking-wider text-zinc-500">{repositories.length} repositories<br /><span className="text-zinc-400">Design · Engineering · AI</span></div></div>
    </section>
    <section className="container-custom py-10 md:py-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-9"><div className="flex flex-wrap gap-2" aria-label="Filter projects">{["All", "AI & Data", "Apps", "Web & Code", "Learning"].map(item => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${filter === item ? "border-primary bg-primary text-black" : "border-white/15 text-zinc-400 hover:text-white hover:border-white/40"}`}>{item}</button>)}</div><label className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-zinc-400 focus-within:border-primary"><Search className="size-4" /><span className="sr-only">Search projects</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search projects" className="bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 w-full lg:w-44" /></label></div>
      <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-zinc-500" aria-live="polite">Showing {filtered.length} of {repositories.length} repositories</p>
      {filtered.length ? <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{filtered.map((repo, i) => { const group = category(repo); const { Icon, label, color } = visuals[group]; const title = repo.name === "drinkarto-final" ? "Drinkarto" : repo.name.replace(/[-_]+/g, " ").trim(); return <article key={repo.html_url} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11121a] transition-colors hover:border-white/25">
        <div aria-hidden="true" className={`relative h-44 overflow-hidden bg-gradient-to-br ${color} p-5`}>{repo.screenshot && <img src={repo.screenshot} alt="" className="absolute inset-0 z-10 h-full w-full object-cover object-top" />}<div className="absolute inset-0 opacity-[0.09]" style={{backgroundImage:"linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",backgroundSize:"28px 28px"}} /><span className="relative font-mono text-[10px] tracking-[0.16em] text-white/55">{label}</span><div className="absolute inset-0 flex items-center justify-center"><div className="flex size-20 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.06] rotate-[-8deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"><Icon className="size-9 text-primary" strokeWidth={1.25} /></div></div><span className="absolute bottom-4 right-5 font-mono text-xs text-white/40">{String(i + 1).padStart(2,"0")}</span></div>
        <div className="flex flex-1 flex-col p-5 sm:p-6"><div className="flex items-start justify-between gap-3"><h2 className="font-display text-xl font-semibold leading-tight break-words">{title}</h2><Code2 className="size-4 shrink-0 text-zinc-600" /></div><p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-4">{describe(repo)}</p><div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-zinc-400">{group}</span>{repo.lab && <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary">LAB</span>}{repo.language && <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] text-zinc-400">{repo.language}</span>}</div><div className="mt-auto pt-6"><a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-white transition-colors" aria-label={`View ${title} on GitHub (opens in a new tab)`}><Github className="size-4" /> View on GitHub <ArrowUpRight className="size-4" /></a>{repo.homepage && /^https?:\/\//.test(repo.homepage) && !repo.homepage.includes("linkedin.com") && <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="ml-5 inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white">Live site <ArrowUpRight className="size-3" /></a>}</div></div>
      </article>})}</div> : <div className="rounded-2xl border border-white/10 p-10 text-center text-zinc-400">No projects found. Try another search or category.</div>}
      <div className="mt-14 border-t border-white/10 pt-8 flex flex-wrap justify-between gap-4 items-center"><p className="text-sm text-zinc-400">More to explore on GitHub.</p><a href="https://github.com/Gayatri2502?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-primary">All repositories <ArrowUpRight className="size-4" /></a></div>
    </section>
  </main>;
}
