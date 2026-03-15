import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Ad Creative",
  h1: "What Is Ad Creative? The Visual Side of Paid Ads",
  meta: "Ad creative is the visual and audio content that makes up your advertisement. Learn what makes ad creative effective, the different formats, and how to produce it at scale.",
  definition: "Ad creative refers to the visual, audio, and textual elements that make up an advertisement — the video, image, copy, headline, and call-to-action that a user actually sees and interacts with. In performance marketing, 'creative' is often used as a noun ('we need more creative') to describe the content assets that drive ad campaigns.",
  whyMatters: [
    { label: "Creative is the #1 performance variable", text: "Meta's internal research attributes 56% of ad auction outcomes to creative quality. Google's data shows similar patterns. Targeting, bidding, and budget optimization matter, but they're secondary to whether your creative resonates with the audience. Two identical campaigns with different creative can see 5–10x differences in CPA." },
    { label: "Volume is the new quality", text: "The era of finding one 'hero' creative and running it for months is over. Modern ad accounts need 20–50 active creatives at any time, with 5–10 new ones entering rotation weekly. This volume requirement has fundamentally changed what 'good' ad creative means — it's no longer about perfection, it's about producing enough variations to let the algorithm find winners." },
    { label: "Format determines performance", text: "The same message delivered as a static image, a polished brand video, and a UGC-style video will perform dramatically differently. On TikTok and Reels, UGC-style video outperforms polished content by 2–3x on average. On Facebook feed, carousel ads often outperform single images. Matching your creative format to the platform and placement is as important as the message itself." },
  ],
  howItWorks: [
    { heading: "Types of Ad Creative", text: "The main ad creative formats are: static images (product shots, lifestyle photos, graphic designs), video (UGC, brand films, product demos, testimonials), carousels (multiple images or videos in a swipeable format), and interactive (polls, AR filters, playable ads). For most DTC and e-commerce brands in 2026, video — specifically short-form, vertical, UGC-style video — is the highest-performing format across Meta, TikTok, and YouTube." },
    { heading: "The Creative Production Challenge", text: "The math is brutal: if you need 10 new creatives per week and each one costs $200–$500 to produce with human creators, you're spending $8,000–$20,000/month just on creative production. This is why AI-generated creative is becoming essential — it drops the per-unit cost to $4–$10, making the volume requirements financially sustainable for brands of all sizes." },
  ],
  example: "An e-commerce brand audits their ad account and finds they're running just 4 active creatives — all static images created 6 weeks ago. Performance has been declining for 3 weeks (classic creative fatigue). They commit to a new creative strategy: produce 8 UGC-style videos per week, test each for 72 hours, kill the bottom 6, and scale the top 2. Within a month, their CPA drops 34% and their ad account is consistently finding new winners because the algorithm has enough creative variety to optimize against.",
  product: {
    intro: "members.mom is built to solve the ad creative volume problem:",
    points: [
      "Video creative in minutes — Generate UGC-style video ads from scripts without filming, editing, or hiring creators. Each video is platform-ready for TikTok, Meta, and YouTube Shorts.",
      "The volume your ad account needs — Plans range from 10 videos/mo ($49) to 60 videos/mo ($199), giving you the creative throughput to feed hungry ad accounts without the production overhead.",
      "Variation without repetition — Swap hooks, avatars, CTAs, and scripts to create dozens of unique-feeling ads from a handful of concepts. Keep your ad account fresh and the algorithm happy.",
    ],
  },
  related: [
    { term: "Creative Testing", slug: "creative-testing" },
    { term: "Creative Fatigue", slug: "creative-fatigue" },
    { term: "UGC Ads", slug: "ugc-ads" },
    { term: "Creative Strategy", slug: "creative-strategy" },
    { term: "Dynamic Creative", slug: "dynamic-creative" },
    { term: "Content Velocity", slug: "content-velocity" },
  ],
  relatedNote: "Ad creative is the tangible output of your creative strategy. It's tested through creative testing, refreshed to combat creative fatigue, and produced at the content velocity your ad account demands. UGC ads and dynamic creative are specific formats within the broader ad creative category.",
};
export default data;
