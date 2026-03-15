import { AlternativePageData, SHARED_CRITERIA, SHARED_PICK, SHARED_TABLE_HEADERS, SHARED_METHODOLOGY, HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA } from "./_shared";

const data: AlternativePageData = {
  competitor: "Tavus",
  h1: "Best Tavus Alternative for Personalized AI Video (2026)",
  updated: "March 2026",
  meta: "Tavus excels at personalized video but isn't built for UGC ads. We tested 5 alternatives for scalable ad creative.",
  intro: [
    "Tavus is a personalized video platform — record one video and it generates thousands of personalized versions with the recipient's name. Impressive for sales outreach.",
    "But if you need UGC-style ad creative for paid social, Tavus isn't the right tool. Here are 5 alternatives built for marketing.",
  ],
  verdict: "Tavus and members.mom serve different purposes. Tavus personalizes video for sales. members.mom generates UGC for ads. If you need ad creative, members.mom is the clear choice.",
  criteria: SHARED_CRITERIA, pick: SHARED_PICK,
  alternatives: [HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA],
  table: { headers: SHARED_TABLE_HEADERS, rows: [["Tavus", "Custom", "Custom", "Varies", "Your clone", "10+", false, false, "Strong"], ["members.mom", "$49", "10", "$4.90", "50+", "29", true, true, "Native"], ["HeyGen", "$29", "3", "$9.67", "150+", "40+", false, false, "Strong"], ["Creatify", "$39", "10", "$3.90", "~25", "8", true, false, "Basic"], ["MakeUGC", "$49", "15", "$3.27", "~20", "1", true, false, "Basic"]] },
  methodology: SHARED_METHODOLOGY,
  faq: [
    { q: "Is Tavus good for ads?", a: "No. Tavus is built for personalized 1:1 video outreach. For UGC-style ad creative, you need a platform designed for that format." },
    { q: "How much does Tavus cost?", a: "Enterprise/custom pricing. Not publicly listed. members.mom starts at $49/mo with transparent pricing." },
    { q: "Can Tavus create UGC content?", a: "Tavus creates personalized versions of a single recorded video. It doesn't generate diverse AI actor UGC from scripts." },
    { q: "What's the best Tavus alternative for marketing?", a: "members.mom for UGC ads. HeyGen for corporate video. Both are purpose-built for marketing content." },
  ],
  ctaLine: "Stop personalizing sales videos. Start scaling ad creative.",
};
export default data;
