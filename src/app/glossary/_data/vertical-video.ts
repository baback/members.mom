import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Vertical Video",
  h1: "What Is Vertical Video? 9:16 Format Explained",
  meta: "Vertical video is content filmed in portrait orientation (9:16 aspect ratio) for mobile-first platforms. Learn why vertical video outperforms other formats and how to produce it.",
  definition: "Vertical video is video content shot or formatted in portrait orientation with a 9:16 aspect ratio — taller than it is wide. It's the native format for TikTok, Instagram Reels, YouTube Shorts, Snapchat, and Facebook Reels. Vertical video fills the entire mobile screen, creating an immersive viewing experience that horizontal or square video can't match.",
  whyMatters: [
    { label: "Mobile is 85%+ of social media consumption", text: "Over 85% of social media time is spent on mobile devices, and people hold their phones vertically 94% of the time. Vertical video is the only format that fills the entire screen without black bars or awkward cropping. This full-screen experience means more visual real estate, more immersion, and more attention — which translates directly to better ad performance." },
    { label: "Platforms prioritize it algorithmically", text: "TikTok, Instagram, and YouTube all give preferential treatment to vertical content in their algorithms. Vertical videos get more distribution, appear in more placements (Reels, Stories, Shorts), and earn lower CPMs than horizontal or square content. Running horizontal video on these platforms is leaving performance on the table." },
    { label: "It signals 'native content'", text: "Vertical video looks like it was filmed on a phone by a real person — which is exactly the aesthetic that performs best on social platforms. Horizontal video signals 'produced content' or 'repurposed TV ad,' which triggers ad avoidance behavior. The vertical format itself is a trust signal that tells viewers 'this is content, not a commercial.'" },
  ],
  howItWorks: [
    { heading: "9:16 vs. Other Aspect Ratios", text: "The three main aspect ratios in digital advertising are 9:16 (vertical — TikTok, Reels, Shorts, Stories), 1:1 (square — Facebook feed, Instagram feed), and 16:9 (horizontal — YouTube, desktop). For mobile-first campaigns, 9:16 outperforms across every metric. Some brands create in 9:16 and crop to 1:1 for feed placements, but this loses the top and bottom of the frame. The best approach is to design for 9:16 first and create separate versions for other ratios when needed." },
    { heading: "Vertical Video Best Practices", text: "Effective vertical video keeps the subject centered (faces in the upper third of the frame), uses large text overlays (readable on small screens), avoids important elements in the bottom 15% (where platform UI overlays appear), and fills the frame with visual interest (no empty space or static backgrounds). For talking-head content, the presenter should be framed from chest up, making eye contact with the camera to simulate a face-to-face conversation." },
  ],
  example: "An apparel brand repurposes their horizontal product video (16:9) for TikTok by adding black bars top and bottom. It gets a 14% thumb-stop rate and $48 CPA. They then create a native vertical version — same product, same messaging, but filmed vertically with the model filling the screen and text overlays sized for mobile. The vertical version gets a 36% thumb-stop rate and $19 CPA. Same product, same message, same audience — the format made a 2.5x difference in performance.",
  product: {
    intro: "members.mom generates all content in vertical-first format:",
    points: [
      "Native 9:16 output — Every video from members.mom is generated in vertical format by default. No cropping, no reformatting, no black bars. Upload directly to TikTok, Reels, or Shorts.",
      "Optimized framing — AI avatars are automatically framed for vertical viewing — centered, chest-up, with space for text overlays and platform UI elements. The output looks like it was filmed on a phone.",
      "Platform-ready specs — Videos are exported with the resolution, bitrate, and codec settings that each platform recommends. No technical guesswork, no rejected uploads. Plans start at $49/mo.",
    ],
  },
  related: [
    { term: "Short-Form Video", slug: "short-form-video" },
    { term: "Aspect Ratio", slug: "aspect-ratio" },
    { term: "Video Ad Specs", slug: "video-ad-specs" },
    { term: "Scroll-Stopping Content", slug: "scroll-stopping" },
    { term: "UGC Ads", slug: "ugc-ads" },
    { term: "Paid Social", slug: "paid-social" },
  ],
  relatedNote: "Vertical video is the format standard for short-form video and the dominant aspect ratio for paid social advertising. Understanding video ad specs ensures your vertical content meets each platform's technical requirements. The vertical format itself contributes to scroll-stopping effectiveness by filling the mobile screen.",
};
export default data;
