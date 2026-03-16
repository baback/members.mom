import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Electronics & Gadgets",
  scriptCount: 3,
  h1: "UGC Video Script for Electronics & Gadgets: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for electronics and gadget brands — unboxing, daily use, and tech comparison formats. Plus 5 hooks that stop the scroll for tech buyers.",
  intro: "Tech buyers watch an average of 7 videos before purchasing a gadget. The ones that convert aren't the polished brand demos — they're the UGC-style reviews where someone says \"I've been using this for a month and here's what I actually think.\" Authenticity sells electronics. Here are 3 scripts built for gadget brands.",
  scripts: [
    {
      name: "The Tech Unboxing & First Impressions",
      subtitle: "Best for: Product launches. Cold audiences who are researching before buying.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"This gadget has 50,000 five-star reviews and\nI finally caved. Let's see if it's worth the hype."\n[Show sealed box]\n\n[UNBOXING — 3-14s]\n"Okay first impression — the build quality.\nThis feels way more premium than the price\nsuggests. It's got this soft-touch finish and\nit's lighter than I expected."\n[Remove from box, turn it over in hands]\n"In the box you get the device, a USB-C cable\n— thank god, not micro-USB — a quick start\nguide, and a carrying case. Nice touch."\n\n[FIRST USE — 14-22s]\n"Let me try it right now."\n[Power on, demonstrate primary function]\n"That's... actually really impressive. The\nresponse time is instant and the sound quality\nis way better than my old one that cost twice\nas much."\n\n[CTA — 22-26s]\n"Okay the hype is real. If you've been on the\nfence, just get it. Link in bio."`,
      notes: [
        "\"50,000 five-star reviews\" front-loads social proof. Replace with your actual review count — even smaller numbers work (\"2,000 reviews\")",
        "Mentioning USB-C is a small detail that signals the speaker is a real tech user. These micro-details build credibility",
        "\"Way more premium than the price suggests\" is the perfect value statement for mid-range electronics. It sets expectations and exceeds them",
        "The live first-use moment creates authenticity. The viewer feels like they're discovering the product alongside the speaker",
      ],
    },
    {
      name: "The Daily Carry / Daily Use",
      subtitle: "Best for: Showing product integrated into real life. Mid-funnel audiences considering a purchase.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"5 gadgets I use literally every single day\nthat are all under $50"\n[Show items laid out on desk]\n\n[WALKTHROUGH — 3-16s]\n"This portable charger — 10,000mAh, charges\nmy phone twice, fits in my back pocket. I\nnever leave the house without it."\n"These earbuds — $35 and they sound better\nthan my friend's AirPods Pro. I'm not kidding.\nThe noise cancellation is legit."\n"But the one I want to talk about is this —"\n[Pick up featured product]\n"I bought this on a whim 3 months ago and\nit's become the thing I'd replace immediately\nif I lost it. The battery lasts a full week\nand it does [key feature] better than anything\nelse I've tried."\n\n[CTA — 16-21s]\n"I linked all 5 below but the last one is\nthe must-have. Seriously. Link in bio."`,
      notes: [
        "The \"daily carry\" format is native to tech content on YouTube and TikTok. It doesn't feel like an ad — it feels like a recommendation",
        "Listing multiple items before featuring your product builds credibility. The speaker isn't just promoting one thing — they're sharing their whole setup",
        "\"I'd replace immediately if I lost it\" is one of the strongest endorsements possible. It signals the product is essential, not optional",
        "Specific specs (10,000mAh, $35) show the speaker knows their tech. Vague descriptions lose credibility with this audience",
      ],
    },
    {
      name: "The Tech Comparison",
      subtitle: "Best for: Competitive positioning. Audiences comparing your product against alternatives.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"I bought both so you don't have to. Here's\nthe honest comparison."\n[Hold up two products side by side]\n\n[COMPARISON — 2-14s]\n"Build quality — the [competitor category] feels\nplastic. This one has an aluminum body and\nactually feels like a $200 product even though\nit's $79."\n"Battery — [competitor] dies after 4 hours.\nThis one lasted me 11 hours on a single charge.\nI tested it."\n"The feature that sealed it for me — [key\ndifferentiator]. The other one doesn't even\nhave this and it costs more."\n\n[CTA — 14-18s]\n"Save your money and get the better one.\nLink in bio."`,
      notes: [
        "\"I bought both\" immediately establishes credibility. The viewer trusts someone who's done the comparison themselves",
        "Use specific, measurable comparisons (4 hours vs 11 hours) not subjective ones (\"better battery life\"). Tech buyers want data",
        "Don't name the competitor directly — use category references. \"The popular one\" or \"the one everyone recommends\" is enough",
        "\"I tested it\" adds a layer of personal verification. It's a small phrase that significantly increases trust",
      ],
    },
  ],
  hooks: [
    { line: "I returned the expensive version and kept this $40 one. Here's why.", trigger: "value reversal", note: "Challenges the assumption that expensive = better. Creates curiosity about what the cheap option does right." },
    { line: "This gadget replaced 3 other devices on my desk", trigger: "consolidation", note: "Appeals to minimalists and anyone tired of cable clutter. The number creates a tangible benefit." },
    { line: "My tech friend who works at [big company] saw this and immediately ordered one", trigger: "expert validation", note: "Implied expertise from someone in the industry. The immediate purchase signals strong conviction." },
    { line: "POV: you find a tech product that actually lives up to the Amazon reviews", trigger: "skepticism resolved", note: "Everyone's been burned by fake reviews. This hook promises the rare product that's actually as good as advertised." },
    { line: "I've tested over 50 gadgets this year. This is the only one I still use daily.", trigger: "curation authority", note: "The volume of testing establishes expertise. The single survivor creates powerful exclusivity." },
  ],
  tips: [
    "Tech buyers are spec-driven. Include specific numbers (battery life, weight, storage, response time) in the script. Vague claims like \"long battery life\" don't convert this audience",
    "Show the product in use, not just in hand. A portable speaker playing music, earbuds during a workout, a charger powering a phone — context demonstrates value",
    "Comparison content performs best for electronics because buyers are always weighing options. Position your product against a more expensive alternative for maximum impact",
    "Include the price prominently. Tech buyers comparison-shop aggressively and knowing the price upfront saves them a click — which means they click with intent to buy",
    "Test different environments: desk setup, travel bag, gym bag, kitchen counter. Each context targets a different use case and audience segment",
  ],
  ctaLine: "Generate tech UGC videos from these scripts in minutes. No studio setup needed.",
};
export default data;
