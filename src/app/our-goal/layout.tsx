import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Our Goal", description: "The AI community Alphacentauric is building to learn about models, share experiments, and develop responsible AI tools together." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
