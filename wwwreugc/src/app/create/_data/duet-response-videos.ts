import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Duet & Response Videos — Engagement Content",
  readTime: "7 min",
  meta: "Create AI duet and response videos that drive engagement and conversation. Includes script framework, hook templates, and best practices for reactive content.",
  intro: "Duet and response videos generate 2x the engagement of standalone content because they're inherently conversational. The format — reacting to, building on, or responding to another piece of content — taps into the social nature of platforms like TikTok and Instagram. It's a dialogue, not a monologue. For brands, duet-style content is a way to insert your product into existing conversations. Responding to a trending video, answering a customer comment, or reacting to a competitor's claim — these formats feel organic and timely. AI-generated response videos let you participate in trending conversations at speed, producing reactive content in minutes instead of the hours it takes to film, edit, and post.",
  what: {
    definition: "A duet or response video reacts to, comments on, or builds upon another piece of content — a trending video, a customer comment, a competitor claim, or a viral moment. The format is conversational and positions your brand as part of the cultural dialogue.",
    reasons: [
      { label: "Conversational format", text: "Response videos feel like a conversation, not a broadcast. This two-way dynamic is more engaging than standalone content because the viewer is following a dialogue with context, stakes, and opinions." },
      { label: "Trend participation", text: "Responding to trending content gives your video algorithmic boost. Platforms prioritize content that engages with trending topics, sounds, and formats. Your product gets exposure through cultural relevance." },
      { label: "Comment conversion", text: "Responding to customer comments with video turns questions into content. A single comment response video can answer the question for thousands of viewers while demonstrating your product." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Reference the content you're responding to. The viewer should immediately understand the context.", examples: ["\"Someone commented 'does this actually work on dark skin?' Let me show you.\"", "\"I keep seeing people say [claim]. I have to respond to this.\""], why: "Referencing the original content creates immediate context. The viewer understands this is a response, which signals a conversation worth following.", mistake: "Not providing context for the response. If the viewer doesn't know what you're responding to, the video loses its conversational power." },
    { step: "The Setup", time: "3–8 seconds", what: "Acknowledge the original point and set up your response. Show respect for the question or claim before addressing it.", examples: ["\"This is actually a great question and I get it a lot. Most brands don't show diverse skin tones in their content, so the skepticism is totally valid.\""], why: "Acknowledging the validity of the question builds trust. It shows you're listening and taking concerns seriously, not just defending your product.", mistake: "Being dismissive of the original content. 'That's wrong' is confrontational. 'Great question, let me show you' is collaborative." },
    { step: "The Payoff", time: "8–20 seconds", what: "Deliver your response with evidence. Show, don't just tell.", examples: ["\"Here's [product] on my skin — I'm shade [shade]. Watch it blend. See? No white cast, no ashy finish, and the coverage is even. This formula was tested on 40+ skin tones. It works.\""], why: "Visual demonstration is the strongest response to skepticism. Showing the product on the relevant skin tone answers the question more convincingly than any verbal explanation.", mistake: "Responding with words only. If someone asks 'does it work on dark skin?' — show it working on dark skin." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Invite more questions and direct viewers to try the product.", examples: ["\"Keep the questions coming — I'll answer every one. Link in bio to try it yourself.\"", "\"Drop your shade in the comments and I'll show you. Link below.\""], why: "Inviting more questions creates ongoing engagement and content opportunities. It positions your brand as accessible and responsive." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"Someone said 'there's no way this works as well as you claim.' Challenge accepted."\n[Reading comment, determined expression]\n\n[SETUP — 3-8s]\n"I love this kind of comment because it gives me a chance to prove it. No filters, no tricks — just the product and my skin. Let's do this live."\n[Show bare skin, no makeup]\n\n[PAYOFF — 8-18s]\n"One pump. Blending it in... and look. Full coverage, natural finish, no cakey texture. I'm not using a filter — check the lighting. This is what the product actually does. To the person who commented: I hope this answers your question."\n[Apply product live, show results from multiple angles]\n\n[CTA — 18-22s]\n"If you have doubts, I get it. Try it yourself. Link in bio. And keep the comments coming — I'll respond to all of them."\n[Confident smile, point to link]`,
  hooks: [
    { line: "Replying to @[user]: 'Does this actually work?' Let me show you.", trigger: "The reply format is native to TikTok and signals authentic engagement. The viewer knows this is a real question being answered.", products: "Any product facing skepticism — skincare, supplements, tech, services" },
    { line: "Everyone's saying [claim] about [product]. Here's what they're getting wrong.", trigger: "Correcting misinformation positions you as the authority. The viewer wants to know the truth.", products: "Products with common misconceptions or competitor misinformation" },
    { line: "I saw this video about [topic] and I HAVE to respond. This is important.", trigger: "Urgency and importance signal that the response contains valuable information. The viewer feels they need to hear this.", products: "Health, skincare, nutrition — categories where misinformation is common" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–30 seconds for comment responses, 20–45 seconds for duet-style reactions. Keep responses concise — the original content provides context, so you don't need a long setup." },
    { label: "Speed matters", text: "Response content is time-sensitive. Respond to trending topics within 24–48 hours. After that, the conversation has moved on and your response feels late." },
    { label: "Show, don't argue", text: "When responding to skepticism, demonstrate rather than debate. Visual proof is more persuasive than verbal arguments." },
    { label: "Respect the source", text: "Acknowledge the original content respectfully, even if you disagree. Combative responses alienate viewers. Collaborative responses build community." },
    { label: "Invite dialogue", text: "End by inviting more questions or comments. This creates a content flywheel — each response generates more questions, which generate more response videos." },
    { label: "Captions", text: "Display the original comment or claim as a text overlay at the start. This provides context for viewers who didn't see the original content. Bold your key response points." },
  ],
  whenToUse: {
    stage: "All funnel stages. Response videos work for awareness (trend participation), consideration (answering questions), and conversion (addressing objections).",
    audience: "Engaged social media users who participate in conversations, comment on content, and follow trending topics. The format resonates with audiences who value brand responsiveness.",
    platforms: "TikTok (native duet and reply format), Instagram Reels (response format), YouTube Shorts. Response content is platform-native and gets algorithmic preference.",
    pairWith: "Use response videos as a bridge to product demos. The response addresses the question; the demo provides the full product experience.",
  },
  ctaLine: "Create response videos that join the conversation. No filming delays, no missed trends.",
};
export default data;