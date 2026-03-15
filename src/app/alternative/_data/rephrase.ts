import { AlternativePageData, SHARED_CRITERIA, SHARED_PICK, SHARED_TABLE_HEADERS, SHARED_METHODOLOGY, HEYGEN, CREATIFY, MAKEUGC, DID } from "./_shared";

const data: AlternativePageData = {
  competitor: "Rephrase.ai",
  h1: "Best Rephrase.ai Alternative for AI Video Ads (2026)",
  updated: "March 2026",
  meta: "Rephrase.ai focuses on personalized video. We tested 5 alternatives for scalable AI UGC ad creation.",
  intro: [
    "Rephrase.ai specializes in personalized AI video — generating custom videos with the viewer's name or details. It's clever for sales outreach but overkill for ad creative.",
    "If you need scalable UGC video ads (not personalized 1:1 videos), here are 5 alternatives built for that use case.",
  ],
  verdict: "Rephrase.ai solves a different problem (personalized video). For scalable UGC ad creative, members.mom is purpose-built with batch generation and native UGC output.",
  criteria: SHARED_CRITERIA, pick: SHARED_PICK,
  alternatives: [HEYGEN, CREATIFY, MAKEUGC, DID],
  table: { headers: SHARED_TABLE_HEADERS, rows: [["Rephrase.ai", "Custom", "Custom", "Varies", "25+", "10+", false, false, "Strong"], ["members.mom", "$49", "10", "$4.90", "50+", "29", true, true, "Native"], ["HeyGen", "$29", "3", "$9.67", "150+", "40+", false, false, "Strong"], ["Creatify", "$39", "10", "$3.90", "~25", "8", true, false, "Basic"], ["MakeUGC", "$49", "15", "$3.27", "~20", "1", true, false, "Basic"]] },
  methodology: SHARED_METHODOLOGY,
  faq: [
    { q: "Is Rephrase.ai good for ad creative?", a: "Rephrase.ai is built for personalized 1:1 video (sales outreach, onboarding). For scalable ad creative, it's the wrong tool." },
    { q: "How does Rephrase.ai pricing work?", a: "Custom/enterprise pricing. Not transparent. members.mom starts at $49/mo with clear per-video costs." },
    { q: "What's the best alternative for UGC ads?", a: "members.mom for batch UGC generation. Creatify if you need URL-to-video for e-commerce." },
    { q: "Can Rephrase.ai do batch generation?", a: "Rephrase.ai can personalize at scale (different names/details per video) but not batch-test different hooks and scripts like members.mom." },
  ],
  ctaLine: "Stop personalizing one-by-one. Start scaling UGC ads.",
};
export default data;
