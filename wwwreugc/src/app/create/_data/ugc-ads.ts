import type { CreatePageData } from "./_shared";

const data: CreatePageData = {
  title: "Create UGC Ads With AI — Scripts, Hooks & Templates",
  readTime: "8 min",
  meta: "Learn how to create UGC-style ads with AI actors. Includes a proven script framework, 3 hook templates, and best practices for TikTok, Reels, and Facebook.",
  intro: "UGC ads outperform branded creative by 4x on click-through rate and cost 73% less per acquisition. The format works because it doesn't look like an ad — it looks like a real person talking to their phone. But sourcing UGC creators is expensive ($200–$500 per video), slow (1–3 weeks turnaround), and unpredictable (half the deliverables need reshoots). With AI-generated UGC, you get the same scroll-stopping authenticity without the creator management headache. Here's the framework for building UGC ads that convert — and how to produce them at scale.",
  what: {
    definition: "A UGC ad is a paid advertisement that mimics the look and feel of user-generated content — selfie-style framing, casual speech, natural lighting. It's designed to blend into a social feed so viewers engage before they realize it's an ad.",
    reasons: [
      { label: "Native feel", text: "UGC ads match the visual language of organic content. On TikTok and Reels, polished brand ads get scrolled past in 0.3 seconds. UGC-style content gets 2.4x more watch time because it feels like a friend talking, not a brand selling." },
      { label: "Lower CPMs", text: "Platforms reward content that keeps users on the app. UGC-style ads generate higher engagement rates, which signals quality to the algorithm. Result: lower cost per thousand impressions and more efficient spend." },
      { label: "Scalable testing", text: "The biggest advantage of AI UGC is volume. Instead of one creator delivering one video in two weeks, you can generate 10 variations in an afternoon — different hooks, different actors, different angles — and let the data pick the winner." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "A pattern interrupt that stops the scroll. The best UGC hooks feel like the person is mid-thought or reacting to something.", examples: ["\"Stop scrolling if you've wasted money on [category] that didn't work.\"", "\"POV: you finally found a [product type] that actually delivers.\""], why: "Both hooks create immediate relevance. The first calls out a shared frustration. The second uses the POV format native to TikTok, which signals 'this is content, not an ad.'", mistake: "Opening with your brand name or a generic greeting like 'Hey guys!' — that's an instant scroll." },
    { step: "The Setup", time: "3–8 seconds", what: "Establish the problem or context in 1–2 sentences. Be specific about the pain point — vague problems don't resonate.", examples: ["\"I run a small skincare brand and I was spending $400 per UGC video. I needed 10 videos a month for testing. Do the math — that's insane.\""], why: "Specificity builds credibility. '$400 per video' and '10 videos a month' are concrete details that make the viewer nod along because they've experienced the same thing.", mistake: "Listing features instead of describing a problem. Nobody cares about features until they care about the problem." },
    { step: "The Payoff", time: "8–20 seconds", what: "Show the result or transformation. For UGC ads, this is where you demonstrate the product or share the outcome.", examples: ["\"I switched to ReUGC three months ago. I'm producing 30 videos a month now and my CPA dropped 40%. My creative team actually has time to strategize instead of chasing creators.\""], why: "The payoff needs numbers or visible proof. '30 videos a month' and 'CPA dropped 40%' are specific enough to be believable without sounding like marketing copy." },
    { step: "The CTA", time: "last 3–5 seconds", what: "A casual, direct call to action that matches the UGC tone. Don't switch to 'brand voice' here.", examples: ["\"Seriously, just check it out. Link's in my bio.\"", "\"I wish I'd found this sooner. Link below if you want to try it.\""], why: "The CTA should feel like a recommendation from a friend, not a sales pitch. Casual language maintains the authenticity you built in the first 20 seconds." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"Stop scrolling if you're still paying creators $300\nper UGC video..."\n[Direct to camera, slightly frustrated expression]\n\n[SETUP — 3-8s]\n"I was spending like $4,000 a month on UGC creators.\nHalf the videos needed reshoots, the turnaround was\n2 weeks minimum, and I couldn't test fast enough\nto keep up with creative fatigue."\n[Casual setting, talking naturally]\n\n[PAYOFF — 8-18s]\n"Then I found this AI tool that generates UGC-style\nvideos with realistic actors. I'm not kidding — I made\n15 ad variations last Tuesday. My best-performing ad\nthis month? AI-generated. $0.38 CPA."\n[Show phone with results, genuine surprise]\n\n[CTA — 18-22s]\n"If you're burning budget on creators and not testing\nenough, just try this. Link in bio."\n[Point down to link]`,
  hooks: [
    { line: "I stopped hiring UGC creators 3 months ago. Here's what I use instead...", trigger: "Curiosity gap — the viewer wants to know the alternative. Works because it implies a better solution exists.", products: "Any DTC brand, e-commerce store, or agency running paid social" },
    { line: "POV: your $300 UGC video gets outperformed by one you made in 10 minutes", trigger: "Relatable frustration meets unexpected outcome. The contrast between cost and speed creates intrigue.", products: "Marketing teams, agencies, Shopify stores, Amazon sellers" },
    { line: "My ad creative costs dropped 80% and my ROAS went up. Let me explain...", trigger: "Results-first hook. Leading with the outcome makes viewers stay to learn the method.", products: "Performance marketers, media buyers, growth teams" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–30 seconds for paid ads. TikTok and Reels reward content under 30 seconds with better distribution. For retargeting, you can push to 45 seconds." },
    { label: "Tone", text: "Casual, unscripted-sounding, slightly imperfect. Add verbal fillers like 'honestly,' 'like,' and 'literally.' If it sounds like it was written by a copywriter, it won't perform like UGC." },
    { label: "Visual style", text: "Selfie-mode, natural lighting, everyday setting. The more it looks like someone grabbed their phone and started talking, the better it performs." },
    { label: "Test volume", text: "Create at least 5 hook variations per concept. The hook determines 80% of performance. Same script with different opening lines can see 3x differences in CTR." },
    { label: "Platform fit", text: "Adjust aspect ratio (9:16 for TikTok/Reels, 1:1 for Facebook Feed) and CTA placement. Each platform has different sweet spots for where the CTA lands." },
    { label: "Captions", text: "Burned-in captions are non-negotiable. 92% of mobile users watch with sound off initially. Bold, high-contrast captions increase completion rate by 20%." },
  ],
  whenToUse: {
    stage: "All funnel stages. UGC ads work for cold traffic prospecting, mid-funnel consideration, and bottom-funnel retargeting. Adjust the hook and CTA intensity by stage.",
    audience: "Scroll-heavy social media users aged 18–45. Particularly effective for audiences that distrust traditional advertising and respond to peer recommendations.",
    platforms: "TikTok, Instagram Reels, Facebook Feed, YouTube Shorts. Also works as pre-roll on YouTube and in-feed on Snapchat.",
    pairWith: "Run UGC ads alongside product demo videos. UGC builds trust and stops the scroll; demos provide the detail that closes the sale.",
  },
  ctaLine: "Create UGC ads in minutes. No creators, no contracts, no reshoots.",
};
export default data;
