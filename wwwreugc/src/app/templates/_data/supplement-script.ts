import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Supplements & Vitamins",
  scriptCount: 3,
  h1: "UGC Video Script for Supplements & Vitamins: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for supplement and vitamin brands — testimonial, routine, and myth-buster formats. Plus 5 hook variations to boost thumb-stop rate.",
  intro: "Supplement ads live or die on trust. Nobody wants to buy pills from a brand that feels like a late-night infomercial. UGC-style videos let real-looking people share real-sounding experiences — and that's what moves product in this category. Below are 3 proven scripts plus 5 hooks you can swap in today.",
  scripts: [
    {
      name: "The Supplement Testimonial",
      subtitle: "Best for: Building trust with skeptical cold audiences. Retargeting visitors who browsed but didn't buy.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"I was the person who said supplements don't work.\nLike, genuinely believed it was all placebo. Then\nmy doctor ran my bloodwork..."\n\n[SETUP — 3-10s]\n"Turns out my vitamin D was basically nonexistent.\nI was tired all the time, my mood was off, and I\njust thought that was normal. My doctor said to\nsupplement daily and give it 6 weeks."\n\n[PAYOFF — 10-20s]\n"It's been two months now. I'm not going to say it\nchanged my life overnight — it didn't. But around\nweek 4, I started waking up before my alarm. My\nenergy at 3pm stopped crashing. I actually feel\nlike a functioning human again."\n[Hold up bottle, show label briefly]\n\n[CTA — 20-25s]\n"If you've been dragging and you can't figure out\nwhy, get your levels checked. And if you need a\nsolid D3, this is the one I use. Link in bio."`,
      notes: [
        "Starting with skepticism (\"I said supplements don't work\") disarms the viewer's own skepticism — they see themselves in the speaker",
        "The doctor reference adds authority without making medical claims. Always frame as personal experience, never as medical advice",
        "\"Around week 4\" is specific and believable. Vague timelines like \"immediately\" or \"right away\" trigger BS detectors",
        "Adapt the specific benefit (energy, mood, sleep) to whatever your supplement actually delivers. Specificity sells",
      ],
    },
    {
      name: "The Morning Routine Stack",
      subtitle: "Best for: Showing product in context. Mid-funnel audiences who already take supplements.",
      duration: "20–25 seconds",
      script: `[HOOK — 0-3s]\n"Here's my non-negotiable morning stack that\nactually makes a difference"\n[Show supplements laid out on counter]\n\n[ROUTINE — 3-14s]\n"First thing — magnesium glycinate. I take this\nfor sleep quality but I take it in the morning\nbecause it doesn't make you drowsy, it just\nhelps your body recover from yesterday."\n[Pick up each bottle as mentioned]\n"Then omega-3. Not the cheap fish oil that makes\nyou burp — this one's algae-based and actually\nabsorbs properly."\n"And this is the one that surprised me most —"\n[Hold up featured product]\n\n[RESULT — 14-20s]\n"Since adding this to my stack three months ago,\nmy skin cleared up, my joints stopped clicking\nwhen I squat, and my recovery days went from\n3 to 1. That's not placebo — that's consistent."\n\n[CTA — 20-24s]\n"I linked everything below but honestly this\none's the game-changer. Check it out."`,
      notes: [
        "The \"stack\" format works because supplement buyers are often already taking something — this positions your product as the missing piece",
        "Mentioning other supplements (magnesium, omega-3) builds credibility. It shows the speaker is knowledgeable, not just shilling one product",
        "\"My joints stopped clicking when I squat\" is hyper-specific. Replace with your product's most tangible, observable benefit",
        "The casual \"I linked everything below\" CTA feels organic, not salesy",
      ],
    },
    {
      name: "The Supplement Myth-Buster",
      subtitle: "Best for: Cold audiences on TikTok and Reels. Educating while selling. Standing out in a crowded feed.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-3s]\n"You're wasting money on your multivitamin.\nHere's why."\n[Direct to camera, confident tone]\n\n[MYTH — 3-9s]\n"Most multivitamins use the cheapest form of\neach nutrient. Magnesium oxide? Your body\nabsorbs maybe 4% of it. Cyanocobalamin for\nB12? Your liver has to convert it first and\nhalf of people can't do that efficiently."\n\n[SOLUTION — 9-16s]\n"What you actually want is methylated B vitamins,\nchelated minerals, and bioavailable forms your\nbody can use immediately. That's what this does."\n[Hold up product]\n"Same nutrients, 3-4x better absorption."\n\n[CTA — 16-19s]\n"Stop paying for expensive urine. Link in bio\nfor the one that actually works."`,
      notes: [
        "\"You're wasting money\" is a pattern interrupt — it challenges something the viewer is currently doing, which demands attention",
        "The science section (magnesium oxide, cyanocobalamin) builds authority. Keep it simple enough for a general audience but specific enough to sound credible",
        "\"Expensive urine\" is a well-known phrase in the supplement world — using it signals insider knowledge",
        "This format works best for brands with a genuine bioavailability or formulation advantage",
      ],
    },
  ],
  hooks: [
    { line: "I stopped taking my multivitamin and switched to this instead...", trigger: "curiosity gap", note: "Implies the viewer's current supplement is wrong. Creates an open loop they need to close." },
    { line: "My nutritionist said most people are deficient in this and don't even know it", trigger: "authority + fear", note: "Combines expert credibility with a health concern. High engagement for wellness-focused audiences." },
    { line: "I've spent over $2,000 on supplements this year. These 3 are the only ones I'd rebuy.", trigger: "curation", note: "Positions the speaker as someone who's done the research. The number adds weight." },
    { line: "POV: you finally find a supplement that doesn't taste like chalk", trigger: "relatability", note: "Works for gummies, powders, or any supplement with a taste/texture advantage. Native TikTok format." },
    { line: "The supplement industry doesn't want you to know this", trigger: "conspiracy lite", note: "Triggers the viewer's distrust of big brands. Use carefully — back it up with a real insight, not clickbait." },
  ],
  tips: [
    "Never make medical claims in supplement UGC. Frame everything as personal experience: \"I noticed\" not \"it cures.\" This protects the brand and feels more authentic",
    "Show the actual product being taken — opening the bottle, pouring capsules, mixing powder. Physical interaction builds trust and demonstrates the product is real",
    "Supplement buyers are research-heavy. Including one specific ingredient or mechanism (\"methylated folate\" vs \"vitamins\") signals you know what you're talking about",
    "Test different demographics for the AI actor. A 30-year-old fitness enthusiast converts differently than a 50-year-old talking about joint health — match the actor to the benefit",
    "Add text overlays for any scientific terms. Viewers who watch without sound need to see \"magnesium glycinate\" spelled out to remember it",
  ],
  ctaLine: "Turn these supplement scripts into scroll-stopping videos. No filming required.",
};
export default data;
