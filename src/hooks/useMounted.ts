"use client";

import { useEffect, useState } from "react";

/**
 * `true` only after client-side mount.
 * Used to gate viewport-dependent branches (e.g. mobile vs desktop
 * layouts measured with `clientWidth`) so SSR and the first paint agree.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
