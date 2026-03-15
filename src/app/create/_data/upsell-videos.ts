import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Upsell & Cross-Sell Videos — Increase AOV",
  readTime: "7 min",
  meta: "Create AI upsell and cross-sell videos that increase average order value. Includes script framework, hook templates, and best practices for post-purchase revenue.",
  intro: "Upselling to existing customers is 5x cheaper than acquiring new ones, and cross-sell recommendations drive 35% of Amazon's revenue. The math is clear: your existing customers are your most profitable audience. But most brands rely on static product recommendations and generic 'you might also like' emails. Video upsells convert 3x better because they explain WHY the products work together — not just that they exist. A presenter saying 'this serum works twice as well when you pair it with this moisturizer' is infinitely more persuasive than a product grid. AI-generated upsell videos let you create personalized recommendations for every product combination without filming individual videos for each pairing.",
  what: {
    definition: "An upsell or cross-sell video recommends complementary or premium products to existing customers. It explains why the recommended product enhances their current purchase and provides a compelling reason to add it to their order or buy it next.",
    reasons: [
      { label: "Higher AOV", text: "A well-timed upsell video increases average order value by 10–30%. When a customer understands why two products work better together, they're willing to spend more because the perceived value increases." },
      { label: "Trust advantage", text: "Existing customers already trust you. They've bought, they've used, they're satisfied. This trust makes them 60–70% more likely to buy again compared to a new prospect seeing your brand for the first time." },
      { label: "Natural timing", text: "Post-purchase is the highest-trust moment. The customer just validated your brand with their wallet. A recommendation at this point feels helpful, not pushy — especially when it genuinely enhances their purchase." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Reference their recent purchase and tease an enhancement.", examples: ["\"You just got [product]. Here's how to make it work twice as well.\"", "\"Love [product]? Wait until you try it with this.\""], why: "Referencing the purchase creates immediate relevance. The enhancement promise ('twice as well') gives them a reason to keep watching.", mistake: "Starting with the upsell product. Lead with their purchase — they care about what they already bought. The upsell is the enhancement, not the focus." },
    { step: "The Setup", time: "3–8 seconds", what: "Explain why the combination works better than the single product.", examples: ["\"[Product A] is great on its own, but it's designed to work with [Product B]. The [ingredient] in A activates the [ingredient] in B, which means you get [enhanced result] instead of just [basic result].\""], why: "Scientific or logical reasoning for the pairing makes the upsell feel educational rather than promotional. The customer learns something, which builds trust.", mistake: "Just saying 'you should also buy this.' Without explaining WHY the products work together, the recommendation feels like a cash grab." },
    { step: "The Payoff", time: "8–20 seconds", what: "Show the combined result and quantify the improvement.", examples: ["\"Customers who use both products together see results 40% faster. I'm not making that up — we tracked it across 5,000 customers. The combo is genuinely better than either product alone.\""], why: "Data ('40% faster,' '5,000 customers') makes the claim credible. The casual delivery ('I'm not making that up') adds authenticity.", mistake: "Overselling the upsell. If the enhancement is modest, say so honestly. Overpromising leads to returns and lost trust." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Make it easy to add the product with a direct link.", examples: ["\"Add it to your routine. Link in bio — and it ships free with your next order.\"", "\"Try the combo. Your skin will thank you. Link below.\""], why: "Free shipping removes a friction point. 'Your skin will thank you' keeps the focus on the customer's benefit, not the sale." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"You got the serum — great choice. But you're only getting half the results without this."\n[Direct to camera, holding complementary product]\n\n[SETUP — 3-8s]\n"The serum delivers the active ingredients, but without a proper moisturizer to seal them in, half of it evaporates before it can work. This moisturizer was literally designed to pair with the serum. The formulas lock together."\n[Show both products, explain the pairing]\n\n[PAYOFF — 8-18s]\n"Customers who use both see results in 10 days instead of 3 weeks. We tested this with 3,000 customers — the combo outperforms the serum alone by 40%. It's not a gimmick. The science actually backs this up."\n[Confident, data-driven delivery]\n\n[CTA — 18-22s]\n"Add the moisturizer to your routine. Link in bio — free shipping on your next order."\n[Hold both products, point to link]`,
  hooks: [
    { line: "You're using [product] wrong if you're not pairing it with this.", trigger: "The 'wrong' framing creates urgency. The customer wants to maximize their purchase and fears they're missing out.", products: "Products with complementary pairings — skincare routines, tech ecosystems, supplement stacks" },
    { line: "The one product that makes [product] work 2x better. Most people don't know about this.", trigger: "The multiplier promise ('2x better') combined with insider knowledge ('most people don't know') creates strong motivation.", products: "Any product with a synergistic companion — serums + moisturizers, software + plugins, equipment + accessories" },
    { line: "I wish someone had told me to buy these together from the start.", trigger: "Regret framing implies the viewer is about to learn something that will save them time or improve their results.", products: "Product bundles, starter kits, complementary product lines" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–25 seconds for post-purchase upsells, 25–40 seconds for email cross-sells. Keep it brief — the customer already trusts you. You don't need a long pitch." },
    { label: "Explain the why", text: "Always explain why the products work better together. 'Buy this too' is a command. 'These ingredients activate each other' is education. Education converts better." },
    { label: "Timing", text: "Send upsell videos 1–3 days after purchase (before delivery) or 7–14 days after delivery (once they've experienced the first product). Both windows have high conversion potential." },
    { label: "Data backing", text: "Include data on the combined results when possible. 'Customers who use both see 40% better results' is more persuasive than 'they work great together.'" },
    { label: "Bundle pricing", text: "Offer a bundle discount or free shipping to reduce friction. The upsell should feel like a deal, not an additional expense." },
    { label: "Captions", text: "Display the product pairing visually — show both products with a '+' between them. Include the enhanced result as a bold caption. Make the value of the combo immediately clear." },
  ],
  whenToUse: {
    stage: "Post-purchase. Upsell videos target existing customers at the highest-trust point in the journey. Most effective 1–14 days after initial purchase.",
    audience: "Existing customers who recently purchased a product that has a natural companion. Segment by product purchased for relevant recommendations.",
    platforms: "Email (primary — triggered by purchase), post-purchase page, SMS, in-app recommendations. Upsell videos should appear at natural decision points.",
    pairWith: "Combine upsell videos with customer stories from people who use both products. The upsell explains the logic; the customer story provides social proof.",
  },
  ctaLine: "Create upsell videos that increase order value naturally. No pushy sales tactics, no generic recommendations.",
};
export default data;