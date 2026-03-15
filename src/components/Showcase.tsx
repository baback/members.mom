"use client";

import VideoCard from "./VideoCard";

const row1 = Array.from({ length: 8 });
const row2 = Array.from({ length: 8 });

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Showcase</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Built by AI. Performing like the real thing.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-muted">
          Product launches, brand promos, testimonials, social hooks — all made with members.mom.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden py-2">
        {/* Row 1 */}
        <div className="flex gap-3.5 overflow-hidden">
          <div className="flex gap-3.5 animate-marquee">
            {[...row1, ...row1].map((_, i) => (
              <div key={i} className="w-[clamp(7.5rem,13vw,10.5rem)] shrink-0">
                <VideoCard showMute={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-3.5 flex gap-3.5 overflow-hidden">
          <div className="flex gap-3.5 animate-marquee" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
            {[...row2, ...row2].map((_, i) => (
              <div key={i} className="w-[clamp(7.5rem,13vw,10.5rem)] shrink-0">
                <VideoCard showMute={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-28" />
      </div>
    </section>
  );
}
