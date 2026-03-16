import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "AI Voice Cloning",
  h1: "What Is AI Voice Cloning? How It Works",
  meta: "AI voice cloning replicates a specific person's voice using machine learning. Learn how the technology works, its applications in marketing, and important ethical considerations.",
  definition: "AI voice cloning is the process of training a machine learning model to replicate a specific person's voice. Given a sample of someone's speech (typically 30 seconds to 5 minutes of audio), the AI learns their vocal characteristics — pitch, timbre, cadence, accent, and speaking patterns — and can then generate new speech in that voice from any text input.",
  whyMatters: [
    { label: "Brand voice consistency", text: "Some brands build their identity around a specific voice — a founder, a spokesperson, or a recognizable narrator. Voice cloning lets that voice scale across hundreds of pieces of content without the person recording each one. The founder can 'narrate' 50 product videos without spending a single hour in a recording booth." },
    { label: "Creator voice licensing", text: "A growing number of UGC creators and influencers are licensing their voices to AI platforms. This creates a new revenue stream for creators and gives brands access to authentic-sounding voices that their audience already trusts — without the per-video cost of traditional creator partnerships." },
    { label: "Ethical considerations are real", text: "Voice cloning raises legitimate concerns about consent and misuse. Reputable platforms require explicit consent from the voice owner before creating a clone. The technology itself is neutral — it's the consent framework and usage policies that determine whether it's used ethically. Brands should only work with platforms that enforce consent verification." },
  ],
  howItWorks: [
    { heading: "The Cloning Process", text: "Voice cloning works by analyzing a speech sample to extract vocal features: fundamental frequency (pitch), formant structure (the resonance that makes each voice unique), speaking rate, and prosodic patterns (how the person emphasizes words and phrases). These features are encoded into a voice model — essentially a mathematical representation of how that person sounds. When new text is fed into the model, it generates audio that matches those vocal characteristics." },
    { heading: "Quality vs. Sample Length", text: "There's a direct relationship between the amount of training audio and the quality of the clone. With 30 seconds of audio, you get a recognizable approximation. With 5 minutes, you get a convincing clone that captures subtle mannerisms. With 30+ minutes, you get a near-perfect replica that can express different emotions and speaking styles. For marketing applications, 3–5 minutes of clean audio typically produces production-ready results." },
  ],
  example: "A DTC brand's founder has become the face and voice of their Instagram content. Customers recognize her voice instantly. But she can't record 30 ad variations per month. They clone her voice with her consent using a 5-minute audio sample. Now, the marketing team writes scripts and generates voiceovers in the founder's voice — maintaining brand consistency across 40+ monthly ad variations while the founder focuses on running the business.",
  product: {
    intro: "ReUGC pairs high-quality AI voices with realistic avatars for complete video generation:",
    points: [
      "Premium voice library — Access a diverse selection of natural-sounding AI voices optimized for ad delivery. Each voice is designed to sound conversational and authentic, not synthetic or robotic.",
      "Voice-avatar pairing — Match the right voice to the right avatar for maximum authenticity. The lip-sync engine ensures perfect synchronization regardless of which voice you select.",
      "Consistent brand voice across campaigns — Use the same voice across all your ad variations to build audio brand recognition while varying visuals, hooks, and scripts. Plans start at $49/mo.",
    ],
  },
  related: [
    { term: "Text-to-Speech (TTS)", slug: "text-to-speech" },
    { term: "AI Lip Sync", slug: "lip-sync-ai" },
    { term: "Deepfake", slug: "deepfake" },
    { term: "AI Actor", slug: "ai-actor" },
    { term: "AI Dubbing", slug: "ai-dubbing" },
    { term: "AI Avatar", slug: "ai-avatar" },
  ],
  relatedNote: "Voice cloning is an extension of text-to-speech technology — TTS generates speech in generic voices, while voice cloning generates speech in a specific person's voice. It connects to deepfake technology (which combines face and voice synthesis), AI dubbing (which uses voice cloning for localization), and AI avatars (which need a voice to speak).",
};
export default data;
