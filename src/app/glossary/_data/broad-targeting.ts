import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Broad Targeting",
  h1: "What Is Broad Targeting? Let the Algorithm Decide",
  meta: "Broad targeting runs ads with minimal audience restrictions, letting the platform's algorithm find your best customers. Learn when broad targeting works and how creative quality drives it.",
  definition: "Broad targeting is an advertising approach where you set minimal or no audience restrictions — no interest targeting, no lookalikes, no custom audiences — and let the platform's algorithm determine who sees your ad based on your optimization objective and creative signals. It's the opposite of granular targeting, and it's become the dominant strategy on Meta and TikTok as algorithms have gotten smarter.",
  whyMatters: [
    { label: "Algorithms are better at targeting than humans", text: "Meta's and TikTok's algorithms process billions of data points per second to predict who will convert. Human-defined targeting (interests, demographics, behaviors) is a crude approximation of what the algorithm can figure out on its own. In head-to-head tests, broad targeting often matches or beats detailed targeting on CPA — because the algorithm finds pockets of demand that no human would think to target." },
    { label: "It makes creative the targeting mechanism", text: "When you remove audience restrictions, the creative itself becomes the targeting signal. The algorithm shows your ad to a broad pool and learns from who engages. A video about skincare naturally attracts skincare buyers. A video about fitness naturally attracts fitness enthusiasts. Your creative self-selects the right audience through its content, which is why creative quality matters more than ever in a broad targeting world." },
    { label: "It scales without ceiling", text: "Narrow targeting hits a ceiling — once you've reached everyone in your interest group or lookalike, performance declines. Broad targeting has a much higher ceiling because the addressable audience is the entire platform. This makes it the preferred approach for brands spending $10,000+/month who need to scale without hitting audience saturation." },
  ],
  howItWorks: [
    { heading: "How Broad Targeting Works", text: "You create a campaign with a conversion objective (purchases, leads), set your budget, and launch with no audience targeting beyond basic geography and age. The algorithm starts by showing your ad to a diverse sample, then quickly narrows delivery to the users most likely to convert based on real-time engagement signals. Within 24–48 hours, the algorithm has typically identified your best audience segments — often ones you wouldn't have found through manual targeting." },
    { heading: "When Broad Targeting Fails", text: "Broad targeting requires two things to work: sufficient conversion volume (at least 50 conversions per week for the algorithm to learn) and strong creative (the algorithm needs engagement signals to optimize against). If your budget is too small or your creative is weak, the algorithm can't learn efficiently and broad targeting will underperform. In these cases, start with lookalike or interest targeting to generate initial data, then transition to broad as your conversion volume grows." },
  ],
  example: "A DTC jewelry brand has been running interest-targeted campaigns (jewelry, fashion, luxury) with a $32 CPA. Their media buyer tests broad targeting with the same budget and creative. Week 1: CPA is $38 (algorithm is learning). Week 2: CPA drops to $29 (algorithm found efficient segments). Week 3: CPA stabilizes at $26 — 19% lower than interest targeting. The algorithm discovered that their best customers aren't 'jewelry enthusiasts' but rather 'gift shoppers' and 'self-care buyers' — segments the team never would have targeted manually.",
  product: {
    intro: "ReUGC provides the creative quality that broad targeting demands:",
    points: [
      "Creative IS your targeting — In broad targeting, your video content determines who the algorithm shows it to. ReUGC helps you create diverse, compelling content that attracts the right audience through relevance rather than restrictions.",
      "Test creative angles as audience signals — Generate videos with different angles (gifting, self-care, luxury, value) and let broad targeting reveal which angle attracts the most profitable customers. Each angle is a targeting hypothesis.",
      "Volume for algorithm learning — Broad targeting needs creative variety to learn efficiently. Feed the algorithm 10–20 video variations so it can test different audience segments simultaneously. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Lookalike Audience", slug: "lookalike-audience" },
    { term: "Custom Audience", slug: "custom-audience" },
    { term: "Meta Advantage+", slug: "advantage-plus" },
    { term: "Ad Creative", slug: "ad-creative" },
    { term: "Creative Testing", slug: "creative-testing" },
    { term: "Paid Social", slug: "paid-social" },
  ],
  relatedNote: "Broad targeting represents the opposite end of the spectrum from custom audiences and lookalike audiences. It's the default approach in Meta's Advantage+ campaigns. In a broad targeting world, ad creative quality and creative testing become the primary performance levers, making creative production volume essential for paid social success.",
};
export default data;
