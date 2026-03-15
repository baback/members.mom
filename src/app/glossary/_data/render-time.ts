import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Render Time",
  h1: "What Is Render Time? How Fast AI Generates Video",
  meta: "Render time is how long it takes AI to generate a finished video from your input. Learn what affects render time, why it matters for production speed, and how to optimize it.",
  definition: "Render time is the duration between submitting a video generation request and receiving the finished output. In AI video generation, render time encompasses script processing, text-to-speech conversion, avatar animation, lip-sync generation, and final video encoding. It's the practical measure of how quickly you can go from idea to finished video.",
  whyMatters: [
    { label: "Speed enables real-time creative iteration", text: "If render time is 2 minutes, you can test an idea, review the output, adjust the script, and re-render in under 10 minutes. If render time is 2 hours, that same iteration takes half a day. Fast render times transform AI video from a 'submit and wait' tool into an interactive creative process where you can iterate in real time." },
    { label: "It determines batch production capacity", text: "When you need 20 video variations for a creative test, render time multiplied by 20 is your total production time. At 3 minutes per video, you're done in an hour. At 30 minutes per video, you need 10 hours. For brands running weekly creative tests, render time is the bottleneck that determines how many variations they can realistically produce." },
    { label: "It affects time-to-market", text: "In performance marketing, speed matters. A trending topic, a competitor's move, or a seasonal opportunity requires fast creative response. If you can generate a relevant video in 5 minutes, you can capitalize on the moment. If it takes 24 hours, the moment has passed. Render time is the difference between reactive and proactive creative strategies." },
  ],
  howItWorks: [
    { heading: "What Affects Render Time", text: "Several factors influence render time: video length (longer videos take longer to render), resolution (1080p renders faster than 4K), avatar complexity (full-body avatars with gestures take longer than head-and-shoulders), audio processing (text-to-speech generation adds time), and server load (peak usage times may increase queue wait). Most AI video platforms render a 30-second 1080p video in 2–10 minutes, depending on these factors." },
    { heading: "Render Time vs. Total Production Time", text: "Render time is just one component of total production time. The full workflow includes: scripting (5–30 minutes), platform setup (selecting avatar, voice, settings — 2–5 minutes), rendering (2–10 minutes), review (1–3 minutes), and any re-renders for adjustments. Even with a 10-minute render time, total production time for a single video is typically 20–45 minutes — still dramatically faster than the days or weeks required for traditional video production." },
  ],
  example: "A media buyer spots that a competitor just launched a major sale. They want to run counter-messaging ads immediately. Using AI video generation with a 3-minute render time, they write a script ('Before you buy from [competitor], watch this'), generate the video, review it, make one script adjustment, re-render, and have a finished ad uploaded to Meta Ads Manager in 22 minutes total. The ad is live within an hour of spotting the competitor's campaign. With traditional production, this response would take 3–5 days — by which time the competitor's sale would be over.",
  product: {
    intro: "members.mom is optimized for fast render times that keep pace with your creative needs:",
    points: [
      "Minutes, not hours — members.mom renders videos quickly, letting you go from script to finished video in minutes. Iterate on scripts, test different avatars, and produce variations without long wait times.",
      "Batch rendering — Generate multiple videos simultaneously rather than one at a time. When you need 10 variations for a creative test, queue them all and have the full batch ready quickly.",
      "No rendering expertise needed — You don't need to understand encoding settings, GPU allocation, or render queues. Submit your script, and members.mom handles the technical pipeline automatically. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Batch Video Generation", slug: "batch-generation" },
    { term: "Text-to-Video AI", slug: "text-to-video" },
    { term: "Video Bitrate", slug: "video-bitrate" },
    { term: "Video Codec", slug: "video-codec" },
    { term: "Content Velocity", slug: "content-velocity" },
    { term: "AI UGC", slug: "ai-ugc" },
  ],
  relatedNote: "Render time is the production bottleneck in text-to-video AI workflows. It directly impacts batch video generation capacity and content velocity. Technical factors like video bitrate and codec choice influence render time. Fast rendering is what makes AI UGC practical for the rapid iteration cycles that performance marketing demands.",
};
export default data;
