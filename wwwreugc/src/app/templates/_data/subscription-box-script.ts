import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Subscription Boxes",
  scriptCount: 3,
  h1: "UGC Video Script for Subscription Boxes: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for subscription box brands — unboxing, value breakdown, and gifting formats. Plus 5 hooks that drive sign-ups.",
  intro: "Subscription boxes live and die on unboxing content. The moment someone opens a box on camera and reacts genuinely, that's your best ad. UGC-style unboxings convert because they recreate the experience the viewer will have — and that anticipation drives subscriptions. Here are 3 scripts built for subscription box brands.",
  scripts: [
    {
      name: "The Excited Unboxing",
      subtitle: "Best for: First impressions. Cold audiences who've never heard of your box.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"My monthly box just arrived and I'm so excited\nbecause last month's was incredible. Let's see\nif they topped it."\n[Show sealed box]\n\n[UNBOXING — 3-18s]\n[Open box, tissue paper reveal]\n"Okay first thing — a full-size artisan candle.\nThis alone retails for like $32. The scent is\ncedarwood and vanilla — obsessed."\n"Next — a handmade ceramic mug. This is\ngorgeous. It's heavy, it's unique, and it\nmatches my kitchen perfectly."\n"A bag of small-batch coffee — ooh, Ethiopian\nsingle origin. These guys know me."\n"And a linen tea towel with this beautiful\nprint. Every item feels curated, not random."\n[Show each item with genuine reactions]\n\n[CTA — 18-24s]\n"The box is $45 and there's easily $120 worth\nof stuff in here. I've been subscribed for\n6 months and it's the one subscription I'll\nnever cancel. Link in bio."`,
      notes: [
        "\"Last month's was incredible\" establishes a track record. It signals this isn't a one-time fluke — the quality is consistent",
        "Mentioning retail value for individual items ($32 candle) builds the value perception. Viewers mentally add up the total",
        "\"Every item feels curated, not random\" addresses the #1 concern with subscription boxes: getting stuff you don't want",
        "The value comparison ($45 box with $120 of products) is the most compelling argument for subscription boxes. Always include it",
      ],
    },
    {
      name: "The Value Breakdown",
      subtitle: "Best for: Price-conscious audiences. Mid-funnel viewers comparing subscription options.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"Let me break down exactly what $45 gets you\nin this month's box"\n[Show box contents laid out]\n\n[BREAKDOWN — 3-16s]\n"Item one — artisan candle. Retail: $32.\nItem two — ceramic mug. Retail: $28.\nItem three — single-origin coffee. Retail: $18.\nItem four — linen tea towel. Retail: $24.\nItem five — recipe card set. Retail: $12."\n[Point to each item, show price on screen]\n"Total retail value: $114. I paid $45.\nThat's 60% off without hunting for a single\ncoupon code."\n\n[CTA — 16-21s]\n"And it shows up at my door every month\nwithout me thinking about it. If you like\ndiscovering new brands without the markup,\nlink in bio."`,
      notes: [
        "The item-by-item price breakdown is the most effective format for subscription box ads. It makes the value undeniable",
        "Showing prices on screen reinforces the math visually. Viewers who watch on mute still get the value message",
        "\"60% off without hunting for a coupon code\" reframes the subscription as a smart financial decision, not an indulgence",
        "\"Shows up at my door without me thinking about it\" highlights the convenience factor that makes subscriptions sticky",
      ],
    },
    {
      name: "The Gift Recommendation",
      subtitle: "Best for: Holiday and occasion marketing. Audiences shopping for gifts.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"The gift that keeps showing up every month\nand they'll actually love every time"\n[Hold up gift-wrapped box]\n\n[PITCH — 2-12s]\n"I got my sister a 3-month subscription for\nher birthday. She called me after the first\nbox and said it was the best gift she's ever\ngotten. Not exaggerating — her words."\n"Every month she gets a curated box of [category]\nitems she'd never find on her own. It's like\ngiving someone a surprise every 30 days."\n[Show sample items from past boxes]\n\n[CTA — 12-17s]\n"They have 3, 6, and 12-month gift options.\nIf you're tired of giving gift cards, this\nis the move. Link in bio."`,
      notes: [
        "\"The gift that keeps showing up\" positions the subscription as a recurring gift — which is a unique value proposition",
        "The sister's reaction (\"best gift she's ever gotten\") is powerful social proof. Personal stories convert better than generic claims",
        "\"Items she'd never find on her own\" highlights the discovery element, which is the emotional core of subscription boxes",
        "Offering multiple duration options (3, 6, 12 months) gives the gift-giver flexibility and increases average order value",
      ],
    },
  ],
  hooks: [
    { line: "I've tried 12 subscription boxes this year. This is the only one I kept.", trigger: "curation authority", note: "Extensive testing establishes credibility. The single survivor creates powerful exclusivity." },
    { line: "My mailman probably thinks I have a shopping problem but it's just one subscription", trigger: "humor", note: "Self-deprecating humor that's relatable. The implication is that the box is so good it looks like multiple orders." },
    { line: "POV: you open a subscription box and actually love everything inside", trigger: "aspiration", note: "Addresses the common disappointment of getting items you don't want. This hook promises the ideal experience." },
    { line: "This $45 box had $120 worth of products and I use every single item", trigger: "value + utility", note: "Combines value perception with practical use. \"I use every item\" addresses the waste concern." },
    { line: "I cancelled all my other subscriptions except this one. Here's why it survived.", trigger: "subscription fatigue", note: "Acknowledges that people are over-subscribed. Surviving the purge is the ultimate endorsement." },
  ],
  tips: [
    "The unboxing moment is everything for subscription box UGC. Build anticipation with the sealed box, the tissue paper, the reveal. Don't rush the opening — it's the content",
    "Always include the retail value vs. subscription price comparison. It's the single most persuasive data point for subscription box marketing",
    "Show every item individually with a brief reaction. Viewers want to see the full contents to judge if the box is worth it for them",
    "Mention how many months you've been subscribed. Longevity signals consistent quality — \"6 months and counting\" is more convincing than a first-box review",
    "Test gift-giving angles during holidays (Christmas, Mother's Day, birthdays). Subscription boxes are one of the easiest gifts to sell because they solve the \"what do I get them\" problem",
  ],
  ctaLine: "Create subscription box UGC videos from these scripts. No unboxing table needed.",
};
export default data;
