/**
 * Canonical constants barrel.
 * Re-exports the existing lib constants so imports can migrate to
 * `@/constants` over time. No values are changed here.
 */
export {
  NAV_ITEMS,
  SKILL_CATEGORIES,
  PROJECT_CATEGORIES,
  ANIMATION_DELAYS,
  BREAKPOINTS,
} from "@/lib/constants";

export const WORLD_ATLAS_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const EXTERNAL_LINK_REL = "noopener noreferrer";
