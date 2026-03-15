import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Skincare & Beauty",
  scriptCount: 3,
  h1: "UGC Video Script for Skincare Products: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for skincare products — testimonial, problem-solution, and hook-demo-CTA formats. Plus 5 hook variations you can swap in today.",
  intro: "UGC-style video ads convert 2.4x better than branded content for skincare products — because skincare is personal, and people trust faces over logos. Below are 3 ready-to-use scripts plus 5 hook variations. Copy them, swap in your product details, and create.",
  scripts: [
    {
      name: "The Skincare Testimonial",
      subtitle: "Best for: Building trust with cold audiences. Retargeting site visitors who haven't purchased.",
      duration: "20–25 seconds",
      script: `[HOOK — 0-3s]\n"Okay so I've been using this serum for about 3 weeks\nnow and I have to be honest with you..."\n[Direct to camera, natural lighting, no makeup visible]\n\n[SETUP — 3-9s]\n"I've tried literally everything for my dark spots.\nThe $60 vitamin C serums, the retinol, even a chemical\npeel — and nothing actually made a visible difference.\nI was about to just accept it."\n\n[PAYOFF — 9-19s]\n"But look at my skin right now. These spots right here?\nThey're like 80% lighter. I'm not wearing any foundation\nin this video. This is just... my skin now."\n[Point to areas, show skin close-up, hold product]\n\n[CTA — 19-23s]\n"I'm already on my second bottle. If you've been\nstruggling with dark spots, just try it. Link in bio."\n[Hold up product, point down toward bio]`,
      notes: [
        "Swap \"dark spots\" for your customer's #1 skin concern (acne, texture, dryness, redness, fine lines)",
        "Replace \"3 weeks\" with a realistic timeline for your product — honesty converts better than hype",
        "The \"I have to be honest\" hook creates an open loop — keep it. It works because the viewer doesn't know if the review will be positive or negative",
        "\"I'm not wearing any foundation\" is a powerful proof statement. Adapt it: \"I'm not using any filter\" or \"This is straight out of the shower\"",
      ],
    },
    {
      name: "The Skincare Problem-Solution",
      subtitle: "Best for: Demonstrating product benefits. Mid-funnel audiences who know they have a problem.",
      duration: "18–25 seconds",
      script: `[HOOK — 0-3s]\n"If your skin looks good in the morning but turns into\nan oil slick by 2pm, listen up."\n[Direct to camera, relatable frustrated expression]\n\n[PROBLEM — 3-8s]\n"I used to blot my face 3 times a day. I tried mattifying\nprimers, setting sprays, even powder — and by lunch my\nmakeup was literally sliding off my face."\n\n[SOLUTION — 8-17s]\n"Then someone told me the problem wasn't oil control —\nit was hydration. My skin was overproducing oil because\nit was dehydrated. I switched to this moisturizer and\nwithin a week, the oil thing just... stopped."\n[Show product, apply a small amount]\n\n[CTA — 17-22s]\n"If you're fighting oil, stop trying to control it and\nstart hydrating. This is the one that worked for me.\nLink in bio."`,
      notes: [
        "The \"if you [specific problem], listen up\" hook is a qualifier — it immediately tells the right audience \"this is for you\"",
        "The problem section should describe the experience, not just name the condition. \"My makeup was sliding off\" is more relatable than \"I had oily skin\"",
        "The solution includes an insight (\"the problem wasn't oil control — it was hydration\") which makes the viewer feel like they learned something",
        "Adapt the problem/insight/solution to your product. The structure works for any skincare concern",
      ],
    },
    {
      name: "The Skincare Hook-Demo-CTA",
      subtitle: "Best for: Product-focused ads. Showing the product in action. Cold audiences on TikTok and Reels.",
      duration: "13–17 seconds",
      script: `[HOOK — 0-2s]\n"Stop scrolling if you have textured skin"\n[TEXT ON SCREEN: same as voiceover]\n[Hold product up, start moving immediately]\n\n[DEMO — 2-10s]\n[Show product being dispensed — the texture, the color]\n"One pump. Spread it on like this."\n[Apply to skin in real-time]\n"Feel how it just melts in? No residue, no stickiness."\n[Show skin absorbing product]\n\n[RESULT — 10-13s]\n[Close-up of skin after application]\n"Instant blur. Every single time."\n\n[CTA — 13-16s]\n[TEXT ON SCREEN: "Link in bio 👇"]\n"You need this in your routine."`,
      notes: [
        "\"Stop scrolling if you...\" is one of the highest-performing hook formats on TikTok. Replace \"textured skin\" with whatever concern your product addresses",
        "The demo section should be FAST. No pauses, no long explanations. Show the product being used in real-time with quick cuts",
        "\"Instant blur\" is a specific, visual result. Replace with your product's immediate visible effect: \"instant glow\", \"instant hydration\", \"instant calm\"",
        "This script is shorter by design. Demo-style ads work best under 17 seconds",
      ],
    },
  ],
  hooks: [
    { line: "I can't believe I'm showing you my skin without makeup right now...", trigger: "vulnerability", note: "Creates intimacy and trust. Great for before/after reveals and testimonials." },
    { line: "My dermatologist is going to hate me for saying this...", trigger: "controversy", note: "Implies insider knowledge. Extremely high thumb-stop rate. Use for unconventional ingredients or approaches." },
    { line: "POV: you finally find a serum that doesn't break you out", trigger: "relatability", note: "Native TikTok format. The \"POV:\" prefix signals organic content. Feels like a creator post, not an ad." },
    { line: "$14 and it outperforms my $80 serum", trigger: "value comparison", note: "Price anchoring. The viewer immediately thinks \"wait, really?\" Works for affordable products competing against premium brands." },
    { line: "3 weeks ago my skin looked completely different", trigger: "transformation", note: "Sets up a before/after story. The viewer wants to see the change. Works for any product with visible results over time." },
  ],
  tips: [
    "Replace product details but keep the emotional structure intact — the hook-setup-payoff-CTA flow is what converts, not the specific words",
    "Match the AI actor's demographic to your target customer. A 20-year-old promoting anti-aging serum won't convert with a 45-year-old audience",
    "Test each script with 3 different hooks before judging which script \"works.\" Often the hook is the variable, not the body",
    "Shorter is almost always better for cold traffic. Cut anything that doesn't earn its seconds",
    "Add captions — 85% of social video is watched without sound initially. Captions also increase watch time by 15–25%",
  ],
  ctaLine: "Turn these scripts into videos in minutes. No camera needed.",
};
export default data;
