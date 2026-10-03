"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, MapPin, Calendar, Award, Users } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

const stats = [
  { value: "5+", label: "Years Building AI" },
  { value: "20+", label: "Products Shipped" },
  { value: "500+", label: "Engineers Supported" },
  { value: "3", label: "Research Papers" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-background text-foreground border-y border-line overflow-hidden">
      {/* Background ABOUT outline */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-display font-black leading-none tracking-[-0.06em] whitespace-nowrap text-center text-[18vw] md:text-[14vw] text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}>
          ABOUT
        </div>
      </div>

      <div className="container-custom relative py-12 lg:py-16">
        <div className="flex items-center gap-4 mono-label text-muted-foreground border-b border-line pb-6 mb-10">
          <span className="text-foreground">[ About ]</span>
          <span>Gayatri Samal</span>
          <span className="h-px flex-1 bg-line ml-2" />
          <span className="hidden sm:inline">AI/ML Portfolio • Engineer • Researcher</span>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — Image + quick facts */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-card border border-line p-3">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] bg-muted">
                <img
                  src="/images/profile/image.png"
                  alt="Gayatri Samal"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-card/90 backdrop-blur border border-line p-3 flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-foreground text-background font-display font-bold text-xs">GS</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm leading-none text-foreground">Gayatri Samal</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="size-3" /> {companyInfo.location}
                    </div>
                  </div>
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-line bg-card p-4">
                  <div className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground">{s.value}</div>
                  <div className="mono-label text-[10px] opacity-60 mt-1 text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Story */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-xs font-mono tracking-widest uppercase text-background">
              <Sparkles className="size-3.5" /> Available for selective work
            </div>

            <h2 className="mt-4 font-display text-3xl lg:text-[2.6rem] font-bold leading-[0.9] tracking-[-0.03em] text-foreground">
              Building intelligent
              <br />
              <span className="font-light italic text-muted-foreground">systems that</span> ship.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground max-w-[560px]">
              <p>
                I’m <span className="font-semibold text-foreground">Gayatri Samal</span> — AI Engineer & Researcher focused on making AI <em>reliable, fast, and useful</em>. {companyInfo.description}
              </p>
              <p>
                From semantic search over 10M+ docs (95.2% recall@10, 87ms p95) to fine-tuning 7B–70B models with LoRA/QLoRA and multimodal RAG that cut hallucinations by 40% — I own the stack from data to deploy.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { t: "Research → Product", d: "Paper to prod in weeks, with evals before the demo." },
                { t: "Reliability over demos", d: "Citation tracking, monitoring, and honest metrics." },
                { t: "Own the stack", d: "Data, retrieval, infra, and UI — no handoff gaps." },
                { t: "Simple > clever", d: "Boring tech first, complexity only for 10×." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-line bg-card p-4">
                  <div className="font-semibold text-sm text-foreground">{item.t}</div>
                  <div className="text-xs leading-5 text-muted-foreground mt-1">{item.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/about" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-xs font-semibold tracking-widest uppercase text-background hover:bg-foreground/90 transition-colors">
                Read full story <ArrowRight className="size-4" />
              </a>
              <a href={companyInfo.social.email} className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-xs font-semibold tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors">
                <Calendar className="size-4" /> Contact
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 mono-label text-muted-foreground border-t border-line pt-6">
              <Users className="size-4" /> Trusted by teams at
              <span className="font-semibold text-foreground">TECHCORP AI • NEURAL LABS • DATAFLOW</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
