"use client";

import { useState } from "react";
import { Brain, Code, Server, Database, Cpu, Wrench, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonial1 from "@/components/ui/testimonial-1";


const SKILLS = [
  { id: "ai", label: "AI / ML", title: "LLMs & Retrieval", mono: "PYTORCH · TRANSFORMERS", level: 96, icon: Brain },
  { id: "frontend", label: "Frontend", mono: "NEXT.JS · MOTION", title: "Interfaces", level: 92, icon: Code },
  { id: "backend", label: "Backend", mono: "PYTHON · POSTGRES", title: "APIs & Pipelines", level: 90, icon: Server },
  { id: "infra", label: "Infra & MLOps", mono: "K8S · DOCKER", title: "Ship & Scale", level: 88, icon: Cpu },
  { id: "data", label: "Data", mono: "PANDAS · SPARK", title: "Data & Features", level: 89, icon: Database },
  { id: "tools", label: "Workflow", mono: "GIT · HF · W&B", title: "Tooling", level: 91, icon: Wrench },
];

const SKILL_CERTS: Record<string, { name: string; org: string; certNo: string }[]> = {
  ai: [
    { name: "AWS ML Specialty", org: "Amazon · 2024", certNo: "AWS-MLS-C01-884291" },
    { name: "TensorFlow Developer", org: "Google · 2023", certNo: "TF-CERT-2023-11904" },
    { name: "Generative AI Professional", org: "DeepLearning.AI · 2024", certNo: "DLAI-GEN-240512" },
  ],
  frontend: [
    { name: "Meta Frontend Professional", org: "Meta · 2023", certNo: "META-FE-2023-55821" },
    { name: "Next.js Certification", org: "Vercel · 2024", certNo: "VERCEL-NX-24-9033" },
  ],
  backend: [
    { name: "CKAD", org: "CNCF · 2023", certNo: "LF-CKAD-2023-4471" },
    { name: "AWS Developer Associate", org: "Amazon · 2023", certNo: "AWS-DVA-C02-77290" },
  ],
  infra: [
    { name: "CKA – Certified Kubernetes", org: "CNCF · 2024", certNo: "LF-CKA-2024-6103" },
    { name: "Databricks Lakehouse", org: "Databricks · 2024", certNo: "DB-LKH-2024-0821" },
  ],
  data: [
    { name: "Databricks Lakehouse", org: "Databricks · 2024", certNo: "DB-LKH-2024-0821" },
    { name: "Google Data Analytics", org: "Google · 2023", certNo: "GOOGLE-DA-2023-33419" },
  ],
  tools: [
    { name: "GitHub Actions Certified", org: "GitHub · 2024", certNo: "GH-ACTIONS-24-7150" },
    { name: "Hugging Face Power User", org: "Hugging Face · 2024", certNo: "HF-PWR-2024-0294" },
  ],
};

export default function SkillsPage() {
  const [selected, setSelected] = useState<string>("ai");

  return (
    <div className="min-h-screen bg-background">
      <Testimonial1 />

      <div className="container-custom py-8">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Left — Skills (clickable) */}
            <div className="rounded-2xl border border-line bg-card p-5 md:p-6">
              <div className="flex items-center gap-2 mono-label text-muted-foreground mb-4">
                <Wrench className="size-3.5" /> Skills
                <span className="h-px flex-1 bg-line ml-2" />
                <span className="text-foreground">{SKILLS.length}</span>
              </div>

              <div className="space-y-3">
                {SKILLS.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = selected === s.id;
                  return (
                    <motion.button
                      key={s.id}
                      onClick={() => setSelected(s.id)}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-full text-left rounded-xl border p-4 flex items-center gap-3 transition-colors ${isActive ? "bg-foreground text-background border-foreground shadow-sm" : "bg-background border-line hover:border-foreground/15"}`}
                    >
                      <span className={`flex size-9 items-center justify-center rounded-lg border ${isActive ? "bg-background/10 border-background/15" : "bg-muted border-line"}`}>
                        <Icon className={`size-4 ${isActive ? "text-background" : ""}`} />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className={`block text-sm font-medium leading-none ${isActive ? "text-background" : ""}`}>{s.title}</span>
                        <span className={`mono-label text-[10px] ${isActive ? "text-background/60" : "text-muted-foreground"}`}>{s.mono}</span>
                      </span>
                      <span className={`mono-label text-[10px] hidden sm:block ${isActive ? "text-background/60" : "text-muted-foreground"}`}>{s.level}%</span>
                    </motion.button>
                  );
                })}
              </div>

              <p className="mt-4 mono-label text-muted-foreground text-[10px]">Click a skill → certs update on the right</p>
            </div>

            {/* Right — Certifications (dynamic per skill) */}
            <div className="rounded-2xl border border-line bg-card p-5 md:p-6">
              <div className="flex items-center gap-2 mono-label text-muted-foreground mb-4">
                <Award className="size-3.5 text-primary" /> Certifications
                <span className="h-px flex-1 bg-line ml-2" />
                <span className="text-foreground">{SKILL_CERTS[selected]?.length || 0} for {SKILLS.find((s) => s.id === selected)?.label}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-3"
                >
                  {(SKILL_CERTS[selected] || []).map((c, i) => (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="rounded-xl border border-line bg-background p-4 flex items-center justify-between hover:border-primary/15 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-medium leading-tight">{c.name}</div>
                        <div className="mono-label text-muted-foreground mt-1 text-[10px]">{c.org}</div>
                        <div className="mt-1 inline-flex items-center gap-1 rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground border border-line">
                          ID: {c.certNo}
                        </div>
                      </div>
                      <span className="size-2 rounded-full bg-primary shrink-0 ml-3" />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
      </div>

      <div className="container-custom py-6 text-center mono-label text-muted-foreground">Skills left · Certs right · editable</div>
    </div>
  );
}
