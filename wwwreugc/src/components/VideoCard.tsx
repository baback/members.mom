"use client";

import { useRef, useState } from "react";
import { VolumeX, Volume2 } from "lucide-react";

export default function VideoCard({
  showMute = true,
}: {
  showMute?: boolean;
}) {
  const [muted, setMuted] = useState(true);
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative aspect-9/16 w-full overflow-hidden rounded-[1.25rem] bg-foreground/5 ring-[3px] ring-foreground/10">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/preview_001.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {showMute && (
        <button
          type="button"
          onClick={() => {
            if (ref.current) {
              ref.current.muted = !ref.current.muted;
              setMuted((m) => !m);
            }
          }}
          className="absolute bottom-2 right-2 z-10 inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
        </button>
      )}
    </div>
  );
}
