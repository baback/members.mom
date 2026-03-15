import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Creative Testing",
  h1: "What Is Creative Testing? A/B Test Ads at Scale",
  meta: "Creative testing is the systematic process of testing ad variations to find top performers. Learn frameworks, metrics, and how to test at scale without blowing your budget.",
  definition: "Creative testing is the systematic process of producing, launching, and measuring multiple ad creative variations to identify which combinations of visuals, copy, hooks, and CTAs drive the best performance. It's the practice of letting data — not opinions — decide which ads to scale.",
  whyMatters: [
    { label: "Creative is the biggest performance lever", text: "Meta's own research shows that creative quality accounts for 56% of ad performance — more than targeting, bidding, or placement combined. Yet most brands spend 90% of their optimization time on audience settings and 10% on creative. Creative testing flips that ratio by making creative the primary variable you optimize." },
    { label: "Winners are unpredictable", text: "The ad you think will win almost never does. Internal teams consistently fail to predict which creative will outperform — studies show that expert predictions are correct less than 50% of the time. The only reliable way to find winners is to test broadly and let the data speak. This means you need volume: more variations tested means more chances to find outliers." },
    { label: "It compounds over time", text: "Each round of creative testing teaches you something about your audience. Over months, you build a library of insights — which hooks work, which presenter styles convert, which CTAs drive action. These insights compound, making each subsequent round of testing more efficient and more likely to produce winners." },
  ],
  howItWorks: [
    { heading: "The Testing Framework", text: "Effective creative testing follows a structured approach: isolate one variable at a time (hook, body, CTA, presenter, format), produce 3–5 variations of that variable while keeping everything else constant, launch all variations with equal budget, measure after sufficient data (typically 1,000+ impressions per variation), kill losers and scale winners. The key discipline is testing one variable at a time — if you change the hook AND the CTA, you won't know which change drove the result." },
    { heading: "Metrics That Matter", text: "Different metrics answer different questions. Thumb-stop rate (3-second view rate) tells you if your hook works. Hold rate (percentage who watch past 50%) tells you if your body content is engaging. CTR tells you if your CTA is compelling. CPA tells you if the whole package converts. A creative can have a great hook (high thumb-stop) but a weak CTA (low CTR) — testing helps you diagnose exactly where the creative breaks down." },
  ],
  example: "A pet food brand tests 5 different hooks for the same product video: (1) 'My vet told me to switch,' (2) 'I was spending $200/month on dog food,' (3) 'Watch my dog's reaction,' (4) 'Stop feeding your dog this,' (5) 'The ingredient most dog foods hide.' Hook #4 generates a 38% thumb-stop rate versus 12–18% for the others. They then test 4 different CTAs with hook #4 and find that 'See what's actually in your dog's food' outperforms 'Shop now' by 2.8x on CTR. Total testing cost: $800 in ad spend. The winning combination runs for 3 weeks at a $14 CPA before needing a refresh.",
  product: {
    intro: "ReUGC makes creative testing economically viable by dramatically reducing the cost per variation:",
    points: [
      "Generate test variations in minutes — Create 5–10 versions of the same ad with different hooks, presenters, or CTAs. When each video costs a few dollars instead of hundreds, you can test everything instead of guessing.",
      "Isolate variables cleanly — Swap just the hook while keeping the same avatar, script body, and CTA. Or test 5 different avatars with the identical script. ReUGC makes single-variable testing effortless.",
      "Feed the testing machine continuously — With plans from $49/mo (10 videos) to $199/mo (60 videos), you can run weekly testing cycles without the budget constraints that force most brands to test monthly or quarterly.",
    ],
  },
  related: [
    { term: "Split Testing", slug: "split-testing" },
    { term: "Hook Rate", slug: "hook-rate" },
    { term: "Thumb-Stop Rate", slug: "thumb-stop-rate" },
    { term: "Creative Fatigue", slug: "creative-fatigue" },
    { term: "Content Velocity", slug: "content-velocity" },
    { term: "Dynamic Creative", slug: "dynamic-creative" },
  ],
  relatedNote: "Creative testing is the strategic framework; split testing is the tactical execution method. The metrics you measure (hook rate, thumb-stop rate) determine what you learn from each test. Creative testing is also the primary defense against creative fatigue — the more you test, the more winners you have in reserve when current ads decline.",
};
export default data;
