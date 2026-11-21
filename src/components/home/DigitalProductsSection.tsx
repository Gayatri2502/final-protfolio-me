"use client";

const experiments = [
  { id: "001", title: "Reranker distillation", meta: "Latency −42% · 2k evals", tag: "LAB" },
  { id: "002", title: "Hybrid sparse-dense", meta: "Recall +3.1% · HNSW", tag: "SEARCH" },
  { id: "003", title: "Citation grounding", meta: "Hallucination −40%", tag: "RAG" },
  { id: "004", title: "4-bit 70B serving", meta: "Throughput 2.8× · vLLM", tag: "EDGE" },
];

export function DigitalProductsSection() {
  return (
    <section id="lab" className="border-b border-line">
      <div className="container-custom">
        <div className="flex items-center gap-4 py-6 border-b border-line mono-label text-muted-foreground">
          <span className="text-primary">[05]</span>
          <span>AI Lab & experiments</span>
          <span className="h-px flex-1 bg-line ml-2" />
          <span className="hidden sm:inline">Notebook — what I'm testing now</span>
          <a href="/experiments" className="hidden sm:inline-flex ml-2 mono-label text-foreground hover:text-primary gap-1 items-center">Open lab →</a>
        </div>
      </div>

      <div className="container-custom py-8 lg:py-12">
        <div className="flex items-end justify-between gap-6 mb-6">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-[-0.03em] leading-none">
            In the <span className="italic font-light text-muted-foreground">AI lab</span>
          </h2>
          <p className="hidden lg:block max-w-[420px] text-sm leading-6 text-muted-foreground">
            Small ML bets, measured properly. Every experiment in this AI/ML studio ships with evals, ablations, and a short note.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {experiments.map((e) => (
            <a
              key={e.id}
              href="/experiments"
              className="group rounded-2xl border border-line bg-card p-5 hover:bg-foreground/[0.02] transition-colors"
            >
              <div className="flex items-center justify-between mono-label">
                <span className="text-muted-foreground">{e.id}</span>
                <span className="rounded-full bg-muted border border-line px-2 py-0.5 text-[10px]">{e.tag}</span>
              </div>
              <div className="font-display font-semibold mt-3 leading-tight group-hover:text-primary transition-colors">{e.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{e.meta}</div>
              <div className="mt-4 h-px bg-line group-hover:bg-primary/30 transition-colors" />
              <div className="mono-label mt-3 text-muted-foreground group-hover:text-foreground">Read note →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DigitalProductsSection;
