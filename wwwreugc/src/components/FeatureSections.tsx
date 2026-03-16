"use client";

import VideoCard from "./VideoCard";

const sections = [
  {
    label: "50x Cheaper",
    title: <>Real creators cost thousands. Ours cost{" "}<em className="font-normal italic" style={{ fontFamily: "var(--font-serif)" }}>dollars</em></>,
    desc: "A single UGC video from a creator runs $200–$1,000+. With ReUGC, generate unlimited videos for a fraction of the cost. Same quality, no invoices.",
    reverse: false,
  },
  {
    label: "AI Actors",
    title: <>No casting. No scheduling. No{" "}<em className="font-normal italic" style={{ fontFamily: "var(--font-serif)" }}>ghosting</em></>,
    desc: "Pick from 100+ lifelike AI actors with real expressions, gestures, and lip-sync. They show up every time, nail every take, and never miss a deadline.",
    reverse: true,
  },
  {
    label: "10x Conversions",
    title: <>Test 50 variations while others test{" "}<em className="font-normal italic" style={{ fontFamily: "var(--font-serif)" }}>one</em></>,
    desc: "More hooks, more angles, more formats — all in minutes. Find what converts, kill what doesn't. Brands using ReUGC see up to 10x higher conversion rates.",
    reverse: false,
  },
  {
    label: "29 Languages",
    title: <>One video. <em className="font-normal italic" style={{ fontFamily: "var(--font-serif)" }}>Every market</em></>,
    desc: "Your AI actor speaks natively in 29 languages with perfect lip-sync. Scale globally without hiring translators or local creators.",
    reverse: true,
  },
];

export default function FeatureSections() {
  return (
    <section id="features" className="px-5 md:px-8">
      <div className="mx-auto max-w-6xl space-y-24 py-24 md:space-y-32 md:py-32">
        {sections.map((s, i) => (
          <div
            key={s.label}
            className={`grid items-center gap-10 md:gap-16 lg:gap-20 lg:grid-cols-2 ${
              s.reverse ? "lg:[direction:rtl]" : ""
            }`}
          >
            {/* Video side — two staggered cards */}
            <div className={`mx-auto flex w-full max-w-md items-end justify-center gap-4 lg:mx-0 lg:max-w-none ${s.reverse ? "[direction:ltr]" : ""}`}>
              <div className="w-[46%]">
                <VideoCard />
              </div>
              <div className="w-[46%] -translate-y-5">
                <VideoCard />
              </div>
            </div>

            {/* Text side */}
            <div className={s.reverse ? "[direction:ltr]" : ""}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                {s.label}
              </p>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl leading-tight mb-4">
                {s.title}
              </h2>
              <p className="text-base text-muted leading-relaxed max-w-lg">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
