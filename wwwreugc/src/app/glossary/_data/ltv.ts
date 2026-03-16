import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "LTV",
  h1: "What Is LTV? Customer Lifetime Value Explained",
  meta: "LTV (customer lifetime value) is the total revenue a customer generates over their entire relationship with your brand. Learn how to calculate LTV and use it to guide ad spend.",
  definition: "Customer lifetime value (LTV or CLV) is the total revenue a customer is expected to generate over their entire relationship with your business. It accounts for repeat purchases, subscription renewals, upsells, and referrals — giving you a complete picture of what each customer is worth beyond their first transaction.",
  whyMatters: [
    { label: "It unlocks aggressive acquisition", text: "If you only look at first-purchase profitability, you'll under-invest in acquisition. A $50 CPA on a $40 first order looks unprofitable. But if that customer's 12-month LTV is $240, you're actually getting a 4.8x return on that $50 investment. LTV gives you permission to spend more on acquisition because you can see the full return, not just the first transaction." },
    { label: "It reveals true ad performance", text: "Two ad creatives might have identical CPAs but attract very different customers. Creative A might attract deal-seekers who buy once and never return (LTV = $40). Creative B might attract brand-loyal customers who reorder monthly for a year (LTV = $480). Without LTV data, these creatives look identical. With LTV data, Creative B is 12x more valuable. This is why sophisticated brands optimize for LTV-to-CAC ratio, not just CPA." },
    { label: "It's the foundation of sustainable growth", text: "The LTV:CAC ratio is the single most important metric for business sustainability. Below 1:1, you're losing money on every customer. At 3:1, you have a healthy, scalable business. Above 5:1, you're likely under-investing in growth. Every growth decision — how much to spend on ads, which channels to invest in, whether to raise prices — should be informed by LTV." },
  ],
  howItWorks: [
    { heading: "Calculating LTV", text: "Simple LTV = average order value × purchase frequency × average customer lifespan. For a subscription business: LTV = monthly revenue per customer × average months retained. For more accuracy, use cohort-based LTV: track how much revenue each monthly cohort of customers generates over 3, 6, 12, and 24 months. This shows you whether LTV is improving or declining over time and helps you project future revenue from current acquisition." },
    { heading: "LTV by Acquisition Channel", text: "LTV varies significantly by how customers were acquired. Customers from organic search often have higher LTV than those from paid social (they sought you out, indicating higher intent). Customers acquired through UGC-style ads often have higher LTV than those from discount-focused ads (they were attracted by the product, not the deal). Tracking LTV by channel and creative type helps you invest in the acquisition paths that attract your most valuable customers." },
  ],
  example: "A supplement brand tracks LTV by acquisition creative type. Customers acquired through discount ads ('40% off first order'): average LTV of $85 over 12 months (most cancel after the discount period). Customers acquired through UGC testimonial ads ('I've been taking this for 6 months and here's what changed'): average LTV of $310 over 12 months (higher retention, more likely to add products). The UGC testimonial ads have a higher CPA ($38 vs. $22), but the LTV:CAC ratio is dramatically better (8.2:1 vs. 3.9:1). The brand shifts 70% of budget to testimonial-style creative.",
  product: {
    intro: "ReUGC helps you create the authentic, value-focused content that attracts high-LTV customers:",
    points: [
      "Testimonial-style content at scale — Generate UGC testimonial videos that attract customers who care about the product, not just the discount. These customers stick around longer and spend more over time.",
      "Test messaging that drives retention — Use ReUGC to test different value propositions and see which ones attract customers with the highest repeat purchase rates. The creative that wins on CPA isn't always the one that wins on LTV.",
      "Reduce CAC to improve LTV:CAC ratio — With creative production costs starting at $49/mo instead of thousands, your total CAC drops, directly improving the LTV:CAC ratio that determines growth sustainability.",
    ],
  },
  related: [
    { term: "CAC", slug: "cac" },
    { term: "AOV", slug: "aov" },
    { term: "ROAS", slug: "roas" },
    { term: "Unit Economics", slug: "unit-economics" },
    { term: "Blended CAC", slug: "blended-cac" },
    { term: "Contribution Margin", slug: "contribution-margin" },
  ],
  relatedNote: "LTV is the revenue counterpart to CAC — together they form the LTV:CAC ratio that determines business sustainability. LTV is built from AOV and purchase frequency, feeds into ROAS calculations for long-term profitability, and is a core component of unit economics and contribution margin analysis.",
};
export default data;
