import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Aspect Ratio",
  h1: "What Is Aspect Ratio? 9:16 vs 1:1 vs 16:9 for Ads",
  meta: "Aspect ratio is the proportional relationship between a video's width and height. Learn which aspect ratios work best for each ad platform and why 9:16 dominates mobile advertising.",
  definition: "Aspect ratio is the proportional relationship between a video's width and height, expressed as two numbers separated by a colon. The three dominant aspect ratios in digital advertising are 9:16 (vertical/portrait), 1:1 (square), and 16:9 (horizontal/landscape). Your choice of aspect ratio determines how much screen real estate your ad occupies and how native it feels on each platform.",
  whyMatters: [
    { label: "Screen real estate equals attention", text: "A 9:16 vertical video fills 100% of a mobile screen. A 1:1 square video fills about 56%. A 16:9 horizontal video fills only 31%. More screen coverage means more visual impact, less competing content visible, and higher engagement. On mobile-first platforms, aspect ratio is one of the biggest determinants of thumb-stop rate." },
    { label: "Each platform has a preferred ratio", text: "TikTok and Reels are built for 9:16. Facebook Feed performs best with 4:5 or 1:1. YouTube is 16:9 for standard content and 9:16 for Shorts. Running the wrong aspect ratio on a platform doesn't just look bad — it signals to the algorithm that your content isn't native, which can result in lower distribution and higher CPMs." },
    { label: "One ratio doesn't fit all", text: "The temptation is to create one video and run it everywhere. But a 16:9 video on TikTok wastes 69% of the screen. A 9:16 video on YouTube desktop looks awkward. The best approach is to design for your primary platform's aspect ratio first, then create adapted versions for secondary platforms." },
  ],
  howItWorks: [
    { heading: "Aspect Ratio Guide", text: "9:16 (1080×1920): TikTok, Instagram Reels, YouTube Shorts, Snapchat, Facebook/Instagram Stories. This is the default for mobile-first advertising. 4:5 (1080×1350): Facebook Feed, Instagram Feed. Slightly taller than square, maximizing feed real estate without going full vertical. 1:1 (1080×1080): Facebook Feed, Instagram Feed, Twitter/X. Universal but not optimal for any specific platform. 16:9 (1920×1080): YouTube pre-roll, desktop display, LinkedIn. The traditional video format, now primarily used for desktop-first content." },
    { heading: "Designing for Multiple Ratios", text: "If you need multiple aspect ratios, design for 9:16 first (the most restrictive format) and ensure key elements (face, text, product) are centered. Then crop to 4:5 or 1:1 by trimming the top and bottom. This approach works better than designing for 16:9 and trying to adapt to vertical — you lose too much of the frame. Alternatively, create separate versions for each ratio, which is the ideal approach when budget allows." },
  ],
  example: "A fashion brand tests the same ad content in three aspect ratios on Meta. 16:9 (horizontal): 1.8% CTR, $32 CPA. 1:1 (square): 2.3% CTR, $26 CPA. 9:16 (vertical, Reels placement): 3.1% CTR, $18 CPA. The vertical version outperforms by 72% on CTR and 44% on CPA — same content, same targeting, same budget. The vertical format fills the screen, feels native to the platform, and earns better algorithmic treatment. They shift all creative production to vertical-first.",
  product: {
    intro: "members.mom generates all content in the optimal aspect ratio for modern advertising:",
    points: [
      "9:16 by default — Every video is generated in vertical format, optimized for TikTok, Reels, Shorts, and Stories. The format that fills mobile screens and drives the best performance.",
      "Proper framing for vertical — AI avatars are automatically positioned for vertical viewing: centered, chest-up, with space for text overlays and platform UI. No awkward cropping or wasted space.",
      "Platform-ready without reformatting — Upload directly from members.mom to any ad platform. No aspect ratio conversion, no cropping, no quality loss. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Vertical Video", slug: "vertical-video" },
    { term: "Video Ad Specs", slug: "video-ad-specs" },
    { term: "Video Bitrate", slug: "video-bitrate" },
    { term: "Short-Form Video", slug: "short-form-video" },
    { term: "Video Codec", slug: "video-codec" },
    { term: "Thumb-Stop Rate", slug: "thumb-stop-rate" },
  ],
  relatedNote: "Aspect ratio is one component of video ad specs, alongside bitrate and codec. It's the defining characteristic of vertical video and directly impacts thumb-stop rate through screen coverage. For short-form video platforms, 9:16 is the standard that all other ratios are measured against.",
};
export default data;
