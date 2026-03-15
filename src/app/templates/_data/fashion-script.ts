import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Fashion & Clothing",
  scriptCount: 3,
  h1: "UGC Video Script for Fashion & Clothing Brands: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for fashion brands — haul, styling, and outfit-of-the-day formats. Plus 5 hooks that drive clicks and conversions.",
  intro: "Fashion UGC outperforms studio lookbooks because people want to see how clothes look on real bodies in real lighting. A 20-second try-on video from someone who looks like your customer converts better than a $50K campaign shoot. Here are 3 scripts built for clothing brands.",
  scripts: [
    {
      name: "The Fashion Try-On Haul",
      subtitle: "Best for: New collection launches. Cold audiences discovering your brand for the first time.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"I just got a package from this brand I found on\nInstagram and I'm genuinely impressed"\n[Hold up shipping bag/box, excited energy]\n\n[SETUP — 3-8s]\n"I ordered 3 pieces — spent about $120 total.\nI'm a size medium, 5'6, and I always have trouble\nfinding stuff that fits my waist without being\ntoo tight on my hips. Let's see."\n\n[TRY-ON — 8-20s]\n"Okay first — this ribbed top. The fabric is\nthick enough that it's not see-through, which\nis already a win. And look at this neckline."\n[Quick outfit change]\n"These trousers though. Wide leg, high waist,\nand they have actual pockets. I'm 5'6 and\nthey hit perfectly without hemming."\n[Spin, show fit from side]\n"And this jacket — I wasn't sure about the color\nonline but in person it's gorgeous."\n\n[CTA — 20-25s]\n"Everything runs true to size. I'll link the\nexact pieces below — the trousers are the\nmust-buy. Trust me."`,
      notes: [
        "Including body measurements (size, height) is critical for fashion UGC. It answers the viewer's first question: \"Would this fit me?\"",
        "\"Thick enough that it's not see-through\" is the kind of detail that builds trust. Include real quality observations, not just \"it's cute\"",
        "Quick outfit changes keep energy high. Each piece should get 3-4 seconds max in a short-form video",
        "\"The trousers are the must-buy\" gives a clear recommendation. Viewers want to be told what to get, not just shown options",
      ],
    },
    {
      name: "The Styling How-To",
      subtitle: "Best for: Increasing average order value. Mid-funnel audiences who've browsed but haven't purchased.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"One piece, three completely different outfits.\nWatch this."\n[Hold up single garment]\n\n[STYLING — 3-16s]\n"This is their bestselling blazer. First — dress\nit up. White tee, gold hoops, tailored pants.\nInstant office-to-dinner look."\n[Show outfit 1, quick transition]\n"Second — casual weekend. Throw it over a crop\ntop with wide-leg jeans and sneakers. Done."\n[Show outfit 2]\n"Third — date night. Black bodysuit underneath,\nleather pants, heels. This blazer does everything."\n[Show outfit 3]\n\n[CTA — 16-21s]\n"One piece, three vibes. This is why I keep\ncoming back to this brand. Link in bio for\nthe blazer — it sells out fast."`,
      notes: [
        "The \"one piece, three outfits\" format is proven on fashion TikTok. It demonstrates value (versatility) while showing styling expertise",
        "Each outfit should represent a different occasion: work, casual, evening. This expands the perceived use case",
        "\"It sells out fast\" creates urgency without being pushy. Scarcity works in fashion because it's true — popular items do sell out",
        "This format naturally increases AOV because viewers see the blazer with other pieces they might also want to buy",
      ],
    },
    {
      name: "The OOTD (Outfit of the Day)",
      subtitle: "Best for: TikTok and Reels organic-feeling content. Cold audiences who respond to aspirational styling.",
      duration: "13–17 seconds",
      script: `[HOOK — 0-2s]\n"Outfit check — everything is from one brand\nand the total was under $150"\n[TEXT ON SCREEN: "OOTD 🔥"]\n\n[BREAKDOWN — 2-11s]\n[Full body shot, slow spin]\n"Top — their cropped cardigan in oat. $38."\n[Point to top]\n"Bottoms — high-rise straight leg in dark wash.\n$52. Best jeans I own, not exaggerating."\n[Point to jeans]\n"Bag — their mini crossbody. $34. Fits my\nphone, keys, cards, and lipstick."\n[Show bag]\n\n[CTA — 11-15s]\n"Under $150 for a full outfit that looks like\nthis? Yeah. Link in bio for everything."\n[TEXT ON SCREEN: "Link in bio 👇"]`,
      notes: [
        "OOTD format is native to fashion social media — it doesn't register as an ad. This is the format with the highest organic engagement",
        "Including prices for each piece builds trust and pre-qualifies buyers. If your price point is competitive, show it",
        "\"Best jeans I own\" is a strong endorsement that feels personal, not scripted. Include one standout claim per outfit",
        "Keep this under 17 seconds. OOTD videos that drag lose viewers fast — the format is meant to be quick and punchy",
      ],
    },
  ],
  hooks: [
    { line: "I found the brand that finally makes clothes for my body type", trigger: "inclusivity", note: "Speaks to the frustration of standard sizing. Extremely high engagement with women 25-45." },
    { line: "This $40 top looks like it costs $200 and I can prove it", trigger: "value perception", note: "Price anchoring against luxury. The \"I can prove it\" adds a challenge the viewer wants to see resolved." },
    { line: "POV: you open a package and everything actually fits", trigger: "relatability", note: "Every online shopper has experienced fit disappointment. This hook taps into that shared frustration." },
    { line: "My most complimented outfit this month cost less than dinner", trigger: "social proof + value", note: "Combines external validation (compliments) with affordability. Double motivation to watch." },
    { line: "I'm returning everything I bought from [competitor category] after finding this brand", trigger: "competitive switch", note: "Implies a direct comparison where your brand won. Strong for positioning against fast fashion or premium brands." },
  ],
  tips: [
    "Fashion UGC lives or dies on lighting and fit. Natural daylight and showing the garment on a body (not a hanger) are non-negotiable for conversions",
    "Always include size information in the video or caption. \"I'm wearing a medium, I'm 5'6, 140 lbs\" removes the biggest purchase barrier in online fashion",
    "Quick transitions between outfits keep watch time high. Use jump cuts, not slow transitions — match the energy of organic fashion content",
    "Test different body types and demographics for the AI actor. A size 2 model won't convert a size 12 audience. Representation drives revenue",
    "Include the total spend in the hook or CTA. Fashion buyers are price-conscious and \"under $150 for a full outfit\" is a powerful value frame",
  ],
  ctaLine: "Create fashion UGC videos from these scripts instantly. No photoshoot needed.",
};
export default data;
