"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export function Hero() {
  const [greetingOpen, setGreetingOpen] = useState(false);

  return (
    <section aria-label="Hero" className="relative overflow-hidden text-[#F2F0EB] border-b border-[#F2F0EB]/10">

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
            <p className="font-mono text-[12px] tracking-[0.14em] uppercase opacity-60 text-[#F2F0EB]">Hey. I&apos;m Gayatri — building Alphacentauric Studio,</p>

            <h1 className="mt-3 font-display font-bold leading-[0.88] tracking-[-0.04em] text-[#F2F0EB]">
              <span className="block text-[clamp(2.4rem,6vw,4.2rem)]">BUILDING</span>
              <span className="block text-[clamp(2.4rem,6vw,4.2rem)] font-light tracking-[-0.03em] text-[#F2F0EB]/70">Alphacentauric</span>
              <span className="block text-[clamp(2.4rem,6vw,4.2rem)]">STUDIO</span>
            </h1>

            <p className="mt-5 max-w-[360px] text-[13.5px] leading-6 text-[#F2F0EB]/60">
              Building intelligent experiences with AI, thoughtful design, and systems made to scale. Explore the work behind Alphacentauric Studio below.
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

          {/* CENTER — profile image */}
          <motion.div
            className="col-span-12 lg:col-span-5 xl:col-span-4 order-1 lg:order-2 flex justify-center lg:pt-2"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              aria-label="Say hello to the Alphacentauric Studio penguin"
              aria-expanded={greetingOpen}
              onClick={() => setGreetingOpen((open) => !open)}
              className="group relative mx-auto block rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2F0EB]"
            >
              <span className={`pointer-events-none absolute right-0 top-4 z-10 max-w-[190px] rounded-[28px] bg-[#F2F0EB] px-5 py-3 text-left text-sm font-medium leading-snug text-[#08080A] shadow-lg transition-all duration-300 motion-reduce:transition-none group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 ${greetingOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"}`}>
                Hello! You landed in the right space. ✨
                <span className="absolute -bottom-1 left-7 size-3 rotate-45 bg-[#F2F0EB]" />
              </span>
              <img
                src="/images/penguin.png"
                alt="Penguin character representing Alphacentauric Studio"
                className="w-[320px] sm:w-[380px] lg:w-[380px] xl:w-[400px] h-[420px] sm:h-[480px] lg:h-[520px] object-contain object-center transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                loading="eager"
              />
            </button>
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
                <div className="mt-1 font-mono text-[11px] leading-4 tracking-wide uppercase opacity-60 text-[#F2F0EB]">Years in AI/ML</div>
              </div>
              <div>
                <div className="font-display font-bold text-[28px] leading-none tracking-[-0.02em] text-[#F2F0EB]">20+</div>
                <div className="mt-1 font-mono text-[11px] leading-4 tracking-wide uppercase opacity-60 text-[#F2F0EB]">AI Projects Shipped</div>
              </div>
              <div>
                <div className="font-display font-bold text-[28px] leading-none tracking-[-0.02em] text-[#F2F0EB]">99.9%</div>
                <div className="mt-1 font-mono text-[11px] leading-4 tracking-wide uppercase opacity-60 text-[#F2F0EB]">Model Uptime</div>
              </div>
              <div>
                <div className="font-display font-bold text-[28px] leading-none tracking-[-0.02em] text-[#F2F0EB]">500+</div>
                <div className="mt-1 font-mono text-[11px] leading-4 tracking-wide uppercase opacity-60 text-[#F2F0EB]">Engineers Supported</div>
              </div>
            </div>

            <div className="grid grid-cols-4 lg:hidden w-full gap-4 text-center">
              {[
                { v: "5+", l: "AI/ML yrs" },
                { v: "20+", l: "AI builds" },
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
    </section>
  );
}

export default Hero;