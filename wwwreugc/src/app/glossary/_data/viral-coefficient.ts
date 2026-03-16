import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Viral Coefficient",
  h1: "What Is Viral Coefficient? Measure Organic Spread",
  meta: "Viral coefficient measures how many new users each existing user brings in through sharing. Learn how to calculate it, what drives virality, and how to create shareable video content.",
  definition: "Viral coefficient (K-factor) is a metric that measures how many new users each existing user generates through sharing, referrals, or word-of-mouth. A viral coefficient of 1.0 means each user brings in exactly one new user. Above 1.0, your user base grows exponentially without additional ad spend. Below 1.0 (which is most products), organic spread supplements but doesn't replace paid acquisition.",
  whyMatters: [
    { label: "It's free growth", text: "Every user acquired through virality costs $0 in ad spend. Even a modest viral coefficient of 0.3 (each user brings in 0.3 new users) effectively reduces your blended CAC by 23%. A viral coefficient of 0.5 reduces it by 33%. You don't need true virality (K > 1.0) to benefit — any organic spread improves your acquisition economics." },
    { label: "It compounds with paid acquisition", text: "Viral coefficient multiplies the impact of paid acquisition. If you acquire 100 customers through ads and your viral coefficient is 0.4, those 100 customers bring in 40 more, who bring in 16 more, who bring in 6 more — totaling 162 customers from 100 paid acquisitions. Your effective CPA drops by 38% without any change to your ad campaigns." },
    { label: "Shareable content drives it", text: "Viral coefficient isn't just about product features (referral programs, invite mechanics). It's also about content. A video ad that gets shared organically extends your reach for free. Content that people want to share — because it's entertaining, surprising, or useful — has a built-in viral coefficient that amplifies your paid distribution." },
  ],
  howItWorks: [
    { heading: "Calculating Viral Coefficient", text: "Viral coefficient (K) = number of invitations sent per user × conversion rate of those invitations. Example: if each customer shares your product with 5 people (through social sharing, referral links, or word-of-mouth) and 10% of those people become customers, K = 5 × 0.10 = 0.5. To improve K, either increase the number of shares (make content more shareable, add referral incentives) or improve the conversion rate of shared content (make the landing experience compelling for referred visitors)." },
    { heading: "Creating Shareable Video Content", text: "Videos get shared when they trigger emotional responses: surprise ('I didn't know that'), humor ('this is hilarious'), identification ('this is so me'), or utility ('my friend needs to see this'). For advertising, the most shareable formats are: relatable problem-solution content ('if you struggle with X, watch this'), surprising demonstrations (unexpected product results), and social currency content (sharing makes the sharer look knowledgeable or helpful). UGC-style content is inherently more shareable than brand content because it feels like a personal recommendation." },
  ],
  example: "A meal prep brand creates a UGC-style video showing a week of meals prepared in 2 hours. The video is genuinely useful — viewers share it with friends who also struggle with meal planning. The paid ad generates 50,000 views and 1,200 shares. Those shares generate an additional 35,000 organic views and 180 purchases — all at $0 acquisition cost. The viral coefficient of this specific creative is 0.15 (each paid viewer generates 0.15 additional organic viewers). While modest, this organic amplification reduces the effective CPA of the campaign by 13%. They identify 'utility content' as their most shareable format and produce more of it.",
  product: {
    intro: "ReUGC helps you create the shareable content that drives organic amplification:",
    points: [
      "Authentic content gets shared — UGC-style videos from ReUGC look like personal recommendations, which are the most shared content type on social media. Authentic-feeling content earns organic distribution that polished brand ads don't.",
      "Test shareability signals — Generate multiple video concepts and measure which ones earn the most shares. Shares are the strongest signal of viral potential — optimize for them alongside traditional metrics like CPA.",
      "Volume increases viral chances — The more content you produce, the more chances you have to create something that resonates and spreads organically. ReUGC's plans ($49–$199/mo) give you enough volume to find your viral formats.",
    ],
  },
  related: [
    { term: "Social Proof", slug: "social-proof" },
    { term: "Organic Social", slug: "organic-social" },
    { term: "UGC", slug: "ugc" },
    { term: "Short-Form Video", slug: "short-form-video" },
    { term: "Blended CAC", slug: "blended-cac" },
    { term: "Social Commerce", slug: "social-commerce" },
  ],
  relatedNote: "Viral coefficient is driven by social proof (people share what others endorse) and amplified through organic social distribution. UGC content is inherently more shareable than brand content. Short-form video is the most shared format. Viral spread reduces blended CAC and feeds into social commerce by driving organic product discovery.",
};
export default data;
