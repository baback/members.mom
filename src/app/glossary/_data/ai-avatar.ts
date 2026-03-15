import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "AI Avatar",
  h1: "What Is an AI Avatar? Digital Presenters Explained",
  meta: "An AI avatar is a computer-generated digital human that can speak, emote, and present on camera. Learn how AI avatars work in video ads and content creation.",
  definition: "An AI avatar is a digitally generated human likeness that can deliver speech, display facial expressions, and simulate natural movement on camera. In video marketing, AI avatars serve as virtual presenters — reading scripts with realistic lip sync, eye contact, and gestures without requiring a real person to film anything.",
  whyMatters: [
    { label: "They eliminate filming entirely", text: "Traditional video production requires a person, a camera, lighting, and a location. AI avatars need only a script. This removes scheduling conflicts, travel costs, reshoots, and the entire physical production pipeline. For brands producing 10–50 videos per month, this isn't a convenience — it's a structural cost advantage." },
    { label: "Diversity and representation at scale", text: "Need a presenter who speaks Spanish, looks like your target demographic in Southeast Asia, and can deliver a 45-second script? AI avatar libraries offer dozens of ethnicities, ages, and styles — letting brands match their presenter to their audience without casting calls or geographic limitations." },
    { label: "Consistency across campaigns", text: "Human presenters have bad days, change their appearance, or become unavailable. AI avatars deliver the same quality every time. This consistency matters for brands running always-on campaigns where creative refreshes happen weekly and the presenter needs to feel familiar but not stale." },
  ],
  howItWorks: [
    { heading: "How AI Avatars Are Created", text: "Most AI avatars start with a real person. The individual is filmed from multiple angles with various expressions and mouth movements. This footage trains a neural network to generate new video of that person saying anything. The result is a photorealistic digital human that can be driven by any text input — the AI generates the appropriate lip movements, facial expressions, and head gestures to match the audio." },
    { heading: "Quality Tiers", text: "AI avatars range from basic (a static face with moving lips) to advanced (full upper-body movement, natural gestures, realistic eye tracking, and emotional expression). Basic avatars work for explainer content and internal communications. For ad creative — where every millisecond of viewer attention matters — you need advanced avatars that pass the 'uncanny valley' test and feel genuinely human in a scrolling feed." },
  ],
  example: "A fintech app needs to produce onboarding videos in 6 languages for different markets. Hiring actors for each language would cost $3,000–$5,000 per language ($18,000–$30,000 total). Instead, they use an AI avatar that speaks all 6 languages with native-sounding pronunciation. Total cost: under $500. The videos are produced in a single afternoon, and when the app updates its features, they simply re-render with updated scripts — no reshoots needed.",
  product: {
    intro: "ReUGC offers a curated library of AI avatars designed specifically for ad performance:",
    points: [
      "Ad-optimized avatars — Every avatar in the ReUGC library is designed to look natural in vertical video feeds. They gesture, make eye contact, and deliver lines with the casual energy that performs on TikTok and Instagram.",
      "Swap presenters instantly — Test the same script with 5 different avatars to see which face resonates with your audience. Different demographics respond to different presenters — now you can test that hypothesis for the cost of a coffee.",
      "New avatars added regularly — The library grows continuously, so your content never looks repetitive. Pair avatar variety with script variations to create dozens of unique-feeling ads from a single campaign brief. Starting at $49/mo.",
    ],
  },
  related: [
    { term: "AI UGC", slug: "ai-ugc" },
    { term: "AI Actor", slug: "ai-actor" },
    { term: "Digital Human", slug: "digital-human" },
    { term: "AI Lip Sync", slug: "lip-sync-ai" },
    { term: "Text-to-Video AI", slug: "text-to-video" },
    { term: "Deepfake", slug: "deepfake" },
  ],
  relatedNote: "AI avatars are the visual component of a broader AI video stack. They rely on lip-sync AI for realistic speech, overlap with digital humans and AI actors in terminology, and are powered by the same text-to-video pipelines that drive modern AI content creation. Understanding deepfake technology helps contextualize the ethical considerations around synthetic media.",
};
export default data;
