import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "AOV",
  h1: "What Is AOV? Average Order Value Explained",
  meta: "AOV (average order value) is the average amount customers spend per transaction. Learn how to calculate AOV, why it matters for ad profitability, and strategies to increase it.",
  definition: "Average order value (AOV) is the average dollar amount spent each time a customer places an order. It's calculated by dividing total revenue by the number of orders. AOV is a critical e-commerce metric because it directly determines whether your ad spend is profitable — a $30 CPA is great if your AOV is $80, but devastating if your AOV is $25.",
  whyMatters: [
    { label: "It's the multiplier in your ROAS equation", text: "ROAS = (number of purchases × AOV) ÷ ad spend. If you can increase AOV by 20% without increasing CPA, your ROAS improves by 20% automatically. This makes AOV one of the most powerful levers for improving ad profitability — and one of the most overlooked. Most brands obsess over reducing CPA while ignoring the equally impactful opportunity to increase AOV." },
    { label: "It determines your CPA ceiling", text: "Your maximum acceptable CPA is a function of AOV and margin. If your AOV is $60 and your gross margin is 65%, your gross profit per order is $39. That means your CPA must stay below $39 to be profitable on first purchase. Higher AOV gives you more room to spend on acquisition, which means you can bid more aggressively, reach more people, and grow faster." },
    { label: "It varies by creative and audience", text: "Different ad creatives attract different types of buyers. A UGC testimonial highlighting a premium bundle might attract customers with $90 AOV, while a discount-focused ad attracts $35 AOV customers. Tracking AOV by creative — not just by campaign — reveals which ads attract your most valuable customers, even if their CPA is slightly higher." },
  ],
  howItWorks: [
    { heading: "Calculating and Segmenting AOV", text: "Basic AOV = total revenue ÷ number of orders. But smart brands segment AOV by acquisition channel (Meta vs. TikTok vs. Google), by creative type (UGC vs. brand vs. product), by customer type (new vs. returning), and by time period (weekday vs. weekend, seasonal trends). This segmentation reveals which channels and creatives attract the highest-value customers — information that should drive your budget allocation." },
    { heading: "Strategies to Increase AOV", text: "Common AOV-boosting tactics include: bundling (offering product sets at a slight discount), free shipping thresholds ('Free shipping on orders over $75' when AOV is $55), upsells and cross-sells at checkout, tiered pricing (good/better/best options), and post-purchase upsells. On the ad side, featuring bundles or premium products in your creative naturally attracts higher-AOV customers." },
  ],
  example: "A beauty brand's overall AOV is $52. They segment by ad creative and discover: studio product ads attract $48 AOV, UGC 'routine' videos attract $67 AOV (customers buy the full routine, not just one product), and discount-focused ads attract $38 AOV. They shift 60% of their budget to 'routine' style UGC ads. Overall AOV increases to $59, and ROAS improves from 3.2x to 4.1x — without changing their product, pricing, or landing page.",
  product: {
    intro: "members.mom helps you create the ad variations that attract higher-AOV customers:",
    points: [
      "Test value-focused messaging — Generate videos that highlight bundles, routines, and premium options rather than discounts. Test which framing attracts the highest-value buyers.",
      "Segment creative by AOV impact — With enough video variations (10–60/month on members.mom plans), you can run dedicated creative for different AOV segments and optimize each independently.",
      "Bundle storytelling at scale — Create product bundle videos that show the complete experience, not just individual items. AI avatars can walk through a multi-product routine in 30 seconds, driving higher cart values. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "ROAS", slug: "roas" },
    { term: "LTV", slug: "ltv" },
    { term: "CPA", slug: "cpa" },
    { term: "Conversion Rate", slug: "conversion-rate" },
    { term: "Unit Economics", slug: "unit-economics" },
    { term: "Contribution Margin", slug: "contribution-margin" },
  ],
  relatedNote: "AOV is a core input to ROAS (revenue per ad dollar) and unit economics (profitability per customer). It works alongside LTV to determine the full value of each customer, and it sets the ceiling for acceptable CPA. Contribution margin tells you how much of each AOV dollar is actually profit after costs.",
};
export default data;
