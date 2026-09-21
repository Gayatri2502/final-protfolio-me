"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface ScrollingAnimationProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ScrollingAnimation({
  title = "LABORATORY",
  subtitle = "Scroll to explore",
  className,
}: ScrollingAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 8]);

  // Letters stagger
  const letters = title.split("");

  return (
    <div
      ref={containerRef}
      className={`relative h-[85vh] min-h-[540px] w-full overflow-hidden bg-[#08080A] flex flex-col items-center justify-center ${className || ""}`}
    >
      {/* grid + glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_90%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08080A]" />

      <motion.div
        style={{ scale, y, opacity, filter: useTransform(blur, (v) => `blur(${v}px)`) as any }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <motion.p
          style={{ y: textY }}
          className="font-mono text-xs tracking-[0.32em] uppercase text-[#F2F0EB]/50"
        >
          {subtitle} — 09 experiments
        </motion.p>

        <h1 className="mt-4 font-display font-black leading-[0.85] tracking-[-0.06em] text-[#F2F0EB] flex flex-wrap justify-center gap-[0.06em]">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-[clamp(2.8rem,11vw,10rem)]"
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-px w-24 bg-[#F2F0EB]/20 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 max-w-xl text-sm leading-6 text-[#F2F0EB]/60"
        >
          Interactive explorations at the intersection of AI, creative coding, and human-computer interaction.
        </motion.p>
      </motion.div>

      {/* bottom hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#F2F0EB]/40"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-[#F2F0EB]/20"
        />
      </motion.div>
    </div>
  );
}

export default ScrollingAnimation;
