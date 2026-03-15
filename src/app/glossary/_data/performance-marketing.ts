import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Performance Marketing",
  h1: "What Is Performance Marketing? Pay for Results",
  meta: "Performance marketing is a results-driven approach where advertisers pay only for measurable outcomes like clicks, leads, or sales. Learn how it works and why creative is the key lever.",
  definition: "Performance marketing is a digital advertising strategy where advertisers pay for specific, measurable actions — clicks, leads, sales, or app installs — rather than for impressions or brand exposure. Every dollar spent is tied to a trackable outcome, making it the most accountable form of marketing. Platforms like Meta Ads, Google Ads, and TikTok Ads are the primary channels.",
  whyMatters: [
    { label: "Every dollar is accountable", text: "Unlike brand marketing (where you pay for awareness and hope it translates to sales), performance marketing ties spend directly to outcomes. You know exactly how much you paid for each customer, which creative drove them, and which platform they came from. This accountability is why performance marketing captures the majority of digital ad budgets for growth-stage brands." },
    { label: "Creative is now the primary lever", text: "In the post-iOS 14.5 world, targeting precision has declined. Broad targeting and algorithm-driven optimization have replaced granular audience building. This means the creative itself — not the targeting settings — is what determines who sees your ad and whether they convert. Performance marketing in 2026 is essentially creative marketing with measurement." },
    { label: "It scales predictably", text: "When you find a creative-audience combination that delivers profitable CPA, you can scale it by increasing budget. Performance marketing's measurability means you can model exactly how much revenue each additional dollar of spend will generate — up to the point of diminishing returns. This predictability is what makes it the growth engine for DTC brands, apps, and online services." },
  ],
  howItWorks: [
    { heading: "The Performance Marketing Loop", text: "Performance marketing follows a continuous cycle: create ad creative, launch campaigns with defined objectives (purchases, leads, installs), measure results against KPIs (CPA, ROAS, CTR), optimize by scaling winners and killing losers, produce new creative to replace fatigued ads, and repeat. The speed of this loop determines your competitive advantage — brands that cycle through creative faster find winners faster and waste less budget on losers." },
    { heading: "Key Channels", text: "The major performance marketing channels are Meta Ads (Facebook + Instagram — largest reach, most mature optimization), TikTok Ads (fastest-growing, best for younger demographics), Google Ads (search intent + YouTube), Snapchat Ads (strong for Gen Z), and Pinterest Ads (high purchase intent). Each channel has different creative requirements, audience behaviors, and optimization strategies, but the fundamental principle is the same: measurable spend tied to measurable outcomes." },
  ],
  example: "A DTC pet food brand allocates $30,000/month to performance marketing across Meta ($18,000) and TikTok ($12,000). They produce 40 video creatives per month, launch them in structured test campaigns, and measure CPA after 72 hours. The top 8 performers (20%) get scaled with increased budgets. The bottom 32 get paused. Each month, they learn more about what messaging, hooks, and formats work — and their blended CPA decreases from $34 in month 1 to $21 by month 6. The creative testing velocity is what drives the improvement.",
  product: {
    intro: "members.mom is the creative engine that performance marketing demands:",
    points: [
      "Match the pace of performance marketing — The performance marketing loop requires constant creative production. members.mom generates video ads in minutes, keeping your testing pipeline full without production delays.",
      "Affordable at any scale — Whether you're spending $1,000/month or $100,000/month on ads, members.mom's plans ($49–$199/mo) make creative production a negligible line item rather than a major expense.",
      "Built for the metrics that matter — Every video is designed for the vertical, native-looking format that drives the best CPA, CTR, and ROAS on Meta and TikTok. Performance-optimized from the start.",
    ],
  },
  related: [
    { term: "Paid Social", slug: "paid-social" },
    { term: "Direct Response Marketing", slug: "direct-response" },
    { term: "CPA", slug: "cpa" },
    { term: "ROAS", slug: "roas" },
    { term: "Creative Testing", slug: "creative-testing" },
    { term: "Media Buying", slug: "media-buying" },
  ],
  relatedNote: "Performance marketing is the strategic framework; paid social and media buying are the execution channels. Direct response marketing is the closest philosophical cousin — both prioritize measurable outcomes over brand awareness. CPA and ROAS are the core metrics, and creative testing is the primary optimization method.",
};
export default data;
