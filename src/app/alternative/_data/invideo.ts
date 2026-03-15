import { AlternativePageData, SHARED_CRITERIA, SHARED_PICK, SHARED_TABLE_HEADERS, SHARED_METHODOLOGY, HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA } from "./_shared";

const data: AlternativePageData = {
  competitor: "InVideo",
  h1: "Best InVideo Alternative for AI UGC Content (2026)",
  updated: "March 2026",
  meta: "InVideo is a video editor, not an AI UGC generator. We tested 5 real AI UGC tools. Here's what actually creates UGC-style content.",
  intro: [
    "InVideo is a solid template-based video editor with 5,000+ templates and stock footage. But it's not an AI actor platform — it doesn't generate realistic talking-head UGC content.",
    "If you need AI-generated UGC with realistic presenters, lip sync, and batch generation, InVideo isn't the right tool. Here are 5 alternatives that actually do AI UGC.",
  ],
  verdict: "InVideo and members.mom solve different problems. InVideo is a video editor with templates. members.mom generates AI actor UGC from scripts. If you need talking-head UGC ads, members.mom is the clear choice.",
  criteria: SHARED_CRITERIA, pick: SHARED_PICK,
  alternatives: [HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA],
  table: { headers: SHARED_TABLE_HEADERS, rows: [["InVideo", "$25", "Unlimited", "N/A", "0 (templates)", "70+", false, false, "N/A"], ["members.mom", "$49", "10", "$4.90", "50+", "29", true, true, "Native"], ["HeyGen", "$29", "3", "$9.67", "150+", "40+", false, false, "Strong"], ["Creatify", "$39", "10", "$3.90", "~25", "8", true, false, "Basic"], ["MakeUGC", "$49", "15", "$3.27", "~20", "1", true, false, "Basic"]] },
  methodology: SHARED_METHODOLOGY,
  faq: [
    { q: "Does InVideo have AI actors?", a: "No. InVideo uses templates and stock footage. It doesn't generate AI actor videos with lip sync. For that, you need a dedicated AI UGC platform." },
    { q: "Is InVideo good for UGC ads?", a: "InVideo can help edit UGC-style content, but it can't generate it. You still need a real person or AI actor to create the talking-head content." },
    { q: "What's the best InVideo alternative for AI UGC?", a: "members.mom generates realistic AI actor UGC from text scripts. It's a fundamentally different tool — generation vs editing." },
    { q: "Can I use InVideo and an AI UGC tool together?", a: "Yes. Generate the AI actor footage with members.mom, then use InVideo for additional editing, text overlays, or combining with B-roll." },
  ],
  ctaLine: "Stop editing templates. Start generating UGC that converts.",
};
export default data;
