import { AlternativePageData, SHARED_CRITERIA, SHARED_PICK, SHARED_TABLE_HEADERS, SHARED_METHODOLOGY, HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA } from "./_shared";

const data: AlternativePageData = {
  competitor: "Vidyo.ai",
  h1: "Best Vidyo.ai Alternative for Short-Form AI Video (2026)",
  updated: "March 2026",
  meta: "Vidyo.ai repurposes long videos into short clips. We tested 5 alternatives for creating original UGC-style video content.",
  intro: [
    "Vidyo.ai is a repurposing tool — upload a long video (podcast, webinar, interview) and it automatically clips the best moments into short-form content for TikTok, Reels, and Shorts.",
    "But Vidyo doesn't create original content. If you need to generate UGC-style videos from scripts (not repurpose existing footage), here are 5 alternatives.",
  ],
  verdict: "Vidyo.ai is great for repurposing existing long-form content. ReUGC creates original UGC content from scripts. Use both if you have long-form content to repurpose AND need original UGC ads.",
  criteria: SHARED_CRITERIA, pick: SHARED_PICK,
  alternatives: [HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA],
  table: { headers: SHARED_TABLE_HEADERS, rows: [["Vidyo.ai", "$30+", "Clips (not videos)", "N/A", "0 (repurposing)", "Auto-detect", false, false, "N/A"], ["ReUGC", "$49", "10", "$4.90", "50+", "29", true, true, "Native"], ["HeyGen", "$29", "3", "$9.67", "150+", "40+", false, false, "Strong"], ["Creatify", "$39", "10", "$3.90", "~25", "8", true, false, "Basic"], ["MakeUGC", "$49", "15", "$3.27", "~20", "1", true, false, "Basic"]] },
  methodology: SHARED_METHODOLOGY,
  faq: [
    { q: "Does Vidyo.ai create original content?", a: "No. Vidyo.ai repurposes existing long-form video into short clips. It doesn't generate new content from scripts." },
    { q: "Can I use Vidyo and AI UGC together?", a: "Yes. Use Vidyo.ai to repurpose podcasts and webinars. Use ReUGC to create original UGC ad content from scripts." },
    { q: "What's the best Vidyo alternative for UGC?", a: "ReUGC for original UGC creation. Vidyo.ai and ReUGC are complementary, not competing tools." },
    { q: "Is Vidyo.ai good for ads?", a: "Vidyo.ai clips can work as organic content. For paid ad creative with UGC-style talking heads, you need a generation tool, not a repurposing tool." },
  ],
  ctaLine: "Stop repurposing. Start creating original UGC that converts.",
};
export default data;
