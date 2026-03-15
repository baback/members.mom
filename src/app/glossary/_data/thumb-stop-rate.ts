import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Thumb-Stop Rate",
  h1: "What Is Thumb-Stop Rate? The Metric That Matters",
  meta: "Thumb-stop rate measures the percentage of people who stop scrolling to watch your video ad. Learn how to calculate it, what benchmarks to target, and how to improve it.",
  definition: "Thumb-stop rate is the percentage of people who stop scrolling their feed to watch your video ad for at least 3 seconds. It's calculated by dividing 3-second video views by impressions. A thumb-stop rate of 30% means that for every 100 times your ad appeared in someone's feed, 30 people paused to watch it.",
  whyMatters: [
    { label: "It's the first filter in your ad funnel", text: "Before someone can click your ad, visit your landing page, or buy your product, they have to stop scrolling. Thumb-stop rate measures that critical first moment. If your thumb-stop rate is low, nothing downstream matters — you could have the best product and the best offer, but nobody's seeing it because they're scrolling right past." },
    { label: "It directly impacts your CPM", text: "Platform algorithms reward engaging content with lower costs. A high thumb-stop rate signals to Meta and TikTok that your ad is relevant and interesting, which improves your relevance score and lowers your CPM. Brands with above-average thumb-stop rates typically pay 20–40% less per thousand impressions than those with below-average rates." },
    { label: "It's the most actionable creative metric", text: "Unlike CPA (which is influenced by your landing page, pricing, and product) or CTR (which depends on your CTA and offer), thumb-stop rate is almost entirely determined by your creative's first 3 seconds. This makes it the purest measure of your hook's effectiveness and the most actionable metric for creative optimization." },
  ],
  howItWorks: [
    { heading: "Calculation and Benchmarks", text: "Thumb-stop rate = 3-second video views ÷ impressions × 100. On Meta, the average thumb-stop rate across all advertisers is roughly 20–25%. Top-performing UGC ads hit 35–50%. On TikTok, where content is more engaging by default, average rates are higher (30–40%) and top performers reach 50–65%. If your thumb-stop rate is below 20% on Meta or below 30% on TikTok, your hook needs work." },
    { heading: "How to Improve It", text: "Thumb-stop rate is almost entirely a function of your first 3 seconds. Tactics that work: open with movement (someone walking into frame, a product being picked up), lead with a bold or controversial statement ('Stop using retinol'), use text overlays that create curiosity, show a surprising visual, or start mid-action rather than with a static intro. The goal is to create a pattern interrupt — something that breaks the visual monotony of the feed and triggers the viewer's attention." },
  ],
  example: "A jewelry brand runs 5 ad variations with different hooks. Hook A (product close-up with text overlay): 18% thumb-stop. Hook B (founder speaking to camera): 24%. Hook C ('I get compliments every time I wear this'): 31%. Hook D (unboxing with ASMR sounds): 42%. Hook E ('My boyfriend thought this was $500'): 47%. Hooks D and E are scaled. The brand learns that sensory triggers (ASMR) and price anchoring ('thought this was $500') are their most effective attention-grabbers — insights they apply to all future creative.",
  product: {
    intro: "ReUGC helps you systematically improve thumb-stop rate through rapid hook testing:",
    points: [
      "Test 5+ hooks per concept — Generate the same video body with 5 different opening hooks. Launch all 5, measure thumb-stop rates after 48 hours, and scale the winner. The cost of testing is negligible compared to the performance gains.",
      "Visual variety that stops thumbs — Different AI avatars create different visual impressions in the feed. Test which presenter style catches your audience's eye — the data often surprises you.",
      "Iterate weekly, not monthly — With videos generated in minutes and plans starting at $49/mo, you can run a new round of hook tests every week, continuously improving your thumb-stop benchmarks.",
    ],
  },
  related: [
    { term: "Hook Rate", slug: "hook-rate" },
    { term: "Hook", slug: "hook" },
    { term: "Scroll-Stopping Content", slug: "scroll-stopping" },
    { term: "Pattern Interrupt", slug: "pattern-interrupt" },
    { term: "CTR", slug: "ctr" },
    { term: "Creative Testing", slug: "creative-testing" },
  ],
  relatedNote: "Thumb-stop rate and hook rate measure the same moment from different angles — thumb-stop rate focuses on the viewer's behavior (did they stop?) while hook rate focuses on the content's effectiveness (did the hook work?). Both are improved through pattern interrupts and scroll-stopping techniques, and both are optimized through systematic creative testing.",
};
export default data;
