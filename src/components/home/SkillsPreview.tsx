"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Code, Server, Cpu } from "lucide-react";

const cards = [
  {
    id: "ai-ml",
    label: "AI / ML",
    mono: "PYTORCH · VLLM",
    title: "LLMs & Retrieval",
    desc: "RAG, LoRA, Evals",
    href: "/skills#ai-ml",
    icon: Brain,
    color: "from-cyan-500/20 to-blue-500/10",
    border: "group-hover:border-cyan-500/30",
  },
  {
    id: "backend",
    label: "Back-end & Data",
    mono: "PYTHON · POSTGRES",
    title: "APIs & Pipelines",
    desc: "FastAPI, Kafka, Redis",
    href: "/skills#backend",
    icon: Server,
    color: "from-violet-500/20 to-purple-500/10",
    border: "group-hover:border-violet-500/30",
  },
  {
    id: "infra",
    label: "Infra & MLOps",
    mono: "K8S · DOCKER",
    title: "Ship & Scale",
    desc: "K8s, MLflow, Grafana",
    href: "/skills#devops",
    icon: Cpu,
    color: "from-amber-500/20 to-orange-500/10",
    border: "group-hover:border-amber-500/30",
  },
  {
    id: "frontend",
    label: "Front-end",
    mono: "NEXT.JS · MOTION",
    title: "Interfaces",
    desc: "Next.js, Tailwind, WebGL",
    href: "/skills#frontend",
    icon: Code,
    color: "from-emerald-500/20 to-teal-500/10",
    border: "group-hover:border-emerald-500/30",
  },
];

export function SkillsPreview() {
  return (
    <section id="skills" className="border-y border-line bg-background">
      <div className="container-custom">
        <div className="flex items-center gap-4 py-5 border-b border-line mono-label text-muted-foreground">
          <span className="text-primary">[04]</span>
          <span>T-Shaped — Opinionated</span>
          <span className="h-px flex-1 bg-line ml-2" />
          <a href="/skills" className="hidden sm:inline-flex items-center gap-1 text-foreground hover:text-primary">
            Full index <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex items-end justify-between gap-6 mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.03em] leading-none">
            Depth in <span className="italic font-light text-muted-foreground">AI</span> — breadth everywhere else
          </h2>
          <p className="hidden md:block mono-label text-muted-foreground">Hover • Click to explore</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.id}
              href={c.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-line bg-card p-5 flex flex-col min-h-[180px] hover:shadow-lg ${c.border} transition-all`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative flex items-start justify-between">
                <div className="flex size-9 items-center justify-center rounded-xl bg-muted border border-line group-hover:scale-110 transition-transform">
                  <c.icon className="size-4" />
                </div>
                <span className="flex size-7 items-center justify-center rounded-full border border-line bg-background group-hover:bg-foreground group-hover:text-background group-hover:rotate-45 transition-all">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
              <div className="relative mt-auto">
                <div className="mono-label text-primary text-[10px]">{c.mono}</div>
                <div className="font-display font-semibold mt-1">{c.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 mono-label text-foreground/60 group-hover:text-foreground group-hover:gap-2 transition-all">
                  Explore <span aria-hidden>→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 mono-label text-muted-foreground border-t border-line pt-4">
          <span className="text-foreground">Also:</span>
          <a href="/projects" className="hover:text-foreground underline decoration-dotted">Hugging Face</a>
          <span className="opacity-30">·</span>
          <a href="/projects" className="hover:text-foreground underline decoration-dotted">LangChain</a>
          <span className="opacity-30">·</span>
          <a href="/experiments" className="hover:text-foreground underline decoration-dotted">LlamaIndex</a>
          <span className="ml-auto hidden sm:inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> 3 papers • 10k★
          </span>
        </div>
      </div>
    </section>
  );
}

export default SkillsPreview;
