import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Ad Spend",
  h1: "What Is Ad Spend? Budget Allocation for Paid Ads",
  meta: "Ad spend is the total amount of money invested in advertising campaigns. Learn how to set ad budgets, allocate spend across platforms, and optimize for maximum return.",
  definition: "Ad spend is the total monetary investment in advertising campaigns across all platforms and channels. It includes the direct costs paid to ad platforms (Meta, TikTok, Google) for impressions, clicks, or conversions — but does not include creative production costs, agency fees, or tool subscriptions. Ad spend is the fuel that powers your paid acquisition engine.",
  whyMatters: [
    { label: "It's your growth lever", text: "Ad spend is the most directly controllable growth input. Increase spend on profitable campaigns and revenue grows proportionally — up to a point. Understanding the relationship between ad spend and returns (the efficiency curve) is what allows brands to scale confidently. Spend too little and you're leaving growth on the table. Spend too much and you hit diminishing returns." },
    { label: "Efficiency matters more than volume", text: "A brand spending $10,000/month at 5x ROAS generates $50,000 in revenue. A brand spending $50,000/month at 2x ROAS generates $100,000 in revenue but with much thinner margins. The goal isn't maximum spend — it's maximum profitable spend. This is why CPA and ROAS targets should guide budget decisions, not arbitrary spending goals." },
    { label: "Creative quality determines spend efficiency", text: "Two brands with identical $20,000/month ad budgets can see dramatically different results based on creative quality. Brand A with mediocre creative: $35 CPA, 571 customers. Brand B with strong UGC creative: $18 CPA, 1,111 customers. Same spend, 2x the customers. Investing in creative quality (even at the cost of slightly lower ad spend) almost always produces better total results." },
  ],
  howItWorks: [
    { heading: "Setting Ad Budgets", text: "Common approaches to setting ad budgets: percentage of revenue (allocate 10–20% of revenue to ad spend), target CPA method (determine your target CPA and work backward from revenue goals), test-and-scale (start with a small test budget, prove profitability, then scale), and competitive benchmarking (match or exceed competitor spend in your category). For most DTC brands, starting with 15% of revenue as ad spend and adjusting based on ROAS is a practical starting point." },
    { heading: "Budget Allocation Strategy", text: "Allocate ad spend across three buckets: testing (15–20% of budget for new creative and audience tests), scaling (60–70% of budget behind proven winners), and retargeting (15–20% of budget for warm audience conversion). This allocation ensures you're always finding new winners while maximizing returns from proven performers. Adjust the ratios based on your stage: early-stage brands should allocate more to testing, mature brands more to scaling." },
  ],
  example: "A DTC brand allocates their $25,000/month ad spend: $5,000 (20%) for creative testing — launching 15 new video variations per week with $50/day per variation for 48-hour tests. $16,000 (64%) for scaling — the top 3–4 performers from testing get scaled to $200–$500/day. $4,000 (16%) for retargeting — dedicated budget for website visitors and cart abandoners. This structure consistently delivers 4.2x blended ROAS because the testing budget continuously feeds new winners into the scaling budget, while retargeting captures warm leads efficiently.",
  product: {
    intro: "ReUGC helps you get more from every dollar of ad spend:",
    points: [
      "Maximize your testing budget — When creative production is cheap ($49–$199/mo), more of your budget goes to actual ad spend rather than production costs. A brand spending $3,000/month on creators can redirect $2,800 to ad spend by switching to ReUGC.",
      "Better creative = better ad spend efficiency — Higher-quality creative earns lower CPMs and higher CTRs, making every dollar of ad spend work harder. ReUGC produces the native-looking content that platforms reward with better delivery.",
      "Scale confidently with creative reserves — The biggest risk when scaling ad spend is running out of fresh creative. ReUGC ensures you always have new variations ready to deploy as you increase budgets.",
    ],
  },
  related: [
    { term: "ROAS", slug: "roas" },
    { term: "CPA", slug: "cpa" },
    { term: "CAC", slug: "cac" },
    { term: "CPM", slug: "cpm" },
    { term: "Media Buying", slug: "media-buying" },
    { term: "Performance Marketing", slug: "performance-marketing" },
  ],
  relatedNote: "Ad spend is the input; ROAS, CPA, and CPM are the efficiency metrics that determine whether that spend is profitable. CAC includes ad spend plus all other acquisition costs. Media buying is the discipline of managing ad spend allocation, and performance marketing is the strategic framework that guides spending decisions.",
};
export default data;
