"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const testimonials = [
  {
    quote: "Gayatri helped us map where enquiries were getting stuck and showed us how to use WhatsApp Business for quick replies and follow-ups.",
    author: "Rhea Mehta",
    company: "Juniper Box Co.",
    service: "WhatsApp Business",
  },
  {
    quote: "Our website finally makes it easy to understand what we sell and request a quote. The design process was smooth, and the handover showed us how to update it ourselves.",
    author: "Kabir Desai",
    company: "Cedar Loom Studio",
    service: "Website Design",
  },
  {
    quote: "The consulting sessions gave us a clear plan. We learned which stock and purchasing processes to fix before deciding whether we needed an ERP.",
    author: "Naina Rao",
    company: "Copper Finch Supply",
    service: "Business Consultancy & ERP Planning",
  },
  {
    quote: "We used to track leads in three places. The studio helped us set up a CRM pipeline and patiently walked the team through logging enquiries and assigning follow-ups.",
    author: "Arjun Shah",
    company: "Marigold Trade Works",
    service: "CRM Setup",
  },
]

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[activeIndex]

  return (
    <section aria-labelledby="client-perspectives-title" className="flex items-center justify-center overflow-hidden bg-background px-5 py-14 sm:px-8 lg:min-h-screen lg:px-0 lg:py-0">
      <div ref={containerRef} className="relative w-full max-w-5xl" onMouseMove={handleMouseMove}>
        {/* Oversized index number - positioned to bleed off left edge */}
        <motion.div
          aria-hidden="true"
          className="absolute hidden lg:block -left-8 top-1/2 -translate-y-1/2 text-[28rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter"
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main content - asymmetric layout */}
        <div className="relative flex flex-col lg:flex-row">
          {/* Left column - vertical text */}
          <div className="mb-5 flex items-center gap-4 lg:mb-0 lg:flex-col lg:justify-center lg:gap-8 lg:border-r lg:border-border lg:pr-16">
            <motion.h2
              id="client-perspectives-title"
              className="text-xs font-mono text-muted-foreground tracking-widest uppercase lg:[writing-mode:vertical-rl]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Client Perspectives
            </motion.h2>

            {/* Vertical progress line */}
            <div aria-hidden="true" className="relative hidden h-32 w-px bg-border lg:block">
              <motion.div
                className="absolute top-0 left-0 w-full bg-foreground origin-top"
                animate={{
                  height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Center - main content */}
          <div className="min-w-0 flex-1 lg:py-12 lg:pl-16">
            {/* Company badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-5 lg:mb-8"
              >
                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {current.service}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Quote with character reveal */}
            <div className="relative mb-6 lg:mb-12 lg:min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className="break-words text-xl font-light leading-snug tracking-tight text-foreground sm:text-3xl lg:text-5xl lg:leading-[1.15]"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <span className="lg:hidden">{current.quote}</span>
                  {current.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="mr-[0.3em] hidden lg:inline-block"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author row */}
            <div className="flex flex-wrap items-center justify-between gap-4 lg:items-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex min-w-0 items-center gap-4"
                >
                  {/* Animated line before name */}
                  <motion.div
                    className="hidden h-px w-8 shrink-0 bg-foreground lg:block"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  <div>
                    <p className="text-base font-medium text-foreground">{current.author}</p>
                    <p className="text-sm text-muted-foreground">Owner, {current.company} · Fictional scenario</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="ml-auto flex shrink-0 items-center gap-2 lg:gap-4">
                <motion.button
                  onClick={goPrev}
                  aria-label="Previous client perspective"
                  className="group relative size-11 lg:size-12 rounded-full border border-border flex items-center justify-center overflow-hidden"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "-100%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-foreground group-hover:text-foreground/30 transition-colors"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={goNext}
                  aria-label="Next client perspective"
                  className="group relative size-11 lg:size-12 rounded-full border border-border flex items-center justify-center overflow-hidden"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-foreground group-hover:text-foreground/30 transition-colors"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker - subtle repeating service names */}
        <div aria-hidden="true" className="absolute hidden lg:block -bottom-20 left-0 right-0 overflow-hidden opacity-[0.08] pointer-events-none">
          <motion.div
            className="flex whitespace-nowrap text-6xl font-bold tracking-tight"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">
                {testimonials.map((t) => t.service).join(" • ")} •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
