import type { CreatePageData } from "./_shared";

const data: CreatePageData = {
  title: "Create AI Testimonial Videos — Social Proof at Scale",
  readTime: "8 min",
  meta: "Learn how to create AI testimonial videos that build trust and convert. Includes a step-by-step script framework, 3 hook variations, and best practices for every platform.",
  intro: "Testimonial-style video ads see 30% higher click-through rates than standard product ads. The reason is simple: social proof. When a viewer sees someone who looks like them sharing a genuine experience, the mental shortcut kicks in — \"if it worked for them, it'll work for me.\" But getting real customer testimonials on camera is a nightmare. You're coordinating schedules, shipping products, hoping the lighting is decent, and praying the customer doesn't freeze up. One usable video costs $300–$500 and takes 2–3 weeks. Here's how to create testimonial videos at scale with AI — and make them feel authentic enough that viewers can't tell the difference.",
  what: {
    definition: "A testimonial video is a short-form video where a person shares their experience with a product or service, typically in a casual, first-person format. It's the video equivalent of a 5-star review — but with a face, a voice, and emotion.",
    reasons: [
      { label: "Trust trigger", text: "Viewers see a real person (or realistic AI actor) sharing a personal experience. This activates social proof — the psychological principle that people follow the actions of others. A face and voice are 3x more persuasive than text alone." },
      { label: "Versatile format", text: "Works across TikTok, Instagram Reels, Facebook Feed, YouTube Shorts, and email. The same testimonial video can run on every platform with minor adjustments to length and CTA." },
      { label: "High conversion", text: "Testimonial-style ads consistently outperform product demos and branded content for bottom-funnel campaigns. They're especially effective for retargeting — showing social proof to someone who already visited your site is the nudge that converts browsers into buyers." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "An emotionally charged opening that hints at a story without revealing the outcome.", examples: ["\"Okay I need to be honest about this product...\"", "\"I was SO skeptical when I ordered this, but...\""], why: "Both hooks create an open loop — the viewer's brain needs closure. \"Be honest\" could go either way. \"Skeptical, but...\" implies a surprise. Neither reveals the verdict, which keeps people watching.", mistake: "Starting with the product name or a feature. \"I love [Product]'s new vitamin C serum\" kills curiosity instantly." },
    { step: "The Setup", time: "3–8 seconds", what: "Briefly describe the problem you had and what you tried before. Be specific — specificity is what makes it feel real.", examples: ["\"I've tried literally everything for my dark spots. The $60 serums, the dermatologist treatments, even lemon juice — yeah, don't do that. Nothing worked and I was about to give up.\""], why: "Name 2–3 things that didn't work. This shows experience (credibility) and positions the product as the thing that finally solved the problem (contrast).", mistake: "Making the setup too long. You have 5 seconds. Pick 2–3 failed solutions and move on." },
    { step: "The Payoff", time: "8–20 seconds", what: "Describe the specific result. Not \"it changed my life\" — that's vague. Instead: \"My dark spots faded by like 80% in 3 weeks. I'm not wearing any concealer right now.\"", examples: ["\"My dark spots faded by like 80% in 3 weeks. I'm not wearing any concealer right now.\""], why: "Specificity and proof. \"80% in 3 weeks\" is believable because it's not 100%. \"I'm not wearing concealer\" is visual proof the viewer can verify." },
    { step: "The CTA", time: "last 3–5 seconds", what: "A soft CTA that matches the casual tone. Hard sells feel jarring after an authentic testimonial.", examples: ["\"If you're dealing with [problem], just try it. Link in bio.\"", "\"I'm on my second bottle. That should tell you everything. Link below.\""], why: "Soft CTAs outperform hard sells for testimonials because they match the casual, authentic tone of the format." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"Okay I was NOT expecting this to actually work..."\n[Direct to camera, slightly surprised expression]\n\n[SETUP — 3-8s]\n"I've had dark spots for years. I've tried vitamin C serums,\nretinol, even a chemical peel — nothing made a real difference.\nMy friend kept telling me to try this and I finally gave in."\n[Hold product casually]\n\n[PAYOFF — 8-18s]\n"It's been 3 weeks. Look at my skin right now. These spots\nright here? They're like 80% lighter. I'm not wearing any\nmakeup in this video. This is just my skin."\n[Point to areas where spots were, show skin close-up]\n\n[CTA — 18-22s]\n"I'm already on my second bottle. If you've tried everything\nand nothing works, just try this one. Link in bio."\n[Hold up product, point down]`,
  hooks: [
    { line: "I was skeptical, but after 2 weeks I have to show you this...", trigger: "Overcomes the viewer's own skepticism by mirroring it. The \"I have to show you\" creates urgency.", products: "Supplements, skincare, fitness products, SaaS tools" },
    { line: "My friend has been telling me to try this for months and I finally did...", trigger: "Third-party recommendation hook. Implies the product has word-of-mouth buzz.", products: "Any consumer product — especially effective when the viewer has also heard of the product" },
    { line: "I've tried literally everything for [problem]. This is the only thing that actually worked.", trigger: "The \"last resort\" hook. Positions the product as the solution after everything else failed.", products: "Health, beauty, cleaning, and pain-point-heavy products" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–25 seconds for paid ads, 25–45 seconds for organic. Cold traffic needs shorter; retargeting audiences will watch longer." },
    { label: "Tone", text: "Conversational and slightly imperfect. Add filler words (\"like\", \"literally\", \"honestly\"), natural pauses, and casual phrasing. If the script reads like a press release, rewrite it." },
    { label: "Visual style", text: "Selfie-style, natural lighting, casual setting (bedroom, bathroom, kitchen). Polished studio lighting actually hurts performance for testimonials." },
    { label: "Actor matching", text: "The AI actor should match your target customer's demographic. A 22-year-old promoting anti-aging cream won't convert with a 45-year-old audience." },
    { label: "CTA style", text: "Soft CTAs outperform hard sells. \"Link in bio\" converts better than \"Buy now — 20% off today only\" because it matches the casual tone." },
    { label: "Captions", text: "Always add burned-in captions. 85% of social media video is watched without sound initially. Captions also increase watch time by 15–25%." },
  ],
  whenToUse: {
    stage: "Mid to bottom funnel. Most effective for warm audiences (site visitors, email subscribers) and retargeting. Also works for cold traffic with a strong hook.",
    audience: "Problem-aware prospects who need social proof to convert. They know they have a problem, they've seen solutions, and they need someone to tell them \"this one actually works.\"",
    platforms: "TikTok, Instagram Reels, Facebook Feed. Also effective in email campaigns and on product pages.",
    pairWith: "Follow up with a product demo video for viewers who watched 50%+ of the testimonial. The testimonial builds trust; the demo shows the product in action.",
  },
  ctaLine: "Create testimonial videos in minutes. No camera, no creators, no editing.",
};
export default data;
