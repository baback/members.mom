import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Food & Snacks",
  scriptCount: 3,
  h1: "UGC Video Script for Food & Snack Brands: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for food and snack brands — taste test, unboxing, and recipe hack formats. Plus 5 hooks that make viewers hungry and ready to buy.",
  intro: "Food content is the most shared category on social media — and UGC-style taste tests outperform branded food photography because they feel spontaneous and honest. A real reaction to a first bite is worth more than a thousand styled flat-lays. Here are 3 scripts built for food and snack brands.",
  scripts: [
    {
      name: "The Honest Taste Test",
      subtitle: "Best for: New product launches. Cold audiences who've never tried your product.",
      duration: "20–25 seconds",
      script: `[HOOK — 0-3s]\n"Everyone's been talking about these so I finally\nordered them and I'm trying them for the first\ntime right now"\n[Hold up package, show brand clearly]\n\n[SETUP — 3-8s]\n"Okay so these are supposed to be high-protein\ncookies that actually taste like real cookies.\nI've tried every protein snack on the market\nand they all taste like cardboard with stevia.\nSo my expectations are low."\n\n[TASTE TEST — 8-18s]\n[Open package, show product, take a bite]\n"Wait. Hold on."\n[Genuine reaction — chewing, eyes widen]\n"That's actually... that's really good. Like\nthat tastes like a bakery cookie. There's no\nprotein aftertaste at all. How is this 16 grams\nof protein?"\n[Look at nutrition label, show it to camera]\n\n[CTA — 18-23s]\n"Okay I'm ordering more of these immediately.\nIf you're looking for a protein snack that\ndoesn't taste like punishment, this is it.\nLink in bio."`,
      notes: [
        "Setting low expectations (\"they all taste like cardboard\") makes the positive reaction more impactful and believable",
        "The pause after the first bite (\"Wait. Hold on.\") creates a micro-moment of suspense. Don't skip it — it's the emotional peak",
        "Showing the nutrition label adds credibility. Viewers can verify the claims themselves, which builds trust",
        "\"Doesn't taste like punishment\" is relatable humor that resonates with anyone who's tried bad health food",
      ],
    },
    {
      name: "The Snack Unboxing",
      subtitle: "Best for: Subscription snack boxes or variety packs. Mid-funnel audiences considering a purchase.",
      duration: "20–26 seconds",
      script: `[HOOK — 0-3s]\n"This snack brand just sent me their variety\npack and I'm ranking every single flavor"\n[Show sealed box]\n\n[UNBOXING — 3-18s]\n[Open box, pull out items one by one]\n"Okay first up — sea salt. Classic."\n[Taste] "Solid 7 out of 10. Good crunch, not\ntoo salty."\n"Jalapeño ranch —"\n[Taste] "Oh wow. 9 out of 10. That kick at\nthe end is perfect."\n"And the one everyone talks about — truffle\nparmesan."\n[Taste] "...yeah that's a 10. That's going\nto be a problem because I just ate the whole\nbag in 30 seconds."\n\n[CTA — 18-23s]\n"The variety pack is the move — you get all\n6 flavors. Truffle parmesan is the star but\nhonestly there's no bad one. Link in bio."`,
      notes: [
        "Rating each flavor gives the video structure and keeps viewers watching to see the scores. It's a built-in retention mechanic",
        "Not giving everything a 10 makes the ratings believable. The 7/10 for sea salt makes the 10/10 for truffle parmesan more credible",
        "\"That's going to be a problem\" is natural humor that signals genuine enjoyment. It's more convincing than \"this is amazing\"",
        "Recommending the variety pack specifically drives higher AOV than recommending a single flavor",
      ],
    },
    {
      name: "The Recipe Hack",
      subtitle: "Best for: Showing product versatility. Audiences who cook or meal prep. Organic-feeling content.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"The easiest high-protein meal I make every week\nand it takes 5 minutes"\n[Show ingredients laid out]\n\n[RECIPE — 2-13s]\n"Greek yogurt base — add a scoop of their\nvanilla protein granola on top."\n[Pour granola, show texture]\n"Handful of frozen berries — they thaw in\nlike 2 minutes and make it taste like dessert."\n[Add berries]\n"Drizzle of honey. That's it. 35 grams of\nprotein, tastes like a parfait from a café,\ncosts about $2."\n[Show finished bowl]\n\n[CTA — 13-17s]\n"I eat this 4 days a week and I never get\nbored of it. The granola is the key — link\nin bio."`,
      notes: [
        "Recipe content has the highest save rate on Instagram and TikTok. Saved content = free future impressions",
        "\"5 minutes\" and \"$2\" remove the two biggest barriers: time and cost. Include both whenever possible",
        "The product is positioned as an ingredient, not the whole meal. This feels less like an ad and more like a genuine recommendation",
        "\"I eat this 4 days a week\" signals habitual use, which is the strongest form of endorsement for food products",
      ],
    },
  ],
  hooks: [
    { line: "I'm a chef and even I was surprised by how good this tastes", trigger: "authority + surprise", note: "Professional credibility makes the endorsement more powerful. Works for premium or gourmet snack brands." },
    { line: "My kids won't eat anything healthy but they demolished these in one day", trigger: "parent relatability", note: "Speaks directly to parents struggling with picky eaters. Extremely high engagement with the 28-40 demographic." },
    { line: "This replaced my 3pm vending machine habit and I've saved $200 this month", trigger: "habit replacement", note: "Positions the product as a swap, not an addition. The savings add a practical incentive." },
    { line: "POV: you find a snack with clean ingredients that doesn't taste like grass", trigger: "relatability", note: "Taps into the universal disappointment of \"healthy\" snacks that taste terrible. Native TikTok format." },
    { line: "I've been eating these every day for 2 months and I just realized I should tell you about them", trigger: "casual discovery", note: "Feels like an organic recommendation, not a planned ad. The time frame adds credibility." },
  ],
  tips: [
    "Food UGC needs to show the product being eaten. Sounds obvious, but many food ads only show packaging. The bite, the crunch, the reaction — that's what sells",
    "Close-up shots of texture (crunch, drizzle, steam) trigger cravings. Food content is visceral — use it. ASMR-style audio of crunching or pouring performs well",
    "Include macro information (protein, calories, sugar) if your product has a nutritional advantage. Health-conscious buyers want numbers, not just \"healthy\"",
    "Test different contexts: desk snack, post-workout, kids' lunchbox, road trip. Each context targets a different use case and audience segment",
    "Mention the price per serving if it's competitive. \"$1.50 per bag\" reframes a $30 box as an affordable daily habit",
  ],
  ctaLine: "Turn these food scripts into mouth-watering UGC videos. No kitchen required.",
};
export default data;
