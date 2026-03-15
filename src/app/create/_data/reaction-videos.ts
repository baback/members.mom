import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Reaction Videos — First Impressions That Engage",
  readTime: "7 min",
  meta: "Create AI reaction videos that capture genuine first impressions and drive engagement. Includes script framework, hook templates, and best practices for reaction content.",
  intro: "Reaction videos are the third most-watched content category on YouTube and one of the highest-engagement formats on TikTok. The format works because humans are social creatures — we want to see how other people respond to things. A reaction video lets the viewer experience a product through someone else's eyes, complete with surprise, delight, or skepticism. It's vicarious consumption at its most engaging. For brands, reaction content is powerful because it feels unscripted and authentic. The 'first impression' framing removes the suspicion of a rehearsed pitch. AI-generated reaction videos let you produce this spontaneous-feeling content on demand — capturing the energy of a genuine first reaction without the logistics of coordinating real first-time users.",
  what: {
    definition: "A reaction video captures someone's real-time response to trying, seeing, or experiencing a product for the first time. The format prioritizes genuine emotion — surprise, excitement, skepticism — over polished presentation.",
    reasons: [
      { label: "Emotional contagion", text: "Emotions are contagious. When a viewer watches someone genuinely surprised or delighted by a product, they experience a shadow of that emotion themselves. This emotional transfer is more persuasive than any logical argument." },
      { label: "Authenticity signal", text: "First impressions can't be faked (or at least they shouldn't look faked). The reaction format signals 'this is real, unfiltered, and honest' — which is exactly what skeptical social media users are looking for." },
      { label: "High engagement", text: "Reaction videos generate 2–3x more comments than standard product content because viewers want to share their own reactions. 'Same!' 'I need to try this!' — the format invites participation." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Set up the reaction with anticipation. The viewer should know something is about to happen.", examples: ["\"I've never tried [product] before. Let's see if it lives up to the hype...\"", "\"Everyone says this is life-changing. I'm about to find out.\""], why: "The 'never tried before' framing guarantees a genuine first impression. 'Lives up to the hype' creates stakes — will it pass or fail?", mistake: "Revealing the reaction in the hook. 'I LOVED this product' kills the suspense. The reaction IS the content — don't spoil it." },
    { step: "The Setup", time: "3–8 seconds", what: "Show the product and set expectations. What have you heard? What are you expecting?", examples: ["\"Okay so TikTok has been going crazy over this. It's supposed to [key claim]. I'm honestly skeptical but let's see.\""], why: "Referencing social buzz validates the product's relevance. Expressing skepticism makes the eventual positive reaction more impactful.", mistake: "Over-researching before the reaction. The less you know going in, the more genuine the reaction feels." },
    { step: "The Payoff", time: "8–20 seconds", what: "React in real time. Show the genuine response — surprise, delight, or impressed skepticism. Be specific about what surprised you.", examples: ["\"Oh wow. Okay. The texture is... this is not what I expected. It's so smooth. And look — it literally disappeared into my skin. I'm actually impressed. My skin feels like silk right now.\""], why: "Real-time narration of the experience creates a shared moment with the viewer. Specific sensory details ('smooth,' 'silk') make the reaction tangible.", mistake: "Over-the-top fake reactions. Viewers can spot performative surprise instantly. Subtle, genuine reactions are more persuasive." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Share your verdict and direct viewers to try it themselves.", examples: ["\"Okay the hype is real. I get it now. Link in bio if you want to try it.\"", "\"I'm genuinely surprised. This might be my new favorite. Link below.\""], why: "The converted skeptic verdict ('I get it now') is the most persuasive CTA because it mirrors the viewer's own journey from doubt to interest." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"I've been avoiding this product for months. Everyone keeps telling me to try it. Fine. Let's do this."\n[Holding sealed product, reluctant but curious]\n\n[SETUP — 3-8s]\n"This is [Product]. It claims to [key benefit] and it's all over my FYP. I don't usually believe the hype but I'm giving it a fair shot."\n[Open product, examine it]\n\n[PAYOFF — 8-18s]\n"Okay first of all, the smell is incredible. Applying it now... oh. OH. This texture is insane. It's like butter but it absorbs in seconds. My skin looks... wait. Is that a glow? I literally just put this on 10 seconds ago. What is happening."\n[Apply product, genuine surprise at texture and results]\n\n[CTA — 18-22s]\n"Alright. I was wrong. The hype is justified. Link in bio — you need to try this yourself."\n[Impressed expression, point to link]`,
  hooks: [
    { line: "I finally tried the product that broke TikTok. Here's my honest reaction.", trigger: "References viral popularity and promises an unfiltered response. The viewer wants to see if the viral product delivers.", products: "Trending products, viral items, products with strong social media presence" },
    { line: "My friend swore this would change my life. Let's see if she's right.", trigger: "Third-party recommendation creates stakes — will the friend be vindicated or embarrassed? The viewer watches to find out.", products: "Any product with word-of-mouth buzz — beauty, wellness, kitchen gadgets, tech" },
    { line: "Trying [product] for the first time and I'm NOT holding back my reaction.", trigger: "The 'not holding back' promise signals raw honesty. The viewer expects an unfiltered response, which builds trust.", products: "Bold-claim products, premium items, products with polarizing reviews" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "20–40 seconds for social, 60–120 seconds for YouTube. The reaction moment should happen within the first 15 seconds — don't make viewers wait too long for the payoff." },
    { label: "Genuine energy", text: "Reactions should feel spontaneous, not performed. Subtle surprise ('oh wow, okay') is more believable than exaggerated shock. Let the product speak for itself." },
    { label: "Real-time narration", text: "Talk through what you're experiencing as it happens. 'The texture is... oh, this is smooth' — the mid-sentence discovery feels authentic and keeps viewers engaged." },
    { label: "Skepticism setup", text: "Starting skeptical makes the positive reaction more impactful. 'I didn't think this would work' → 'okay I was wrong' is a more compelling arc than starting enthusiastic." },
    { label: "Sensory details", text: "Describe what you see, feel, and smell in real time. Sensory language creates a vicarious experience that makes the viewer want to try the product themselves." },
    { label: "Captions", text: "Emphasize reaction moments in captions — 'WAIT,' 'OH WOW,' 'I'M SHOOK.' These emotional markers keep sound-off viewers engaged through the reaction arc." },
  ],
  whenToUse: {
    stage: "Top to mid funnel. Reaction videos work for awareness (capturing attention with emotional content) and consideration (showing genuine first impressions that build trust).",
    audience: "Social media-native audiences who consume reaction content regularly. Particularly effective for Gen Z and millennials who value authenticity over polish.",
    platforms: "TikTok (native reaction format), Instagram Reels, YouTube Shorts, YouTube (long-form reactions). Also effective as product page content showing real first impressions.",
    pairWith: "Follow reaction videos with detailed reviews for viewers who want more depth. The reaction captures attention; the review provides the information needed to convert.",
  },
  ctaLine: "Create reaction videos that capture first-impression magic. No coordinating, no shipping products, no reshoots.",
};
export default data;