import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "CAC",
  h1: "What Is CAC? Customer Acquisition Cost Explained",
  meta: "CAC (customer acquisition cost) is the total cost of acquiring a new customer across all channels. Learn how CAC differs from CPA, how to calculate it, and how to reduce it.",
  definition: "Customer acquisition cost (CAC) is the total cost of acquiring a new customer, including all marketing and sales expenses — not just ad spend. While CPA measures the cost per acquisition from a single ad campaign, CAC captures the full picture: ad spend, creative production, agency fees, marketing salaries, tools, and any other cost involved in turning a stranger into a paying customer.",
  whyMatters: [
    { label: "It's the true cost of growth", text: "CPA only shows you the ad platform's slice. CAC shows you everything. A brand might celebrate a $25 CPA on Meta, but when you add the $3,000/month agency fee, $2,000 in creative production, and $500 in tools, the real CAC is $45. Knowing your true CAC prevents the dangerous illusion of profitability that platform-reported metrics can create." },
    { label: "It determines your growth ceiling", text: "Your CAC relative to your LTV (customer lifetime value) determines how aggressively you can grow. A healthy LTV:CAC ratio is 3:1 or higher — meaning each customer generates 3x more revenue than it costs to acquire them. Below 3:1, growth becomes unsustainable. Above 5:1, you're probably under-investing in acquisition and leaving growth on the table." },
    { label: "It's the metric investors scrutinize most", text: "For venture-backed or growth-stage brands, CAC is the metric that determines fundraising outcomes. Investors want to see CAC trending down over time (indicating improving efficiency) and a clear path to a sustainable LTV:CAC ratio. Brands that can demonstrate declining CAC with stable or growing LTV get funded; those that can't, don't." },
  ],
  howItWorks: [
    { heading: "Calculating CAC", text: "CAC = total sales and marketing costs ÷ number of new customers acquired. Include everything: ad spend across all platforms, creative production costs, agency and freelancer fees, marketing team salaries (or a proportional allocation), software and tool subscriptions, and any promotional costs (discounts, free shipping offers used for acquisition). Calculate CAC monthly and track the trend over time." },
    { heading: "CAC by Channel", text: "Smart brands calculate CAC per channel to understand where their most efficient growth comes from. Your Meta CAC, TikTok CAC, Google CAC, and organic CAC will all be different. This channel-level view helps you allocate budget to the most efficient channels and identify which channels are getting more expensive over time. It also helps you understand the impact of creative quality — channels where you invest in better creative typically show lower CAC." },
  ],
  example: "A subscription snack box brand calculates their monthly CAC. Ad spend: $15,000. Creative production (UGC creators): $3,000. Agency management fee: $2,500. Marketing tools: $800. New customers acquired: 420. CAC = $21,300 ÷ 420 = $50.71. Their average first-order value is $35, but their 12-month LTV is $210 (customers stay an average of 6 months at $35/month). LTV:CAC ratio = 4.1:1 — healthy. But if they can reduce creative production costs from $3,000 to $500 using AI tools, CAC drops to $44.05, improving the ratio to 4.8:1.",
  product: {
    intro: "members.mom directly reduces CAC by cutting one of its largest components — creative production cost:",
    points: [
      "Slash creative production from your CAC — Replace $2,000–$5,000/month in creator fees with members.mom plans starting at $49/mo. This directly reduces your total marketing costs and improves CAC without changing anything else in your funnel.",
      "Better creative lowers ad costs too — AI-generated UGC that performs well on social platforms earns lower CPMs and higher CTRs, reducing the ad spend component of CAC alongside the production component.",
      "Track the impact clearly — When creative production costs drop by 80–90%, the effect on CAC is immediate and measurable. It's one of the clearest ROI calculations in your marketing stack.",
    ],
  },
  related: [
    { term: "CPA", slug: "cpa" },
    { term: "LTV", slug: "ltv" },
    { term: "Blended CAC", slug: "blended-cac" },
    { term: "Unit Economics", slug: "unit-economics" },
    { term: "Contribution Margin", slug: "contribution-margin" },
    { term: "Ad Spend", slug: "ad-spend" },
  ],
  relatedNote: "CAC is the all-in version of CPA and a core input to unit economics. It's evaluated against LTV to determine growth sustainability. Blended CAC includes both paid and organic acquisition, giving an even broader view. Contribution margin tells you how much of each sale is left after CAC and COGS to contribute to profit.",
};
export default data;
