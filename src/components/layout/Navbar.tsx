"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { companyInfo } from "@/data/companyInfo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* top hairline meta bar — only on large screens */}
      <div className="hidden lg:block fixed top-0 inset-x-0 z-40 h-7 border-b border-line bg-background/80 backdrop-blur-md">
        <div className="container-custom h-full flex items-center justify-between mono-label text-muted-foreground">
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary animate-pulseDot" />
              Available for selective work — Q1 2026
            </span>
            <span className="hidden xl:inline opacity-40">·</span>
            <span className="hidden xl:inline">{companyInfo.location}</span>
          </span>
          <span className="flex items-center gap-4">
            <a href={companyInfo.social.email} className="hover:text-foreground transition-colors">{companyInfo.email}</a>
            <span className="opacity-40">UTC−8 San Francisco</span>
          </span>
        </div>
      </div>

      <header className={`fixed inset-x-0 z-50 flex justify-center pointer-events-none ${scrolled ? "top-4 lg:top-10" : "top-4 lg:top-10"}`}>
        <nav
          className={`
            pointer-events-auto mx-4 flex h-[52px] w-full max-w-[1280px] items-center justify-between
            rounded-full border px-2 pl-5 pr-2
            transition-all duration-300
            ${scrolled
              ? "bg-background/85 backdrop-blur-2xl border-line shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
              : "bg-card/90 backdrop-blur-xl border-line/60 shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
            }
          `}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm font-bold tracking-tight">GS</span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-semibold text-sm tracking-tight">Gayatri Samal</span>
              <span className="mono-label text-[9px] opacity-60 -mt-0.5">AI/ML PORTFOLIO</span>
            </span>
            <span className="sm:hidden font-display font-semibold text-sm">GS</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-muted/60 p-1 border border-line/40">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a
              href={companyInfo.social.email}
              className="btn-acid h-9 px-5 text-xs"
            >
              Hire me
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex size-9 items-center justify-center rounded-full bg-foreground text-background"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-2xl"
          >
            <div className="flex h-full flex-col pt-[88px]">
              <div className="flex-1 px-6 py-8">
                <div className="space-y-1">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center justify-between border-b border-line py-5 font-display text-3xl font-semibold tracking-tight hover:text-primary transition-colors"
                    >
                      {item.label}
                      <ArrowUpRight className="size-5 opacity-40" />
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-10 space-y-6"
                >
                  <a href={companyInfo.social.email} className="btn-acid w-full justify-center text-sm">
                    hello@alphacentauric.dev
                    <ArrowUpRight className="size-4" />
                  </a>
                  <div className="mono-label flex flex-wrap gap-3 text-muted-foreground">
                    <a href={companyInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
                    <span className="opacity-30">·</span>
                    <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
                    <span className="opacity-30">·</span>
                    <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Twitter</a>
                  </div>
                </motion.div>
              </div>

              <div className="border-t border-line px-6 py-5 mono-label text-muted-foreground flex justify-between">
                <span>© 2026 Gayatri Samal</span>
                <span>SF · Remote</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
