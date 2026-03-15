import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Thank You Videos — Post-Purchase Engagement",
  readTime: "7 min",
  meta: "Create AI thank you videos that boost post-purchase engagement and retention. Includes script framework, hook templates, and best practices for gratitude content.",
  intro: "A personalized thank-you video increases repeat purchase rates by 16% and reduces refund requests by 22%. The post-purchase moment is the most underutilized touchpoint in e-commerce. The customer just gave you money — and most brands respond with a generic order confirmation email. A thank-you video transforms that transactional moment into an emotional connection. It makes the customer feel valued, reinforces their purchase decision, and sets the stage for a long-term relationship. AI-generated thank-you videos let you produce this high-impact content at scale — different messages for different products, order sizes, and customer segments — without filming a new video for every scenario.",
  what: {
    definition: "A thank-you video is a post-purchase video that expresses gratitude, reinforces the customer's decision, and provides helpful next steps. It turns a transactional confirmation into a personal connection that drives loyalty and repeat purchases.",
    reasons: [
      { label: "Decision reinforcement", text: "Buyer's remorse peaks in the first 24 hours after purchase. A thank-you video that says 'you made a great choice' and explains what to expect reduces anxiety and prevents cancellations." },
      { label: "Relationship building", text: "A face saying 'thank you' creates an emotional bond that a text email can't. This personal touch transforms a one-time buyer into a loyal customer who feels connected to the brand." },
      { label: "Upsell opportunity", text: "The post-purchase moment is the highest-trust point in the customer journey. A thank-you video that naturally mentions complementary products converts at 3x the rate of cold upsell emails." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Express genuine gratitude immediately. The customer should feel appreciated in the first second.", examples: ["\"Hey! Your order just went through and I wanted to personally say thank you.\"", "\"You just joined 50,000 people who made the same choice. Welcome to the family.\""], why: "Immediate gratitude creates a positive emotional response. The personal tone ('I wanted to personally') makes it feel like a real message, not an automated email.", mistake: "Starting with order details or shipping information. Lead with emotion, not logistics." },
    { step: "The Setup", time: "3–8 seconds", what: "Reinforce their purchase decision. Tell them why they made a great choice.", examples: ["\"You picked our best-selling product for a reason — it works. Over 30,000 people use this daily and the reviews speak for themselves. You're going to love it.\""], why: "Social proof ('30,000 people') and confidence ('you're going to love it') combat buyer's remorse. The customer feels validated, not anxious.", mistake: "Skipping the reinforcement. Without it, the thank-you feels hollow. With it, the customer feels confident about their purchase." },
    { step: "The Payoff", time: "8–20 seconds", what: "Provide helpful next steps — how to use the product, what to expect, or when it'll arrive.", examples: ["\"Your order ships within 24 hours. When it arrives, here's a tip: use it on damp skin for the best results. You'll notice a difference within the first week. And if you have any questions, just reply to your confirmation email — we actually read every one.\""], why: "Practical tips show you care about their experience, not just their money. The 'we read every email' detail humanizes the brand and opens a communication channel.", mistake: "Ending with just 'thank you.' Provide value — tips, timeline, support access. Make the video useful, not just nice." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Invite them to share their experience or explore complementary products.", examples: ["\"Tag us when your order arrives — we love seeing your reactions. And check out [complementary product] if you want the full routine. Link in your email.\"", "\"Welcome to the family. We're here if you need anything.\""], why: "The tag invitation creates user-generated content. The complementary product mention is a soft upsell that feels like a helpful suggestion." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"Your order just shipped and I wanted to say a quick thank you."\n[Warm, genuine smile, direct to camera]\n\n[SETUP — 3-8s]\n"You just got our most popular product — and there's a reason it's our best seller. Over 40,000 people use this every day and the average rating is 4.8 stars. You made a great choice."\n[Reassuring, confident tone]\n\n[PAYOFF — 8-18s]\n"Quick tip: when it arrives, apply it to damp skin right after cleansing. Two pumps is all you need. You'll feel the difference immediately, but the real results show up around week 2. And if you have any questions at all, just reply to your order email. A real person will get back to you within a few hours."\n[Helpful, caring tone]\n\n[CTA — 18-22s]\n"Tag us when it arrives — we love seeing your first reactions. Welcome to the family."\n[Warm close, wave]`,
  hooks: [
    { line: "You just made one of the best decisions for your [skin/health/routine]. Here's why.", trigger: "Immediate validation reduces buyer's remorse. The viewer feels reassured about their purchase.", products: "Any product — skincare, supplements, tools, subscriptions" },
    { line: "Your order is on its way! Here's what to expect and how to get the best results.", trigger: "Practical value combined with excitement about the incoming order. The viewer feels cared for.", products: "Products that benefit from usage instructions — skincare, supplements, tech, food" },
    { line: "Welcome to the [Brand] family. 50,000 people made the same choice. Here's what happens next.", trigger: "Community framing ('family') combined with social proof ('50,000 people'). The customer feels part of something bigger.", products: "Community-driven brands, subscription services, lifestyle products" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–30 seconds. Thank-you videos should be brief and warm. The customer doesn't need a long video — they need to feel appreciated and informed." },
    { label: "Timing", text: "Send within 1 hour of purchase. The emotional impact of a thank-you diminishes with time. Immediate gratitude has the strongest effect on retention." },
    { label: "Personalization", text: "Create different thank-you videos for different products or order values. A first-time buyer gets a welcome message; a repeat customer gets a loyalty acknowledgment." },
    { label: "Usage tips", text: "Include one practical tip for getting the best results. This shows you care about their experience and reduces the chance of misuse leading to returns." },
    { label: "Support access", text: "Always mention how to reach support. Knowing help is available reduces anxiety and prevents negative reviews from frustrated customers." },
    { label: "Captions", text: "Keep captions warm and personal. Use the customer's product name in the caption. Include the usage tip as a text overlay so it's easy to reference later." },
  ],
  whenToUse: {
    stage: "Post-purchase. Thank-you videos are for the immediate post-purchase window — within the first hour of order confirmation.",
    audience: "New customers (welcome and onboard), repeat customers (acknowledge loyalty), high-value orders (reinforce the investment).",
    platforms: "Email (primary — embedded in order confirmation or follow-up), SMS, post-purchase landing pages. Also effective as in-app messages for SaaS products.",
    pairWith: "Follow thank-you videos with onboarding content and, after a usage period, request a review. The thank-you builds goodwill; the review request capitalizes on it.",
  },
  ctaLine: "Create thank-you videos that turn buyers into loyal customers. No filming, no per-order production costs.",
};
export default data;