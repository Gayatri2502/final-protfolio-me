"use client";
import { useEffect } from "react";
import "@/index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Pane } from "tweakpane";

export default function ScrollAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const config = {
      theme: "dark",
      animate: true,
      snap: true,
      start: gsap.utils.random(0, 100, 1),
      end: gsap.utils.random(900, 1000, 1),
      scroll: true,
      debug: false,
    };

    const ctrl = new Pane({ title: "Config", expanded: false });
    let items: any, scrollerScrub: any, dimmerScrub: any, chromaEntry: any, chromaExit: any;

    const update = () => {
      document.documentElement.dataset.theme = config.theme;
      (document.documentElement.dataset as any).syncScrollbar = config.scroll;
      document.documentElement.dataset.animate = String(config.animate);
      document.documentElement.dataset.snap = String(config.snap);
      document.documentElement.dataset.debug = String(config.debug);
      document.documentElement.style.setProperty("--start", String(config.start));
      document.documentElement.style.setProperty("--hue", String(config.start));
      document.documentElement.style.setProperty("--end", String(config.end));

      if (!config.animate) {
        chromaEntry?.scrollTrigger.disable(true, false);
        chromaExit?.scrollTrigger.disable(true, false);
        dimmerScrub?.disable(true, false);
        scrollerScrub?.disable(true, false);
        gsap.set(items, { opacity: 1 });
        gsap.set(document.documentElement, { "--chroma": 0 } as any);
      } else {
        gsap.set(items, { opacity: (i: number) => (i !== 0 ? 0.2 : 1) });
        dimmerScrub?.enable(true, true);
        scrollerScrub?.enable(true, true);
        chromaEntry?.scrollTrigger.enable(true, true);
        chromaExit?.scrollTrigger.enable(true, true);
      }
    };

    (ctrl as any).addBinding(config, "animate", { label: "Animate" });
    (ctrl as any).addBinding(config, "snap", { label: "Snap" });
    (ctrl as any).addBinding(config, "start", { label: "Hue Start", min: 0, max: 1000, step: 1 });
    (ctrl as any).addBinding(config, "end", { label: "Hue End", min: 0, max: 1000, step: 1 });
    (ctrl as any).addBinding(config, "scroll", { label: "Scrollbar" });
    (ctrl as any).addBinding(config, "debug", { label: "Debug" });
    (ctrl as any).addBinding(config, "theme", {
      label: "Theme",
      options: { System: "system", Light: "light", Dark: "dark" },
    });

    (ctrl as any).on("change", update);

    // Fallback без CSS scroll-timeline
    if (!CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)")) {
      items = gsap.utils.toArray("ul li");
      gsap.set(items, { opacity: (i: number) => (i !== 0 ? 0.2 : 1) });
      // set initial active
      if (items[0]) items[0].classList.add("is-active");

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
        onUpdate: (self) => {
          const idx = Math.min(Math.max(Math.round(self.progress * (items.length - 1)), 0), items.length - 1);
          items.forEach((el: HTMLElement, i: number) => el.classList.toggle("is-active", i === idx));
        },
      });

      const scroller = gsap.timeline().fromTo(
        document.documentElement,
        { "--hue": config.start } as any,
        { "--hue": config.end, ease: "none" } as any
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
        { "--chroma": 0 } as any,
        {
          "--chroma": 0.3,
          ease: "none",
          scrollTrigger: {
            scrub: 0.2,
            trigger: items[0],
            start: "center center+=40",
            end: "center center",
          },
        } as any
      );

      chromaExit = gsap.fromTo(
        document.documentElement,
        { "--chroma": 0.3 } as any,
        {
          "--chroma": 0,
          ease: "none",
          scrollTrigger: {
            scrub: 0.2,
            trigger: items[items.length - 2],
            start: "center center",
            end: "center center-=40",
          },
        } as any
      );
    } else {
      // native scroll-timeline: also handle active class via progress
      items = gsap.utils.toArray("ul li");
      if (items[0]) items[0].classList.add("is-active");
    }

    update();
    // fallback active update via ticker for smoothness
    const ticker = () => {
      if (!items || items.length === 0) return;
      let bestIdx = 0;
      let bestOpacity = -1;
      items.forEach((el: HTMLElement, i: number) => {
        const o = parseFloat((el as any).style.opacity || getComputedStyle(el).opacity || "0");
        if (o > bestOpacity) { bestOpacity = o; bestIdx = i; }
      });
      items.forEach((el: HTMLElement, i: number) => el.classList.toggle("is-active", i === bestIdx));
    };
    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
      dimmerScrub?.kill();
      scrollerScrub?.kill();
      (chromaEntry as any)?.scrollTrigger?.kill();
      (chromaExit as any)?.scrollTrigger?.kill();
      (ctrl as any).dispose?.();
    };
  }, []);

  return (
    <>
      <header>
        <h1
          className="fluid"
          style={{ fontSize: "calc(var(--fluid-type) * 2)" } as React.CSSProperties}
        >
          you can<br />scroll.
        </h1>
      </header>
      <main>
        <section className="content fluid">
          <h2>
            <span aria-hidden="true">you can&nbsp;</span>
            <span className="sr-only">you can ship things.</span>
          </h2>
          <ul aria-hidden="true" style={{ "--count": 22 } as React.CSSProperties}>
            {[
              "design.","prototype.","solve.","build.","develop.","debug.","learn.","cook.","ship.","prompt.",
              "collaborate.","create.","inspire.","follow.","innovate.","test.","optimize.","teach.","visualize.",
              "transform.","scale.","do it."
            ].map((text, i) => (
              <li key={i} style={{ "--i": i } as React.CSSProperties}>{text}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="fluid">fin.</h2>
        </section>
      </main>
      <footer>ʕ⊙ᴥ⊙ʔ jh3yy &copy; 2024</footer>
    </>
  );
}
