import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "CPA",
  h1: "What Is CPA? Cost Per Acquisition Explained",
  meta: "CPA (cost per acquisition) measures how much you spend to acquire one customer through advertising. Learn how to calculate CPA, reduce it, and benchmark against your industry.",
  definition: "Cost per acquisition (CPA) is the total cost of acquiring one paying customer through a specific advertising channel or campaign. It's calculated by dividing total ad spend by the number of conversions (purchases, sign-ups, or whatever action you define as an acquisition). CPA is the north-star metric for performance marketers because it directly ties ad spend to business outcomes.",
  whyMatters: [
    { label: "It determines profitability", text: "If your CPA is higher than your profit margin per customer, you're losing money on every sale. If your CPA is lower, you're profitable. This simple math makes CPA the most important metric for any brand running paid acquisition. A $30 CPA on a product with $50 margin means $20 profit per customer. A $60 CPA on the same product means $10 loss per customer." },
    { label: "It's the ultimate creative scorecard", text: "While metrics like CTR and hook rate measure individual moments in the ad experience, CPA measures the entire journey from impression to purchase. A creative with a mediocre hook rate but strong CPA is more valuable than one with an amazing hook rate but poor CPA. CPA is the metric that tells you whether your ad actually works as a business tool." },
    { label: "It enables scaling decisions", text: "You can only scale what's profitable. Knowing your CPA — and how it changes as you increase spend — is what allows you to confidently increase budgets. If your CPA stays stable as you scale from $100/day to $1,000/day, you've found a scalable creative. If CPA rises sharply, you've hit a ceiling and need new creative or new audiences." },
  ],
  howItWorks: [
    { heading: "CPA Calculation and Variants", text: "Basic CPA = total ad spend ÷ number of acquisitions. But 'acquisition' can mean different things: a purchase (most common for e-commerce), a lead form submission (common for B2B), an app install, or a subscription sign-up. Some marketers distinguish between CPA (cost per acquisition of a customer) and CPL (cost per lead), with CPA being the more downstream, higher-value metric." },
    { heading: "Reducing CPA", text: "CPA is a function of three variables: CPM (how much you pay for impressions), CTR (how many people click), and conversion rate (how many clickers buy). Improving any one of these improves CPA. Better creative lowers CPM (algorithms reward engaging ads) and raises CTR. Better landing pages raise conversion rate. Better targeting ensures you're reaching people likely to convert. The highest-leverage move is usually creative — it affects both CPM and CTR simultaneously." },
  ],
  example: "A DTC skincare brand is running Meta ads with a $42 CPA. Their target is $30. They diagnose the funnel: CPM is $11 (reasonable), CTR is 0.8% (below average), and landing page conversion rate is 4.2% (decent). The bottleneck is CTR. They produce 8 new UGC-style video ads with stronger hooks and clearer CTAs. The top 3 performers achieve 1.6% CTR, which drops CPA to $26 — below target. The product, pricing, and landing page didn't change. The creative did.",
  product: {
    intro: "ReUGC helps brands reduce CPA by increasing creative volume and testing velocity:",
    points: [
      "More creatives = more chances to find low-CPA winners — The math is simple: if 1 in 5 creatives beats your CPA target, you need to test 20 to find 4 winners. ReUGC makes producing those 20 variations affordable.",
      "Faster iteration cycles — When a creative's CPA starts rising (a sign of fatigue), replace it immediately with a fresh variation. ReUGC lets you generate replacements in minutes, not weeks.",
      "Lower production costs improve unit economics — If you're spending $500/month on creator content, switching to ReUGC at $49–$199/mo frees up budget that can go directly into ad spend, further reducing effective CPA.",
    ],
  },
  related: [
    { term: "ROAS", slug: "roas" },
    { term: "CAC", slug: "cac" },
    { term: "CPM", slug: "cpm" },
    { term: "CTR", slug: "ctr" },
    { term: "Conversion Rate", slug: "conversion-rate" },
    { term: "Ad Spend", slug: "ad-spend" },
  ],
  relatedNote: "CPA is one piece of the acquisition cost puzzle. CAC (customer acquisition cost) is the broader version that includes all marketing costs, not just ad spend. CPA is directly influenced by CPM, CTR, and conversion rate — improving any of these three levers reduces CPA. ROAS provides the revenue-side view of the same equation.",
};
export default data;
