"use client";

import { useEffect, useState } from "react";

/**
 * Window scroll progress in `[0, 1]`. Starts at `0` on the server
 * so the first paint matches SSR output.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const value =
        docHeight > 0
          ? Math.min(Math.max(window.pageYOffset / docHeight, 0), 1)
          : 0;
      setProgress(value);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return progress;
}
