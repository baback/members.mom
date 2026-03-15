import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Crowdfunding",
  scriptCount: 3,
  h1: "UGC Video Script for Crowdfunding Campaigns: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for crowdfunding campaigns — backer testimonial, founder pitch, and urgency formats. Plus 5 hooks that drive pledges.",
  intro: "Crowdfunding campaigns live or die on social proof and urgency. UGC-style videos create both — when real backers share why they pledged, it gives hesitant viewers the confidence to back too. The difference between a funded campaign and a failed one is often just the right video at the right time. Here are 3 scripts built for crowdfunding.",
  scripts: [
    {
      name: "The Backer Testimonial",
      subtitle: "Best for: Mid-campaign momentum. Building social proof when you need more backers to hit your goal.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"I just backed this project on Kickstarter and\nI want to tell you why before the early bird\npricing ends"\n\n[SETUP — 3-10s]\n"I'm usually skeptical about crowdfunding. I've\nbacked 2 projects before — one delivered late\nand the other was disappointing. So I don't\npledge lightly anymore."\n\n[WHY I BACKED — 10-20s]\n"This one's different. The founder has a working\nprototype — not a render, an actual product you\ncan see functioning in the video. They've been\ntransparent about the manufacturing timeline\nand they're already 70% funded in the first week."\n"The product itself solves [specific problem]\nthat I deal with every day. And the early bird\nprice is $59 — the retail price will be $129\nwhen it launches. That's a no-brainer."\n\n[CTA — 20-25s]\n"Early bird ends in 3 days. If this solves a\nproblem you have, back it now while the price\nis still low. Link in bio."`,
      notes: [
        "Opening with crowdfunding skepticism (\"I don't pledge lightly\") validates the viewer's own hesitation and makes the endorsement more credible",
        "\"Working prototype, not a render\" addresses the #1 crowdfunding fear: that the product doesn't actually exist",
        "The funding progress (70% in first week) is social proof that other people have already validated the project",
        "The price comparison ($59 early bird vs $129 retail) creates a clear financial incentive to back now",
      ],
    },
    {
      name: "The Founder Pitch",
      subtitle: "Best for: Campaign launch. Telling the origin story that makes people care enough to back.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"I spent 2 years building this in my garage\nbecause no company would make what I needed.\nSo I made it myself."\n\n[STORY — 3-14s]\n"I'm a [profession] and every day I dealt with\n[specific frustration]. I looked everywhere for\na solution and it didn't exist. So I learned\nCAD, found a manufacturer, and built 50\nprototypes until I got it right."\n"This is version 51. It [key benefit] and it\n[secondary benefit]. I've been using it daily\nfor 6 months and it works exactly like I\ndesigned it to."\n[Show product, demonstrate it working]\n"Now I need your help to bring it to everyone\nwho has the same problem I did."\n\n[CTA — 14-20s]\n"We're live on Kickstarter. Early backers get\nit at 50% off retail. Link in bio — help me\nmake this real."`,
      notes: [
        "\"No company would make what I needed\" positions the founder as a frustrated consumer turned creator. It's the most relatable origin story",
        "\"50 prototypes\" shows dedication and iteration. It signals the product has been refined, not rushed",
        "\"I've been using it daily for 6 months\" is the founder eating their own cooking. It's the strongest possible product endorsement",
        "\"Help me make this real\" creates a collaborative relationship between founder and backer. It's not a purchase — it's a partnership",
      ],
    },
    {
      name: "The Campaign Urgency",
      subtitle: "Best for: Final push. Last 48-72 hours of the campaign when you need to hit your funding goal.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"This campaign ends in 48 hours and they're\n$12,000 away from their goal. Let me tell you\nwhy you should care."\n[Direct to camera, urgent but genuine]\n\n[URGENCY — 2-13s]\n"If they don't hit their goal, this product\ndoesn't get made. That's how crowdfunding works\n— it's all or nothing."\n"I backed this because [specific problem it\nsolves] affects me every day. The early bird\nprice is $59 and it'll retail for $129. After\nthe campaign, this price is gone forever."\n"They're at 85% funded with 1,200 backers.\nThey just need a few hundred more people to\nmake this happen."\n\n[CTA — 13-17s]\n"48 hours. $12,000 to go. If this product\nwould help you, now's the time. Link in bio."`,
      notes: [
        "\"$12,000 away from their goal\" makes the gap feel closeable. It's specific enough to feel urgent but achievable",
        "Explaining the all-or-nothing model educates viewers who might not understand crowdfunding mechanics",
        "\"This price is gone forever\" creates permanent scarcity. Unlike sales that repeat, crowdfunding early bird pricing is genuinely one-time",
        "\"1,200 backers\" provides social proof. If 1,200 people have already backed, the viewer feels safer joining them",
      ],
    },
  ],
  hooks: [
    { line: "I backed this for $59 and the retail price will be $129. That's the best ROI of any purchase I've made this year.", trigger: "early backer value", note: "The price gap between backing and retail is the strongest financial argument for crowdfunding. Make the math obvious." },
    { line: "This founder quit their job to build the product I've been wanting for 5 years", trigger: "founder dedication", note: "Personal sacrifice adds emotional weight. The viewer wants to support someone who's all-in on solving their problem." },
    { line: "POV: you find a crowdfunding project that actually has a working prototype, not just a 3D render", trigger: "legitimacy", note: "Addresses the biggest crowdfunding fear. A working prototype is the strongest trust signal in this space." },
    { line: "This campaign is 85% funded with 3 days left. Let's get it across the finish line.", trigger: "collective action", note: "\"Let's\" creates community. Being part of getting a project funded is emotionally rewarding for backers." },
    { line: "I've backed 20 Kickstarter projects. This is the one I'm most excited about.", trigger: "experienced backer", note: "Volume of backing experience establishes credibility. The single standout creates powerful exclusivity." },
  ],
  tips: [
    "Crowdfunding UGC needs to address trust first. Show the working prototype, the founder's face, the manufacturing plan. Backers need to believe the product will actually ship",
    "Always include the early bird price vs retail price comparison. The savings incentive is the #1 driver of crowdfunding pledges",
    "Create different content for different campaign phases: launch (excitement), mid-campaign (social proof), final days (urgency). Each phase needs different emotional energy",
    "Show the product being used, not just displayed. A working demo is worth more than any amount of marketing copy in crowdfunding",
    "Include the funding progress and backer count. Social proof compounds — the more backers you show, the more comfortable new backers feel pledging",
  ],
  ctaLine: "Create crowdfunding UGC videos from these scripts. No prototype needed.",
};
export default data;
