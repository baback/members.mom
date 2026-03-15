import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Hook Rate",
  h1: "What Is Hook Rate? Measure Your First 3 Seconds",
  meta: "Hook rate measures how effectively your video ad's opening captures attention. Learn how to calculate hook rate, benchmark it, and create hooks that keep viewers watching.",
  definition: "Hook rate is the percentage of viewers who watch past the first 3 seconds of your video ad. It's functionally identical to thumb-stop rate but framed from the creative perspective — measuring how well your hook (the opening of your ad) captures and holds attention. A high hook rate means your opening is compelling enough to earn the viewer's next few seconds.",
  whyMatters: [
    { label: "3 seconds is all you get", text: "On TikTok, the average user decides whether to keep watching or swipe within 1.5 seconds. On Instagram, it's about 2 seconds. On Facebook feed, roughly 3 seconds. Your hook rate tells you whether your creative is winning or losing this split-second decision. Everything else in your ad — the product pitch, the social proof, the CTA — is irrelevant if the hook fails." },
    { label: "It predicts downstream performance", text: "Hook rate is the strongest leading indicator of overall ad performance. Ads with hook rates above 30% on Meta are 4x more likely to achieve below-average CPAs than ads with hook rates below 20%. The correlation isn't perfect (a great hook with a weak CTA still won't convert), but a strong hook is a necessary condition for a strong ad." },
    { label: "It's the easiest metric to improve", text: "Unlike CPA (which depends on your entire funnel) or ROAS (which depends on your product and pricing), hook rate is improved by changing just the first 3 seconds of your video. This makes it the highest-leverage optimization you can make — a small change to your opening can cascade into dramatically better performance across every downstream metric." },
  ],
  howItWorks: [
    { heading: "Calculating Hook Rate", text: "Hook rate = 3-second video views ÷ total video plays × 100. Note the subtle difference from thumb-stop rate: hook rate uses video plays (people who started watching) as the denominator, while thumb-stop rate uses impressions (people who saw the ad in their feed). This means hook rate is always higher than thumb-stop rate for the same ad. A 40% thumb-stop rate might correspond to a 55% hook rate, depending on the platform's autoplay behavior." },
    { heading: "Hook Formulas That Work", text: "High-performing hooks follow repeatable patterns: the bold claim ('This $12 serum replaced my $200 routine'), the question ('Why is nobody talking about this?'), the pattern interrupt (unexpected visual or sound), the social proof opener ('500,000 people switched to this'), the controversy ('Your dermatologist won't tell you this'), and the result tease ('Watch what happened after 30 days'). The best hooks combine two patterns — like a bold claim with a visual pattern interrupt." },
  ],
  example: "A supplement brand tests 6 hook variations for the same product video. They keep the body and CTA identical, changing only the first 3 seconds. Results: 'I've tried every protein powder' (22% hook rate), 'My trainer recommended this' (28%), 'This tastes like a milkshake' (35%), 'I was skeptical but...' (31%), 'POV: you finally find a protein powder that doesn't taste like chalk' (44%), 'The ingredient that changed my workouts' (26%). The POV hook wins by a wide margin — the second-person framing and relatable pain point create immediate identification. They scale that hook and apply the POV format to their next 10 creatives.",
  product: {
    intro: "members.mom lets you test hooks at a pace that traditional production can't match:",
    points: [
      "Rapid hook iteration — Write 5 different opening lines, generate 5 videos with the same body content, and have all 5 ready to launch in under an hour. Find your winning hook before your competitors finish their first draft.",
      "Data-driven hook libraries — As you test hooks across campaigns, you build a library of proven openers. members.mom makes it easy to remix winning hooks with new scripts and avatars for continuous improvement.",
      "Affordable experimentation — At $49/mo for 10 videos, testing 5 hook variations costs less than a single freelance UGC video. Remove the financial barrier to creative experimentation.",
    ],
  },
  related: [
    { term: "Thumb-Stop Rate", slug: "thumb-stop-rate" },
    { term: "Hook", slug: "hook" },
    { term: "Pattern Interrupt", slug: "pattern-interrupt" },
    { term: "Scroll-Stopping Content", slug: "scroll-stopping" },
    { term: "Creative Testing", slug: "creative-testing" },
    { term: "CTR", slug: "ctr" },
  ],
  relatedNote: "Hook rate is the quantitative measure of your hook's effectiveness. It's closely tied to thumb-stop rate (same moment, different calculation), improved through pattern interrupts and scroll-stopping techniques, and optimized through systematic creative testing. CTR measures the next conversion point after the hook has done its job.",
};
export default data;
