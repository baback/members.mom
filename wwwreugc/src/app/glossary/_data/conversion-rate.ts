import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Conversion Rate",
  h1: "What Is Conversion Rate? How to Measure & Improve",
  meta: "Conversion rate is the percentage of visitors who complete a desired action. Learn how to calculate conversion rate for ads and landing pages, plus proven optimization tactics.",
  definition: "Conversion rate is the percentage of users who complete a desired action out of the total number who had the opportunity. In advertising, it typically refers to the percentage of ad clickers who make a purchase, submit a lead form, or complete another goal action. A 3% conversion rate means 3 out of every 100 visitors converted.",
  whyMatters: [
    { label: "It's the final multiplier in your funnel", text: "Your ad can have a perfect hook, strong CTR, and low CPM — but if your conversion rate is poor, none of it matters. Conversion rate is the last step between ad click and revenue. Improving conversion rate from 2% to 3% is a 50% improvement in revenue from the same traffic, with zero additional ad spend." },
    { label: "It reveals message-market fit", text: "Conversion rate is the clearest signal of whether your ad's promise matches your landing page's delivery. A high CTR with a low conversion rate means your ad set expectations that your landing page didn't meet. A low CTR with a high conversion rate means your landing page is great but your ad isn't reaching enough of the right people. The interplay between these metrics tells you exactly where to focus." },
    { label: "It varies dramatically by traffic source", text: "Conversion rates differ by platform, ad format, and audience temperature. Cold traffic from TikTok might convert at 1.5%, while retargeted traffic from Meta converts at 8%. Organic search traffic might convert at 5%, while email traffic converts at 12%. Understanding these differences prevents you from applying a single benchmark to all traffic and helps you set realistic expectations per channel." },
  ],
  howItWorks: [
    { heading: "Calculating Conversion Rate", text: "Conversion rate = (number of conversions ÷ number of visitors) × 100. For e-commerce, the industry average is 2.5–3.5% for cold traffic and 5–10% for warm/retargeted traffic. For lead generation, average rates are 3–8% depending on the offer and form length. Always segment by traffic source — blending cold and warm traffic into a single conversion rate hides important performance differences." },
    { heading: "Optimization Levers", text: "Conversion rate optimization (CRO) focuses on reducing friction between click and purchase. Key levers include: page load speed (every 1-second delay reduces conversions by 7%), message match (your landing page headline should echo your ad's promise), social proof (reviews, testimonials, trust badges), simplified checkout (fewer form fields, guest checkout option), and urgency elements (limited stock, countdown timers). On the ad side, setting accurate expectations in your creative improves conversion rate by attracting qualified traffic." },
  ],
  example: "An online course creator runs TikTok ads driving to a sales page. CTR is strong at 1.8%, but conversion rate is only 0.9% — well below the 2.5% target. They analyze the disconnect: the ad promises 'learn to code in 30 days' but the landing page leads with pricing and curriculum details. They redesign the page to lead with student success stories and a 'day 1 vs. day 30' comparison — matching the transformation promise of the ad. Conversion rate jumps to 3.2%, and CPA drops from $89 to $25 without changing the ad creative at all.",
  product: {
    intro: "ReUGC helps improve conversion rates by ensuring your ad creative sets the right expectations:",
    points: [
      "Message-matched creative — Generate video ads that accurately represent your product and offer, so visitors who click through are pre-qualified and ready to convert. No bait-and-switch, no expectation mismatch.",
      "Test value propositions before scaling — Create 5 videos highlighting different benefits and see which one drives the highest conversion rate, not just the highest CTR. The creative that converts best is the one worth scaling.",
      "Retargeting creative at scale — Generate dedicated retargeting videos that address common objections and push warm audiences to convert. Different messaging for different funnel stages, all from one platform starting at $49/mo.",
    ],
  },
  related: [
    { term: "CTR", slug: "ctr" },
    { term: "CPA", slug: "cpa" },
    { term: "Landing Page", slug: "landing-page" },
    { term: "ROAS", slug: "roas" },
    { term: "Retargeting", slug: "retargeting" },
    { term: "Conversion Campaign", slug: "conversion-campaign" },
  ],
  relatedNote: "Conversion rate is the bridge between CTR (clicks) and CPA (cost per customer). It's heavily influenced by landing page quality and is the primary metric for conversion campaigns. Retargeting improves conversion rate by re-engaging warm audiences who didn't convert on first visit.",
};
export default data;
