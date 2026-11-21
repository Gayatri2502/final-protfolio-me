"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import FlipGallery from "@/components/ui/flip-gallery";

const muteKey = "alphacentauric:momo-muted";

export function FlipBookSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = sessionStorage.getItem(muteKey) === "true";
    setMuted(video.muted);
    let disposed = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      video.play().catch((error: DOMException) => {
        if (disposed || error.name !== "NotAllowedError" || video.muted) return;
        video.muted = true;
        setMuted(true);
        void video.play().catch(() => {});
      });
    }, { threshold: 0.35 });
    observer.observe(video);
    return () => {
      disposed = true;
      observer.disconnect();
    };
  }, []);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    sessionStorage.setItem(muteKey, String(video.muted));
    if (video.paused) void video.play().catch(() => {});
  }

  return (
    <section className="relative bg-[#08080A] text-[#F2F0EB] border-y border-[#F2F0EB]/10">
      <div className="container-custom py-10 lg:py-14">
        <div className="flex items-center gap-4 mono-label text-[#F2F0EB]/60 border-b border-[#F2F0EB]/10 pb-6">
          <span className="text-[#D4FF32]">[05]</span>
          <span>Meet Gayatri & Momo</span>
          <span className="h-px flex-1 bg-[#F2F0EB]/10 ml-2" />
          <span className="hidden sm:inline">Alphacentauric Studio</span>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display text-xl lg:text-2xl font-bold tracking-tight leading-tight text-[#F2F0EB]">
              Hii, I&apos;m Gayatri Samal
            </h2>
            <p className="mt-2 max-w-[420px] text-sm leading-6 text-[#F2F0EB]/70">
              And here&apos;s my assistant, Momo. Together, we&apos;re building this AI space for small business owners.
            </p>
            <p className="mt-4 max-w-[420px] text-sm leading-6 text-[#F2F0EB]/60">
              You know that feeling when you&apos;re watching something and suddenly an idea clicks? That&apos;s how Alphacentauric got its name. It became an obsession and a reason to keep pushing myself.
            </p>
            <p className="mt-3 max-w-[420px] text-sm leading-6 text-[#F2F0EB]/60">
              Every day, I realize building Alphacentauric was the best decision I could&apos;ve made. The journey has been exciting and challenging, and we&apos;re going to make it happen.
            </p>
            <div className="relative mt-6 max-w-[480px]">
              <video
                ref={videoRef}
                className="aspect-video w-full rounded-xl bg-black"
                src="/videos/momo-introduction.mp4"
                loop
                playsInline
                disablePictureInPicture
                preload="metadata"
                aria-label="Momo introduces Alphacentauric"
              />
              <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute Momo" : "Mute Momo"}
                className="absolute bottom-3 right-3 grid size-11 place-items-center rounded-full border border-white/25 bg-black/75 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 flex justify-center">
            <FlipGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlipBookSection;
