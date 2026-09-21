"use client";

import { motion } from "framer-motion";

const principles = [
  {
    n: "01",
    title: "Research → Product",
    desc: "Paper to prod in weeks, not quarters. I prototype fast, then harden for scale.",
  },
  {
    n: "02",
    title: "Reliability over demos",
    desc: "Eval suites, citation tracking, and monitoring before the fancy UI.",
  },
  {
    n: "03",
    title: "Own the stack",
    desc: "From data pipelines and vector indexes to React and infra — no handoff gaps.",
  },
  {
    n: "04",
    title: "Simple > clever",
    desc: "Boring tech where possible. Complexity only where it buys 10×.",
  },
];

const metrics = [
  { v: "10.4M", l: "docs indexed", d: "semantic search corpus" },
  { v: "87ms", l: "p95 latency", d: "retrieval + rerank" },
  { v: "500+", l: "engineers", d: "using RAG system daily" },
  { v: "3", l: "papers", d: "NeurIPS / ICML / ICLR" },
];

export function AboutPreview() {
  return (
    <section id="about" className="border-b border-line">
      {/* section header */}
      <div className="container-custom">
        <div className="flex items-center gap-4 py-6 border-b border-line mono-label text-muted-foreground">
          <span className="text-primary">[01]</span>
          <span>About</span>
          <span className="h-px flex-1 bg-line ml-2" />
          <span className="hidden sm:inline">Manifesto & metrics</span>
        </div>
      </div>

      <div className="container-custom py-10 lg:py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* left — big quote */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] leading-[1.05]">
                I build AI systems
                <br />
                <span className="font-light italic text-muted-foreground">teams can trust in prod.</span>
              </h2>

              <div className="mt-6 max-w-[560px] space-y-4 text-[15px] leading-7 text-muted-foreground">
                <p>
                  Five years from data pipelines to LLM platforms. I like hard, ambiguous problems —
                  then turning them into <span className="text-foreground">fast, observable, well-documented systems</span>.
                </p>
                <p>
                  Recently: semantic search with 95% recall@10, a fine-tuning platform for 7B–70B models (LoRA/QLoRA),
                  and a multimodal RAG that cut hallucinations by 40%.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {principles.map((p) => (
                  <div key={p.n} className="rounded-xl border border-line bg-card p-4">
                    <div className="mono-label text-primary">{p.n}</div>
                    <div className="font-display font-semibold mt-1">{p.title}</div>
                    <div className="text-sm text-muted-foreground leading-5 mt-1.5">{p.desc}</div>
                  </div>
                ))}
              </div>

              <a href="/about" className="mt-8 inline-flex mono-label gap-2 items-center text-foreground hover:text-primary">
                Read full story <span aria-hidden>→</span>
              </a>
            </motion.div>
          </div>

          {/* right — metrics + stack */}
          <div className="col-span-12 lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <div key={m.l} className="rounded-2xl border border-line bg-card p-5">
                  <div className="font-display text-2xl font-semibold tracking-tight">{m.v}</div>
                  <div className="mono-label text-foreground mt-1">{m.l}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-2xl border border-line overflow-hidden">
              <div className="px-4 py-3 border-b border-line bg-muted/20 mono-label flex items-center justify-between">
                <span>Current stack</span>
                <span className="text-muted-foreground">2026</span>
              </div>
              <div className="p-4 grid gap-3 text-sm">
                {[
                  ["AI", "PyTorch · Transformers · vLLM · Hugging Face"],
                  ["Infra", "Kubernetes · FastAPI · Redis · Weaviate · LangChain"],
                  ["Web", "Next.js · TypeScript · Tailwind · Framer Motion"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3">
                    <span className="mono-label text-muted-foreground w-12 shrink-0 pt-0.5">{k}</span>
                    <span className="text-foreground/90">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-line bg-primary text-primary-foreground p-5">
              <div className="mono-label opacity-70">Availability</div>
              <div className="font-display font-semibold mt-1">Selective freelance & full-time — Q1 2026</div>
              <div className="text-sm opacity-80 mt-1 leading-5">2 slots for advisory / build sprints. Avg reply 4h.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
