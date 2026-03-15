import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Video Bitrate",
  h1: "What Is Video Bitrate? Quality Settings Explained",
  meta: "Video bitrate determines the amount of data used per second of video, directly affecting quality and file size. Learn optimal bitrate settings for social media ads.",
  definition: "Video bitrate is the amount of data processed per second of video, measured in megabits per second (Mbps) or kilobits per second (kbps). Higher bitrate means more data per frame, which generally means higher visual quality — but also larger file sizes. For advertising, bitrate is the balance between video quality (sharp, clear visuals) and practical constraints (file size limits, upload speeds, and platform compression).",
  whyMatters: [
    { label: "Quality affects perception and trust", text: "A blurry, artifacted video signals low quality — and viewers unconsciously transfer that perception to your product. High-bitrate video looks crisp and professional, building trust before the viewer even processes your message. On platforms where content is viewed full-screen on high-resolution phones, quality differences are immediately noticeable." },
    { label: "Platforms re-compress everything", text: "Every platform compresses uploaded video to reduce bandwidth costs. If you upload a low-bitrate video, the platform's compression makes it even worse. Uploading at a higher bitrate than the platform's target gives the compression algorithm more data to work with, resulting in better final quality. Think of it as giving the platform a better starting point." },
    { label: "File size limits are real constraints", text: "TikTok allows up to 500MB per video. Meta allows up to 4GB. But larger files take longer to upload and process. The sweet spot is high enough bitrate for quality but low enough for practical file management — typically 8–12 Mbps for 1080p social media content." },
  ],
  howItWorks: [
    { heading: "Recommended Bitrates", text: "For 1080p (1920×1080 or 1080×1920) social media ads: 8–12 Mbps is the sweet spot. Below 6 Mbps, you'll see compression artifacts (blocky areas, blurry motion). Above 15 Mbps, you're increasing file size without visible quality improvement on mobile screens. For 4K content (rare in social ads): 20–35 Mbps. For 720p (not recommended but sometimes used for faster uploads): 5–8 Mbps. Always use variable bitrate (VBR) rather than constant bitrate (CBR) — VBR allocates more data to complex scenes and less to simple ones, optimizing quality throughout." },
    { heading: "Bitrate vs. Resolution", text: "Bitrate and resolution work together. A 4K video at 5 Mbps will look worse than a 1080p video at 10 Mbps because the data is spread too thin across too many pixels. For social media advertising, 1080p at 8–12 Mbps is the optimal combination — it matches the resolution of most phone screens and provides enough data for sharp, clean visuals without excessive file sizes." },
  ],
  example: "A brand exports their UGC ad at 3 Mbps to keep the file small. On their computer, it looks fine. On TikTok, after the platform's compression, the video looks noticeably blurry — especially during motion and in areas with fine detail (text overlays, product textures). They re-export at 10 Mbps. The file is 3x larger but still well within TikTok's 500MB limit. After platform compression, the 10 Mbps version looks crisp and professional. The higher-quality version achieves a 22% higher thumb-stop rate — viewers subconsciously associate visual quality with product quality.",
  product: {
    intro: "ReUGC exports all videos at optimal bitrate settings:",
    points: [
      "Optimized quality settings — Every video is rendered at bitrates optimized for social media platforms, ensuring crisp visuals after platform compression without unnecessarily large file sizes.",
      "No technical knowledge required — You don't need to understand bitrate, codec, or encoding settings. ReUGC handles all technical parameters automatically, producing platform-ready output every time.",
      "Consistent quality across all videos — Whether you generate 1 video or 60, every output maintains the same high quality standards. No variation in technical quality between renders. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Video Codec", slug: "video-codec" },
    { term: "Video Ad Specs", slug: "video-ad-specs" },
    { term: "Aspect Ratio", slug: "aspect-ratio" },
    { term: "Render Time", slug: "render-time" },
    { term: "Vertical Video", slug: "vertical-video" },
    { term: "Short-Form Video", slug: "short-form-video" },
  ],
  relatedNote: "Video bitrate works alongside video codec to determine output quality and file size. Both are components of video ad specs. Higher bitrate increases render time but improves quality. These technical settings matter most for vertical video and short-form video where content is viewed full-screen on mobile devices.",
};
export default data;
