"use client";

import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Track window mouse position. Idle `{ x: 0, y: 0 }` on first render
 * (and on the server) so SSR output stays deterministic.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return position;
}
