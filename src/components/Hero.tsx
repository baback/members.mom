"use client";

import VideoCard from "./VideoCard";

const floatingVideos = [
  // Top row — scattered above headline
  { className: "absolute top-6 left-[4%] w-28 -rotate-6 sm:w-32 md:w-36", delay: "d1" },
  { className: "absolute top-0 left-1/2 -translate-x-1/2 w-24 rotate-2 sm:w-28 md:w-32 hidden sm:block", delay: "d2" },
  { className: "absolute top-4 right-[4%] w-28 rotate-6 sm:w-32 md:w-36", delay: "d3" },

  // Bottom row — scattered below headline
  { className: "absolute bottom-0 left-[6%] w-32 -rotate-3 sm:w-36 md:w-40", delay: "d2" },
  { className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-28 rotate-1 sm:w-32 md:w-36", delay: "d1" },
  { className: "absolute bottom-0 right-[6%] w-32 rotate-3 sm:w-36 md:w-40", delay: "d3" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 md:px-8">
      <div className="relative mx-auto max-w-7xl h-screen flex items-center justify-center">

        {/* Floating video cards */}
        {floatingVideos.map((v, i) => (
          <div
            key={i}
            className={`${v.className} z-0 animate-fade-up-${v.delay} hidden md:block`}
          >
            <div className="shadow-2xl shadow-black/10 rounded-[1.25rem]">
              <VideoCard showMute={false} />
            </div>
          </div>
        ))}

        {/* Center content — sits on top */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs text-muted shadow-sm mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Now in public beta
          </div>

          <h1 className="animate-fade-up-d1 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight whitespace-nowrap">
            UGC videos that{" "}
            <em className="font-serif italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              convert 10x more
            </em>
          </h1>

          <p className="animate-fade-up-d2 mt-5 text-base text-muted leading-relaxed md:text-lg text-center">
            AI actors. 50x cheaper than real creators. Ready in minutes, not weeks.
          </p>

          <div className="animate-fade-up-d3 mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="https://studio.reugc.com" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:bg-foreground/85 cursor-pointer">
              Start Creating
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
            </a>
            <a href="https://studio.reugc.com" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:bg-card-hover cursor-pointer">
              Continue with Google
              <svg className="size-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile: show 3 videos below content */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 md:hidden">
          <div className="w-24 -rotate-3">
            <VideoCard showMute={false} />
          </div>
          <div className="w-28 rotate-1">
            <VideoCard showMute={false} />
          </div>
          <div className="w-24 rotate-4">
            <VideoCard showMute={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
