import { AlternativePageData, SHARED_CRITERIA, SHARED_PICK, SHARED_TABLE_HEADERS, SHARED_METHODOLOGY, HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA } from "./_shared";

const data: AlternativePageData = {
  competitor: "D-ID",
  h1: "Best D-ID Alternative for AI Avatar Videos (2026)",
  updated: "March 2026",
  meta: "D-ID is great for API-first avatar generation, but not for UGC ads. We tested 5 alternatives for marketing video.",
  intro: [
    "D-ID pioneered photo-to-video AI — upload a photo and make it talk. Their API is solid for developers building video into products. But for creating UGC-style ad content, the output feels robotic and the pricing is confusing.",
    "If you need AI video for marketing, not development, here are 5 alternatives that deliver better ad creative.",
  ],
  verdict: "D-ID is best for developers who need API-first avatar generation. For marketing teams creating UGC ads, ReUGC delivers more authentic output with simpler pricing.",
  criteria: SHARED_CRITERIA, pick: SHARED_PICK,
  alternatives: [HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA],
  table: { headers: SHARED_TABLE_HEADERS, rows: [["D-ID", "$5.90+", "Credit-based", "Varies", "Photo-based", "30+", false, false, "Basic"], ["ReUGC", "$49", "10", "$4.90", "50+", "29", true, true, "Native"], ["HeyGen", "$29", "3", "$9.67", "150+", "40+", false, false, "Strong"], ["Creatify", "$39", "10", "$3.90", "~25", "8", true, false, "Basic"], ["MakeUGC", "$49", "15", "$3.27", "~20", "1", true, false, "Basic"]] },
  methodology: SHARED_METHODOLOGY,
  faq: [
    { q: "Is D-ID good for ads?", a: "D-ID is built for developers, not marketers. The output works for product integration but lacks the UGC authenticity needed for social media ads." },
    { q: "How does D-ID pricing work?", a: "D-ID uses a credit-based system that varies by usage. It's harder to predict monthly costs compared to flat-rate plans like ReUGC's $49/mo." },
    { q: "Can D-ID create UGC-style content?", a: "Not really. D-ID generates talking photos/avatars that look synthetic. For UGC that looks like a real person filmed it, you need a dedicated UGC platform." },
    { q: "What's the best D-ID alternative for marketing?", a: "ReUGC for UGC ads, HeyGen for corporate video. Both offer simpler pricing and better output for marketing use cases." },
  ],
  ctaLine: "Stop building — start creating ads that convert.",
};
export default data;
