import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Comparison Videos — Side-by-Side That Sells",
  readTime: "7 min",
  meta: "Create AI comparison videos that position your product against competitors. Includes script framework, hook templates, and best practices for side-by-side content.",
  intro: "Comparison searches are the highest-intent queries in e-commerce. When someone searches '[Product A] vs [Product B],' they're ready to buy — they just need help deciding. Comparison videos capture this intent by putting products side by side and letting the viewer see the difference. The format is powerful because it does the research for the buyer. Instead of opening 12 tabs and reading conflicting reviews, they watch a 30-second video that shows them exactly how the options stack up. AI-generated comparison videos let you own this narrative — positioning your product favorably in a format that feels objective and helpful.",
  what: {
    definition: "A comparison video evaluates two or more products side by side, highlighting differences in performance, price, features, or results. The format feels educational and objective, even when it's designed to favor one product.",
    reasons: [
      { label: "Decision-stage capture", text: "Comparison shoppers are at the bottom of the funnel. They've narrowed their options and need a final push. A comparison video that addresses their specific concerns can convert in a single view." },
      { label: "SEO opportunity", text: "'[Product] vs [Product]' queries have high search volume and strong commercial intent. Comparison videos rank in YouTube, Google Video, and TikTok search — capturing traffic from people ready to buy." },
      { label: "Perceived objectivity", text: "The comparison format feels unbiased even when it's not. By acknowledging competitor strengths before highlighting your advantages, you build credibility that pure promotional content can't achieve." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Name both products and tease the verdict. The viewer should know this is a comparison and feel compelled to see the result.", examples: ["\"I tested [Product A] and [Product B] for 30 days. One is clearly better.\"", "\"[Product A] vs [Product B] — I bought both so you don't have to.\""], why: "Naming both products captures search intent. 'One is clearly better' creates a need to know which one. 'So you don't have to' positions the video as a time-saver.", mistake: "Revealing the winner in the hook. The suspense of not knowing which product wins is what keeps viewers watching." },
    { step: "The Setup", time: "3–8 seconds", what: "Establish the comparison criteria — what you're testing and why these specific factors matter.", examples: ["\"I'm comparing them on three things: how fast they work, how they feel on skin, and whether the results last. These are the only things that actually matter.\""], why: "Defining criteria upfront makes the comparison feel structured and fair. 'The only things that actually matter' signals authority and cuts through noise.", mistake: "Comparing on too many factors. Three criteria is the sweet spot — enough to be thorough, few enough to be memorable." },
    { step: "The Payoff", time: "8–20 seconds", what: "Walk through each criterion with specific observations. Give the competitor credit where it's due, then show where your product wins.", examples: ["\"Absorption: Product A took about 10 seconds, Product B absorbed instantly. Texture: Product A is thicker — some people like that. Product B is lightweight, almost watery. Results after 30 days: Product A improved my skin maybe 20%. Product B? Night and day difference. 60% improvement, easy.\""], why: "Giving the competitor credit ('some people like that') builds objectivity. The results criterion is saved for last because it's the most persuasive — and where your product wins decisively." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Declare the winner and direct viewers to purchase.", examples: ["\"For me, it's [Product B]. Not even close. Link in bio if you want to try the winner.\"", "\"Save your money on [Product A]. Get [Product B] instead. Link below.\""], why: "A decisive verdict satisfies the viewer's need for a recommendation. 'Not even close' adds conviction that removes remaining doubt." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"I spent $80 testing these two serums for a month. Here's which one actually works."\n[Hold both products up to camera]\n\n[SETUP — 3-8s]\n"I'm comparing them on absorption speed, how they feel on skin, and actual results after 30 days. No brand deals, no bias — just what I experienced."\n[Place products side by side]\n\n[PAYOFF — 8-18s]\n"Absorption: Serum A takes about 15 seconds. Serum B disappears in 3. Texture: Serum A is sticky — I didn't love it under makeup. Serum B is silky, layers perfectly. Results: Serum A helped a little with brightness. Serum B cleared my texture AND my dark spots. It's not even a fair fight."\n[Show application of each, show skin results]\n\n[CTA — 18-22s]\n"Serum B wins by a mile. Link in bio — don't waste your money on the other one."\n[Hold up winner, point to link]`,
  hooks: [
    { line: "I bought both so you don't have to waste your money. Here's the winner.", trigger: "Positions the video as a money-saving service. The viewer feels grateful rather than sold to.", products: "Any competitive product category — skincare, tech, supplements, kitchen tools" },
    { line: "[Product A] costs twice as much as [Product B]. Is it worth it? I tested both.", trigger: "Price comparison hooks are irresistible because everyone wants to know if the expensive option is justified.", products: "Premium vs. budget alternatives in any category" },
    { line: "Everyone says [Product A] is the best. I disagree. Let me show you why.", trigger: "Contrarian opinions generate engagement because they challenge the viewer's assumptions.", products: "Market leaders vs. challenger brands" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "25–45 seconds for social, 60–120 seconds for YouTube. Comparison videos need enough time to feel thorough but not so long that viewers lose interest before the verdict." },
    { label: "Fairness framing", text: "Acknowledge competitor strengths before highlighting your advantages. 'Product A is great for X, but Product B wins on Y and Z' feels more credible than one-sided praise." },
    { label: "Visual side-by-side", text: "Show products simultaneously whenever possible. Split-screen application, texture comparison, and results photos make the comparison tangible and shareable." },
    { label: "Three criteria max", text: "Compare on exactly three factors. This is enough to feel comprehensive without overwhelming the viewer. Save the most persuasive criterion for last." },
    { label: "Decisive verdict", text: "Don't hedge. 'Both are good but...' is a weak ending. Pick a clear winner and state it with conviction. Viewers watch comparisons for a recommendation, not a tie." },
    { label: "Captions", text: "Use scoreboard-style captions — 'ROUND 1: Absorption' with a winner declared for each. This gamifies the comparison and keeps sound-off viewers engaged." },
  ],
  whenToUse: {
    stage: "Bottom funnel. Comparison videos target buyers who are choosing between specific options. They're the last piece of content before a purchase decision.",
    audience: "Research-mode shoppers actively comparing alternatives. They're searching '[product] vs [product]' and reading comparison articles. High intent, ready to buy.",
    platforms: "YouTube (highest search volume for comparisons), TikTok, Instagram Reels. Also effective on product pages and in retargeting campaigns for visitors who viewed competitor products.",
    pairWith: "Follow comparison videos with testimonial content from customers who switched from the competitor. This reinforces the comparison verdict with social proof.",
  },
  ctaLine: "Create comparison videos that position your product as the clear winner. No bias, no production delays.",
};
export default data;