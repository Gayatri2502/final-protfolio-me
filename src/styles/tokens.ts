/**
 * Design tokens mirrored from `tailwind.config.ts` + `app/globals.css`.
 * CSS remains the source of truth for rendering; this module exposes the
 * same values to TypeScript (e.g. canvas/SVG code) without duplicating
 * look-and-feel decisions across components.
 */
export const colors = {
  background: "hsl(240 10% 3.9%)",
  foreground: "hsl(0 0% 96%)",
  primary: "hsl(68 100% 60%)",
  primaryForeground: "hsl(240 10% 3.9%)",
  accent: "hsl(188 94% 43%)",
  border: "hsl(240 6% 18%)",
  line: "hsl(240 6% 16%)",
  ink: "#08080A",
  paper: "#F2F0EB",
} as const;

export const fonts = {
  sans: "var(--font-sans)",
  mono: "var(--font-mono)",
  display: "var(--font-display)",
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  smooth: [0.25, 0.1, 0.25, 1] as const,
};
