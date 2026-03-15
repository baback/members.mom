import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Beverages",
  scriptCount: 3,
  h1: "UGC Video Script for Beverage Brands: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for beverage brands — first sip reaction, daily routine, and comparison formats. Plus 5 hooks that drive thirst and conversions.",
  intro: "Beverage brands win on social when the content feels like a friend recommending their new favorite drink — not a commercial. UGC-style videos showing real reactions, real routines, and real opinions outperform polished brand content every time in this category. Here are 3 scripts ready to use.",
  scripts: [
    {
      name: "The First Sip Reaction",
      subtitle: "Best for: New flavor launches. Cold audiences who haven't tried your product yet.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"I keep seeing this drink everywhere so I finally\nbought one and I'm trying it live right now"\n[Hold up can/bottle, show label]\n\n[SETUP — 3-7s]\n"It's supposed to be a sparkling prebiotic soda\nthat's actually good for your gut. Only 5 grams\nof sugar. I'm skeptical because every 'healthy\nsoda' I've tried tastes like TV static."\n\n[REACTION — 7-17s]\n[Crack open can — show the fizz]\n[Take a sip, pause]\n"Okay that's not what I expected. That actually\ntastes like a real ginger ale. Like not a health\nfood store ginger ale — a real one."\n[Take another sip]\n"The carbonation is perfect too. It's not flat\nlike most of these. I'm actually going to\nfinish this."\n\n[CTA — 17-22s]\n"If you've been wanting to cut soda but hate\nthe alternatives, try this one first. Link\nin bio."`,
      notes: [
        "\"I keep seeing this everywhere\" positions the product as trending, which creates social proof before the review even starts",
        "The skepticism setup (\"tastes like TV static\") makes the positive reaction feel earned and genuine",
        "Cracking open the can is a sensory moment — the sound of fizz triggers a craving response. Always include it for carbonated beverages",
        "\"I'm actually going to finish this\" is a subtle but powerful endorsement. It implies most healthy drinks get abandoned halfway",
      ],
    },
    {
      name: "The Daily Routine Integration",
      subtitle: "Best for: Building habitual purchase behavior. Mid-funnel audiences considering switching from their current drink.",
      duration: "20–25 seconds",
      script: `[HOOK — 0-3s]\n"I replaced my afternoon coffee with this 3\nweeks ago and here's what changed"\n[Hold up product in kitchen setting]\n\n[ROUTINE — 3-14s]\n"Every day around 2pm I used to crash hard.\nLike staring-at-my-screen-reading-the-same-\nsentence-four-times kind of crash. So I'd\nhave another coffee, then I couldn't sleep\nuntil midnight. Repeat."\n"Now I drink this instead. It has L-theanine\nand adaptogens — so I get focused without\nthe jitters and I actually sleep at night."\n[Pour into glass, show color/texture]\n\n[RESULT — 14-20s]\n"My energy is way more stable throughout the\nday. No crash at 2pm, no lying awake at 11pm.\nAnd honestly it tastes better than my iced\ncoffee did."\n\n[CTA — 20-24s]\n"If the afternoon crash is ruining your\nproductivity, try swapping your second coffee\nfor this. Link in bio."`,
      notes: [
        "\"Replaced my afternoon coffee\" positions the product as a swap, not an addition. This is easier for consumers to adopt",
        "The crash description is hyper-specific (\"reading the same sentence four times\") which makes it relatable and memorable",
        "Mentioning specific ingredients (L-theanine, adaptogens) adds credibility for health-conscious buyers without being preachy",
        "The before/after structure (crash + insomnia → stable energy + sleep) gives the viewer a clear picture of the transformation",
      ],
    },
    {
      name: "The Beverage Comparison",
      subtitle: "Best for: Competitive positioning. Audiences who currently drink a competitor's product.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"Let's compare what's actually in your energy\ndrink vs. this one"\n[Hold up two cans side by side]\n\n[COMPARISON — 2-12s]\n"Your typical energy drink: 27 grams of sugar,\n300mg of caffeine, artificial colors, and a\ncrash 2 hours later."\n[Set down first can]\n"This one: zero sugar, 100mg of natural caffeine\nfrom green tea, B vitamins, and no crash because\nit's paired with L-theanine for slow release."\n[Hold up product]\n"Same energy. None of the garbage."\n\n[CTA — 12-17s]\n"I switched 6 months ago and I'm never going\nback to the old stuff. Link in bio if you\nwant to try it."`,
      notes: [
        "Side-by-side comparisons are one of the highest-performing ad formats for beverages because the category is so competitive",
        "Don't name the competitor directly — \"your typical energy drink\" is enough. The viewer fills in the blank with whatever they currently drink",
        "\"Same energy. None of the garbage.\" is a punchy summary line. Every comparison ad needs a one-liner that captures the difference",
        "\"6 months ago\" signals long-term use, not a one-time trial. This is more convincing than \"I just tried this\"",
      ],
    },
  ],
  hooks: [
    { line: "I stopped drinking coffee a month ago and I have more energy than ever", trigger: "counterintuitive", note: "Challenges a deeply held belief. Coffee drinkers will watch to see how this is possible." },
    { line: "This drink has 3 ingredients. Your soda has 47. Let that sink in.", trigger: "shock comparison", note: "The number contrast is jarring. Works for clean-label brands with simple ingredient lists." },
    { line: "My trainer told me to stop drinking energy drinks and try this instead", trigger: "authority redirect", note: "Trainer recommendation carries weight with fitness-adjacent audiences. Positions the product as the smart choice." },
    { line: "POV: you find a healthy drink that doesn't taste like you're being punished", trigger: "relatability", note: "Universal frustration with bad-tasting health drinks. High engagement across demographics." },
    { line: "I've spent $400 on drinks this year. These are the only 3 I keep rebuying.", trigger: "curation authority", note: "The dollar amount signals extensive testing. The viewer trusts the recommendation because the speaker has tried everything." },
  ],
  tips: [
    "Always show the pour. Liquid hitting ice, fizz rising in a glass, color catching the light — these are the money shots for beverage UGC. They trigger cravings",
    "Sound matters more for beverages than almost any other category. The crack of a can, the fizz, the pour — include audio cues even if most viewers watch on mute (captions handle the rest)",
    "Include the sugar content and calorie count if they're low. Health-conscious buyers make decisions based on these numbers",
    "Test different consumption contexts: morning routine, gym bag, desk at work, outdoor adventure. Each context targets a different audience segment",
    "If your product has a unique color or texture (matcha green, kombucha cloudiness, sparkling clarity), feature it prominently. Visual distinctiveness is free branding",
  ],
  ctaLine: "Create beverage UGC videos from these scripts in minutes. No studio needed.",
};
export default data;
