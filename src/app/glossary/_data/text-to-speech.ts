import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Text-to-Speech (TTS)",
  h1: "What Is Text-to-Speech (TTS)? AI Voice Generation",
  meta: "Text-to-speech (TTS) converts written text into natural-sounding audio using AI. Learn how modern TTS works, why voice quality matters for video ads, and how it powers AI content.",
  definition: "Text-to-speech (TTS) is AI technology that converts written text into spoken audio. Modern TTS systems produce voices that are nearly indistinguishable from human speech — with natural pacing, emotional inflection, breathing patterns, and conversational rhythm. In video marketing, TTS is the audio engine behind AI-generated videos, voiceovers, and automated content production.",
  whyMatters: [
    { label: "Voice quality determines video quality", text: "In AI-generated video, the voice is often the first thing that sounds 'off.' Robotic pacing, unnatural emphasis, or monotone delivery immediately signals to viewers that the content is AI-made. High-quality TTS with natural prosody (the rhythm and intonation of speech) is what makes AI video feel human — and feeling human is what makes ads convert." },
    { label: "It enables voice-first content at scale", text: "Voiceover content — whether for ads, podcasts, or product demos — traditionally requires hiring voice actors ($100–$500 per session). TTS eliminates this cost entirely. A brand can generate 50 different voiceovers in an afternoon, test which voice style resonates with their audience, and iterate without rebooking talent." },
    { label: "Multilingual reach without multilingual talent", text: "Modern TTS supports 50+ languages with native-sounding pronunciation. A brand can produce the same ad in English, Spanish, Japanese, and Arabic without hiring four different voice actors. Combined with lip-sync AI, this makes true video localization possible at a fraction of traditional dubbing costs." },
  ],
  howItWorks: [
    { heading: "Neural TTS Architecture", text: "Modern TTS uses neural networks trained on thousands of hours of human speech. The system works in two stages: first, a text analysis model converts written text into a sequence of phonemes with timing and emphasis markers. Second, a vocoder (voice decoder) generates the actual audio waveform from those phonemes. The best systems add a third layer — a prosody model that controls pacing, pitch variation, and emotional tone to make the output sound conversational rather than read-aloud." },
    { heading: "Voice Selection and Customization", text: "TTS platforms offer libraries of pre-built voices varying in gender, age, accent, and speaking style. Some platforms also support voice cloning — training a custom TTS model on a specific person's voice recordings. For marketing, voice selection matters enormously: a warm, casual female voice might convert 40% better than a formal male voice for a beauty product, while the reverse might be true for a B2B SaaS tool." },
  ],
  example: "An e-learning platform needs voiceovers for 200 short product tutorial videos. Hiring a voice actor would cost $15,000–$25,000 and take 3–4 weeks of recording sessions. Using TTS, they generate all 200 voiceovers in a single day for under $200. When they update their product UI, they simply edit the scripts and regenerate — no rebooking, no studio time, no re-recording.",
  product: {
    intro: "members.mom integrates premium TTS directly into the video generation pipeline:",
    points: [
      "Natural-sounding voices — Choose from a library of TTS voices that sound conversational, not robotic. Each voice is optimized for the casual, authentic delivery style that performs in social media ads.",
      "Seamless audio-visual sync — TTS output feeds directly into the lip-sync engine, ensuring perfect synchronization between voice and avatar mouth movements. No manual alignment needed.",
      "Multi-voice testing — Generate the same script with different voices to test which tone resonates with your audience. A/B test voice styles the same way you test hooks and CTAs. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "AI Voice Cloning", slug: "voice-cloning" },
    { term: "AI Lip Sync", slug: "lip-sync-ai" },
    { term: "Text-to-Video AI", slug: "text-to-video" },
    { term: "AI Dubbing", slug: "ai-dubbing" },
    { term: "AI Script Generation", slug: "ai-script-generation" },
    { term: "AI Subtitling", slug: "ai-subtitles" },
  ],
  relatedNote: "TTS is the audio foundation of AI video. It feeds into lip-sync AI for visual synchronization, powers AI dubbing for localization, and works alongside AI script generation to create a complete text-to-video pipeline. Voice cloning extends TTS by replicating specific voices rather than using generic ones.",
};
export default data;
