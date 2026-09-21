"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import InfiniteGallery from "@/components/ui/3d-gallery-photography";
import React from "react";

class GalleryErrorBoundary extends React.Component<{ children: React.ReactNode; fallback?: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.warn("Gallery failed to load, showing fallback:", error);
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80', alt: 'AI workspace' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80', alt: 'Code matrix' },
  { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80', alt: 'Tech lab' },
  { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80', alt: 'Design desk' },
  { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80', alt: 'Laptop code' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80', alt: 'Data center' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80', alt: 'Circuit' },
];

export function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-[#08080A] text-[#F2F0EB] border-b border-[#F2F0EB]/10">
      {/* 3D Gallery as subtle mixed backdrop — text remains on top */}
      <div className="absolute inset-0 -z-0 opacity-[0.28] pointer-events-none">
        <GalleryErrorBoundary fallback={null}>
          <InfiniteGallery
            images={galleryImages}
            speed={1.0}
            visibleCount={10}
            className="h-full w-full"
            fadeSettings={{ fadeIn: { start: 0.05, end: 0.2 }, fadeOut: { start: 0.75, end: 0.92 } }}
            blurSettings={{ blurIn: { start: 0, end: 0.12 }, blurOut: { start: 0.7, end: 0.9 }, maxBlur: 6 }}
          />
        </GalleryErrorBoundary>
      </div>

      {/* dark vignette + grain to keep text legible over gallery */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-[#08080A]/40 via-[#08080A]/70 to-[#08080A] pointer-events-none" />
      <div className="absolute inset-0 -z-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 container-custom pt-6 lg:pt-8 pb-0">
        {/* main 3-col — text remains exact */}
        <div className="grid grid-cols-12 gap-6 lg:gap-4 items-center">
          {/* LEFT */}
          <motion.div
            className="col-span-12 lg:col-span-4 xl:col-span-4 order-2 lg:order-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[12px] tracking-[0.14em] uppercase opacity-60 text-[#F2F0EB]">Hey. I&apos;m Gayatri,</p>

            <h1 className="mt-3 font-display font-bold leading-[0.88] tracking-[-0.04em] text-[#F2F0EB]">
              <span className="block text-[clamp(2.4rem,6vw,4.2rem)]">A AI/ML</span>
              <span className="block text-[clamp(2.4rem,6vw,4.2rem)] font-light italic tracking-[-0.03em] text-[#F2F0EB]/70">&amp; Systems</span>
              <span className="block text-[clamp(2.4rem,6vw,4.2rem)]">ENGINEER</span>
            </h1>

            <p className="mt-5 max-w-[360px] text-[13.5px] leading-6 text-[#F2F0EB]/60">
              Transforming ideas into intelligent systems — AI, LLMs and production infrastructure that captivates, scales, and delivers results.
            </p>

            <a
              href={companyInfo.social.email}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F2F0EB] px-5 py-3 text-xs font-semibold tracking-widest uppercase text-[#08080A] hover:bg-white transition-colors"
            >
              Contact me
              <span className="flex size-6 items-center justify-center rounded-full bg-[#08080A] text-white">
                <ArrowUpRight className="size-3.5" />
              </span>
            </a>
          </motion.div>

          {/* CENTER arch — remains, now on black shade */}
          <motion.div
            className="col-span-12 lg:col-span-5 xl:col-span-4 order-1 lg:order-2 flex justify-center lg:pt-2"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-[320px] sm:w-[380px] lg:w-[380px] xl:w-[400px] h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden bg-[#141415] mx-auto border border-[#F2F0EB]/10"
                 style={{ borderRadius: '280px 280px 32px 32px / 320px 320px 32px 32px' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                alt="Gayatri Samal — AI Engineer"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none" />
              <div className="absolute inset-0 rounded-[inherit] ring-1 ring-[#F2F0EB]/10 pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT stats */}
          <motion.div
            className="col-span-12 lg:col-span-3 xl:col-span-4 order-3 flex lg:flex-col justify-between lg:justify-center gap-6 lg:gap-10 lg:pl-8 xl:pl-12 lg:text-right py-4 lg:py-0 border-y lg:border-y-0 border-[#F2F0EB]/10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hidden lg:block space-y-7">
              <div>
                <div className="font-display font-bold text-[28px] leading-none tracking-[-0.02em] text-[#F2F0EB]">5+</div>
                <div className="mt-1 font-mono text-[11px] leading-4 tracking-wide uppercase opacity-60 text-[#F2F0EB]">Years Experience</div>
              </div>
              <div>
                <div className="font-display font-bold text-[28px] leading-none tracking-[-0.02em] text-[#F2F0EB]">20+</div>
                <div className="mt-1 font-mono text-[11px] leading-4 tracking-wide uppercase opacity-60 text-[#F2F0EB]">Projects Delivered</div>
              </div>
              <div>
                <div className="font-display font-bold text-[28px] leading-none tracking-[-0.02em] text-[#F2F0EB]">99.9%</div>
                <div className="mt-1 font-mono text-[11px] leading-4 tracking-wide uppercase opacity-60 text-[#F2F0EB]">Uptime & Reliability</div>
              </div>
              <div>
                <div className="font-display font-bold text-[28px] leading-none tracking-[-0.02em] text-[#F2F0EB]">500+</div>
                <div className="mt-1 font-mono text-[11px] leading-4 tracking-wide uppercase opacity-60 text-[#F2F0EB]">Engineers Supported</div>
              </div>
            </div>

            <div className="grid grid-cols-4 lg:hidden w-full gap-4 text-center">
              {[
                { v: "5+", l: "Years" },
                { v: "20+", l: "Projects" },
                { v: "99.9%", l: "Uptime" },
                { v: "500+", l: "Users" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="font-display font-bold text-xl tracking-tight text-[#F2F0EB]">{s.v}</div>
                  <div className="font-mono text-[10px] uppercase opacity-60 text-[#F2F0EB]">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* bottom 4-col */}
        <motion.div
          className="mt-6 lg:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#F2F0EB]/10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            {
              title: "USER-CENTERED AI",
              desc: "Intelligent systems crafted around real user needs and production constraints.",
            },
            {
              title: "RESEARCH & STRATEGY",
              desc: "From paper to prod — evaluation, retrieval strategy and model choice that ships.",
            },
            {
              title: "SCALABLE & MODERN INFRA",
              desc: "Fast, observable and cost-aware — Kubernetes, vector DBs, and edge-ready serving.",
            },
            {
              title: "SEAMLESS MLOPS",
              desc: "Automated pipelines from training to monitoring for reliable deployment.",
            },
          ].map((item, i) => (
            <div key={item.title} className={`py-6 lg:py-7 px-0 lg:px-6 ${i !== 0 ? "border-l-0 lg:border-l border-[#F2F0EB]/10 lg:pl-6" : ""} ${i >= 2 ? "border-t lg:border-t-0 border-[#F2F0EB]/10" : ""}`}>
              <div className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#F2F0EB]">{item.title}</div>
              <div className="mt-2 text-[12.5px] leading-5 text-[#F2F0EB]/60 max-w-[240px]">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* helper hint for gallery */}
      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 rounded-full bg-[#F2F0EB]/10 backdrop-blur px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase text-[#F2F0EB]/70 border border-[#F2F0EB]/10">
        <span>Drag / scroll gallery</span>
        <span className="opacity-30">·</span>
        <span>Hover to wave</span>
      </div>
    </section>
  );
}

export default Hero;
