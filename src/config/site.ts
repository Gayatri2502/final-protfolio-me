import { companyInfo } from "@/data/companyInfo";
import {
  NAV_ITEMS,
  SKILL_CATEGORIES,
  PROJECT_CATEGORIES,
  ANIMATION_DELAYS,
  BREAKPOINTS,
} from "@/lib/constants";

/**
 * Canonical site configuration.
 * Single source of truth for metadata, navigation, and social links.
 * Values are re-exported from the existing data/lib modules so rendered
 * output stays identical — this module only centralizes access.
 */
export const siteConfig = {
  name: companyInfo.name,
  tagline: companyInfo.tagline,
  description: companyInfo.description,
  email: companyInfo.email,
  location: companyInfo.location,
  availability: companyInfo.availability,
  url: "https://alphacentauric.dev",
  ogImage: "/images/og/default.png",
  social: { ...companyInfo.social },
  navItems: NAV_ITEMS,
  skillCategories: SKILL_CATEGORIES,
  projectCategories: PROJECT_CATEGORIES,
  animationDelays: ANIMATION_DELAYS,
  breakpoints: BREAKPOINTS,
} as const;

export type SiteConfig = typeof siteConfig;
