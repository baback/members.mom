import type { CreatePageData } from "./_shared";

const data: CreatePageData = {
  title: "Create AI Product Demo Videos — Show, Don't Tell",
  readTime: "7 min",
  meta: "Create AI product demo videos that show your product in action and drive conversions. Includes script framework, hook templates, and platform-specific best practices.",
  intro: "Product demo videos increase purchase likelihood by 73%. The reason is straightforward — seeing a product in action answers questions that photos and bullet points can't. How does it apply? What does the texture look like? How big is it in someone's hand? Demo videos bridge the gap between browsing and buying by giving viewers the closest thing to an in-store experience. But producing demo content is a bottleneck for most brands. You need a presenter, a setup, good lighting, and editing time. One demo video can eat an entire afternoon. AI-generated demos let you produce presenter-led product walkthroughs in minutes — with consistent quality and unlimited variations for testing.",
  what: {
    definition: "A product demo video shows a product being used, applied, or demonstrated by a presenter who narrates the experience. Unlike a review (which evaluates), a demo focuses on showing how the product works and what the experience feels like.",
    reasons: [
      { label: "Reduces uncertainty", text: "The #1 reason people don't buy online is uncertainty — they can't touch, feel, or try the product. Demo videos reduce this friction by showing the product in context. Size, texture, application, and results become visible." },
      { label: "Feature communication", text: "Bullet points list features. Demo videos show them. 'Lightweight formula' means nothing until you see it absorb in 3 seconds. 'Easy application' is abstract until you watch someone apply it in one motion." },
      { label: "Objection prevention", text: "A well-structured demo preemptively answers the questions that would otherwise become abandoned carts. 'Is it too thick?' 'Does it leave residue?' 'How much do you need per use?' — all answered visually." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Lead with the most impressive or surprising feature. The hook should make the viewer think 'I need to see this.'", examples: ["\"Watch how fast this absorbs — I've never seen anything like it.\"", "\"One pump. That's all you need. Let me show you.\""], why: "Both hooks promise a visual payoff. 'Watch how fast' and 'let me show you' are invitations to observe, which is exactly what demo viewers want.", mistake: "Starting with the product name and price. Nobody watches a demo for the spec sheet — they watch to see the product in action." },
    { step: "The Setup", time: "3–8 seconds", what: "Briefly introduce the product and set expectations for what you're about to demonstrate.", examples: ["\"This is [Product]'s new hydrating serum. It claims to absorb in under 5 seconds with no sticky residue. Let's test that.\""], why: "Framing the demo as a 'test' creates stakes. Will it live up to the claim? The viewer watches to find out. This is more engaging than a straightforward walkthrough.", mistake: "Reading the product description. Viewers can read — they're watching a video because they want to SEE." },
    { step: "The Payoff", time: "8–20 seconds", what: "Demonstrate the product and narrate what you're experiencing in real time. Focus on sensory details and visible results.", examples: ["\"Okay, one pump — look how lightweight that is. I'm pressing it in... and it's already absorbed. Feel my skin — completely dry. No stickiness. And my skin looks like it's glowing. This is genuinely impressive.\""], why: "Real-time narration makes the viewer feel like they're experiencing the product alongside you. Sensory details ('lightweight,' 'dry,' 'glowing') create a vicarious experience.", mistake: "Demonstrating without narrating. Silent demos lose viewers because there's no emotional engagement." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Close with a verdict and a natural recommendation.", examples: ["\"This is going into my daily routine. If you want skin that looks like this, link in bio.\"", "\"I'm genuinely impressed. Try it yourself — link below.\""], why: "The verdict ('going into my daily routine') is a stronger endorsement than 'buy this.' It implies ongoing use, which signals genuine satisfaction." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"Let me show you why this sold out 3 times..."\n[Hold product up to camera]\n\n[SETUP — 3-8s]\n"This is [Brand]'s vitamin C serum. It claims to\nbrighten skin in one application and absorb in\nunder 5 seconds. I've heard that before, so let's\nactually test it."\n[Show product label, skeptical but curious tone]\n\n[PAYOFF — 8-18s]\n"One drop on the back of my hand. Spreading it...\nand — okay, it literally disappeared. My skin already\nlooks brighter. Now on my face — it goes on smooth,\nno pilling, no sticky feeling. And look at this glow.\nI'm not wearing any highlighter right now."\n[Apply product, show absorption, show results]\n\n[CTA — 18-22s]\n"This is the real deal. If you want that glass skin\nlook, this is how you get it. Link in bio."\n[Show face, point to link]`,
  hooks: [
    { line: "Let me show you what $[price] gets you. This is worth every penny.", trigger: "Addresses the price objection head-on by promising value. The viewer watches to validate whether the price is justified.", products: "Premium products, luxury items, high-ticket skincare, tech gadgets" },
    { line: "I'm testing [brand]'s most popular product. Let's see if it lives up to the hype.", trigger: "The 'test' framing creates suspense. The viewer stays to see the verdict — pass or fail.", products: "Any product with brand recognition or social buzz" },
    { line: "One product, 30 seconds, and your skin will look like this. Watch.", trigger: "Speed and result promise. The viewer knows exactly what they'll see and how long it takes.", products: "Quick-result products — serums, primers, instant-effect cosmetics" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–30 seconds for social ads, 30–90 seconds for product pages. Social demos should focus on one feature; product page demos can be comprehensive." },
    { label: "Show, don't tell", text: "Every claim should be demonstrated visually. Don't say 'it absorbs quickly' — show it absorbing. Don't say 'it's lightweight' — show the texture on skin." },
    { label: "Close-ups", text: "Use close-up shots for texture, application, and results. Wide shots don't communicate product quality. Viewers need to see the details." },
    { label: "Real-time narration", text: "Narrate as you demonstrate. 'Watch this... see how it... and now look at...' — this guided observation keeps viewers engaged and directs their attention." },
    { label: "One feature focus", text: "For short-form demos, focus on one standout feature per video. Multiple features dilute impact. Create separate demos for each key feature." },
    { label: "Captions", text: "Use captions that highlight key moments — 'WATCH THIS,' 'LOOK AT THAT GLOW,' '5 SECONDS.' Action-oriented captions guide the viewer's attention." },
  ],
  whenToUse: {
    stage: "Mid to bottom funnel. Demo videos are most effective for audiences who know the product exists and need to see it in action before purchasing.",
    audience: "Visual learners and detail-oriented shoppers who want to see the product before committing. Particularly effective for products where texture, size, or application matters.",
    platforms: "Product pages (highest conversion impact), Instagram Reels, TikTok, YouTube Shorts. Also effective in email campaigns for cart abandonment sequences.",
    pairWith: "Pair with testimonial videos. The demo shows what the product does; the testimonial shows what it did for someone like the viewer.",
  },
  ctaLine: "Create product demo videos that show your product at its best. No studio, no crew, no delays.",
};
export default data;
