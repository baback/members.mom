import type { CreatePageData } from "./_shared";

const data: CreatePageData = {
  title: "Create AI Product Review Videos — Templates & Scripts",
  readTime: "8 min",
  meta: "Create AI-generated product review videos that build trust and drive purchases. Includes script framework, hook templates, and platform-specific best practices.",
  intro: "Product review videos influence 90% of online purchase decisions. They sit at the intersection of entertainment and education — viewers watch to learn, but they stay because they trust the reviewer. The problem? Authentic review content is hard to produce at scale. You either wait for customers to post organically (slow and unpredictable) or pay creators $250–$600 per review (expensive and inconsistent). AI-generated review videos solve both problems. You control the script, the pacing, and the messaging — while keeping the authentic, first-person feel that makes reviews convert.",
  what: {
    definition: "A product review video is a first-person video where someone evaluates a product — covering what it does, how it performs, and whether it's worth buying. The format ranges from quick 15-second takes to detailed 60-second breakdowns.",
    reasons: [
      { label: "Purchase intent", text: "Review videos target people who are already considering a purchase. They're Googling '[product] review' or scrolling through comments looking for validation. A well-structured review video is the final push they need." },
      { label: "SEO value", text: "Review content ranks for high-intent search queries. '[Product] review,' '[product] worth it,' and '[product] honest review' are all queries with strong commercial intent. Video reviews appear in Google's video carousel and YouTube search." },
      { label: "Objection handling", text: "A good review addresses the exact concerns a buyer has — does it actually work, is it worth the price, how does it compare to alternatives. Each objection you handle in the video removes a barrier to purchase." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Open with a verdict tease or a bold claim that makes the viewer need to hear more.", examples: ["\"I've tested 12 [product category] this year. This is the only one I kept.\"", "\"Is [product] actually worth $[price]? Here's my honest take after 30 days.\""], why: "The first hook uses authority (tested 12) and scarcity (only kept one). The second hook names the price objection directly, which resonates with anyone on the fence.", mistake: "Starting with 'Hey guys, today I'm reviewing...' — this is the most skippable opening in video content." },
    { step: "The Setup", time: "3–8 seconds", what: "Establish your context — why you tried the product, what you were looking for, and what your expectations were.", examples: ["\"I have combination skin that breaks out from basically everything. I've wasted hundreds on products that either dried me out or made me oily. I needed something that actually balanced both.\""], why: "Context makes the review relatable. When the viewer shares the same problem, they mentally insert themselves into the story and pay closer attention to the verdict.", mistake: "Jumping straight to features without establishing why you care. Features without context are just a spec sheet." },
    { step: "The Payoff", time: "8–20 seconds", what: "Deliver the verdict with specific observations. Cover what worked, what surprised you, and one honest criticism (this builds credibility).", examples: ["\"After 30 days: my skin is clearer than it's been in years. The texture is smoother, breakouts stopped by week two. The only downside — the pump dispenser is kind of cheap. But for the results? I don't care.\""], why: "The honest criticism ('cheap pump') actually increases trust. Viewers know no product is perfect, so acknowledging a flaw makes the positive claims more believable." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Close with a personal recommendation, not a sales pitch.", examples: ["\"If you've been going back and forth on this, just get it. I wish I hadn't waited so long. Link below.\"", "\"This replaced three products in my routine. That alone makes it worth it. Link in bio.\""], why: "Personal recommendations convert better than promotional CTAs because they maintain the reviewer's authentic voice throughout." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"I've been using this for 30 days and I need to give\nyou my honest review..."\n[Direct to camera, holding product]\n\n[SETUP — 3-8s]\n"So I have really sensitive skin that reacts to everything.\nI've tried probably 15 different moisturizers this year alone.\nMost of them either broke me out or did absolutely nothing."\n[Casual bathroom setting, natural lighting]\n\n[PAYOFF — 8-18s]\n"This one is different. By week two, the redness around\nmy nose was basically gone. My skin feels hydrated but\nnot greasy. The only thing I'll say — the scent is a little\nstrong at first. But it fades in like 30 seconds and the\nresults speak for themselves."\n[Show skin close-up, point to areas of improvement]\n\n[CTA — 18-22s]\n"If you have sensitive skin and you're tired of wasting\nmoney, this is the one. Link in bio."\n[Hold up product, tap link gesture]`,
  hooks: [
    { line: "I finally found a [product type] that actually works and I need to tell you about it...", trigger: "The 'finally' implies a long search, which resonates with anyone who's been disappointed by similar products before.", products: "Skincare, supplements, cleaning products, kitchen gadgets" },
    { line: "Honest review: I've been using [product] for 30 days. Here's what happened.", trigger: "The word 'honest' signals unbiased content. '30 days' implies thorough testing, not a first-impression snap judgment.", products: "Any product with a usage period — skincare, fitness equipment, software, subscriptions" },
    { line: "I almost returned this. Then week three happened...", trigger: "Creates a narrative arc in one sentence. The viewer needs to know what changed in week three.", products: "Products with delayed results — supplements, skincare, fitness programs, SaaS tools" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "20–35 seconds for paid social, 45–90 seconds for YouTube. Shorter reviews work for impulse purchases; longer reviews suit higher-priced products where buyers need more convincing." },
    { label: "Tone", text: "Honest and conversational. Include one genuine criticism — it makes the positive points 2x more believable. Viewers can smell a paid promotion from a mile away." },
    { label: "Visual style", text: "Show the product in use, not just in hand. Close-ups of texture, application, or results add visual proof that supports the verbal claims." },
    { label: "Specificity", text: "Replace vague praise with specific observations. 'It's amazing' means nothing. 'My pores looked smaller after 10 days' means everything." },
    { label: "Comparison framing", text: "Mention 1–2 alternatives you tried that didn't work. This positions your product as the winner without needing to trash competitors directly." },
    { label: "Captions", text: "Use bold, high-contrast captions with keyword emphasis. Highlight specific results ('80% clearer,' '3 weeks') in a different color to catch scanning eyes." },
  ],
  whenToUse: {
    stage: "Bottom funnel. Review videos are most effective for audiences who already know the product exists and are evaluating whether to buy. Perfect for retargeting and product page embeds.",
    audience: "Research-mode shoppers comparing options. They're reading reviews, watching YouTube comparisons, and looking for someone to validate their decision.",
    platforms: "YouTube (long-form reviews), TikTok and Instagram Reels (short-form), product pages (embedded), and email campaigns (post-browse follow-up).",
    pairWith: "Use review videos after running awareness ads. The awareness ad introduces the product; the review video provides the social proof that closes the sale.",
  },
  ctaLine: "Create product review videos in minutes. No creators, no waiting, no reshoots.",
};
export default data;
