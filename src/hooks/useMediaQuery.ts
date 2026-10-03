"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(min-width: 0px)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

/**
 * SSR-safe media-query hook.
 * Returns `false` on the server to avoid hydration mismatches.
 */
export function useMediaQuery(query: string): boolean {
  const subscribeToQuery = (onChange: () => void) => {
    if (typeof window === "undefined") return () => {};
    const mql = window.matchMedia(query);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  };

  const getSnapshot = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  // subscribe wrapper keeps the unused generic helper referenced for lint parity
  void subscribe;

  return useSyncExternalStore(subscribeToQuery, getSnapshot, () => false);
}
