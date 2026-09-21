"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);

  return (
    <motion.span
      className={cn("inline-block text-primary", isSpace && "w-4")}
      style={{ x, rotateX }}
    >
      {char}
    </motion.span>
  );
};

const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 50, 0]);

  return (
    <motion.img
      src={char}
      alt=""
      className="h-16 w-16 shrink-0 object-contain will-change-transform"
      style={{ x, scale, y, transformOrigin: "center" }}
    />
  );
};

const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt=""
      className="h-16 w-16 shrink-0 object-contain will-change-transform"
      style={{ x, rotate, y, scale, transformOrigin: "center" }}
    />
  );
};

interface TextScrollAnimationProps {
  text?: string;
  icons?: string[];
  className?: string;
}

export function TextScrollAnimation({
  text = "see more from ",
  icons = [
    "https://cdn.21st.dev/assets/mirror/1d/1d364b72c9eaf1fe37d17ca88cd8fb541308dc0f3b09e2ab3b824f380b3493d5.svg",
    "https://cdn.21st.dev/assets/mirror/2f/2f86fca501dfed321a62f28743f29d9dd738dac91668eac5260ab746d1ef8840.svg",
    "https://cdn.21st.dev/assets/mirror/c6/c6c80c9ba890e199e94d35340fb4cf2d5790f339d9846800d68283e3e58e6031.svg",
    "https://cdn.21st.dev/assets/mirror/3b/3bf8cceead820aec50d4ee825a3fd02c5a1cd6665cc9cf4cbf3d9c8861a204bb.svg",
    "https://cdn.21st.dev/assets/mirror/66/6698757ee85997e8167b2eacaff8395d6987954185488f2e90b88ef387fec6c7.svg",
    "https://cdn.21st.dev/assets/mirror/b1/b17d2a2b592a06252efef522d5205f0c7a958f748d40df1011ed081417e42f85.svg",
  ],
  className,
}: TextScrollAnimationProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);
  const iconCenterIndex = Math.floor(icons.length / 2);

  return (
    <main className={cn("w-full bg-background", className)}>
      {/* Section 1 - Text */}
      <div
        ref={targetRef}
        className="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden p-[2vw]"
        style={{ background: "hsl(var(--muted) / 0.5)" }}
      >
        <div
          className="font-display w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-foreground"
          style={{ perspective: "500px" }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Section 2 - Icons */}
      <div
        ref={targetRef2}
        className="relative -mt-[100vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden p-[2vw]"
        style={{ background: "hsl(var(--muted) / 0.5)" }}
      >
        <p className="font-display flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-foreground">
          <span className="text-primary">{`[`}</span>
          <span>integrate with your fav tech stack</span>
          <span className="text-primary">{`]`}</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {icons.map((icon, index) => (
            <CharacterV2
              key={index}
              char={icon}
              index={index}
              centerIndex={iconCenterIndex}
              scrollYProgress={scrollYProgress2}
            />
          ))}
        </div>
      </div>

      {/* Section 3 - Icons with rotation */}
      <div
        ref={targetRef3}
        className="relative -mt-[95vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden p-[2vw]"
        style={{ background: "hsl(var(--muted) / 0.5)" }}
      >
        <p className="font-display flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-foreground">
          <span className="text-primary">{`[`}</span>
          <span>integrate with your fav tech stack</span>
          <span className="text-primary">{`]`}</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8" style={{ perspective: "500px" }}>
          {icons.map((icon, index) => (
            <CharacterV3
              key={index}
              char={icon}
              index={index}
              centerIndex={iconCenterIndex}
              scrollYProgress={scrollYProgress3}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default TextScrollAnimation;