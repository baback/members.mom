import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Jewelry",
  scriptCount: 3,
  h1: "UGC Video Script for Jewelry Brands: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for jewelry brands — unboxing, everyday styling, and gift-giving formats. Plus 5 hooks that sparkle in the feed.",
  intro: "Jewelry is emotional — people buy it to mark moments, express identity, or treat themselves. UGC-style videos that capture that emotion outperform product photography because they show jewelry on real skin, in real light, with real stories attached. Here are 3 scripts built for jewelry brands.",
  scripts: [
    {
      name: "The Jewelry Unboxing",
      subtitle: "Best for: Luxury and mid-range brands. Cold audiences who appreciate presentation and quality.",
      duration: "20–25 seconds",
      script: `[HOOK — 0-3s]\n"I've been eyeing this necklace for 3 months\nand I finally treated myself"\n[Show sealed jewelry box]\n\n[UNBOXING — 3-15s]\n"The packaging alone — look at this. Magnetic\nclosure, velvet lining. It already feels special."\n[Open box slowly, reveal piece]\n"Oh my god. Okay the photos do not do this\njustice. The chain is so delicate but it feels\nsolid — like it's not going to tangle the\nsecond I put it in my jewelry box."\n[Hold up necklace, catch the light]\n"And the pendant — it's 14k gold vermeil so\nit won't turn my neck green. I've been burned\nby that before with other brands."\n[Put it on, show in mirror]\n\n[CTA — 15-22s]\n"This is the kind of piece you wear every day\nand never take off. I'm obsessed. Link in bio\n— they have a whole collection."`,
      notes: [
        "\"I've been eyeing this for 3 months\" signals desire and intentionality — this wasn't an impulse buy, which elevates the perceived value",
        "Slow unboxing builds anticipation. For jewelry, the reveal is the content. Don't rush it",
        "\"Won't turn my neck green\" addresses a real fear for online jewelry buyers. Mentioning materials (14k gold vermeil) builds confidence",
        "\"Wear every day and never take off\" positions the piece as a staple, not a trend. This justifies the price point",
      ],
    },
    {
      name: "The Everyday Stack",
      subtitle: "Best for: Increasing average order value. Mid-funnel audiences who already own one piece.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"My everyday jewelry stack — everything is from\none brand and I get compliments constantly"\n[Show wrist/neck/ears with jewelry]\n\n[STYLING — 3-16s]\n"Ears — these tiny gold huggies. I sleep in\nthem, shower in them, never take them off.\nStill no tarnish after 4 months."\n[Close-up of earrings]\n"Neck — I layer these two chains. The shorter\none is a 16-inch choker length, the longer one\nis 20 inches with a small pendant. Together\nthey look expensive but the set was under $80."\n[Show layered necklaces]\n"Wrist — this thin bangle. It's adjustable so\nit actually fits without sliding around."\n[Show bracelet]\n\n[CTA — 16-21s]\n"The whole stack is under $150 and it looks\nlike I spent way more. Link in bio — they\nhave bundle deals too."`,
      notes: [
        "\"I get compliments constantly\" is social proof that doesn't feel forced. External validation drives jewelry purchases",
        "\"Still no tarnish after 4 months\" addresses the #1 quality concern for affordable jewelry. Time-tested claims build trust",
        "Showing the total price (\"under $150\") reframes individual pieces as an affordable collection. This drives multi-item purchases",
        "Close-up shots are essential for jewelry. Show the detail, the light catching the metal, the way it sits on skin",
      ],
    },
    {
      name: "The Gift-Giving Story",
      subtitle: "Best for: Holiday and occasion marketing. Audiences shopping for gifts (Valentine's, Mother's Day, anniversaries).",
      duration: "16–22 seconds",
      script: `[HOOK — 0-3s]\n"I got my mom this for her birthday and she\ncried. Like actually cried."\n[Hold up jewelry box]\n\n[STORY — 3-14s]\n"I wanted something meaningful — not another\ncandle or gift card. I found this brand that\ndoes custom birthstone necklaces. You pick the\nstones for each family member."\n[Show necklace with multiple stones]\n"I got one with all three of our birthstones.\nWhen she opened it and realized what each\nstone was, she completely lost it."\n\n[CTA — 14-19s]\n"If you need a gift that actually means\nsomething, this is it. They engrave too.\nLink in bio — order early because custom\npieces take a few days."`,
      notes: [
        "\"She cried\" is the ultimate emotional hook for gift content. It signals the gift was meaningful, not just nice",
        "The customization element (birthstones, engraving) adds perceived value and emotional weight",
        "\"Not another candle or gift card\" voices the frustration every gift-giver feels. It positions jewelry as the thoughtful alternative",
        "\"Order early\" creates urgency without being pushy. It's practical advice that also drives immediate action",
      ],
    },
  ],
  hooks: [
    { line: "I've worn this necklace every day for 6 months and it still looks brand new", trigger: "durability proof", note: "Longevity is the #1 concern for online jewelry buyers. Six months of daily wear is a powerful quality signal." },
    { line: "This $45 ring gets mistaken for my engagement ring constantly", trigger: "value perception", note: "Being mistaken for expensive jewelry is the ultimate compliment. The price reveal creates a \"wait, really?\" moment." },
    { line: "POV: you finally find jewelry that doesn't irritate your sensitive skin", trigger: "pain point", note: "Nickel allergies and skin sensitivity affect millions. This hook speaks directly to an underserved audience." },
    { line: "My boyfriend asked where I got this and now he's buying one for his mom", trigger: "organic endorsement", note: "A man noticing jewelry is unusual enough to be noteworthy. The gift extension shows universal appeal." },
    { line: "I stopped buying fast fashion jewelry and invested in this instead", trigger: "quality upgrade", note: "Positions the brand as a step up from disposable jewelry. Appeals to the \"buy less, buy better\" mindset." },
  ],
  tips: [
    "Lighting is everything for jewelry UGC. Natural light near a window creates the sparkle and warmth that makes pieces look their best on camera",
    "Show jewelry on skin, not on a display. Viewers need to see how it looks when worn — the scale, the way it catches light, how it moves",
    "Mention materials and construction details (14k gold, sterling silver, hypoallergenic, tarnish-resistant). Jewelry buyers are detail-oriented and these specifics justify the price",
    "For gift-oriented campaigns, include the recipient's reaction if possible. The emotional response is more persuasive than any product description",
    "Test different skin tones for the AI actor. Gold looks different on different skin tones, and representation helps every viewer imagine the piece on themselves",
  ],
  ctaLine: "Create stunning jewelry UGC videos from these scripts. No photoshoot needed.",
};
export default data;
