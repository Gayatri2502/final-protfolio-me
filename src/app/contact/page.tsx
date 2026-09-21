"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
  ArrowUpRight,
  Copy,
  Check,
  Phone,
  Instagram,
  Youtube,
  Palette,
  Dribbble,
} from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

const LINKS = [
  {
    id: "email",
    label: "Email",
    note: companyInfo.email,
    href: companyInfo.social.email,
    icon: Mail,
    bg: "bg-gradient-to-br from-[#3a2a0a] to-[#1a1205]",
    border: "border-[#f59e0b]/30",
    iconColor: "text-[#fde68a]",
  },
  {
    id: "phone",
    label: "Phone",
    note: "+1 (415) 555-0139",
    href: "tel:+14155550139",
    icon: Phone,
    bg: "bg-gradient-to-br from-[#0a3a26] to-[#051a12]",
    border: "border-[#10b981]/30",
    iconColor: "text-[#6ee7b7]",
  },
  {
    id: "wa",
    label: "WhatsApp",
    note: "~2h · fastest",
    href: "https://wa.me/14155550139?text=Hi%20Gayatri%20—%20saw%20your%20portfolio!",
    icon: MessageCircle,
    bg: "bg-gradient-to-br from-[#0a3d1e] to-[#05140a]",
    border: "border-[#22c55e]/30",
    iconColor: "text-[#86efac]",
  },
  {
    id: "in",
    label: "LinkedIn",
    note: "DM open",
    href: companyInfo.social.linkedin,
    icon: Linkedin,
    bg: "bg-gradient-to-br from-[#0a2f4a] to-[#05121a]",
    border: "border-[#0ea5e9]/30",
    iconColor: "text-[#7dd3fc]",
  },
  {
    id: "gh",
    label: "GitHub",
    note: "open source",
    href: companyInfo.social.github,
    icon: Github,
    bg: "bg-gradient-to-br from-[#1a1a2e] to-[#0a0a12]",
    border: "border-white/12",
    iconColor: "text-white",
  },
  {
    id: "x",
    label: "X",
    note: "daily notes",
    href: companyInfo.social.twitter,
    icon: Twitter,
    bg: "bg-gradient-to-br from-[#1a2330] to-[#0a1218]",
    border: "border-white/10",
    iconColor: "text-white",
  },
  {
    id: "ig",
    label: "Instagram",
    note: "@alphacentauric",
    href: "https://instagram.com/alphacentauric",
    icon: Instagram,
    bg: "bg-gradient-to-br from-[#3d0f2a] to-[#1a0718]",
    border: "border-[#f472b6]/30",
    iconColor: "text-[#f9a8d4]",
  },
  {
    id: "yt",
    label: "YouTube",
    note: "talks · 12k",
    href: "https://youtube.com/@alphacentauric",
    icon: Youtube,
    bg: "bg-gradient-to-br from-[#3d0f0f] to-[#1a0505]",
    border: "border-[#ef4444]/30",
    iconColor: "text-[#fca5a5]",
  },
  {
    id: "be",
    label: "Behance",
    note: "case studies",
    href: "https://behance.net/alphacentauric",
    icon: Palette,
    bg: "bg-gradient-to-br from-[#0f2a5a] to-[#06122a]",
    border: "border-[#3b82f6]/30",
    iconColor: "text-[#93c5fd]",
  },
  {
    id: "dr",
    label: "Dribbble",
    note: "shots",
    href: "https://dribbble.com/alphacentauric",
    icon: Dribbble,
    bg: "bg-gradient-to-br from-[#3d104a] to-[#1a0720]",
    border: "border-[#ec4899]/30",
    iconColor: "text-[#f9a8d4]",
  },
] as const;

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  const copy = async () => {
    await navigator.clipboard.writeText(companyInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const onDragEnd = async (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x > 84) {
      await navigator.clipboard.writeText(companyInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 20 });

  const handlePosterMove = (e: React.MouseEvent) => {
    const el = posterRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handlePosterLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const activeLink = LINKS.find((l) => l.id === hovered) ?? null;

  return (
    <div className="min-h-screen bg-background overflow-clip selection:bg-primary selection:text-primary-foreground">
      {/* bg — attractive but flat (no glow) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(to right, hsl(var(--line)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--line)) 1px, transparent 1px)`, backgroundSize: `32px 32px` }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_20%_12%,hsl(var(--primary)/0.09),transparent_60%),radial-gradient(ellipse_55%_40%_at_88%_18%,hsl(var(--accent)/0.07),transparent_60%),radial-gradient(ellipse_80%_50%_at_50%_100%,hsl(var(--primary)/0.05),transparent_70%)]" />
      </div>

      <div className="container-custom pt-3 sm:pt-5 pb-10">
        <div className="mt-6 grid grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT — POSTER (simplified) */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              ref={posterRef}
              onMouseMove={handlePosterMove}
              onMouseLeave={handlePosterLeave}
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" as const }}
              className="relative rounded-[1.8rem] border border-line bg-card overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`, backgroundSize: `24px 24px` }} />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
              <div className="px-6 sm:px-8 lg:px-9 pt-8 pb-7 relative" style={{ transform: "translateZ(18px)" }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.07] px-3 py-1 mb-4">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="mono-label text-primary tracking-widest text-[10px]">AVAILABLE — 2 SLOTS / QUARTER</span>
                </div>
                {/* SAY HELLO — one line, attractive */}
                <h1 className="font-display font-black tracking-[-0.05em] leading-none whitespace-nowrap text-[clamp(2rem,6vw,4.2rem)]">
                  SAY <span className="bg-primary px-2 text-primary-foreground -skew-x-3 inline-block">HELLO.</span>
                </h1>
                <p className="mt-3 text-sm text-muted-foreground max-w-[36ch]">No forms. No spam. Just pick a channel — I reply in ~4h.</p>

                {/* email — large, clean */}
                <motion.button
                  onClick={copy}
                  whileTap={{ scale: 0.985 }}
                  className="mt-6 group w-full text-left font-mono text-[clamp(1rem,2.4vw,1.45rem)] font-medium tracking-tight leading-none break-all flex flex-wrap items-center gap-2"
                >
                  <span className="text-foreground">hello@alphacentauric.dev</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-line bg-background px-2.5 py-1 text-xs font-medium group-hover:bg-foreground group-hover:text-background transition-colors">
                    {copied ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600">
                        <Check className="size-3" /> copied
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Copy className="size-3" /> copy
                      </span>
                    )}
                  </span>
                </motion.button>

                {/* phone */}
                <a href="tel:+14155550139" className="mt-3 inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="size-3.5" /> +1 (415) 555-0139
                </a>

                {/* drag pill — simple */}
                <div className="mt-7 flex items-center gap-2 rounded-full border border-line bg-background p-1.5 max-w-[520px]">
                  <span className="flex-1 min-w-0 pl-4 font-mono text-xs sm:text-[13px] font-medium truncate">
                    {companyInfo.email}
                  </span>
                  <div className="relative h-[42px] w-[154px] shrink-0 rounded-full bg-card border border-line overflow-hidden flex items-center">
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs text-muted-foreground pr-6">
                      {copied ? "copied" : "drag →"}
                    </span>
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: 98 }}
                      dragElastic={0.08}
                      dragMomentum={false}
                      onDragEnd={onDragEnd}
                      onClick={copy}
                      whileTap={{ scale: 0.96 }}
                      className="absolute left-1 top-1 size-[34px] rounded-full bg-primary text-primary-foreground flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copied ? <Check className="size-4" key="c" /> : <ArrowUpRight className="size-4" key="a" />}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                  <a
                    href={companyInfo.social.email}
                    className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase text-primary-foreground hover:bg-primary/90 shrink-0"
                  >
                    Email <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — ORBITAL (attractive flat, no glow) */}
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-24">
              <div className="relative mx-auto w-full max-w-[520px] aspect-square rounded-[2rem] border border-line bg-card overflow-hidden flex items-center justify-center">
                {/* attractive inner */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,hsl(var(--primary)/0.06),transparent_70%),radial-gradient(ellipse_90%_80%_at_50%_115%,hsl(var(--accent)/0.06),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`, backgroundSize: `28px 28px` }} />
                <div className="pointer-events-none absolute inset-[10%] rounded-full border border-dashed border-line/20 hidden sm:block" />
                {/* center */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="size-20 rounded-full bg-foreground text-background flex items-center justify-center font-display font-black text-lg">
                    GS
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeLink?.id ?? "idle"}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                      className="mt-3 text-center"
                    >
                      <div className="text-sm font-semibold leading-none text-foreground">{activeLink ? activeLink.label : "Pick a channel"}</div>
                      <div className="text-xs text-muted-foreground mt-1">{activeLink ? activeLink.note : "hover an icon"}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* orbiting icons — Image 1 size & color on Image 2 layout */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "50% 50%" }}
                >
                  {LINKS.map((l, i) => {
                    const angle = (i / LINKS.length) * 360 - 90;
                    const Icon = l.icon;
                    const isHovered = hovered === l.id;
                    return (
                      <motion.div
                        key={l.id}
                        className="absolute left-1/2 top-1/2"
                        style={{ x: "-50%", y: "-50%", rotate: angle }}
                      >
                        <motion.div style={{ x: 168, rotate: -angle }} className="-translate-y-1/2 relative">
                          <AnimatePresence>
                            {isHovered && (
                              <motion.span
                                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                                className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white text-black px-3 py-1 text-xs font-semibold"
                              >
                                {l.label}
                              </motion.span>
                            )}
                          </AnimatePresence>

                          <motion.a
                            href={l.href}
                            target={l.id === "email" || l.id === "phone" ? undefined : "_blank"}
                            rel={l.id === "email" || l.id === "phone" ? undefined : "noopener noreferrer"}
                            onMouseEnter={() => setHovered(l.id)}
                            onMouseLeave={() => setHovered(null)}
                            whileHover={{ scale: 1.18 }}
                            whileTap={{ scale: 0.94 }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            className={`relative flex items-center justify-center rounded-full border transition-all duration-300 ${l.bg} ${l.border} ${
                              isHovered ? "size-20 sm:size-[88px] md:size-[92px] border-2" : "size-[66px] sm:size-[74px] md:size-[80px]"
                            }`}
                          >
                            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent opacity-60" />
                            <Icon className={`relative z-10 ${l.iconColor} ${isHovered ? "size-7 sm:size-8" : "size-6 sm:size-7"}`} />
                          </motion.a>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-foreground text-background overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap py-2.5 text-xs font-medium tracking-widest"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex items-center gap-8">
              <span>SAY HELLO — HELLO@ALPHACENTAURIC.DEV</span>
              <span className="opacity-40">·</span>
              <span>+1 (415) 555-0139</span>
              <span className="opacity-40">·</span>
              <span>LET’S BUILD SOMETHING RELIABLE —</span>
              <span className="opacity-40">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
