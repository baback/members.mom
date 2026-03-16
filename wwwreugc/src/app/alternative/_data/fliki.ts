import { AlternativePageData, SHARED_CRITERIA, SHARED_PICK, SHARED_TABLE_HEADERS, SHARED_METHODOLOGY, HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA } from "./_shared";

const data: AlternativePageData = {
  competitor: "Fliki",
  h1: "Best Fliki Alternative for AI Video Generation (2026)",
  updated: "March 2026",
  meta: "Fliki turns text into video with stock footage and AI voices. We tested 5 alternatives for UGC-style video with real AI actors.",
  intro: [
    "Fliki is a text-to-video tool that combines AI voiceover with stock footage, images, and basic avatars. It's useful for turning blog posts into videos or creating quick social content.",
    "But Fliki doesn't produce UGC-style talking-head content with realistic AI actors. If you need authentic-looking UGC for ads, here are 5 alternatives.",
  ],
  verdict: "Fliki is a solid text-to-video tool for content repurposing. For UGC-style ad creative with realistic AI actors, ReUGC is purpose-built for that use case.",
  criteria: SHARED_CRITERIA, pick: SHARED_PICK,
  alternatives: [HEYGEN, CREATIFY, MAKEUGC, SYNTHESIA],
  table: { headers: SHARED_TABLE_HEADERS, rows: [["Fliki", "$28+", "Varies", "Varies", "Stock + basic", "75+", false, false, "Basic"], ["ReUGC", "$49", "10", "$4.90", "50+", "29", true, true, "Native"], ["HeyGen", "$29", "3", "$9.67", "150+", "40+", false, false, "Strong"], ["Creatify", "$39", "10", "$3.90", "~25", "8", true, false, "Basic"], ["MakeUGC", "$49", "15", "$3.27", "~20", "1", true, false, "Basic"]] },
  methodology: SHARED_METHODOLOGY,
  faq: [
    { q: "Does Fliki have AI actors?", a: "Fliki has basic avatar options but primarily uses stock footage with AI voiceover. It's not designed for realistic talking-head UGC content." },
    { q: "Is Fliki good for ads?", a: "Fliki works for content-style videos (blog-to-video, social posts). For performance ad creative with UGC-style output, dedicated tools perform better." },
    { q: "What's the best Fliki alternative for UGC?", a: "ReUGC for UGC-style ads with realistic AI actors. Fliki and ReUGC solve different problems." },
    { q: "Can Fliki create testimonial-style videos?", a: "Not convincingly. Fliki's strength is stock footage compilation with voiceover, not realistic talking-head content." },
  ],
  ctaLine: "Go beyond stock footage. Create realistic UGC with AI actors.",
};
export default data;
