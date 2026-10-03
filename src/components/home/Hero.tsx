"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export function Hero() {
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
            <p className="font-mono text-[12px] tracking-[0.14em] uppercase opacity-60 text-[#F2F0EB]">Hey. I&apos;m Gayatri — welcome to my AI/ML portfolio,</p>

            <h1 className="mt-3 font-display font-bold leading-[0.88] tracking-[-0.04em] text-[#F2F0EB]">
              <span className="block text-[clamp(2.4rem,6vw,4.2rem)]">AN AI/ML</span>
              <span className="block text-[clamp(2.4rem,6vw,4.2rem)] font-light italic tracking-[-0.03em] text-[#F2F0EB]/70">& Systems</span>
              <span className="block text-[clamp(2.4rem,6vw,4.2rem)]">PORTFOLIO</span>
            </h1>

            <p className="mt-5 max-w-[360px] text-[13.5px] leading-6 text-[#F2F0EB]/60">
              Transforming ideas into intelligent systems — AI, LLMs and production infrastructure that captivates, scales, and delivers results. Explore the AI/ML work below.
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
            <img
              src="/images/profile/image.png"
                alt="Gayatri Samal — AI/ML Portfolio"
              className="w-[320px] sm:w-[380px] lg:w-[380px] xl:w-[400px] h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-top mx-auto"
              loading="eager"
            />
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