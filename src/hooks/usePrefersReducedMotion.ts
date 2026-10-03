"use client";

import { useSyncExternalStore } from "react";
import { REDUCED_MOTION_QUERY } from "@/constants";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * Shared `prefers-reduced-motion` hook.
 * Consolidates the identical helpers previously inlined in
 * `gsap-card-flip` and `cards-rotate-slider` — same query, same
 * server snapshot (`false`), same behavior.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Non-hook equivalent for use outside React render. */
export function prefersReducedMotion(): boolean {
  return getSnapshot();
}
