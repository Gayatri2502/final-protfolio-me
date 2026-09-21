"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  year: string;
  type: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
  accent: string;
  metric: string;
};

const projects: Project[] = [
  {
    id: "01",
    year: "2024",
    type: "Search · Production",
    title: "Neural Search Engine",
    desc: "Transformer embeddings + hybrid sparse-dense retrieval over 10M+ docs. FAISS + reranker, sub-100ms p95.",
    tags: ["Transformers", "FAISS", "FastAPI", "K8s"],
    href: "/projects/neural-search",
    accent: "bg-primary",
    metric: "95.2% recall@10",
  },
  {
    id: "02",
    year: "2024",
    type: "Platform · LLMs",
    title: "LLM Fine-tuning Platform",
    desc: "No-code LoRA/QLoRA for 7B–70B models. Hugging Face Hub, evals, and one-click deploy to vLLM.",
    tags: ["PEFT", "Ray", "Next.js", "Hugging Face"],
    href: "/projects/llm-platform",
    accent: "bg-violet-500",
    metric: "7B → 70B",
  },
  {
    id: "03",
    year: "2023",
    type: "RAG · Multimodal",
    title: "Multimodal RAG System",
    desc: "Text + image + code retrieval with citation tracking. Used by 500+ engineers, -40% hallucinations.",
    tags: ["LangChain", "CLIP", "Weaviate", "LLaVA"],
    href: "/projects/multimodal-rag",
    accent: "bg-cyan-500",
    metric: "500+ users",
  },
  {
    id: "04",
    year: "2023",
    type: "Code · Assistant",
    title: "AI Code Assistant",
    desc: "Context-aware generation & refactor with repo-level memory. IDE plugin, streaming, diff view.",
    tags: ["RAG", "AST", "VS Code", "Streaming"],
    href: "/projects/ai-code-assistant",
    accent: "bg-amber-400",
    metric: "~40% faster reviews",
  },
  {
    id: "05",
    year: "2023",
    type: "MLOps · Infra",
    title: "MLOps Pipeline",
    desc: "GitOps training → eval → canary deploy. MLflow, Kubeflow, Prometheus. Deploy time -80%.",
    tags: ["MLflow", "Kubernetes", "Grafana", "GitOps"],
    href: "/projects/mlops-pipeline",
    accent: "bg-emerald-500",
    metric: "-80% deploy time",
  },
];

export function FeaturedProjects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="work" className="border-b border-line">
      <div className="container-custom">
        <div className="flex items-center gap-4 py-6 border-b border-line mono-label text-muted-foreground">
          <span className="text-primary">[02]</span>
          <span>Selected work</span>
          <span className="h-px flex-1 bg-line ml-2" />
          <span className="hidden sm:inline">2023 — 2024 · 5 shipped</span>
          <a href="/projects" className="hidden sm:inline-flex ml-2 mono-label text-foreground hover:text-primary gap-1 items-center">View all →</a>
        </div>
      </div>

      <div className="container-custom py-8 lg:py-12">
        <div className="flex items-end justify-between gap-6 mb-6">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-[-0.03em] leading-none">
            Work that <span className="italic font-light text-muted-foreground">shipped</span>
          </h2>
          <p className="hidden lg:block max-w-[420px] text-sm leading-6 text-muted-foreground">
            Production-grade AI, not demos. Each project includes evals, metrics, and what I’d do differently next time.
          </p>
        </div>

        <div className="border-y border-line divide-y divide-line bg-card rounded-2xl overflow-hidden">
          {/* header */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-5 py-3 bg-muted/20 mono-label text-muted-foreground text-[10px]">
            <span className="col-span-1">#</span>
            <span className="col-span-6">Project</span>
            <span className="col-span-3">Stack</span>
            <span className="col-span-2 text-right">Outcome</span>
          </div>

          {projects.map((p) => (
            <a
              key={p.id}
              href={p.href}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              className="group grid grid-cols-12 gap-4 px-5 py-5 lg:py-6 hover:bg-foreground/[0.03] transition-colors relative"
            >
              {/* accent bar */}
              <span className={`absolute left-0 top-0 bottom-0 w-0.5 ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <span className="col-span-12 lg:col-span-1 flex items-center gap-3 mono-label text-muted-foreground">
                <span className="text-foreground">{p.id}</span>
                <span className="lg:hidden opacity-50">· {p.year}</span>
                <span className="hidden lg:inline">{p.year}</span>
              </span>

              <span className="col-span-12 lg:col-span-6">
                <span className="mono-label text-muted-foreground hidden lg:block mb-1">{p.type}</span>
                <span className="font-display font-semibold text-lg leading-tight flex items-center gap-2">
                  {p.title}
                  <ArrowUpRight className="size-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </span>
                <span className="block text-sm leading-6 text-muted-foreground mt-1.5 max-w-[560px]">{p.desc}</span>
                <span className="lg:hidden flex flex-wrap gap-1.5 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-muted/40 px-2.5 py-1 mono-label text-[10px] leading-none">{t}</span>
                  ))}
                </span>
              </span>

              <span className="hidden lg:flex col-span-3 flex-wrap gap-1.5 content-start">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line bg-background px-2.5 py-1 mono-label text-[10px] leading-none group-hover:border-foreground/15 group-hover:bg-foreground/[0.04] transition-colors">{t}</span>
                ))}
              </span>

              <span className="col-span-12 lg:col-span-2 flex lg:justify-end items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground mono-label px-3 py-1 text-[10px] font-semibold">
                  {p.metric}
                </span>
                <span className="hidden lg:inline mono-label text-muted-foreground">→</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/projects" className="btn-acid">
            View all projects <ArrowUpRight className="size-3.5" />
          </a>
          <a href="/experience" className="btn-ghost-mono">
            Experience & impact
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
