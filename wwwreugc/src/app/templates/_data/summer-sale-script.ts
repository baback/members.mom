import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Summer Sales",
  scriptCount: 3,
  h1: "UGC Video Script for Summer Sales: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for summer sale campaigns — seasonal must-have, vacation prep, and clearance alert formats. Plus 5 hooks that drive summer spending.",
  intro: "Summer is the second-biggest shopping season after the holidays — and the energy is completely different. People are spending on experiences, outdoor living, travel prep, and treating themselves. UGC-style videos that capture that carefree summer energy convert because they make the viewer picture their own summer, upgraded. Here are 3 scripts built for summer sales.",
  scripts: [
    {
      name: "The Summer Must-Have",
      subtitle: "Best for: Seasonal products. Cold audiences scrolling during summer planning mode.",
      duration: "20–26 seconds",
      script: `[HOOK — 0-3s]\n"The one thing I bought last summer that I used\nevery single day — and it's on sale right now"\n[Bright, outdoor setting]\n\n[STORY — 3-16s]\n"Last June I bought [product] on a whim because\nit was on sale. I figured I'd use it a few times.\nI used it literally every day from June through\nSeptember."\n"Beach days, backyard hangs, road trips, even\njust sitting on my porch after work. It became\npart of my summer routine."\n[Show product in summer context]\n"My friends all bought one after seeing mine.\nBy August, our entire friend group had them.\nThat's when you know something is actually good\n— when people buy it without you even recommending\nit."\n\n[CTA — 16-22s]\n"Their summer sale just started — 30% off\neverything. This is the price I paid last year\nand it was worth every penny at full price.\nLink in bio."`,
      notes: [
        "\"Used every single day\" is the strongest product endorsement. Daily use for an entire summer means it's essential, not optional",
        "Listing multiple contexts (beach, backyard, road trips, porch) expands the perceived use case. The viewer sees it fitting into their own summer",
        "\"My friends all bought one\" is organic social proof. Unprompted purchases from friends signal genuine quality",
        "\"Worth every penny at full price\" makes the sale price feel like a steal. If it's worth full price, the discount is pure bonus",
      ],
    },
    {
      name: "The Vacation Prep",
      subtitle: "Best for: Travel-adjacent products. Audiences planning summer vacations.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"Everything I'm packing for my summer trip that\nI wish I'd had last year"\n[Show items laid out on bed]\n\n[PREP — 3-16s]\n"Last summer I went to Mexico and forgot half\nthe stuff I needed. This year I'm prepared."\n"This [product 1] — waterproof, fits in my\ncarry-on, and saved me from a sunburn disaster\nlast time I used it. $22 on sale."\n"This [product 2] — I bought the cheap version\nlast year and it broke on day 2. This one's\nbeen through 3 trips. $35 on sale."\n"And this [product 3] — the thing I didn't\nknow I needed until someone on TikTok\nrecommended it. Game-changer for long flights.\n$18 on sale."\n\n[CTA — 16-21s]\n"Summer sale prices on all of these right now.\nDon't pack regret — pack the right stuff.\nLink in bio."`,
      notes: [
        "\"Wish I'd had last year\" implies lessons learned from experience. The viewer trusts recommendations born from real travel mistakes",
        "Each item has a story (sunburn disaster, broke on day 2, TikTok discovery) that makes the recommendation feel personal, not generic",
        "Including sale prices for each item lets the viewer mentally calculate the total. Affordable individual prices drive multi-item purchases",
        "\"Don't pack regret\" is a memorable CTA that ties the purchase to the vacation experience",
      ],
    },
    {
      name: "The Clearance Alert",
      subtitle: "Best for: End-of-summer inventory clearance. Price-conscious audiences looking for deals.",
      duration: "13–18 seconds",
      script: `[HOOK — 0-2s]\n"Their summer clearance just dropped and these\nprices are not going to last. Let me show you."\n[Urgent, excited energy]\n\n[DEALS — 2-11s]\n"[Product 1] — was $89, now $39. That's 56% off.\nI paid full price for this in June and I'd do\nit again."\n"[Product 2] — was $65, now $29. This color is\nalmost sold out so if you want it, go now."\n"[Product 3] — was $120, now $52. This is the\none everyone's going to regret not grabbing.\nIt's their bestseller and it won't be this\nprice again until next summer."\n[Show each product with prices on screen]\n\n[CTA — 11-15s]\n"Summer clearance. Link in bio. These prices\nend when the stock runs out — not a marketing\ntrick, they're actually clearing inventory."`,
      notes: [
        "\"These prices are not going to last\" creates urgency without being pushy. It's a factual statement about clearance sales",
        "\"I paid full price and I'd do it again\" validates the product quality independent of the sale. The discount is a bonus, not the reason to buy",
        "\"Almost sold out\" and \"won't be this price again\" create scarcity. For clearance sales, this is usually genuinely true",
        "\"Not a marketing trick, they're actually clearing inventory\" addresses consumer skepticism about fake sales. Honesty builds trust",
      ],
    },
  ],
  hooks: [
    { line: "Summer sale haul — I spent $120 and got $400 worth of stuff", trigger: "value haul", note: "The savings ratio is immediately compelling. Viewers want to see what $120 bought and whether they should do the same." },
    { line: "The summer product I bought as a joke that became my most-used item all season", trigger: "unexpected favorite", note: "Low expectations exceeded is a great story arc. The viewer is curious about what the product is." },
    { line: "POV: you find a summer sale that's actually good and not just 10% off last season's leftovers", trigger: "genuine deal", note: "Calls out the fake sales that plague summer retail. Positions this sale as the real deal." },
    { line: "My entire summer aesthetic cost less than one designer item. Here's the breakdown.", trigger: "affordable luxury", note: "Achieving a premium look on a budget is aspirational and achievable. The breakdown format keeps viewers watching." },
    { line: "I'm buying duplicates of this at the sale price because I know I'll use it all next summer too", trigger: "stockpile behavior", note: "Buying duplicates is the ultimate product endorsement. It signals the product is so good you're planning ahead." },
  ],
  tips: [
    "Summer sale UGC should feel bright, warm, and energetic. Match the visual tone to the season — outdoor settings, natural light, vibrant colors",
    "Show products in summer contexts: poolside, beach, backyard BBQ, road trip. Context helps viewers picture the product in their own summer plans",
    "Create urgency with inventory-based scarcity, not countdown timers. \"Almost sold out\" feels more genuine than \"sale ends in 3 hours\" for summer clearance",
    "Include the original price alongside the sale price for every item. The visual contrast between the two numbers is what drives the \"deal\" perception",
    "Test different summer occasions: vacation prep, backyard entertaining, outdoor fitness, festival season. Each occasion targets a different summer shopper",
  ],
  ctaLine: "Create summer sale UGC videos from these scripts. No sunshine required.",
};
export default data;
