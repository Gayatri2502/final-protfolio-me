"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { title: "Image 1", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80" },
  { title: "Image 2", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80" },
  { title: "Image 3", url: "/images/polaroids/working-desk.jpg" },
  { title: "Image 4", url: "/images/polaroids/sunlit-desk.jpg" },
  { title: "Image 5", url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&auto=format&fit=crop&q=80" },
];

export default function FlipGallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isFlipping, setIsFlipping] = useState(false);

  const current = images[index];
  const nextIndex = (index + direction + images.length) % images.length;
  const next = images[nextIndex];

  const go = (dir: 1 | -1) => {
    if (isFlipping) return;
    setDirection(dir);
    setIsFlipping(true);
    setTimeout(() => {
      setIndex((prev) => (prev + dir + images.length) % images.length);
      setIsFlipping(false);
    }, 750);
  };

  return (
    <div className="relative mx-auto w-full max-w-[350px] bg-[#F2F0EB] p-3 text-zinc-900 shadow-2xl sm:p-5">
      <div className="relative">
        <div aria-hidden="true" className="mb-2 font-display text-xs font-black tracking-[0.22em] sm:absolute sm:-left-10 sm:top-0 sm:mb-0 sm:text-sm sm:text-white/70 sm:[writing-mode:vertical-rl]">POLAROIDS</div>
        <div
          className="relative w-full aspect-[3/5] text-center"
          style={{ perspective: "1000px" }}
        >
          {/* Static bottom half — current image */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden"
            style={{
              backgroundImage: `url('${current.url}')`,
              backgroundSize: "100% 200%",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Static top half — next image (revealed when top flips) */}
          <div
            className="absolute top-0 left-0 w-full h-1/2 overflow-hidden"
            style={{
              backgroundImage: `url('${next.url}')`,
              backgroundSize: "100% 200%",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Center line */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-black -translate-y-1/2 z-20" />

          {/* Flipping top half */}
          <motion.div
            key={`top-${index}-${direction}`}
            className="absolute top-0 left-0 w-full h-1/2 overflow-hidden origin-bottom z-10"
            style={{
              backgroundImage: `url('${isFlipping ? (direction === 1 ? current.url : next.url) : current.url}')`,
              backgroundSize: "100% 200%",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              backfaceVisibility: "hidden",
            }}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isFlipping ? (direction === 1 ? -90 : 0) : 0 }}
            transition={{ duration: 0.375, ease: "easeIn" }}
          />

          {/* Flipping bottom half */}
          <motion.div
            key={`bottom-${index}-${direction}`}
            className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden origin-top z-10"
            style={{
              backgroundImage: `url('${isFlipping ? (direction === 1 ? next.url : current.url) : next.url}')`,
              backgroundSize: "100% 200%",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              backfaceVisibility: "hidden",
            }}
            initial={{ rotateX: direction === 1 ? 90 : 0 }}
            animate={{ rotateX: isFlipping ? 0 : 90 }}
            transition={{ duration: 0.375, delay: isFlipping ? 0.375 : 0, ease: "easeOut" }}
          />

        </div>
        <div className="mt-3 flex min-h-11 items-center justify-between gap-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-w-0 font-mono text-[10px] font-bold uppercase tracking-wider"
            >
              {current.title}
            </motion.p>
          </AnimatePresence>
          <div className="flex shrink-0 gap-1.5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="flex size-11 items-center justify-center rounded-full border border-black/20 hover:bg-black/10 transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="flex size-11 items-center justify-center rounded-full border border-black/20 hover:bg-black/10 transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
