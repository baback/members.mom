import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "CTR",
  h1: "What Is CTR? Click-Through Rate for Video Ads",
  meta: "CTR (click-through rate) measures the percentage of ad viewers who click through to your destination. Learn how to calculate CTR, what benchmarks to target, and how to improve it.",
  definition: "Click-through rate (CTR) is the percentage of people who click on your ad after seeing it. It's calculated by dividing total clicks by total impressions and multiplying by 100. For video ads, CTR measures how effectively your creative — from hook to CTA — motivates viewers to take the next step, whether that's visiting a landing page, downloading an app, or starting a purchase.",
  whyMatters: [
    { label: "It bridges attention and action", text: "Thumb-stop rate tells you if people noticed your ad. CTR tells you if they cared enough to act on it. A high thumb-stop rate with a low CTR means your hook is strong but your message or CTA isn't compelling. CTR is the metric that separates entertaining content from effective advertising." },
    { label: "It directly affects ad costs", text: "On Meta and TikTok, CTR is a key input to your ad's relevance score. Higher CTR signals to the algorithm that your ad is valuable to users, which rewards you with lower CPMs and better placement. A 0.5% improvement in CTR can reduce your effective CPM by 15–25%, which compounds across your entire ad spend." },
    { label: "It's a diagnostic tool", text: "CTR helps you diagnose where your funnel breaks. High impressions + low CTR = weak creative or wrong audience. High CTR + low conversion rate = strong ad but weak landing page. High CTR + high conversion rate + high CPA = you're paying too much for traffic. Each scenario points to a different fix." },
  ],
  howItWorks: [
    { heading: "Benchmarks by Platform", text: "CTR benchmarks vary significantly by platform and industry. On Meta (Facebook/Instagram), average CTR for video ads is 0.9–1.5%. Top performers hit 2–3%. On TikTok, average CTR is 0.5–1.0% (lower because the platform is more entertainment-focused). On YouTube, pre-roll ads average 0.5–0.8%. For e-commerce specifically, Meta video ad CTR benchmarks are 1.0–1.8%, with UGC-style ads typically outperforming brand ads by 30–50%." },
    { heading: "Improving CTR", text: "CTR optimization focuses on two areas: the creative and the CTA. On the creative side, ensure your video builds desire and urgency throughout — don't front-load all the value in the hook and leave the viewer with no reason to click. On the CTA side, be specific ('See the 3 colors' beats 'Shop now'), create urgency ('Only 200 left' beats 'Limited stock'), and reduce friction ('Free shipping on your first order' beats 'Buy now'). Also test CTA placement — some audiences respond better to mid-video CTAs than end-of-video ones." },
  ],
  example: "An online furniture store runs video ads on Meta with a 1.1% CTR — right at the industry average. They test three CTA changes: replacing 'Shop Now' with 'See It in Your Room' (AR preview feature), adding a mid-video text overlay saying 'Free delivery + free returns,' and ending with a specific product shot instead of a logo. The combination lifts CTR to 2.3% — a 109% improvement. Their CPM drops from $12.40 to $8.80, and CPA decreases from $67 to $41, all from optimizing the click-through moment.",
  product: {
    intro: "members.mom helps you optimize CTR by making CTA testing fast and cheap:",
    points: [
      "Test CTAs systematically — Generate the same video with 5 different closing CTAs to find which language drives the most clicks. 'Learn more,' 'See pricing,' 'Watch the demo' — test them all and let the data decide.",
      "Mid-video CTA variations — Place your call-to-action at different points in the video to test whether your audience responds better to early, mid, or late CTAs. Generate each variation in minutes.",
      "Pair CTA testing with hook testing — Use members.mom to test hooks and CTAs independently, then combine the winners for maximum performance. Plans start at $49/mo for 10 videos.",
    ],
  },
  related: [
    { term: "CPA", slug: "cpa" },
    { term: "CPM", slug: "cpm" },
    { term: "Conversion Rate", slug: "conversion-rate" },
    { term: "CTA", slug: "cta" },
    { term: "Hook Rate", slug: "hook-rate" },
    { term: "ROAS", slug: "roas" },
  ],
  relatedNote: "CTR sits between hook rate (did they watch?) and conversion rate (did they buy?) in the ad performance funnel. It's influenced by your CTA quality and directly impacts your CPA, CPM, and ROAS. Together, these metrics form the complete picture of ad performance from impression to purchase.",
};
export default data;
