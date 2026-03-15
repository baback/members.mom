import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Text-to-Video AI",
  h1: "What Is Text-to-Video AI? Turn Scripts Into Videos",
  meta: "Text-to-video AI converts written scripts or prompts into finished video content. Learn how the technology works, its current capabilities, and practical applications for marketers.",
  definition: "Text-to-video AI is a category of artificial intelligence that generates video content from text input. You provide a script, prompt, or description, and the AI produces a complete video — including visuals, audio, and motion. In marketing, this typically means generating presenter-led videos where an AI avatar delivers a scripted message with realistic lip sync and natural delivery.",
  whyMatters: [
    { label: "It collapses the production timeline", text: "Traditional video production involves scripting, casting, filming, editing, and post-production — a pipeline that takes days to weeks. Text-to-video AI compresses this to minutes. Write a script, click generate, and receive a finished video. For performance marketers who need to test 10–20 creatives per week, this speed advantage is transformative." },
    { label: "It democratizes video creation", text: "Before text-to-video AI, producing quality video content required either a production budget or video editing skills. Now, anyone who can write a script can produce a video. This shifts the competitive advantage from production capability to creative strategy — the brands that win are the ones with the best ideas, not the biggest budgets." },
    { label: "It makes iteration free", text: "In traditional production, changing a single line of script means reshooting. With text-to-video AI, you edit the text and re-render. This makes iteration essentially free, which fundamentally changes how brands approach creative development — you can test 20 script variations instead of committing to one." },
  ],
  howItWorks: [
    { heading: "Presenter-Based Text-to-Video", text: "The most commercially mature form of text-to-video AI uses a presenter model: your text is converted to speech via TTS, an AI avatar is selected as the visual presenter, and lip-sync AI maps the audio to the avatar's face. The output is a video of a realistic-looking person delivering your script. This approach is ideal for ads, testimonials, explainers, and any content where a human presenter adds credibility." },
    { heading: "Generative Text-to-Video", text: "A newer approach uses diffusion models (similar to image generators like Midjourney) to generate entire video scenes from text descriptions. You might write 'a woman walking through a sunlit kitchen holding a coffee mug' and the AI generates that scene. This technology is advancing rapidly but is currently better suited for B-roll and visual storytelling than for dialogue-driven ad content where lip sync and delivery matter." },
  ],
  example: "A subscription box brand needs to test 12 different value propositions for their Meta ads. Their copywriter writes 12 scripts in 2 hours, each highlighting a different benefit (convenience, variety, price, gifting, etc.). Using text-to-video AI, they generate all 12 videos in under an hour, each featuring a different AI presenter. They launch all 12 as ads, and within 72 hours, the data shows that the 'gifting' angle outperforms everything else by 3x. They double down on that angle with 5 more variations — all generated the same day.",
  product: {
    intro: "ReUGC is a text-to-video platform built specifically for performance marketers who need ad-ready content fast:",
    points: [
      "Script in, video out — Paste your script, choose an avatar and voice, and generate a finished video in minutes. No editing software, no production knowledge required. The output is ready to upload directly to your ad platform.",
      "Optimized for ad formats — Every video is generated in vertical (9:16) format with platform-ready specs for TikTok, Meta, and YouTube Shorts. Captions, pacing, and delivery are tuned for scroll-stopping performance.",
      "Volume that matches your testing pace — With plans from $49/mo (10 videos) to $199/mo (60 videos), you can generate the creative volume your ad account needs without the cost scaling of traditional production.",
    ],
  },
  related: [
    { term: "AI UGC", slug: "ai-ugc" },
    { term: "AI Avatar", slug: "ai-avatar" },
    { term: "Text-to-Speech (TTS)", slug: "text-to-speech" },
    { term: "AI Script Generation", slug: "ai-script-generation" },
    { term: "Render Time", slug: "render-time" },
    { term: "Batch Video Generation", slug: "batch-generation" },
  ],
  relatedNote: "Text-to-video AI is the end-to-end pipeline that combines AI avatars, text-to-speech, and rendering into a single workflow. It's powered by AI script generation on the input side and measured by render time on the output side. Batch generation extends this to produce multiple videos simultaneously.",
};
export default data;
