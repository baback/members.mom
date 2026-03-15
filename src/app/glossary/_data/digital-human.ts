import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Digital Human",
  h1: "What Is a Digital Human? Virtual Presenters Explained",
  meta: "A digital human is a photorealistic AI-generated person that can speak, emote, and interact. Learn how digital humans are used in marketing, customer service, and video production.",
  definition: "A digital human is a photorealistic, AI-driven virtual person capable of speech, facial expressions, gestures, and in some cases, real-time interaction. Unlike simple avatars or animated characters, digital humans are designed to be indistinguishable from real people — they breathe, blink, shift their weight, and express emotion with the subtlety of a human performer.",
  whyMatters: [
    { label: "They're the next evolution of brand representatives", text: "Digital humans can serve as always-available brand ambassadors — appearing in ads, on websites, in apps, and even in live customer interactions. Unlike human spokespeople, they never age, never have scheduling conflicts, and can be deployed across every channel simultaneously. Major brands like Samsung, BMW, and L'Oréal have already deployed digital humans in customer-facing roles." },
    { label: "Production quality without production costs", text: "A digital human can deliver a presentation with the polish of a professional actor and the consistency of a CGI character — without the cost of either. Once created, a digital human can generate unlimited content from text input alone. This makes them particularly valuable for brands that need high volumes of presenter-led content." },
    { label: "They bridge the gap between AI and human connection", text: "Consumers respond to faces. A product page with a video presenter converts 80% better than one without. Digital humans provide that human element at scale — giving every piece of content a face and a voice without the logistics of human talent." },
  ],
  howItWorks: [
    { heading: "Creation and Training", text: "Digital humans are built through a combination of 3D modeling, motion capture, and AI training. A real person's appearance and movements are captured using high-resolution cameras and depth sensors. This data trains a neural network that can generate new expressions, movements, and speech from any input. The result is a digital twin that can be driven by text, audio, or even real-time conversation." },
    { heading: "Real-Time vs. Pre-Rendered", text: "Digital humans operate in two modes. Pre-rendered digital humans generate video from a script — you input text, and the system outputs a finished video. This is the mode used for ads and marketing content. Real-time digital humans can interact live — responding to questions, adapting their expression to the conversation, and maintaining eye contact through a webcam. Real-time is used for customer service and interactive experiences." },
  ],
  example: "A luxury hotel chain creates a digital human concierge that appears on their website and in pre-stay email campaigns. The digital concierge delivers personalized welcome messages, explains amenities, and provides local recommendations — all generated from text templates that pull in the guest's name and booking details. Guest engagement with pre-stay emails increases 340% compared to text-only emails, and the hotel produces content for 12 properties in 8 languages using a single digital human.",
  product: {
    intro: "members.mom makes digital human technology accessible for performance marketers:",
    points: [
      "No 3D modeling required — Skip the expensive digital human creation process. members.mom provides a library of ready-to-use AI presenters that deliver your scripts with natural expression and movement.",
      "Ad-optimized digital presenters — Unlike enterprise digital humans designed for customer service, members.mom's presenters are optimized for the casual, authentic delivery style that converts in social media ads.",
      "Affordable entry point — Enterprise digital human platforms charge $10,000–$50,000+ for setup. members.mom gives you access to high-quality AI presenters starting at $49/mo with no setup fees or long-term contracts.",
    ],
  },
  related: [
    { term: "AI Avatar", slug: "ai-avatar" },
    { term: "AI Actor", slug: "ai-actor" },
    { term: "Deepfake", slug: "deepfake" },
    { term: "AI Lip Sync", slug: "lip-sync-ai" },
    { term: "Text-to-Video AI", slug: "text-to-video" },
    { term: "AI UGC", slug: "ai-ugc" },
  ],
  relatedNote: "Digital humans represent the highest-fidelity end of the AI presenter spectrum, with AI avatars and AI actors being more accessible implementations of similar technology. All three rely on lip-sync AI and text-to-video pipelines, and all three can be used to produce AI UGC content.",
};
export default data;
