"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface GalleryPhoto {
  id: string | number;
  image: string;
  alt?: string;
}

const defaultPhotos: GalleryPhoto[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80", alt: "Neural Search" },
  { id: 2, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80", alt: "LLM Platform" },
  { id: 3, image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80", alt: "RAG System" },
  { id: 4, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80", alt: "Code Assistant" },
  { id: 5, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80", alt: "MLOps Pipeline" },
];

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;
  className?: string;
}

export function InteractiveFolderGallery({
  photos = defaultPhotos,
  folderName = "Projects.gallery",
  dragHintText = "Drag any project card down to close",
  className
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [galleryWidth, setGalleryWidth] = useState(0);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const observer = new ResizeObserver(([entry]) => setGalleryWidth(entry.contentRect.width));
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  const openSpacing = Math.min(130, Math.max(8, (galleryWidth - 236) / Math.max(1, photos.length - 1)));

  return (
    <div ref={galleryRef} className={`w-full py-12 relative ${className || ""}`}>
      <div className="relative w-full min-h-[500px] flex flex-col items-center justify-center">

        <div className="relative w-[400px] h-[500px] flex justify-center pointer-events-none z-0">

          <motion.div 
            className="absolute bottom-6 w-80 h-56 drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 w-32 h-10 bg-gradient-to-t from-[#1e1e1e] to-[#2a2a2a] rounded-t-xl border-t border-l border-r border-white/10" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-gradient-to-b from-[#1e1e1e] to-[#0a0a0a] rounded-b-xl rounded-tr-xl border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-10 left-2 right-2 bottom-2 bg-black rounded-lg shadow-inner pointer-events-none" />
          </motion.div>

          <div className="absolute bottom-10 z-10 flex justify-center">
            {photos.map((photo, i) => {
              const offset = i - (photos.length - 1) / 2;

              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * 30 : offset * 3;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;

              const openY = -130;
              const openX = offset * openSpacing;
              const openRotate = 0;
              const openScale = 1.05;

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen ? true : false}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  className={`absolute bottom-0 w-56 h-72 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 origin-bottom ${isFolderOpen ? "cursor-grab active:cursor-grabbing pointer-events-auto" : "pointer-events-none"}`}
                  animate={!isFolderOpen ? {
                    y: stackY,
                    x: stackX,
                    rotate: stackRotate,
                    scale: stackScale,
                    zIndex: i + 10
                  } : {
                    y: openY,
                    x: openX,
                    rotate: openRotate,
                    scale: openScale,
                    zIndex: 50
                  }}
                  whileHover={isFolderOpen ? { scale: openScale + 0.05, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <img src={photo.image} alt={photo.alt || "Gallery item"} className="w-full h-full object-cover pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="absolute bottom-0 w-[340px] h-44 drop-shadow-[0_-20px_40px_rgba(0,0,0,0.8)] cursor-pointer z-20 pointer-events-auto"
            style={{ transformOrigin: "bottom" }}
            animate={{ 
              opacity: isFolderOpen ? 0 : 1, 
              rotateX: hoverFolder ? -25 : 0, 
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto" 
            } as any}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#2a2a2a] to-[#111] rounded-2xl border border-white/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative overflow-hidden flex items-end justify-center pb-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="px-5 py-2.5 bg-black rounded-lg border border-black/80 shadow-inner flex items-center justify-center backdrop-blur-md">
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  {folderName}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 50 }}
          className="absolute bottom-4 lg:bottom-6 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-black/50 dark:text-white/50 text-sm font-medium uppercase tracking-widest pointer-events-none"
        >
          {dragHintText}
        </motion.div>

      </div>
    </div>
  );
}

export { InteractiveFolderGallery as Component };
