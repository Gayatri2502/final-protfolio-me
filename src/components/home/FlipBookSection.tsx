"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import FlipGallery from "@/components/ui/flip-gallery";

const playbackKey = "alphacentauric:momo-intro";

export function FlipBookSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (sessionStorage.getItem(playbackKey) === "done") return;
      video.play().catch(() => {});
    }, { threshold: 0.35 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused && sessionStorage.getItem(playbackKey) !== "done") {
      video.play().catch(() => {});
    }
  }
  return (
    <section className="relative bg-[#08080A] text-[#F2F0EB] border-y border-[#F2F0EB]/10">
      <div className="container-custom py-10 lg:py-14">
        <div className="flex items-center gap-4 mono-label text-[#F2F0EB]/60 border-b border-[#F2F0EB]/10 pb-6">
          <span className="text-[#D4FF32]">[05]</span>
          <span>AI Journey</span>
          <span className="h-px flex-1 bg-[#F2F0EB]/10 ml-2" />
          <span className="hidden sm:inline">AI/ML Portfolio • Models • Research • Builds</span>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-[-0.04em] leading-[0.9] text-[#F2F0EB]">
              Models
              <br />
              <span className="font-light italic tracking-[-0.03em] text-[#F2F0EB]/60">that ship.</span>
            </h2>
            <p className="mt-4 max-w-[420px] text-sm leading-6 text-[#F2F0EB]/60">
              A flip-through of this AI/ML portfolio — five milestones from first model to production MLOps.
              Each frame is a shipped AI system, not a demo.
            </p>
            <div className="relative mt-6 max-w-[480px]">
              <video
                ref={videoRef}
                className="aspect-video w-full rounded-xl bg-black"
                src="/videos/momo-introduction.mp4"
                muted={muted}
                playsInline
                disablePictureInPicture
                preload="metadata"
                onLoadedMetadata={({ currentTarget }) => {
                  const saved = sessionStorage.getItem(playbackKey);
                  if (saved === "done") currentTarget.currentTime = currentTarget.duration;
                  else if (saved) currentTarget.currentTime = Math.min(Number(saved) || 0, currentTarget.duration);
                }}
                onTimeUpdate={({ currentTarget }) => {
                  if (sessionStorage.getItem(playbackKey) !== "done") {
                    sessionStorage.setItem(playbackKey, String(currentTarget.currentTime));
                  }
                }}
                onEnded={() => sessionStorage.setItem(playbackKey, "done")}
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
