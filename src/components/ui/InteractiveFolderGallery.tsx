"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GalleryPhoto {
  id: string | number;
  image: string;
  alt?: string;
}

const defaultPhotos: GalleryPhoto[] = [
  { id: 1, image: "/images/projects/project-1.jpg", alt: "AI Search Engine" },
  { id: 2, image: "/images/projects/project-2.jpg", alt: "LLM Platform" },
  { id: 3, image: "/images/projects/project-3.jpg", alt: "Multimodal RAG" },
  { id: 4, image: "/images/projects/project-4.jpg", alt: "MLOps Pipeline" },
  { id: 5, image: "/images/projects/project-5.jpg", alt: "Edge AI" },
];

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function InteractiveFolderGallery({
  photos = defaultPhotos,
  folderName = "Projects.gallery",
  dragHintText = "Drag any project card down to close",
  className,
  title,
  subtitle,
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { y: number } }) => {
    if (info.offset.y > 100 && isFolderOpen) {
      setIsFolderOpen(false);
      setHoverFolder(false);
    }
  };

  return (
    <div className={cn("w-full py-32 relative", className)}>
      {(title || subtitle) && (
        <div className="container-custom mb-16 text-center">
          {title && (
            <h2 className="text-display-md font-medium tracking-tight text-balance mb-4">
              {title}
              <span className="text-gradient"> Gallery</span>
            </h2>
          )}
          {subtitle && (
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="relative w-full min-h-[500px] flex flex-col items-center justify-center">

        <div className="relative w-[400px] h-[500px] flex justify-center pointer-events-none z-0">

          <motion.div
            className="absolute bottom-6 w-80 h-56 drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          >
            <div className="absolute top-0 left-0 w-32 h-10 bg-gradient-to-t from-[hsl(var(--card))] to-[hsl(var(--muted))] rounded-t-xl border-t border-l border-r border-border/50" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-gradient-to-b from-[hsl(var(--card))] to-[hsl(var(--background))] rounded-b-xl rounded-tr-xl border border-border/50 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-10 left-2 right-2 bottom-2 bg-[hsl(var(--background))] rounded-lg shadow-inner pointer-events-none" />
          </motion.div>

          <div className="absolute bottom-10 z-10 flex justify-center">
            {photos.map((photo, i) => {
              const offset = i - 2;

              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * 30 : offset * 3;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;

              const openY = -130;
              const openX = offset * 130;
              const openRotate = 0;
              const openScale = 1.05;

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen ? true : false}
                  dragSnapToOrigin={true}
                  onDragEnd={handleDragEnd}
                  className={cn(
                    "absolute bottom-0 w-56 h-72 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden border border-border/20 origin-bottom",
                    isFolderOpen
                      ? "cursor-grab active:cursor-grabbing pointer-events-auto"
                      : "pointer-events-none"
                  )}
                  animate={!isFolderOpen
                    ? {
                        y: stackY,
                        x: stackX,
                        rotate: stackRotate,
                        scale: stackScale,
                        zIndex: i + 10,
                      }
                    : {
                        y: openY,
                        x: openX,
                        rotate: openRotate,
                        scale: openScale,
                        zIndex: 50,
                      }}
                  whileHover={isFolderOpen ? { scale: openScale + 0.05, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <img
                    src={photo.image}
                    alt={photo.alt || `Gallery item ${i + 1}`}
                    className="w-full h-full object-cover pointer-events-none"
                  />
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
              pointerEvents: isFolderOpen ? "none" : "auto",
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[hsl(var(--muted))] to-[hsl(var(--background))] rounded-2xl border border-border/50 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative overflow-hidden flex items-end justify-center pb-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              <div className="px-5 py-2.5 bg-[hsl(var(--background))] rounded-lg border border-[hsl(var(--muted))] shadow-inner flex items-center justify-center backdrop-blur-md">
                <span className="text-[hsl(var(--foreground))] text-sm font-medium tracking-wide">
                  {folderName}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 50 }}
          className="absolute bottom-10 px-6 py-3 rounded-full bg-[hsl(var(--background))] border border-border/20 backdrop-blur-md text-[hsl(var(--muted-foreground))] text-sm font-medium uppercase tracking-widest pointer-events-none"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        >
          {dragHintText}
        </motion.div>

      </div>
    </div>
  );
}

export default InteractiveFolderGallery;