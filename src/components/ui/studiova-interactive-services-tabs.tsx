"use client";

import React, { useState } from "react";
import { ArrowUpRight, BarChart3, ClipboardCheck, ContactRound, Globe, Layers3, PanelsTopLeft, ScanSearch, Smartphone, Workflow } from "lucide-react";

const serviceIcons = {
  workflow: Workflow,
  design: PanelsTopLeft,
  web: Globe,
  operations: Layers3,
  customers: ContactRound,
  mobile: Smartphone,
  data: BarChart3,
  content: ScanSearch,
  quality: ClipboardCheck,
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  gradient: string;
  icon?: keyof typeof serviceIcons;
  projects?: { name: string; href: string }[];
}

interface StudiovaServicesTabsProps {
  tagNumber?: string;
  tagLabel?: string;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  services?: ServiceItem[];
  brandLink?: string;
  className?: string;
}

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI Automation",
    tagline: "Intelligent workflows that run while you sleep",
    description:
      "From LLM agents to RPA pipelines — we automate research, support, and ops so your team focuses on decisions, not busywork. Guardrailed, observable, and cost-aware.",
    deliverables: [
      "LLM Agent Workflows & Tools",
      "n8n / Zapier / Make Automations",
      "RAG + Vector Search Pipelines",
      "Monitoring & Human-in-Loop",
    ],
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    id: "data",
    number: "02",
    title: "Data & ML Pipelines",
    tagline: "Clean data → trusted models",
    description:
      "We turn messy sources into reliable, ML-ready data — pipelines, feature stores, and eval datasets that make this AI/ML studio possible. No more spreadsheet archaeology.",
    deliverables: [
      "ETL/ELT & Streaming Pipelines",
      "Warehouse & Lakehouse Setup",
      "BI Dashboards & KPI Stores",
      "Data Quality & Governance",
    ],
    gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
  },
  {
    id: "website",
    number: "03",
    title: "AI Web Experiences",
    tagline: "Fast AI apps people remember",
    description:
      "React/Next.js front-ends for ML systems — streaming chat, eval dashboards, and search UIs with sub-second loads and SEO that ranks. Built for adoption, not just looks.",
    deliverables: [
      "Next.js App Router + Headless CMS",
      "GSAP / Three.js Interactions",
      "99+ Lighthouse & Core Web Vitals",
      "SEO & Analytics Wiring",
    ],
    gradient: "from-blue-500/20 via-indigo-600/10 to-transparent",
  },
  {
    id: "consultancy",
    number: "04",
    title: "AI Strategy & Advisory",
    tagline: "Clarity before training runs",
    description:
      "Roadmaps, model audits, and build-vs-buy calls grounded in unit economics. We map your AI opportunity, find the highest-ROI use case, and sequence delivery.",
    deliverables: [
      "Product & Tech Audit",
      "Go-to-Market & Pricing Blueprint",
      "Process Mapping & Automation ROI",
      "Hiring & Vendor Advisory",
    ],
    gradient: "from-indigo-500/20 via-violet-600/10 to-transparent",
  },
  {
    id: "creative",
    number: "05",
    title: "AI Demos & Storytelling",
    tagline: "Demos that earn trust",
    description:
      "Launch videos, conference decks, and interactive demos that explain your ML system — benchmarks visualized, ablations narrated, results that close.",
    deliverables: [
      "Launch Videos & Model Demos",
      "Benchmark Visualizations",
      "Conference Decks & Posters",
      "Interactive Playground UIs",
    ],
    gradient: "from-rose-500/20 via-purple-600/10 to-transparent",
  },
];

export function StudiovaServicesTabs({
  tagNumber = "03",
  tagLabel = "Capabilities",
  heading = "What we do",
  subheading = "A glimpse into our multidisciplinary execution—exploring luxury design systems, successful venture collaborations, and transformative digital experiences.",
  services = DEFAULT_SERVICES,
  brandLink = "/contact",
  className = "",
}: StudiovaServicesTabsProps) {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeTab) || services[0];
  const ActiveServiceIcon = activeService.icon ? serviceIcons[activeService.icon] : null;

  return (
    <section
      className={`py-16 px-4 md:px-8 bg-[#090a0f] text-white relative overflow-hidden font-sans ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-4 flex items-center gap-4">
            <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_hsl(var(--primary)/0.3)]">
              {tagNumber}
            </span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-medium tracking-wider text-zinc-300">
              {tagLabel}
            </span>
          </div>

          <div className="lg:col-span-8 max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
              {heading}
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              {subheading}
            </p>
          </div>
        </div>

        {/* Interactive Layout: Left Interactive Tabs / Right Dynamic Feature Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Accordion / Tab Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {services.map((item) => {
              const isActive = item.id === activeTab;
              const ServiceIcon = item.icon ? serviceIcons[item.icon] : null;

              return (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActiveTab(item.id); } }}
                  onClick={() => setActiveTab(item.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                    isActive
                      ? "bg-[#141520] border-primary/60 shadow-[0_10px_30px_hsl(var(--primary)/0.1)]"
                      : "bg-[#0d0e15]/60 border-white/5 hover:border-white/15 hover:bg-[#12131c]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/5 text-zinc-400"
                        }`}
                      >
                        {ServiceIcon ? <ServiceIcon aria-hidden="true" className="size-4" /> : item.number}
                      </span>
                      <h3
                        className={`text-lg md:text-xl font-bold transition-colors ${
                          isActive ? "text-white" : "text-zinc-300"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground rotate-45"
                          : "text-zinc-500 bg-white/5"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 stroke-current stroke-2 fill-none"
                        viewBox="0 0 24 24"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </div>

                  {/* Expanded Content for Active Tab */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs font-medium text-primary mb-2 font-mono">
                        {item.tagline}
                      </p>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.deliverables.map((del, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-[11px] text-zinc-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl p-8 bg-[#12131d] border border-white/10 relative overflow-hidden">
            {/* Dynamic Ambient Gradient Mask */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeService.gradient} opacity-50 pointer-events-none transition-all duration-500`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                  Service Specification
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                  {activeService.number} / {String(services.length).padStart(2, "0")}
                </span>
              </div>

              {ActiveServiceIcon && (
                <div className="mb-5 hidden size-12 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary lg:grid">
                  <ActiveServiceIcon aria-hidden="true" className="size-6" />
                </div>
              )}

              {activeService.projects && (
                <div className="mb-6 rounded-xl border border-white/10 bg-black/40 p-5">
                  <h4 className="text-sm font-semibold text-white">Related work</h4>
                  {activeService.projects.length ? (
                    <ul className="mt-3 space-y-2">
                      {activeService.projects.map(({ name, href }) => (
                        <li key={href}>
                          <a className="text-sm text-primary underline-offset-4 hover:underline" href={href} target="_blank" rel="noopener noreferrer">
                            {name} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : <p className="mt-2 text-sm text-zinc-400">No related projects are published for this service yet.</p>}
                </div>
              )}

              <h4 className="text-lg font-bold text-white mb-2">
                {activeService.tagline}
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                {activeService.description}
              </p>
            </div>

            {/* Bottom Action */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={brandLink}
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
              >
                <span>Discuss this service</span>
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudiovaServicesTabs;
