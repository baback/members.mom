"use client";

import VideoCard from "./VideoCard";

const steps = [
  {
    num: "01",
    title: "Drop your script",
    desc: "Write your own or paste a product URL. Our AI handles the rest.",
  },
  {
    num: "02",
    title: "Pick an AI actor",
    desc: "100+ lifelike avatars. Or clone your own face and voice.",
  },
  {
    num: "03",
    title: "Export & scale",
    desc: "Polished UGC video in under 2 minutes. Test, iterate, win.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-5 py-24 md:px-8 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center mb-16 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">How it works</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps. Two minutes.{" "}
            <em className="font-normal italic" style={{ fontFamily: "var(--font-serif)" }}>Done.</em>
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6 lg:gap-10">
            {/* Videos row */}
            {steps.map((s, i) => (
              <div key={s.num} className="flex justify-center">
                <div className="w-full max-w-[240px] lg:max-w-[260px]">
                  <VideoCard />
                </div>
              </div>
            ))}
          </div>

          {/* Connector line + step numbers */}
          <div className="relative mt-10 mb-8">
            <div className="absolute top-1/2 left-[16.67%] right-[16.67%] h-px bg-border -translate-y-1/2" />
            <div className="grid grid-cols-3">
              {steps.map((s) => (
                <div key={s.num} className="flex justify-center">
                  <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">
                    {s.num}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Text row */}
          <div className="grid grid-cols-3 gap-6 lg:gap-10">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-[260px] mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden space-y-14">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center">
              <div className="w-full max-w-[200px] mb-6">
                <VideoCard />
              </div>
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold mb-3">
                {s.num}
              </span>
              <h3 className="text-base font-semibold mb-1.5 text-center">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed max-w-xs text-center">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
