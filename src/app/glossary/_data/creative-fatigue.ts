import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Creative Fatigue",
  h1: "What Is Creative Fatigue? When Your Ads Stop Working",
  meta: "Creative fatigue is when ad performance declines because your audience has seen the same creative too many times. Learn how to spot it, prevent it, and fix it.",
  definition: "Creative fatigue is the decline in ad performance that happens when your target audience sees the same ad creative too many times. Engagement drops, costs rise, and the ad stops converting — not because the product changed, but because the creative wore out.",
  whyMatters: [
    { label: "It's the #1 silent budget killer", text: "Most brands don't realize creative fatigue is happening until they've wasted 2–3 weeks of ad spend on declining performance. A creative that was generating $20 CPAs slowly drifts to $35, then $50 — and if you're not watching the right metrics, you'll blame targeting or budget before you blame the creative." },
    { label: "It's accelerating", text: "The average consumer sees 6,000–10,000 ads per day. In 2020, a winning creative might last 30–45 days. In 2026, expect 7–14 days on TikTok and 14–21 days on Meta before fatigue sets in." },
    { label: "It compounds", text: "When one creative fatigues, your ad account doesn't just lose that one ad — the algorithm starts struggling to find efficient delivery across your entire campaign. One fatigued creative can drag down the performance of your whole account." },
  ],
  howItWorks: [
    { heading: "The Lifecycle of an Ad Creative", text: "Every ad creative follows a predictable curve: Learning phase (Days 1–3) where the algorithm tests your ad with different segments. Peak performance (Days 3–10) where CPAs are stable or declining. Plateau (Days 10–14) where performance levels off. Fatigue (Days 14+) where the same people see your ad for the 3rd, 4th, 5th time and stop engaging." },
    { heading: "How to Spot It", text: "Creative fatigue shows up in your metrics before you notice it visually. Watch for: Frequency above 2.5–3.0 (viewers have seen the ad 3+ times). CTR declining 20%+ week-over-week. CPM increasing (lower relevance score). CPA rising with stable targeting." },
  ],
  example: "You launch a testimonial video ad for a skincare product. Week 1: CPA is $18, CTR is 1.8%, frequency is 1.2. Week 2: CPA drifts to $24, CTR drops to 1.3%, frequency hits 2.8. Week 3: CPA is $38, CTR is 0.9%, frequency is 4.1. The ad hasn't changed. Your audience hasn't changed. But the same people have seen it too many times. That's creative fatigue.",
  product: {
    intro: "If creative fatigue is about running out of fresh content, the fix is producing more content, faster and cheaper:",
    points: [
      "Batch generation — Create 10–20 video variations from a single script by swapping hooks, actors, and CTAs. Instead of running 1 creative until it dies, rotate 5–10 and extend the lifecycle of each.",
      "50x cheaper production — At $4–$8 per video, refreshing your creative library weekly costs less than a single freelance UGC video.",
      "Test hooks independently — Generate the same video body with 5 different opening hooks. Find which hook has the highest thumb-stop rate, then scale that version.",
    ],
  },
  related: [
    { term: "Hook Rate", slug: "hook-rate" },
    { term: "Thumb-Stop Rate", slug: "thumb-stop-rate" },
    { term: "Creative Testing", slug: "creative-testing" },
    { term: "Ad Fatigue", slug: "ad-fatigue" },
    { term: "Split Testing", slug: "split-testing" },
    { term: "Content Velocity", slug: "content-velocity" },
  ],
  relatedNote: "Creative fatigue is closely related to ad fatigue — but they're not the same thing. Creative fatigue is specifically about the visual/audio creative wearing out. Ad fatigue can also include audience fatigue (your targeting is exhausted) or offer fatigue (the promotion itself is stale).",
};
export default data;
