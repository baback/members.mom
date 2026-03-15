import type { CreatePageData } from "./_shared";

const data: CreatePageData = {
  title: "Create AI Social Proof Videos — Trust That Converts",
  readTime: "7 min",
  meta: "Create AI social proof videos that build trust and drive conversions. Includes script framework, hook templates, and best practices for trust-building video content.",
  intro: "92% of consumers read online reviews before purchasing, and video reviews are trusted 3x more than text. Social proof isn't a marketing tactic — it's a psychological shortcut. When people are uncertain, they look to others for guidance. A social proof video puts a face and voice behind the recommendation, which activates trust circuits that text reviews can't reach. The challenge is volume. You need fresh social proof constantly — different demographics, different use cases, different platforms. Waiting for organic reviews trickles in too slowly. Paying creators is too expensive to scale. AI-generated social proof videos let you produce trust-building content on demand, matching your audience segments with actors and scripts that resonate.",
  what: {
    definition: "A social proof video is any video content that demonstrates other people using, endorsing, or benefiting from your product. It includes testimonials, review compilations, 'real customer' stories, and results showcases — all designed to reduce purchase anxiety through peer validation.",
    reasons: [
      { label: "Trust acceleration", text: "Social proof compresses the trust-building timeline. Without it, a new visitor needs 5–7 touchpoints before purchasing. With strong social proof, that number drops to 2–3. A single compelling video can do the work of multiple ad impressions." },
      { label: "Objection neutralizer", text: "Every potential buyer has objections — 'does it actually work?' 'is it worth the price?' 'will it work for me?' Social proof videos answer these objections through other people's experiences, which feels more credible than brand claims." },
      { label: "Conversion multiplier", text: "Adding social proof videos to product pages increases conversion rates by 15–35%. On landing pages, they reduce bounce rates by 20%. In retargeting campaigns, they're the highest-converting creative format." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Open with a relatable statement or surprising result that signals 'this person is like me and they found something that works.'", examples: ["\"I was the biggest skeptic. Now I'm on my third order.\"", "\"Everyone kept recommending this and I finally understand why.\""], why: "Both hooks establish credibility through initial skepticism. A converted skeptic is more persuasive than an enthusiastic fan because the viewer identifies with the doubt.", mistake: "Opening with praise. 'I LOVE this product!' feels like a paid promotion. Skepticism-to-belief is a more convincing arc." },
    { step: "The Setup", time: "3–8 seconds", what: "Share the context — what problem you had, what you'd tried before, and why you were skeptical.", examples: ["\"I've tried every productivity app out there. Notion, Asana, Monday — they all start great and then I stop using them after a week. I didn't think another tool would be any different.\""], why: "Naming specific alternatives shows experience and positions the product against known competitors. The viewer who's also tried those tools immediately relates.", mistake: "Being too generic. 'I had a problem and this fixed it' doesn't create connection. Specifics do." },
    { step: "The Payoff", time: "8–20 seconds", what: "Share the specific result or experience that changed your mind. Use numbers, timelines, or visible proof.", examples: ["\"Two months in and I haven't missed a single deadline. My team actually uses it — that's never happened before. Our project completion rate went from 60% to 94%.\""], why: "Specific metrics ('60% to 94%') are more persuasive than superlatives ('it's amazing'). The team adoption detail adds a layer of social proof within the social proof.", mistake: "Vague praise without evidence. 'It changed everything' means nothing without specifics." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Close with a personal endorsement that feels like advice from a friend.", examples: ["\"If you're on the fence, just try it. I wish someone had told me about this sooner.\"", "\"This is the one. Trust me. Link in bio.\""], why: "The regret framing ('wish someone had told me sooner') creates urgency without being pushy. It implies the viewer is currently missing out." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"I was NOT going to buy this. Then my coworker\nshowed me her results and I caved."\n[Direct to camera, slightly sheepish expression]\n\n[SETUP — 3-8s]\n"I've been burned by so many products that promise\nresults and deliver nothing. I had zero expectations.\nI literally bought it just to prove my coworker wrong."\n[Casual setting, honest tone]\n\n[PAYOFF — 8-18s]\n"It's been 6 weeks. My coworker was right and I\nwas wrong. My [specific result] improved by [metric].\nI use it every single day now. My husband started\nusing it too — that's when I knew it wasn't just me."\n[Show product, genuine surprise]\n\n[CTA — 18-22s]\n"Don't be stubborn like me. Just try it. Link in bio."\n[Laugh, point to link]`,
  hooks: [
    { line: "I bought this to prove it doesn't work. I was wrong.", trigger: "The contrarian setup is compelling because it implies the product overcame active skepticism — the strongest form of social proof.", products: "Any product with skepticism barriers — supplements, skincare, SaaS, fitness" },
    { line: "3 of my friends recommended this. They were all right.", trigger: "Multiple independent recommendations signal strong word-of-mouth. The viewer thinks 'if 3 people agree, it must be good.'", products: "Consumer products with word-of-mouth potential — beauty, food, apps, services" },
    { line: "I've spent $[amount] on [category] this year. This is the only one that worked.", trigger: "The spending amount establishes authority through experience. 'Only one that worked' creates a clear winner.", products: "Competitive categories — skincare, supplements, productivity tools, fitness equipment" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–30 seconds for ads, 30–60 seconds for product pages. Social proof should be concise — the viewer needs the verdict quickly, not a documentary." },
    { label: "Diversity", text: "Create social proof videos with different demographics, use cases, and pain points. A 25-year-old's experience resonates with 25-year-olds; a parent's experience resonates with parents." },
    { label: "Specificity", text: "Specific results beat general praise every time. 'My energy levels improved by week 2' converts better than 'I feel so much better.' Numbers, timelines, and measurable outcomes." },
    { label: "Skepticism arc", text: "The most persuasive social proof follows a skeptic-to-believer arc. Start doubtful, end convinced. This mirrors the viewer's own mental state." },
    { label: "Volume", text: "One social proof video is a data point. Ten social proof videos are a pattern. Create multiple variations to build overwhelming evidence across your marketing touchpoints." },
    { label: "Captions", text: "Highlight key results and metrics in captions. Use quote-style formatting to make statements feel like real testimonials. Bold the transformation moment." },
  ],
  whenToUse: {
    stage: "Mid to bottom funnel. Social proof is most effective for audiences who are considering a purchase and need validation. Essential for retargeting campaigns.",
    audience: "Skeptical buyers who need peer validation before committing. They've seen your product, they're interested, but they need someone else to say 'yes, it works.'",
    platforms: "Product pages, Facebook Feed, Instagram Feed, TikTok, email campaigns. Social proof videos should be present at every decision point in the buyer journey.",
    pairWith: "Layer social proof with product demos. The demo shows what the product does; the social proof shows that real people love the results.",
  },
  ctaLine: "Create social proof videos that build instant trust. No customer coordination, no filming logistics.",
};
export default data;
