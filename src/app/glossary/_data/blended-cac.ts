import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Blended CAC",
  h1: "What Is Blended CAC? Total Acquisition Cost",
  meta: "Blended CAC combines paid and organic acquisition costs into a single metric. Learn how to calculate blended CAC, why it's more accurate than channel-specific CAC, and how to optimize it.",
  definition: "Blended CAC (blended customer acquisition cost) is the total cost of acquiring a new customer across all channels — paid and organic combined. Unlike channel-specific CAC (which measures the cost per customer from a single channel like Meta or TikTok), blended CAC divides your total marketing spend by your total new customers, giving you the true all-in cost of growth.",
  whyMatters: [
    { label: "It reveals the true cost of growth", text: "Channel-specific CAC can be misleading. Your Meta CAC might be $25, but if you're also spending on TikTok ($35 CAC), Google ($40 CAC), content marketing ($0 direct CAC but $5,000/month in costs), and an agency ($3,000/month), your blended CAC is much higher. Blended CAC prevents the dangerous illusion of profitability that comes from looking at your best channel in isolation." },
    { label: "It captures organic's contribution", text: "Organic channels (SEO, word-of-mouth, social media) generate customers at zero direct ad cost, which lowers your blended CAC. A brand with strong organic acquisition might have a $40 paid CAC but a $25 blended CAC because 40% of customers come through organic channels. This distinction matters for business planning and investor conversations." },
    { label: "It's the metric investors and CFOs use", text: "While marketers focus on channel-specific metrics, financial stakeholders care about blended CAC because it represents the actual cost of growth. A healthy blended CAC relative to LTV (3:1 ratio or better) signals a sustainable business. Blended CAC trending downward over time signals improving efficiency." },
  ],
  howItWorks: [
    { heading: "Calculating Blended CAC", text: "Blended CAC = total marketing and sales costs ÷ total new customers acquired. Include everything: ad spend across all platforms, creative production costs, agency and freelancer fees, marketing team salaries (or proportional allocation), tool and software subscriptions, and any other marketing-related expenses. Divide by ALL new customers, including those from organic channels. Calculate monthly and track the trend." },
    { heading: "Optimizing Blended CAC", text: "Three levers to improve blended CAC: (1) Improve paid efficiency — better creative, better targeting, better landing pages reduce paid CAC. (2) Grow organic channels — investing in SEO, content marketing, and brand building increases the proportion of low-cost organic customers, pulling blended CAC down. (3) Reduce overhead — lower creative production costs, negotiate better agency rates, and consolidate tools. The most impactful lever is usually #1 (paid efficiency) in the short term and #2 (organic growth) in the long term." },
  ],
  example: "A DTC brand calculates their monthly blended CAC. Total marketing costs: $18,000 ad spend + $2,500 creative production + $3,000 agency fee + $500 tools = $24,000. Total new customers: 600 (400 from paid, 200 from organic). Blended CAC = $24,000 ÷ 600 = $40. Their paid-only CAC is $18,000 ÷ 400 = $45. The organic customers pull blended CAC below paid CAC. They then switch creative production from creators ($2,500/mo) to members.mom ($99/mo), saving $2,401/month. New blended CAC: $21,599 ÷ 600 = $36 — a 10% improvement from one change.",
  product: {
    intro: "members.mom directly improves blended CAC by reducing the creative production component:",
    points: [
      "Cut production costs by 90%+ — Replace $2,000–$5,000/month in creator and agency production fees with members.mom plans starting at $49/mo. This directly reduces the numerator in your blended CAC calculation.",
      "Better creative improves paid efficiency — Higher-quality video ads earn lower CPMs and higher CTRs, reducing the ad spend needed per customer. This improves both paid CAC and blended CAC simultaneously.",
      "Measurable impact on blended CAC — The savings from members.mom are easy to calculate and track. Compare your blended CAC before and after switching to see the direct impact on your acquisition economics.",
    ],
  },
  related: [
    { term: "CAC", slug: "cac" },
    { term: "LTV", slug: "ltv" },
    { term: "Unit Economics", slug: "unit-economics" },
    { term: "CPA", slug: "cpa" },
    { term: "Ad Spend", slug: "ad-spend" },
    { term: "Contribution Margin", slug: "contribution-margin" },
  ],
  relatedNote: "Blended CAC is the all-in version of CAC that includes organic acquisition. It's evaluated against LTV to determine business sustainability and is a core component of unit economics. It includes ad spend as its largest component and feeds into contribution margin calculations that determine profitability.",
};
export default data;
