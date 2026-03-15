import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Deepfake",
  h1: "What Is a Deepfake? AI Video Manipulation Explained",
  meta: "A deepfake is AI-generated media that replaces a person's likeness or voice with a synthetic version. Learn how deepfakes work, their legitimate uses, and how to spot them.",
  definition: "A deepfake is synthetic media — typically video or audio — created using deep learning AI to replace or generate a person's face, voice, or body movements. The term combines 'deep learning' and 'fake,' and while it's often associated with misinformation, the underlying technology also powers legitimate applications like AI video generation, dubbing, and digital content creation.",
  whyMatters: [
    { label: "The technology is dual-use", text: "The same neural networks that create misleading deepfakes also power legitimate AI video tools used by thousands of brands. Face synthesis, lip sync, and voice generation are core technologies in AI UGC, virtual presenters, and video localization. Understanding deepfakes helps marketers make informed decisions about which AI video tools to use and how to use them ethically." },
    { label: "Consumer awareness is rising", text: "As deepfake awareness grows, consumers are becoming more skeptical of video content. This creates both a challenge and an opportunity for marketers: AI-generated content needs to be transparent about its nature (many platforms now require AI content labels), but brands that use AI ethically and transparently can actually build trust by being upfront about their production methods." },
    { label: "Regulation is coming", text: "The EU AI Act, US state laws, and platform policies are increasingly requiring disclosure of AI-generated content. Brands using AI video tools need to understand these requirements and ensure their content complies. This isn't a future concern — Meta, TikTok, and YouTube already have AI content labeling policies in effect." },
  ],
  howItWorks: [
    { heading: "Face Swap vs. Face Generation", text: "Deepfakes come in two forms. Face swapping takes an existing video and replaces one person's face with another — this is the type most associated with misinformation. Face generation creates an entirely new face that doesn't belong to any real person. Legitimate AI video tools primarily use face generation (creating synthetic presenters) or consented likeness reproduction (where real people authorize the use of their appearance)." },
    { heading: "Detection and Disclosure", text: "Deepfake detection tools analyze videos for telltale signs: inconsistent lighting on the face versus background, unnatural blinking patterns, artifacts around hair and face edges, and audio-visual sync issues. However, detection is an arms race — as generation improves, detection must keep up. The more reliable approach for brands is proactive disclosure: labeling AI-generated content as such, which builds trust and ensures regulatory compliance." },
  ],
  example: "A brand considers using AI-generated video for their Meta ads. They choose a platform that uses consented AI avatars (real people who've authorized their likeness) and adds the 'AI-generated' label that Meta requires. Their ads perform well because the content looks authentic and the transparency label doesn't hurt performance — in fact, Meta's data shows that labeled AI content performs comparably to unlabeled content in most ad categories. The brand avoids legal risk while getting the speed and cost benefits of AI production.",
  product: {
    intro: "ReUGC takes an ethical, transparent approach to AI video generation:",
    points: [
      "Consented avatars only — Every AI avatar in the ReUGC library is based on individuals who have explicitly consented to the use of their likeness. No unauthorized face generation, no ethical gray areas.",
      "Platform-compliant output — Videos generated with ReUGC include metadata that supports AI content labeling requirements on Meta, TikTok, and YouTube. Stay compliant without extra steps.",
      "Legitimate commercial use — ReUGC is designed for advertising and marketing content, not deception. The tool produces authentic-looking UGC-style ads that are clearly commercial in nature. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "AI Avatar", slug: "ai-avatar" },
    { term: "AI Actor", slug: "ai-actor" },
    { term: "AI Lip Sync", slug: "lip-sync-ai" },
    { term: "AI Voice Cloning", slug: "voice-cloning" },
    { term: "Digital Human", slug: "digital-human" },
    { term: "AI UGC", slug: "ai-ugc" },
  ],
  relatedNote: "Deepfake technology shares its technical foundations with AI avatars, AI actors, lip sync, and voice cloning — all of which use the same neural network architectures. The difference is intent and consent. Digital humans and AI UGC represent the legitimate commercial applications of these technologies.",
};
export default data;
