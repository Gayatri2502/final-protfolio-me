"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { galleryProjects } from "@/data/gallery-projects";

const projects = galleryProjects.filter((project) => project.featured);
const openOutline = "polygon(12.1% 0, 87.9% 0, 89.4% 1%, 90.5% 3%, 90.9% 5%, 90.9% 95.8%, 100% 95.8%, 100% 97%, 98.8% 98.1%, 95% 100%, 5% 100%, 1.2% 98.1%, 0 97%, 0 95.8%, 9.1% 95.8%, 9.1% 5%, 9.5% 3%, 10.6% 1%)";
const closedOutline = "polygon(0.6% 29%, 2.2% 27%, 69% 0.7%, 72% 0%, 93% 36%, 99.5% 48.7%, 100% 51%, 98.5% 53.4%, 17% 99.4%, 14.5% 100%, 13% 98%, 0% 32%)";

export function VaultFlipSection() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <section aria-labelledby="project-showcase-title" className="border-y border-white/10 bg-[#08080A] text-[#F2F0EB]">
      <div className="container-custom py-6">
        <h2 id="project-showcase-title" className="mono-label flex items-center gap-4 border-b border-white/10 pb-4 text-white/70">
          <span>Project Showcase</span>
          <span className="h-px flex-1 bg-white/10" />
        </h2>
        {!opened ? (
          <button
            type="button"
            title="Click the MacBook to open projects"
            aria-expanded={false}
            onClick={() => setOpened(true)}
            className="group mx-auto mt-5 flex w-full max-w-[330px] flex-col items-center gap-1 rounded-lg focus-visible:outline focus-visible:outline-primary"
          >
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/80 group-hover:border-primary/60">
              Click the MacBook to open projects
            </span>
            <span className="relative block aspect-[414/309] w-full transition-transform group-hover:scale-[1.03] motion-reduce:transition-none" style={{ clipPath: closedOutline }}>
              <img src="/images/showcase/macbook-closed.png" alt="" loading="lazy" className="absolute -left-[27.5%] -top-[28.8%] w-[154.1%] max-w-none" />
            </span>
          </button>
        ) : (
          <div className="mx-auto mt-5 grid max-w-5xl items-center gap-5 md:grid-cols-[minmax(0,1fr)_11rem]">
            <div className="[perspective:1000px]">
              <motion.div
                initial={{ rotateX: 48, opacity: 0.4 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative mx-auto aspect-[592/339] w-full max-w-[690px] origin-bottom motion-reduce:![transform:none] motion-reduce:!opacity-100"
                style={{ clipPath: openOutline }}
              >
                <img src="/images/showcase/macbook-open.png" alt="" className="absolute -left-[12.5%] -top-[59.3%] w-[125%] max-w-none" />
                <div className="absolute left-[11.15%] top-[5.9%] h-[85%] w-[77.7%] overflow-hidden bg-black">
                  <img src={project.image} alt={project.alt} className="h-full w-full object-contain" />
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
                    className="aspect-video overflow-hidden rounded border border-white/15 aria-pressed:border-primary focus-visible:outline focus-visible:outline-primary"
                  >
                    <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => setOpened(false)} className="mt-4 rounded-full border border-white/20 px-3 py-2 text-xs hover:border-white/50">
                Close MacBook
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default VaultFlipSection;
