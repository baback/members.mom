export type AlternativePageData = {
  competitor: string;
  h1: string;
  updated: string;
  meta: string;
  intro: string[];
  verdict: string;
  criteria: { title: string; desc: string }[];
  pick: { why: string[]; bestFor: string; pricing: string; limitations: string[] };
  alternatives: { name: string; desc: string; bestFor: string; pros: string[]; cons: string[]; pricing: string; verdict: string }[];
  table: { headers: string[]; rows: (string | boolean)[][] };
  methodology: string;
  faq: { q: string; a: string }[];
  ctaLine: string;
};

export type Competitor = AlternativePageData["alternatives"][number];

export const SHARED_CRITERIA: AlternativePageData["criteria"] = [
  { title: "UGC-style output quality", desc: "Does the video look like a real person filmed it on their phone, or does it look like a corporate avatar reading a teleprompter?" },
  { title: "AI actor diversity", desc: "You need actors across ages, ethnicities, and styles to match your target audience." },
  { title: "Language & lip sync", desc: "Real multilingual support means the AI actor's lips match the language they're speaking — not awkward dubbing." },
  { title: "Batch creation", desc: "Testing 5 hooks with the same body is how you find winners. One-at-a-time creation wastes hours." },
  { title: "Price per video", desc: "Divide the monthly cost by the video cap. That's your real cost per video." },
];

export const SHARED_PICK: AlternativePageData["pick"] = {
  why: [
    "$4.90 per video on the Starter plan ($49/month for 10 videos) — 50x cheaper than hiring a UGC creator",
    "Native UGC output — videos look like selfie-style testimonials, not corporate avatars",
    "29 languages with real lip sync — the AI actor's mouth matches the language",
    "Batch generation — write one script, swap hooks, generate 10 variations in one session",
  ],
  bestFor: "E-commerce brands, DTC companies, and agencies who need 10–60 UGC-style video ads per month.",
  pricing: "Starter: $49/mo (10 videos) · Pro: $99/mo (25 videos) · Pro Plus: $199/mo (60 videos)",
  limitations: [
    "No free tier — minimum $49/month commitment",
    "Newer platform with a smaller community than established players",
    "Actor library is growing but not yet the largest in the market",
  ],
};

export const SHARED_TABLE_HEADERS = ["Tool", "Price/mo", "Videos/mo", "Cost/video", "AI Actors", "Languages", "UGC Style", "Batch", "Lip Sync"];

export const SHARED_METHODOLOGY = "We signed up for paid plans on each tool and created the same test: a 25-second testimonial-style video ad. Same script, same brief. We compared output quality, generation speed, lip sync accuracy, avatar naturalness, and pricing.";

/* Reusable competitor entries */
export function comp(name: string, desc: string, bestFor: string, pros: string[], cons: string[], pricing: string, verdict: string): Competitor {
  return { name, desc, bestFor, pros, cons, pricing, verdict };
}

export const HEYGEN = comp("HeyGen", "Enterprise-grade AI video platform with the largest avatar library.", "Teams needing maximum avatar variety and polished output.", ["150+ AI avatars — largest selection available", "Custom avatar creation from your own video", "Strong API for workflow integration", "40+ languages with solid lip sync"], ["Output looks corporate, not UGC — less effective for TikTok ads", "$29/mo for only 3 videos ($9.67/video)", "No batch generation"], "Creator: $29/mo (3 videos). Business: $89/mo (30 videos).", "Pick HeyGen if avatar variety matters more than UGC authenticity.");
export const SYNTHESIA = comp("Synthesia", "The original AI video platform, built for corporate and training content.", "Enterprise teams creating training, onboarding, and educational videos.", ["Most mature platform — stable since 2017", "140+ professional avatars", "Strong enterprise features — collaboration, brand kits", "60+ languages"], ["Not built for UGC or ads — corporate presentation style", "Business plans start at $99/mo", "No UGC-style framing or casual output"], "Personal: $29/mo. Business: $99/mo. Enterprise: custom.", "Pick Synthesia for corporate training. For UGC ads, it's the wrong tool.");
export const CREATIFY = comp("Creatify", "AI video ad generator focused on e-commerce product ads.", "Shopify and e-commerce brands wanting URL-to-video automation.", ["URL-to-video feature — paste a product page, get a video ad", "Built-in ad script generator", "TikTok and Meta format presets", "Decent UGC-style output"], ["Limited actor library — ~25 avatars", "Quality drops on lower tiers", "Only 8 languages"], "Starter: $39/mo (10 videos). Pro: $99/mo (30 videos).", "Pick Creatify for the fastest path from product page to video ad.");
export const MAKEUGC = comp("MakeUGC", "AI UGC generator specifically designed for UGC-style content.", "Brands wanting authentic-looking UGC without multilingual needs.", ["Strong UGC aesthetic — genuinely looks creator-filmed", "Good script templates (testimonial, unboxing, problem-solution)", "Simple interface", "$49/mo for 15 videos"], ["English-only — no multilingual support", "Small avatar library — ~20 actors", "No batch generation or API"], "Starter: $49/mo (15 videos). Pro: $99/mo (40 videos).", "Pick MakeUGC for English-only UGC with the most authentic look.");
export const DID = comp("D-ID", "AI video platform focused on talking-head avatar generation.", "Developers and teams needing API-first avatar video generation.", ["Strong API — good for building video into products", "Real-time avatar streaming capability", "Photo-to-video feature", "Multiple language support"], ["Output feels robotic for ad use cases", "Pricing is credit-based and confusing", "Not designed for UGC-style content", "Limited avatar customization"], "Lite: $5.90/mo. Pro: $49.90/mo. Enterprise: custom.", "Pick D-ID if you need API-first avatar generation for product integration, not ads.");
export const INVIDEO = comp("InVideo", "AI video editor with templates and stock footage.", "Content creators who want template-based video editing with AI assist.", ["Huge template library — 5,000+ templates", "Built-in stock footage and music", "Easy drag-and-drop editor", "Affordable entry price"], ["Not an AI actor platform — uses templates and stock, not generated presenters", "Output doesn't look like UGC", "No lip sync or AI avatar generation", "More of an editor than a generator"], "Free plan available. Business: $25/mo.", "Pick InVideo if you want a template-based video editor. For AI UGC with actors, look elsewhere.");
export const ARCADS = comp("Arcads", "One of the first AI UGC platforms, focused on ad creative.", "Brands already spending $250+/mo on video ads who need volume.", ["UGC-style output that looks native", "Decent avatar selection (~30)", "Built for ad creative specifically"], ["$250/mo minimum — steep entry price", "Limited to 12 languages", "Batch generation is clunky"], "$250/mo for 50 videos.", "Pick Arcads if budget isn't a concern and you need pure volume.");
