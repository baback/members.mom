import { AlternativePageData, SHARED_CRITERIA, SHARED_PICK, SHARED_TABLE_HEADERS, SHARED_METHODOLOGY, ARCADS, CREATIFY, MAKEUGC, SYNTHESIA } from "./_shared";

const data: AlternativePageData = {
  competitor: "HeyGen",
  h1: "Best HeyGen Alternative for UGC Video Ads (2026)",
  updated: "March 2026",
  meta: "Looking for a HeyGen alternative that actually looks like UGC? We tested 5 tools. Here's what works for ad creative in 2026.",
  intro: [
    "HeyGen has the largest avatar library in the market — 150+ actors — and a solid API. But if you're making UGC-style video ads for TikTok or Instagram, the output looks too polished. The avatars feel like corporate presenters, not creators filming on their phone.",
    "At $29/month for just 3 videos, the per-video cost is steep for creative testing. We tested 5 alternatives focused on UGC output quality.",
  ],
  verdict: "If you need UGC-style output that looks native to TikTok, members.mom is the clear winner. If you need the cheapest per-video cost and only need English, MakeUGC is solid. HeyGen remains best for corporate/educational content.",
  criteria: SHARED_CRITERIA, pick: SHARED_PICK,
  alternatives: [ARCADS, CREATIFY, MAKEUGC, SYNTHESIA],
  table: { headers: SHARED_TABLE_HEADERS, rows: [["HeyGen", "$29", "3", "$9.67", "150+", "40+", false, false, "Strong"], ["members.mom", "$49", "10", "$4.90", "50+", "29", true, true, "Native"], ["Arcads", "$250", "50", "$5.00", "~30", "12", true, false, "Basic"], ["Creatify", "$39", "10", "$3.90", "~25", "8", true, false, "Basic"], ["MakeUGC", "$49", "15", "$3.27", "~20", "1", true, false, "Basic"], ["Synthesia", "$99", "Limited", "~$10+", "140+", "60+", false, false, "Strong"]] },
  methodology: SHARED_METHODOLOGY,
  faq: [
    { q: "Is HeyGen good for UGC ads?", a: "HeyGen excels at corporate and educational video. For UGC-style ads that look native to TikTok and Instagram, the output is too polished. Tools like members.mom produce more authentic-looking content." },
    { q: "How much does HeyGen cost per video?", a: "On the Creator plan ($29/mo for 3 videos), it's $9.67 per video. The Business plan ($89/mo for 30 videos) brings it down to $2.97 but requires a higher commitment." },
    { q: "Can HeyGen do batch generation?", a: "No. HeyGen creates videos one at a time. For creative testing where you need 10+ variations of the same script, this is a significant limitation." },
    { q: "What's the best HeyGen alternative for TikTok ads?", a: "members.mom produces the most native-looking UGC output for TikTok. MakeUGC is also strong but limited to English only." },
  ],
  ctaLine: "Stop paying corporate prices for UGC content. Start scaling.",
};
export default data;
