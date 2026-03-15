import { AlternativePageData, SHARED_CRITERIA, SHARED_PICK, SHARED_TABLE_HEADERS, SHARED_METHODOLOGY, HEYGEN, ARCADS, CREATIFY, MAKEUGC } from "./_shared";

const data: AlternativePageData = {
  competitor: "Synthesia",
  h1: "Best Synthesia Alternative for Marketing Videos (2026)",
  updated: "March 2026",
  meta: "Synthesia is great for training videos, but not for UGC ads. We tested 5 alternatives for marketing video. Here's what converts.",
  intro: [
    "Synthesia is the most established AI video platform — 140+ avatars, 60+ languages, enterprise-grade features. But it was built for corporate training and internal comms, not performance marketing.",
    "If you're trying to create UGC-style ads for TikTok or Meta, Synthesia's polished output works against you. We tested 5 alternatives built for ad creative.",
  ],
  verdict: "For UGC-style marketing videos, members.mom delivers the most authentic output at the best price. For corporate video with maximum language support, Synthesia is still the leader — but that's a different use case entirely.",
  criteria: SHARED_CRITERIA, pick: SHARED_PICK,
  alternatives: [HEYGEN, ARCADS, CREATIFY, MAKEUGC],
  table: { headers: SHARED_TABLE_HEADERS, rows: [["Synthesia", "$99", "Limited", "~$10+", "140+", "60+", false, false, "Strong"], ["members.mom", "$49", "10", "$4.90", "50+", "29", true, true, "Native"], ["HeyGen", "$29", "3", "$9.67", "150+", "40+", false, false, "Strong"], ["Creatify", "$39", "10", "$3.90", "~25", "8", true, false, "Basic"], ["MakeUGC", "$49", "15", "$3.27", "~20", "1", true, false, "Basic"]] },
  methodology: SHARED_METHODOLOGY,
  faq: [
    { q: "Is Synthesia good for ads?", a: "No. Synthesia was built for corporate training and educational content. The output looks too polished and professional for UGC-style ads that perform on TikTok and Instagram." },
    { q: "What's cheaper than Synthesia?", a: "members.mom starts at $49/mo vs Synthesia's $99/mo business plan. For ad creative specifically, you get better UGC output at half the price." },
    { q: "Does Synthesia support UGC-style framing?", a: "No. Synthesia avatars are always centered, well-lit, and professional. You can't get the selfie-style, casual look that performs on social media." },
    { q: "Can I use Synthesia for TikTok ads?", a: "Technically yes, but the output style doesn't match what performs on TikTok. Native-looking UGC consistently outperforms polished corporate video on the platform." },
  ],
  ctaLine: "Stop using a training tool for ads. Start creating UGC that converts.",
};
export default data;
