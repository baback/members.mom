import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Contribution Margin",
  h1: "What Is Contribution Margin? Profitability Per Unit",
  meta: "Contribution margin is the revenue remaining after variable costs, showing how much each sale contributes to profit. Learn how to calculate it and use it to guide ad spend decisions.",
  definition: "Contribution margin is the amount of revenue remaining after subtracting variable costs (COGS, shipping, payment processing, and customer acquisition costs) from the sale price. It represents how much each sale 'contributes' to covering fixed costs and generating profit. For e-commerce brands, contribution margin after ad spend is the truest measure of whether your paid acquisition is actually profitable.",
  whyMatters: [
    { label: "ROAS can be misleading without it", text: "A 4x ROAS sounds great until you factor in COGS (40%), shipping (8%), and payment processing (3%). That 4x ROAS actually leaves only a 49% contribution margin — and after fixed costs, the actual profit might be slim. Contribution margin tells you the real story that ROAS alone can't: how much money you actually keep from each sale after all variable costs." },
    { label: "It sets your true CPA ceiling", text: "Your maximum acceptable CPA isn't just 'less than AOV' — it's the amount that leaves positive contribution margin after all variable costs. If your AOV is $60, COGS is $18, shipping is $5, and processing is $2, your pre-ad contribution is $35. Your CPA must stay below $35 to be contribution-margin positive. This number — not ROAS, not AOV — is what should guide your bidding and budget decisions." },
    { label: "It enables profitable scaling", text: "Brands that track contribution margin can scale confidently because they know exactly how much profit each incremental sale generates. If contribution margin after ad spend is $12 per order and you acquire 1,000 orders per month, you're generating $12,000 in contribution to fixed costs and profit. Scaling to 2,000 orders doubles that contribution — as long as CPA stays stable." },
  ],
  howItWorks: [
    { heading: "Calculating Contribution Margin", text: "Contribution margin per order = selling price − COGS − shipping − payment processing − customer acquisition cost (CPA). Contribution margin percentage = contribution margin per order ÷ selling price × 100. Example: $60 AOV − $18 COGS − $5 shipping − $2 processing − $20 CPA = $15 contribution margin (25%). Track this monthly and by channel — your Meta contribution margin might differ from your TikTok contribution margin due to different CPAs and AOVs." },
    { heading: "Contribution Margin Targets", text: "Healthy contribution margin targets vary by business model: DTC e-commerce should target 15–30% after ad spend. Subscription businesses can accept lower first-order contribution margins (even negative) if LTV justifies the acquisition cost. Digital products and SaaS should target 50%+ contribution margins due to near-zero COGS. If your contribution margin is negative, you're losing money on every sale — either reduce CPA, increase AOV, or reduce variable costs." },
  ],
  example: "A DTC apparel brand tracks contribution margin by ad creative type. Studio brand ads: $72 AOV, $28 CPA, $22 COGS, $6 shipping, $2 processing = $14 contribution margin (19.4%). UGC testimonial ads: $68 AOV, $19 CPA, $21 COGS, $6 shipping, $2 processing = $20 contribution margin (29.4%). AI-generated UGC ads: $65 AOV, $17 CPA, $20 COGS, $6 shipping, $2 processing = $20 contribution margin (30.8%). The AI-generated UGC has the lowest AOV but the highest contribution margin because the CPA is lowest. They shift budget accordingly — optimizing for contribution margin, not ROAS or AOV alone.",
  product: {
    intro: "ReUGC improves contribution margin by reducing both creative costs and CPA:",
    points: [
      "Lower creative costs improve margins directly — Creative production is a variable cost that affects contribution margin. Replacing $300 creator videos with $5–$10 AI-generated videos improves margin on every sale.",
      "Better creative lowers CPA — AI-generated UGC that performs well on social platforms earns lower CPMs and higher CTRs, reducing the CPA component of your contribution margin calculation.",
      "Track the impact clearly — The contribution margin improvement from ReUGC is directly measurable: lower production costs + lower CPA = higher contribution per sale. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Unit Economics", slug: "unit-economics" },
    { term: "CPA", slug: "cpa" },
    { term: "AOV", slug: "aov" },
    { term: "ROAS", slug: "roas" },
    { term: "Blended CAC", slug: "blended-cac" },
    { term: "LTV", slug: "ltv" },
  ],
  relatedNote: "Contribution margin is the profitability metric within unit economics. It's calculated using CPA (acquisition cost), AOV (revenue per order), and variable costs. It provides a more accurate profitability picture than ROAS alone. Blended CAC and LTV provide the broader context for whether contribution margins are sustainable long-term.",
};
export default data;
