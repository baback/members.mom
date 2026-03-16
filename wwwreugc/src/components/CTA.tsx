"use client";

import VideoCard from "./VideoCard";

const fan = [
  { rotate: "-6deg", y: "2.5rem", w: "w-28 xl:w-32" },
  { rotate: "-3deg", y: "1rem", w: "w-32 xl:w-36" },
  { rotate: "0deg", y: "0", w: "w-40 xl:w-44", z: 20 },
  { rotate: "3deg", y: "1rem", w: "w-32 xl:w-36" },
  { rotate: "6deg", y: "2.5rem", w: "w-28 xl:w-32" },
];

export default function CTA() {
  return (
    <section className="overflow-hidden bg-foreground px-5 pt-24 pb-16 text-background md:px-8 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-[1.1]">
            Stop overpaying for content.
            <br />
            <em className="font-normal italic" style={{ fontFamily: "var(--font-serif)" }}>Start scaling.</em>
          </h2>
          <p className="mt-5 text-base text-background/50">
            50x cheaper. 10x better results. Ready in minutes.
          </p>
          <div className="mt-9">
            <a href="https://studio.reugc.com" className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3 text-sm font-medium text-foreground transition hover:bg-background/90 cursor-pointer">
              Get Started
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Phone fan — desktop */}
        <div className="mt-16 hidden items-end justify-center gap-3.5 lg:flex xl:gap-4">
          {fan.map((p, i) => (
            <div
              key={i}
              className={`${p.w} shrink-0`}
              style={{ transform: `rotate(${p.rotate}) translateY(${p.y})`, zIndex: p.z ?? 10 }}
            >
              <div className="rounded-[1.25rem] ring-[3px] ring-white/15 overflow-hidden shadow-2xl shadow-black/40">
                <VideoCard showMute={false} />
              </div>
            </div>
          ))}
        </div>

        {/* Phone fan — mobile */}
        <div className="mt-14 grid grid-cols-3 gap-2.5 max-w-sm mx-auto lg:hidden">
          {fan.slice(0, 3).map((_, i) => (
            <div key={i}>
              <div className="rounded-[1.25rem] ring-[3px] ring-white/15 overflow-hidden shadow-xl shadow-black/40">
                <VideoCard showMute={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
