import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Video Ad Specs",
  h1: "Video Ad Specs: Every Platform's Requirements (2026)",
  meta: "Video ad specs define the technical requirements for video ads on each platform. Learn the resolution, aspect ratio, file size, and duration specs for Meta, TikTok, YouTube, and more.",
  definition: "Video ad specs are the technical requirements that each advertising platform mandates for video creative — including resolution, aspect ratio, file format, file size, duration, and codec. Uploading a video that doesn't meet these specs can result in rejection, poor quality, or suboptimal delivery. Knowing the specs for each platform ensures your creative looks its best and gets approved without delays.",
  whyMatters: [
    { label: "Wrong specs waste creative investment", text: "A beautifully produced video that's rejected because it's the wrong aspect ratio or exceeds the file size limit is wasted effort. Even videos that are accepted but don't match recommended specs (like uploading a 720p video to a platform that recommends 1080p) will look lower quality than competitors' content, hurting engagement and performance." },
    { label: "Specs vary significantly across platforms", text: "TikTok recommends 9:16 at 1080×1920. Meta accepts 1:1, 4:5, and 9:16 with different recommendations per placement. YouTube pre-roll is 16:9 at 1920×1080. Each platform has different maximum file sizes, duration limits, and codec preferences. A one-size-fits-all approach means your creative is suboptimal on most platforms." },
    { label: "Platform-native specs get better delivery", text: "Platforms algorithmically prefer content that matches their recommended specs. A 9:16 video on TikTok gets better placement than a 16:9 video with letterboxing. A 4:5 video in Facebook feed gets more real estate than a 16:9 video. Matching specs isn't just about compliance — it's about performance." },
  ],
  howItWorks: [
    { heading: "Key Specs by Platform (2026)", text: "TikTok: 9:16, 1080×1920, MP4/MOV, max 500MB, 5–60 seconds recommended. Meta (Reels/Stories): 9:16, 1080×1920, MP4/MOV, max 4GB, 15–60 seconds. Meta (Feed): 4:5 or 1:1, 1080×1350 or 1080×1080, MP4/MOV, max 4GB, 15–120 seconds. YouTube Shorts: 9:16, 1080×1920, MP4, max 60 seconds. YouTube Pre-roll: 16:9, 1920×1080, MP4, 15–30 seconds for skippable. Snapchat: 9:16, 1080×1920, MP4/MOV, 3–180 seconds. Pinterest: 9:16 or 1:1, 1080p minimum, MP4, 4–15 seconds recommended." },
    { heading: "Universal Best Practices", text: "Regardless of platform: use H.264 codec (most universally compatible), target 8–12 Mbps bitrate for 1080p (balances quality and file size), include captions (85% of social video is watched on mute), keep important elements away from edges (platforms overlay UI elements), and always export at the platform's recommended resolution — never upscale from a lower resolution. When in doubt, 9:16 at 1080×1920 in MP4 with H.264 codec works on every major platform." },
  ],
  example: "A brand creates a single 16:9 product video and runs it across TikTok, Instagram Reels, and Facebook Feed. On TikTok, it appears with large black bars top and bottom, occupying only 56% of the screen — thumb-stop rate is 12%. On Reels, it's similarly letterboxed — 15% thumb-stop. On Facebook Feed, it looks acceptable but small — 18% thumb-stop. They then create platform-native versions: 9:16 for TikTok and Reels, 4:5 for Facebook Feed. Thumb-stop rates jump to 34%, 31%, and 26% respectively. The content is identical — only the specs changed.",
  product: {
    intro: "ReUGC handles video specs automatically so you never have to think about them:",
    points: [
      "Platform-ready output — Every video is generated in 9:16 vertical format at 1080×1920 resolution, meeting the recommended specs for TikTok, Instagram Reels, YouTube Shorts, and Facebook Reels out of the box.",
      "Correct codec and bitrate — Videos are exported with H.264 codec at optimal bitrate settings, ensuring high quality without excessive file sizes. No manual encoding or compression needed.",
      "Upload and go — ReUGC videos are ready to upload directly to any ad platform without reformatting, re-encoding, or spec adjustments. Save hours of technical production work. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Aspect Ratio", slug: "aspect-ratio" },
    { term: "Video Bitrate", slug: "video-bitrate" },
    { term: "Video Codec", slug: "video-codec" },
    { term: "Vertical Video", slug: "vertical-video" },
    { term: "Short-Form Video", slug: "short-form-video" },
    { term: "Paid Social", slug: "paid-social" },
  ],
  relatedNote: "Video ad specs encompass aspect ratio, video bitrate, and video codec requirements. They're most relevant for vertical video and short-form video formats that dominate paid social platforms. Understanding specs ensures your creative meets technical requirements and gets optimal delivery.",
};
export default data;
