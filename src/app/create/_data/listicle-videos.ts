import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Listicle Videos — 'Top 5' Content That Hooks",
  readTime: "7 min",
  meta: "Create AI listicle videos that hook viewers with ranked lists and drive engagement. Includes script framework, hook templates, and best practices for list-format content.",
  intro: "Listicle videos — 'Top 5,' 'Best 3,' '7 Things You Need' — are the most saved and shared content format on social media. The format works because it promises a defined amount of value in a structured package. The viewer knows exactly what they're getting: a curated list of recommendations, tips, or products. This predictability is comforting in a sea of random content. For brands, listicle videos are a Trojan horse. You can feature your product as one item in a curated list, which feels like an objective recommendation rather than an ad. AI-generated listicle videos let you produce this format at scale — different lists, different angles, different products — without the research and filming overhead.",
  what: {
    definition: "A listicle video presents information in a numbered list format — 'Top 5 products for X,' '3 mistakes to avoid,' '7 things I wish I knew.' The structure is inherently engaging because each item is a mini-reveal that keeps viewers watching for the next one.",
    reasons: [
      { label: "Completion drive", text: "Numbered lists trigger a psychological need for completion. If someone watches items 1–3, they feel compelled to watch 4 and 5. This drives higher completion rates than unstructured content, which boosts algorithmic distribution." },
      { label: "Save and share magnet", text: "Listicle videos are the most saved content type on Instagram and TikTok. People save them as reference material — 'I'll come back to this when I need to buy [product].' Every save signals value to the algorithm." },
      { label: "Native product placement", text: "Including your product as one item in a curated list feels like an editorial recommendation, not an ad. 'My top 5 serums' with your product at #1 is more persuasive than a standalone product ad." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "State the list topic and number. Create urgency or curiosity about what made the list.", examples: ["\"Top 5 skincare products under $30 that actually work. Number 1 changed my entire routine.\"", "\"3 products I'll never stop repurchasing. The last one is a game-changer.\""], why: "The number sets expectations. 'Number 1 changed my routine' creates anticipation for the top pick. 'The last one is a game-changer' keeps viewers watching until the end.", mistake: "Not stating the number upfront. 'Here are some products I like' doesn't have the same structural pull as 'Top 5.'" },
    { step: "The Setup", time: "3–8 seconds", what: "Briefly establish your credibility for making this list. Why should the viewer trust your curation?", examples: ["\"I've tested over 50 serums this year. These are the only 5 I'd actually spend my own money on.\""], why: "'Over 50 serums' establishes authority through volume. 'Spend my own money on' signals genuine endorsement — not sponsored, not gifted, personally purchased.", mistake: "Skipping the credibility setup. Without it, the list feels arbitrary. With it, the list feels curated by an expert." },
    { step: "The Payoff", time: "8–20 seconds", what: "Walk through the list with a brief, specific comment on each item. Save the best (your product) for #1.", examples: ["\"Number 5: [Product] — great for hydration, $22. Number 4: [Product] — best texture I've found. Number 3: [Product] — the one TikTok got right. Number 2: [Product] — incredible for sensitive skin. Number 1: [Your Product] — this replaced everything else. Nothing comes close.\""], why: "Quick, specific comments keep the pace fast. Saving your product for #1 gives it the most impactful position and the longest screen time.", mistake: "Spending equal time on every item. The top pick should get 2–3x more screen time than the others." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Direct viewers to the top pick with a clear recommendation.", examples: ["\"If you only try one, make it number 1. Link in bio for all of them.\"", "\"Save this list for your next shopping trip. Link below for my #1 pick.\""], why: "'If you only try one' simplifies the decision. 'Save this list' drives engagement metrics that boost distribution." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"5 products under $40 that outperform luxury brands. Number 1 is insane."\n[Direct to camera, confident]\n\n[SETUP — 3-8s]\n"I've spent thousands testing high-end and drugstore products side by side. These 5 budget picks beat products 3x their price."\n[Show products lined up]\n\n[PAYOFF — 8-18s]\n"Number 5: [Product] — $18, best cleanser I've used. Number 4: [Product] — $25, melts into skin. Number 3: [Product] — $30, TikTok famous for a reason. Number 2: [Product] — $28, my dermatologist approved. Number 1: [Product] — $35, and it replaced my $120 serum. I'm dead serious."\n[Show each product briefly, linger on #1]\n\n[CTA — 18-22s]\n"Save this list. If you only buy one, get number 1. Link in bio."\n[Hold up #1 product, point to link]`,
  hooks: [
    { line: "Top 3 [products] I'll never stop buying. Number 1 is non-negotiable.", trigger: "The 'never stop buying' framing signals long-term satisfaction, not a one-time purchase. 'Non-negotiable' adds conviction.", products: "Replenishable products — skincare, supplements, cleaning supplies, food items" },
    { line: "5 [products] that are worth every penny. I tested them all so you don't have to.", trigger: "Value validation combined with effort-saving. The viewer gets curated recommendations without doing the research.", products: "Any product category with multiple options — tech, beauty, kitchen, fitness" },
    { line: "The 3 biggest mistakes people make with [category]. Number 2 is costing you money.", trigger: "Mistake-based listicles create anxiety that drives completion. 'Costing you money' adds financial stakes.", products: "Categories with common misuse — skincare routines, supplements, cooking, fitness" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "20–40 seconds for social, 60–180 seconds for YouTube. Each list item should get 3–5 seconds on social; YouTube allows 15–30 seconds per item." },
    { label: "Odd numbers", text: "Lists of 3, 5, or 7 perform best. Odd numbers feel more curated and less arbitrary than even numbers. 'Top 5' outperforms 'Top 6' in engagement." },
    { label: "Save your best for #1", text: "Place your product at the top of the list. The #1 position gets the most attention, the longest screen time, and the strongest endorsement." },
    { label: "Quick pace", text: "Keep each item brief — one sentence of commentary per product. The format's strength is its pace. Lingering too long on any item breaks the rhythm." },
    { label: "Visual numbering", text: "Display the number on screen as you move through the list. This visual structure helps viewers track progress and creates anticipation for the next item." },
    { label: "Captions", text: "Use large, bold numbers (#5, #4, #3...) as visual markers. Include product names and prices in captions. The countdown format should be clear for sound-off viewers." },
  ],
  whenToUse: {
    stage: "Top to mid funnel. Listicle videos attract browsers and researchers. They work for discovery (new audiences) and consideration (comparing options).",
    audience: "Research-mode shoppers looking for curated recommendations. They're searching 'best [product] for [need]' and want someone to narrow down the options for them.",
    platforms: "TikTok (highest save rates for listicles), Instagram Reels, YouTube Shorts, Pinterest. Listicle videos also perform well in email newsletters as curated picks.",
    pairWith: "Follow listicle videos with detailed reviews of the #1 pick. The listicle introduces the product in context; the review provides the depth needed to convert.",
  },
  ctaLine: "Create listicle videos that rank, engage, and convert. No research, no filming, no editing.",
};
export default data;