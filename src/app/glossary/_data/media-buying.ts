import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Media Buying",
  h1: "What Is Media Buying? Purchase Ad Placements",
  meta: "Media buying is the process of purchasing ad placements across platforms. Learn how modern media buying works, the shift from manual to algorithmic buying, and why creative now matters more than targeting.",
  definition: "Media buying is the process of purchasing advertising space and time across media channels — digital platforms (Meta, TikTok, Google), traditional media (TV, radio, print), and emerging channels (CTV, podcasts). In digital advertising, media buying involves setting up campaigns, managing budgets, optimizing targeting, and allocating spend across platforms to maximize return on ad investment.",
  whyMatters: [
    { label: "It determines where your budget goes", text: "Media buying decisions — which platforms, which placements, which audiences, how much budget — directly determine how efficiently your ad spend converts to revenue. A skilled media buyer can achieve 30–50% better ROAS than an unskilled one with the same creative and budget, simply through better allocation and optimization decisions." },
    { label: "The role is shifting from targeting to creative", text: "In the pre-iOS 14.5 era, media buying was primarily about audience targeting — finding the right people with granular interest and behavior targeting. In 2026, with broad targeting and Advantage+ handling audience selection algorithmically, media buying is increasingly about creative management: which creatives to test, when to scale winners, when to kill losers, and how to maintain creative freshness." },
    { label: "It's becoming more accessible", text: "Platform automation (Advantage+, TikTok Smart Campaigns) is making basic media buying accessible to non-specialists. The algorithm handles targeting, bidding, and placement optimization. This democratization means the competitive advantage shifts from media buying expertise to creative quality — the one thing algorithms can't automate." },
  ],
  howItWorks: [
    { heading: "The Modern Media Buying Workflow", text: "A modern media buyer's weekly workflow: Monday — review last week's performance data, identify fatiguing creatives, and plan new tests. Tuesday — launch new creative tests with structured budgets. Wednesday/Thursday — monitor early performance signals, pause underperformers, and adjust budgets. Friday — analyze results, document learnings, and brief the creative team on what to produce next week. The cycle repeats, with each week's learnings informing the next week's strategy." },
    { heading: "Budget Allocation Across Platforms", text: "Most brands start with 60–70% of budget on Meta (broadest reach, most mature optimization), 20–30% on TikTok (growing reach, younger demographics), and 10% experimental (YouTube, Snapchat, Pinterest). As you gather data, shift budget toward the platforms delivering the best ROAS. Reassess allocation monthly, but avoid dramatic shifts — algorithms need consistent budget to optimize effectively." },
  ],
  example: "A media buyer manages $50,000/month across Meta and TikTok for a DTC brand. They allocate $35,000 to Meta (70%) and $15,000 to TikTok (30%). On Meta, they run Advantage+ campaigns with 15 creative variations, refreshing 5 per week. On TikTok, they run Spark Ads and standard in-feed ads with 10 creative variations. After 3 months of systematic testing and optimization, blended ROAS improves from 3.2x to 4.8x — not through targeting changes (both platforms use broad/automated targeting) but through creative optimization: finding winning hooks, scaling top performers, and replacing fatigued ads before they drag down performance.",
  product: {
    intro: "ReUGC gives media buyers the creative ammunition they need:",
    points: [
      "Feed the media buying machine — Media buyers need fresh creative weekly. ReUGC generates the video variations that keep campaigns performing, so buyers spend time optimizing instead of waiting for content.",
      "Test across platforms efficiently — Generate platform-optimized content for Meta and TikTok from the same scripts. Different platforms may need different hooks — test them all affordably.",
      "Creative refresh on demand — When a media buyer spots a fatiguing creative, they need a replacement immediately. ReUGC delivers fresh content in minutes, not the days or weeks of traditional production. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Performance Marketing", slug: "performance-marketing" },
    { term: "Paid Social", slug: "paid-social" },
    { term: "Ad Spend", slug: "ad-spend" },
    { term: "ROAS", slug: "roas" },
    { term: "Creative Strategy", slug: "creative-strategy" },
    { term: "Meta Advantage+", slug: "advantage-plus" },
  ],
  relatedNote: "Media buying is the execution discipline within performance marketing, managing ad spend allocation across paid social platforms. It's guided by creative strategy and measured by ROAS. The rise of Meta Advantage+ and similar automation tools is shifting the media buyer's role from targeting specialist to creative strategist.",
};
export default data;
