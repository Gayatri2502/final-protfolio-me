import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { StudioNotchHeader } from "@/components/layout/StudioNotchHeader";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gayatri Samal — AI/ML Portfolio",
    template: "%s | Gayatri Samal · AI/ML Portfolio",
  },
  description: "The AI/ML portfolio of Gayatri Samal — building intelligent systems that understand, reason, and create. Specializing in LLMs, RAG systems, and production ML infrastructure.",
  keywords: ["AI/ML Portfolio", "AI Engineer", "Machine Learning", "LLM", "RAG", "MLOps", "Python", "React", "Next.js"],
  authors: [{ name: "Gayatri Samal" }],
  creator: "Gayatri Samal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alphacentauric.dev",
    siteName: "Gayatri Samal · AI/ML Portfolio",
    title: "Gayatri Samal — AI/ML Portfolio",
    description: "An AI/ML portfolio of intelligent systems that understand, reason, and create.",
    images: [{ url: "/images/og/default.png", width: 1200, height: 630, alt: "Gayatri Samal — AI/ML Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gayatri Samal — AI/ML Portfolio",
    description: "An AI/ML portfolio of intelligent systems that understand, reason, and create.",
    images: ["/images/og/default.png"],
    creator: "@alphacentauric",
  },
};

export const viewport: Viewport = {
  themeColor: "hsl(240 10% 3.9%)",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <StudioNotchHeader>
          <PageTransition>
            <main id="main-content" className="relative">
              {children}
            </main>
            <Footer />
          </PageTransition>
        </StudioNotchHeader>
      </body>
    </html>
  );
}
