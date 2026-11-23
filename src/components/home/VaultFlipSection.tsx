"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { galleryProjects } from "@/data/gallery-projects";

const projects = galleryProjects.filter((project) => project.featured).map((project) => ({
  ...project,
  preview: `/images/showcase/${project.id}.webp`,
}));
const openOutline = "polygon(12.1% 0, 87.9% 0, 89.4% 1%, 90.5% 3%, 90.9% 5%, 90.9% 95.8%, 100% 95.8%, 100% 97%, 98.8% 98.1%, 95% 100%, 5% 100%, 1.2% 98.1%, 0 97%, 0 95.8%, 9.1% 95.8%, 9.1% 5%, 9.5% 3%, 10.6% 1%)";
const closedOutline = "polygon(0.6% 29%, 2.2% 27%, 69% 0.7%, 72% 0%, 93% 36%, 99.5% 48.7%, 100% 51%, 98.5% 53.4%, 17% 99.4%, 14.5% 100%, 13% 98%, 0% 32%)";

export function VaultFlipSection() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(0);
  const showcase = useRef<HTMLElement>(null);
  const nearby = useInView(showcase, { once: true, margin: "400px 0px" });
  const previewsEnabled = nearby || opened;
  const closedLaptop = useRef<HTMLSpanElement>(null);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const interacted = useRef(false);
  const laptopInView = useInView(closedLaptop, { amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const project = projects[selected];

  useEffect(() => {
    if (interacted.current) {
      (opened ? closeButton : openButton).current?.focus({ preventScroll: true });
    }
  }, [opened]);

  function toggleLaptop() {
    interacted.current = true;
    setOpened((current) => !current);
  }

  return (
    <section ref={showcase} aria-labelledby="project-showcase-title" className="border-y border-white/10 bg-[#08080A] text-[#F2F0EB]">
      <div className="container-custom py-6">
        <h2 id="project-showcase-title" className="mono-label flex items-center gap-4 border-b border-white/10 pb-4 text-white/70">
          <span>Project Showcase</span>
          <span className="h-px flex-1 bg-white/10" />
        </h2>
        <div className="mx-auto mt-5 grid max-w-5xl grid-cols-[minmax(0,1fr)] items-center">
          <motion.button
            ref={openButton}
            type="button"
            aria-label="Click the MacBook to open projects"
            aria-expanded={opened}
            aria-controls="macbook-projects"
            aria-hidden={opened}
            tabIndex={opened ? -1 : 0}
            onClick={toggleLaptop}
            initial={false}
            animate={{ opacity: opened ? 0 : 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            className={`group z-10 col-start-1 row-start-1 mx-auto flex w-full max-w-[330px] flex-col items-center gap-1 rounded-lg focus-visible:outline focus-visible:outline-primary ${opened ? "pointer-events-none" : ""}`}
          >
            <motion.span
              aria-hidden="true"
              initial={false}
              animate={{ opacity: laptopInView && !opened ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2, delay: laptopInView && !opened && !reduceMotion ? 0.22 : 0 }}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/80 group-hover:border-primary/60"
            >
              Click the MacBook to open projects
            </motion.span>
            <span ref={closedLaptop} className="relative block aspect-[414/309] w-full" style={{ clipPath: closedOutline }}>
              <img src="/images/showcase/macbook-closed.webp" alt="" loading="lazy" className="absolute -left-[27.5%] -top-[28.8%] w-[154.1%] max-w-none" />
            </span>
          </motion.button>
          <motion.div
            id="macbook-projects"
            aria-hidden={!opened}
            initial={false}
            animate={{ opacity: opened ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            className={`col-start-1 row-start-1 grid items-center gap-3 md:grid-cols-[11rem_minmax(0,1fr)_11rem] ${opened ? "" : "pointer-events-none"}`}
          >
            <div className="[perspective:1000px] md:col-start-2">
              <motion.div
                initial={false}
                animate={{ rotateX: opened || reduceMotion ? 0 : 65 }}
                transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeInOut" }}
                className="relative mx-auto aspect-[592/339] w-full max-w-[560px] origin-bottom"
                style={{ clipPath: openOutline }}
              >
                {previewsEnabled && (
                  <img src="/images/showcase/macbook-open.webp" alt="" className="absolute -left-[12.5%] -top-[59.3%] w-[125%] max-w-none" />
                )}
                <div className="absolute left-[11.15%] top-[5.9%] h-[85%] w-[77.7%] overflow-hidden bg-black">
                  {previewsEnabled && projects.map((item, index) => (
                    <img
                      key={item.id}
                      src={item.preview}
                      alt={item.alt}
                      aria-hidden={index !== selected}
                      fetchPriority={index === 0 ? "auto" : "low"}
                      className={`absolute inset-0 h-full w-full object-contain ${index === selected ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
            <div>
              <p aria-live="polite" className="mb-3 min-h-10 text-sm font-semibold">{project.alt}</p>
              <div className="grid grid-cols-3 gap-2" aria-label="Select a project" role="group">
                {projects.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelected(index)}
                    aria-label={item.alt}
                    aria-pressed={index === selected}
                    tabIndex={opened ? 0 : -1}
                    className="aspect-video overflow-hidden rounded border border-white/15 aria-pressed:border-primary focus-visible:outline focus-visible:outline-primary"
                  >
                    {previewsEnabled && <img src={item.preview} alt="" className="h-full w-full object-cover object-top" />}
                  </button>
                ))}
              </div>
              <button ref={closeButton} type="button" tabIndex={opened ? 0 : -1} onClick={toggleLaptop} className="mt-4 rounded-full border border-white/20 px-3 py-2 text-xs hover:border-white/50">
                Close MacBook
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VaultFlipSection;
