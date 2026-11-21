'use client';

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, type MotionValue } from 'framer-motion';
import { ChevronRight, PlayCircle } from 'lucide-react';

// --- Types & Data ---
interface Reason {
  id: string;
  title: string;
  subtitle: string;
  scene: string;
  description: string;
}

const chapters: Reason[] = [
  {
    id: '1',
    title: 'Move Faster',
    subtitle: 'Move Faster Than Competitors',
    scene: 'move-faster',
    description: 'Your competitors are already integrating AI. Staying outdated is always an option, though.',
  },
  {
    id: '2',
    title: 'Scale Faster',
    subtitle: 'Scale Faster & Save Time',
    scene: 'scale-faster',
    description: 'Modern businesses scale with systems. You could keep using outdated workflows or build smarter ones that actually work.',
  },
  {
    id: '3',
    title: 'Automate Routine Work',
    subtitle: 'Automate the Repetitive Work',
    scene: 'automate-work',
    description: 'Because manually doing everything in 2026 sounds exhausting.',
  },
];

// --- Animation Variants ---
const textContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } 
  }
};

// --- Sub-Components ---

const FilmGrain = () => (
  <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.07] mix-blend-overlay">
    <div
      className="absolute inset-0 h-full w-full"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    />
  </div>
);

function VideoBackground({ activeIndex, progress }: {
  activeIndex: number;
  progress: MotionValue<number>;
}) {
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const reducedMotion = usePrefersReducedMotion();

  function seek(video: HTMLVideoElement, index: number, value: number) {
    if (!Number.isFinite(video.duration)) return;
    const lastIndex = chapters.length - 1;
    const start = Math.max(0, (index - 0.5) / lastIndex);
    const end = Math.min(1, (index + 0.5) / lastIndex);
    const phase = Math.min(1, Math.max(0, (value - start) / (end - start)));
    const time = phase * Math.max(0, video.duration - 1 / 24);
    if (Math.abs(video.currentTime - time) >= 1 / 24) video.currentTime = time;
  }

  useEffect(() => {
    if (reducedMotion) return;
    const update = (value: number) => {
      const video = videos.current[activeIndex];
      if (video) seek(video, activeIndex, value);
    };
    update(progress.get());
    return progress.on("change", update);
  }, [activeIndex, progress, reducedMotion]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#090c13]">
      {chapters.map(({ scene }, index) => {
        const poster = `/videos/about/${scene}.jpg`;
        const mediaClass = "h-full w-full object-cover object-[72%_center] md:object-right";
        return (
          <div
            key={scene}
            className="absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none"
            style={{ opacity: index === 0 || index === activeIndex ? 1 : 0 }}
          >
            {reducedMotion ? (
              <img src={poster} alt="" className={mediaClass} />
            ) : (
              <video
                ref={(element) => { videos.current[index] = element; }}
                className={mediaClass}
                src={`/videos/about/${scene}.mp4`}
                poster={poster}
                preload={index === activeIndex ? "auto" : "metadata"}
                onLoadedMetadata={({ currentTarget }) => seek(currentTarget, index, progress.get())}
                muted
                playsInline
              />
            )}
          </div>
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090c13] from-10% via-[#090c13]/75 via-45% to-[#090c13]/10" />
      <FilmGrain />
    </div>
  );
}

const DynamicNav = ({
  activeIndex,
  progress
}: {
  activeIndex: number,
  progress: MotionValue<number>
}) => {
  const smoothProgress = useSpring(progress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 p-2 pl-6 pr-2 shadow-2xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-white/50">
          Reason {chapters[activeIndex].id}
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xs font-bold text-white min-w-[100px]"
          >
            {chapters[activeIndex].title}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="relative h-12 w-12 flex items-center justify-center">
        <svg className="h-full w-full -rotate-90 transform">
          <circle cx="24" cy="24" r="18" className="stroke-white/10" strokeWidth="2" fill="none" />
          <motion.circle
            cx="24" cy="24" r="18"
            className="stroke-indigo-500"
            strokeWidth="2"
            fill="none"
            strokeDasharray="113"
            style={{ pathLength: smoothProgress }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <PlayCircle size={16} fill="white" className="text-black" />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---

export default function CinematicScrol() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(
        Math.round(latest * (chapters.length - 1)),
        chapters.length - 1
      );
      setActiveIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: `${chapters.length * 100}vh` }}>

      {/* 1. Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <VideoBackground activeIndex={activeIndex} progress={scrollYProgress} />
      </div>

      {/* 2. Nav */}
      <DynamicNav activeIndex={activeIndex} progress={scrollYProgress} />

      {/* 3. Content */}
      <div className="absolute inset-0 top-0 z-30 pointer-events-none">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="flex h-screen w-full items-center justify-start px-6 md:px-24"
          >
            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20%" }} 
              className="max-w-4xl pointer-events-auto"
            >
              {chapter.id === "1" && (
                <p className="mb-6 inline-block rounded-full bg-indigo-200 px-4 py-2 text-sm font-bold text-indigo-950 shadow-lg shadow-indigo-950/40 md:text-base">Why work with Alphacentauric?</p>
              )}
              {/* Header Line */}
              <motion.div variants={fadeIn} className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-indigo-500" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">
                  Reason {chapter.id}
                </span>
              </motion.div>

              {/* Masked Title Reveal - UPDATED with padding (py-2) to fix clipping */}
              <div className="overflow-hidden mb-6 py-2">
                <motion.h2 
                  variants={textReveal}
                  // UPDATED: Reduced size to 7xl and relaxed leading to 'none'
                  className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none"
                >
                  {chapter.subtitle}
                </motion.h2>
              </div>

              {/* Description Box */}
              <motion.div 
                variants={fadeIn}
                className="max-w-md p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
              >
                <p className="text-lg text-white/80 leading-relaxed font-light">
                  {chapter.description}
                </p>
              </motion.div>

              {/* Button */}
              <motion.button
                variants={fadeIn}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 group flex items-center gap-4 text-white font-semibold"
              >
                <div className="relative h-12 w-12 rounded-full border border-white/30 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <ChevronRight size={20} className="relative z-10 group-hover:text-black transition-colors duration-300" />
                </div>
                <span className="tracking-widest uppercase text-xs">Explore Sequence</span>
              </motion.button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
