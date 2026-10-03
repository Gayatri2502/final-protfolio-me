"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

// minimal — not cards
const LINKS = [
  { id: "email", label: "Email", href: companyInfo.social.email, icon: Mail },
  { id: "wa", label: "WhatsApp", href: "https://wa.me/14155550139?text=Hi%20Gayatri%20—%20saw%20your%20portfolio!", icon: MessageCircle },
  { id: "in", label: "LinkedIn", href: companyInfo.social.linkedin, icon: Linkedin },
  { id: "gh", label: "GitHub", href: companyInfo.social.github, icon: Github },
  { id: "x", label: "X", href: companyInfo.social.twitter, icon: Twitter },
] as const;

export function CTA() {
  const [copied, setCopied] = useState(false);
  const [dragDone, setDragDone] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const copy = async () => {
    await navigator.clipboard.writeText(companyInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const handleDragEnd = async (_: unknown, info: { offset: { x: number } }) => {
    // if dragged > 90px → copy
    if (info.offset.x > 84) {
      await navigator.clipboard.writeText(companyInfo.email);
      setCopied(true);
      setDragDone(true);
      setTimeout(() => {
        setCopied(false);
        setDragDone(false);
      }, 1600);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-y border-line bg-background scroll-mt-20"
    >
      {/* bg — subtle, not noisy */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-lines opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_18%_20%,hsl(var(--primary)/0.10),transparent_60%),radial-gradient(ellipse_50%_35%_at_88%_18%,hsl(var(--accent)/0.08),transparent_60%)]" />
        <div className="absolute inset-0 grain opacity-[0.08] pointer-events-none" />
        {/* ghost */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[52%] w-[140%] -translate-x-1/2 select-none text-center font-display font-black leading-none tracking-[-0.06em] opacity-[0.03]"
          style={{ fontSize: "clamp(7rem, 18vw, 20rem)", WebkitTextStroke: "1px hsl(var(--foreground))" }}
        >
          HELLO
        </div>
      </div>

      <div className="container-custom">
        {/* hairline */}
        <div className="flex items-center gap-3 border-b border-line py-4 mono-label text-muted-foreground">
          <span className="text-primary inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-primary animate-pulseDot" />
            [06] — CONTACT
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="hidden sm:inline">2 slots · ~4h</span>
        </div>
      </div>

      <div className="container-custom relative py-12 lg:py-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* left — headline + interactive */}
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-display text-[clamp(2.4rem,5.8vw,4.4rem)] font-semibold tracking-[-0.04em] leading-[0.88]">
              Have an AI idea
              <br />
              <span className="italic font-light text-muted-foreground">worth shipping?</span>
            </h2>

            <p className="mt-3 text-sm leading-5 text-muted-foreground">
              No forms. No spam. Just AI/ML builds for this portfolio&apos;s next chapter.
            </p>

            {/* — INTERACTIVE: drag-to-copy pill — unique, not a card */}
            <div className="mt-8 max-w-[520px]">
              <div className="mono-label text-muted-foreground mb-2 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {copied ? <span className="text-emerald-600">copied to clipboard</span> : "drag → to copy · or click"}
              </div>

              <div
                ref={trackRef}
                className="group relative flex items-center rounded-full border border-line bg-card p-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
              >
                {/* email */}
                <div className="flex-1 min-w-0 pl-4 pr-2 flex items-center gap-2">
                  <Mail className="size-3.5 text-muted-foreground hidden sm:block shrink-0" />
                  <span className="font-mono text-[13.5px] sm:text-[15px] font-medium tracking-tight truncate">
                    {companyInfo.email}
                  </span>
                </div>

                {/* drag knob track */}
                <div className="relative h-[44px] w-[164px] shrink-0 rounded-full bg-background border border-line overflow-hidden flex items-center">
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center mono-label text-muted-foreground text-[10px] pr-8">
                    {dragDone ? "copied" : "drag →"}
                  </span>

                  {/* fill */}
                  <motion.div
                    className="absolute inset-y-1 left-1 bg-primary rounded-full"
                    animate={{ width: dragDone ? "calc(100% - 8px)" : copied ? 44 : 44 }}
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                    style={{ width: 44 }}
                  />

                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 108 }}
                    dragElastic={0.08}
                    dragMomentum={false}
                    onDragEnd={handleDragEnd}
                    onClick={copy}
                    whileTap={{ scale: 0.96 }}
                    className="absolute left-1 top-1 size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_4px_14px_hsl(var(--primary)/0.35)] z-10"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.span
                          key="chk"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                        >
                          <Check className="size-4" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="arr"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                        >
                          <ArrowUpRight className="size-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* desktop fallback click area — also copy */}
                <button
                  onClick={copy}
                  className="hidden sm:inline-flex ml-1.5 size-11 items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span key="c1" initial={{ y: 4, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -4, opacity: 0 }}>
                        <Check className="size-4" />
                      </motion.span>
                    ) : (
                      <motion.span key="c2" initial={{ y: 4, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -4, opacity: 0 }}>
                        <Copy className="size-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <div className="mt-2.5 mono-label text-muted-foreground flex items-center gap-2">
                <a href={companyInfo.social.email} className="hover:text-foreground inline-flex items-center gap-1">
                  Send email <ArrowUpRight className="size-3" />
                </a>
                <span className="opacity-30">·</span>
                <span>SF · Remote</span>
              </div>
            </div>
          </div>

          {/* right — minimal list, not cards */}
          <div className="col-span-12 lg:col-span-5">
            <div className="border-y border-line divide-y divide-line">
              {LINKS.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.id}
                    href={l.href}
                    target={l.id === "email" ? undefined : "_blank"}
                    rel={l.id === "email" ? undefined : "noopener noreferrer"}
                    className="group flex items-center justify-between py-4 -mx-1 px-1 hover:pl-2 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-full border border-line bg-card group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors">
                        <Icon className="size-3.5" />
                      </span>
                      <span className="text-sm font-medium tracking-tight">{l.label}</span>
                      <span className="hidden sm:block h-px w-6 bg-line group-hover:w-10 group-hover:bg-foreground/20 transition-all" />
                    </span>
                    <span className="flex items-center gap-2 mono-label text-muted-foreground group-hover:text-foreground">
                      <span className="hidden sm:inline text-[10px]">open</span>
                      <span className="flex size-7 items-center justify-center rounded-full border border-line bg-background group-hover:bg-foreground group-hover:text-background group-hover:border-foreground group-hover:rotate-45 transition-all">
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-4 mono-label text-muted-foreground flex items-center justify-between">
              <span>© 2026 · Gayatri Samal</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> avg ~4h
              </span>
            </div>
            <a href="/contact" className="mt-3 inline-flex items-center gap-1 mono-label text-primary hover:text-foreground">
              Open full contact page <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
