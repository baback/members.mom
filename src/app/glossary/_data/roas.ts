import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "ROAS",
  h1: "What Is ROAS? Return on Ad Spend Explained",
  meta: "ROAS (return on ad spend) measures revenue generated per dollar spent on advertising. Learn how to calculate ROAS, set targets, and improve it through better creative.",
  definition: "Return on ad spend (ROAS) is the revenue generated for every dollar spent on advertising. A ROAS of 4x means you earned $4 in revenue for every $1 spent on ads. It's the primary profitability metric for e-commerce advertisers and the clearest indicator of whether your paid media investment is generating positive returns.",
  whyMatters: [
    { label: "It's the language of profitability", text: "While CPA tells you what you're spending per customer, ROAS tells you what you're earning. A $30 CPA sounds great until you realize the average order is $25 (0.83x ROAS — you're losing money). ROAS connects ad performance directly to revenue, making it the metric that CFOs and founders actually care about." },
    { label: "It guides budget allocation", text: "ROAS tells you where to put your money. If your Meta campaigns deliver 3.5x ROAS and your TikTok campaigns deliver 5.2x ROAS, you should be shifting budget to TikTok. If one creative delivers 6x ROAS and another delivers 1.8x, you scale the winner and kill the loser. ROAS is the decision-making metric for every budget conversation." },
    { label: "It accounts for revenue quality", text: "Two ads might have the same CPA but very different ROAS if they attract different types of buyers. An ad targeting premium customers might have a higher CPA but also a higher AOV, resulting in better ROAS. This is why ROAS is a more complete metric than CPA for e-commerce — it captures both the cost and the value of each acquisition." },
  ],
  howItWorks: [
    { heading: "Calculating ROAS", text: "ROAS = revenue from ads ÷ ad spend. If you spent $1,000 on ads and generated $4,000 in revenue, your ROAS is 4.0x. Break-even ROAS depends on your margins: if your gross margin is 60%, you break even at 1.67x ROAS (1 ÷ 0.6). Most e-commerce brands target 3–5x ROAS for sustainable growth, though this varies by margin structure, LTV, and growth stage." },
    { heading: "ROAS Pitfalls", text: "ROAS has blind spots. It doesn't account for returns and refunds (a 5x ROAS with a 30% return rate is really 3.5x). It doesn't capture customer lifetime value (a 2x ROAS on first purchase might be excellent if customers reorder 4 times). And platform-reported ROAS is often inflated due to attribution issues — Meta might claim credit for sales that would have happened anyway. Smart marketers use blended ROAS (total revenue ÷ total ad spend) alongside platform-reported ROAS for a more accurate picture." },
  ],
  example: "A DTC coffee brand runs three ad creatives on Meta. Creative A (studio product shot): 2.1x ROAS. Creative B (UGC testimonial): 4.3x ROAS. Creative C (AI-generated UGC with hook testing): 5.1x ROAS. Creative C wins not because the product or offer changed, but because the AI-generated approach allowed them to test 8 hook variations and find the one that attracted the highest-AOV customers. The winning hook ('I cancelled my coffee subscription after trying this') attracted customers who were already spending $40+/month on coffee — resulting in higher AOV and better ROAS.",
  product: {
    intro: "ReUGC improves ROAS by reducing creative costs and increasing the odds of finding high-performing ads:",
    points: [
      "Lower creative costs improve the ROAS equation — Every dollar saved on production is a dollar that can go into ad spend. ReUGC's plans ($49–$199/mo) replace thousands in monthly creator fees, directly improving your blended ROAS.",
      "Find high-ROAS creatives faster — More variations tested means more chances to find the creative that attracts high-value customers. Generate and test 10+ variations per week to find your ROAS outliers.",
      "Sustain winning ROAS longer — When a high-ROAS creative starts fatiguing, have fresh variations ready to deploy immediately. ReUGC ensures you're never stuck watching your best performer decline without a replacement.",
    ],
  },
  related: [
    { term: "CPA", slug: "cpa" },
    { term: "AOV", slug: "aov" },
    { term: "LTV", slug: "ltv" },
    { term: "Ad Spend", slug: "ad-spend" },
    { term: "Conversion Rate", slug: "conversion-rate" },
    { term: "Unit Economics", slug: "unit-economics" },
  ],
  relatedNote: "ROAS is the revenue-side counterpart to CPA (the cost side). It's directly influenced by AOV (higher order values improve ROAS) and should be evaluated alongside LTV for subscription or repeat-purchase businesses. ROAS feeds into broader unit economics and determines how much ad spend is sustainable.",
};
export default data;
