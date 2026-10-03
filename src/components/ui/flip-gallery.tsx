"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { title: "First Model Shipped", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80" },
  { title: "RAG at 10M Docs", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80" },
  { title: "70B Fine-tune", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80" },
  { title: "MLOps Launch", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80" },
  { title: "Paper Accepted", url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&auto=format&fit=crop&q=80" },
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
    <div className="min-h-[520px] flex items-center justify-center bg-[#0A0A0A] font-sans rounded-2xl overflow-hidden p-6">
      <div className="relative">
        <div
          className="relative w-[240px] h-[400px] md:w-[300px] md:h-[500px] text-center"
          style={{ perspective: "1000px" }}
        >
          {/* Static bottom half — current image */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden"
            style={{
              backgroundImage: `url('${current.url}')`,
              backgroundSize: "300px 500px",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Static top half — next image (revealed when top flips) */}
          <div
            className="absolute top-0 left-0 w-full h-1/2 overflow-hidden"
            style={{
              backgroundImage: `url('${next.url}')`,
              backgroundSize: "300px 500px",
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
              backgroundSize: "300px 500px",
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
              backgroundSize: "300px 500px",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              backfaceVisibility: "hidden",
            }}
            initial={{ rotateX: direction === 1 ? 90 : 0 }}
            animate={{ rotateX: isFlipping ? 0 : 90 }}
            transition={{ duration: 0.375, delay: isFlipping ? 0.375 : 0, ease: "easeOut" }}
          />

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.75, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="absolute -bottom-10 left-0 font-mono text-xs tracking-[0.12em] uppercase text-white/75"
            >
              {current.title}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute top-full right-0 mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
