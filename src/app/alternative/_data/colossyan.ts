import { AlternativePageData, SHARED_CRITERIA, SHARED_PICK, SHARED_TABLE_HEADERS, SHARED_METHODOLOGY, HEYGEN, SYNTHESIA, CREATIFY, MAKEUGC } from "./_shared";

const data: AlternativePageData = {
  competitor: "Colossyan",
  h1: "Best Colossyan Alternative for AI Video Creation (2026)",
  updated: "March 2026",
  meta: "Colossyan is solid for corporate video but expensive for ads. We tested 5 alternatives with better UGC output and pricing.",
  intro: [
    "Colossyan offers AI-generated video with a focus on corporate learning and training. The avatars are professional, the editor is polished, and enterprise features are strong.",
    "But at $28/month for limited videos and a corporate-first output style, it's not built for UGC ad creative. Here are 5 alternatives for marketing teams.",
  ],
  verdict: "Colossyan is a strong corporate video tool. For UGC-style marketing content, members.mom delivers more authentic output at a better price point.",
  criteria: SHARED_CRITERIA, pick: SHARED_PICK,
  alternatives: [HEYGEN, SYNTHESIA, CREATIFY, MAKEUGC],
  table: { headers: SHARED_TABLE_HEADERS, rows: [["Colossyan", "$28", "5", "$5.60", "50+", "70+", false, false, "Strong"], ["members.mom", "$49", "10", "$4.90", "50+", "29", true, true, "Native"], ["HeyGen", "$29", "3", "$9.67", "150+", "40+", false, false, "Strong"], ["Synthesia", "$99", "Limited", "~$10+", "140+", "60+", false, false, "Strong"], ["MakeUGC", "$49", "15", "$3.27", "~20", "1", true, false, "Basic"]] },
  methodology: SHARED_METHODOLOGY,
  faq: [
    { q: "Is Colossyan good for marketing videos?", a: "Colossyan is designed for corporate learning. The output is professional but doesn't match the casual, authentic style that performs in paid social ads." },
    { q: "How does Colossyan compare to Synthesia?", a: "Both target corporate/training use cases. Colossyan is slightly cheaper but Synthesia has more avatars and a more mature platform." },
    { q: "What's the best Colossyan alternative for ads?", a: "members.mom for UGC-style ads. The output looks native to TikTok and Instagram, which is what drives conversions on paid social." },
    { q: "Does Colossyan support batch generation?", a: "No. Like most corporate video tools, Colossyan creates videos one at a time. members.mom offers batch generation for creative testing." },
  ],
  ctaLine: "Stop paying corporate prices for ad content. Start scaling UGC.",
};
export default data;
