"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export function StudioIntroAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/alphacentauric-introduction.mp3"
        preload="none"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      <div className="container-custom flex justify-end pt-2">
        <button type="button" onClick={toggleAudio} aria-label={playing ? "Pause studio introduction audio" : "Play studio introduction audio"} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#12131d] px-4 py-2 text-xs text-zinc-200 transition-colors hover:border-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          {playing ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
          {playing ? "Pause audio" : "Play audio"}
        </button>
      </div>
    </>
  );
}
