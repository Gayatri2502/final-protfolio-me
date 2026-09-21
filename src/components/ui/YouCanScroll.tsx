"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pane } from "tweakpane";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const defaultActions = [
  "design.", "prototype.", "solve.", "build.", "develop.", "debug.",
  "learn.", "cook.", "ship.", "prompt.", "collaborate.", "create.",
  "inspire.", "follow.", "innovate.", "test.", "optimize.", "teach.",
  "visualize.", "transform.", "scale.", "do it."
];

interface YouCanScrollProps {
  title?: string;
  subtitle?: string;
  actions?: string[];
  className?: string;
  showDebugPane?: boolean;
  hueStart?: number;
  hueEnd?: number;
}

export function YouCanScroll({
  title = "you can",
  subtitle = "scroll.",
  actions = defaultActions,
  className,
  showDebugPane = false,
  hueStart = 0,
  hueEnd = 360,
}: YouCanScrollProps) {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const debugPaneRef = useRef<Pane | null>(null);

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean) as HTMLLIElement[];
    if (items.length === 0) return;

    const config = {
      theme: "dark",
      animate: true,
      snap: true,
      start: hueStart,
      end: hueEnd,
      scroll: true,
      debug: false,
    };

    // Declare GSAP variables at higher scope for debug pane access
    let dimmerScrub: ScrollTrigger | null = null;
    let scrollerScrub: ScrollTrigger | null = null;
    let chromaEntry: { scrollTrigger?: ScrollTrigger } | null = null;
    let chromaExit: { scrollTrigger?: ScrollTrigger } | null = null;

    if (showDebugPane) {
      // Debug pane disabled due to tweakpane v4 API differences
      // const ctrl = new Pane({ title: "Config", expanded: false });
      // debugPaneRef.current = ctrl;
    }

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (!CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)") || prefersReducedMotion) {
      gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

      const dimmer = gsap.timeline()
        .to(items.slice(1), { opacity: 1, stagger: 0.5 })
        .to(items.slice(0, items.length - 1), { opacity: 0.2, stagger: 0.5 }, 0);

      dimmerScrub = ScrollTrigger.create({
        trigger: items[0],
        endTrigger: items[items.length - 1],
        start: "center center",
        end: "center center",
        animation: dimmer,
        scrub: 0.2,
      });

      const scroller = gsap.timeline().fromTo(
        document.documentElement,
        { "--hue": config.start },
        { "--hue": config.end, ease: "none" }
      );

      scrollerScrub = ScrollTrigger.create({
        trigger: items[0],
        endTrigger: items[items.length - 1],
        start: "center center",
        end: "center center",
        animation: scroller,
        scrub: 0.2,
      });

      chromaEntry = gsap.fromTo(
        document.documentElement,
        { "--chroma": 0 },
        {
          "--chroma": 0.3,
          ease: "none",
          scrollTrigger: {
            scrub: 0.2,
            trigger: items[0],
            start: "center center+=40",
            end: "center center",
          },
        }
      );

      chromaExit = gsap.fromTo(
        document.documentElement,
        { "--chroma": 0.3 },
        {
          "--chroma": 0,
          ease: "none",
          scrollTrigger: {
            scrub: 0.2,
            trigger: items[items.length - 2],
            start: "center center",
            end: "center center-=40",
          },
        }
      );

      return () => {
        dimmerScrub?.kill();
        scrollerScrub?.kill();
        chromaEntry?.scrollTrigger?.kill();
        chromaExit?.scrollTrigger?.kill();
        debugPaneRef.current?.dispose();
      };
    }

    return () => {
      debugPaneRef.current?.dispose();
    };
  }, [actions, hueStart, hueEnd, showDebugPane]);

  return (
    <>
      <style jsx global>{`
        :root {
          --start: ${hueStart};
          --end: ${hueEnd};
          --lightness: 65%;
          --base-chroma: 0.3;
          --font-size-min: 14;
          --font-size-max: 20;
          --font-ratio-min: 1.1;
          --font-ratio-max: 1.33;
          --font-width-min: 375;
          --font-width-max: 1500;
        }

        @keyframes change {
          to { --hue: var(--end); }
        }

        @keyframes chroma-on {
          to { --chroma: 0.3; }
        }

        @keyframes chroma-off {
          to { --chroma: 0; }
        }

        @keyframes brighten {
          0% { opacity: var(--start-opacity, 0.2); }
          50% { opacity: 1; filter: brightness(var(--brightness, 1.2)); }
          100% { opacity: var(--end-opacity, 0.2); }
        }
      `}</style>

      <div className={cn("relative min-h-screen flex flex-col", className)}>
        <header className="flex min-h-[60vh] items-center justify-center px-4 py-20">
          <h1
            className="text-center"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              background: "linear-gradient(135deg, hsl(var(--hue, var(--start)) var(--lightness)) 0%, hsl(var(--end) var(--lightness)) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}<br />{subtitle}
          </h1>
        </header>

        <main className="flex-1">
          <section className="flex-1 flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl w-full">
              <h2 className="sr-only">Services</h2>
              <ul
                className="space-y-3"
                style={{ "--count": actions.length } as React.CSSProperties}
                role="list"
                aria-label="Services and capabilities"
              >
                {actions.map((action, i) => (
                  <li
                    key={i}
                    ref={(el) => { itemsRef.current[i] = el; }}
                    className="text-center"
style={{
                       "--i": i,
                       fontSize: "clamp(1.5rem, 4vw, 3rem)",
                       fontWeight: 600,
                       lineHeight: 1.3,
                       color: "hsl(var(--hue, var(--start)) var(--lightness))",
                       transition: "opacity 0.3s, filter 0.3s",
                       opacity: i !== 0 ? 0.2 : 1,
                     } as React.CSSProperties}
                  >
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="flex min-h-[40vh] items-center justify-center px-4 py-20">
            <h2
              className="text-center"
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontWeight: 700,
                color: "hsl(var(--hue, var(--end)) var(--lightness))",
              }}
            >
              fin.
            </h2>
          </section>
        </main>

        <footer className="border-t border-border py-6 px-4 text-center text-sm text-muted-foreground">
          <p>Gayatri Samal &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}

export default YouCanScroll;