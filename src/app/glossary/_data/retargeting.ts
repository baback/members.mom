import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Retargeting",
  h1: "What Is Retargeting? Win Back Lost Visitors",
  meta: "Retargeting shows ads to people who've already interacted with your brand. Learn how retargeting works, best practices for video retargeting, and how to avoid audience fatigue.",
  definition: "Retargeting (also called remarketing) is an advertising strategy that shows ads to people who have previously interacted with your brand — visited your website, watched your video, engaged with your social content, or added items to their cart without purchasing. It works by placing a tracking pixel on your site that identifies visitors and serves them targeted ads as they browse other platforms.",
  whyMatters: [
    { label: "97% of first-time visitors don't convert", text: "Only 2–3% of website visitors make a purchase on their first visit. Retargeting brings the other 97% back by keeping your brand visible as they continue browsing social media and the web. Without retargeting, you're paying to drive traffic that mostly disappears forever." },
    { label: "It converts warm audiences at 3–5x the rate", text: "Retargeted visitors are 3–5x more likely to convert than cold audiences because they already know your brand and have shown interest. This makes retargeting the highest-ROI segment in most ad accounts — lower CPAs, higher conversion rates, and better ROAS than any prospecting campaign." },
    { label: "Creative matters even more for retargeting", text: "Retargeting audiences are small and see your ads frequently, making them highly susceptible to ad fatigue. The creative you show retargeted users needs to be different from your prospecting ads — addressing specific objections, offering social proof, or creating urgency. Generic 'come back and buy' messaging fatigues quickly." },
  ],
  howItWorks: [
    { heading: "Retargeting Segments", text: "Effective retargeting uses segmented audiences based on behavior: site visitors (saw your site but didn't engage deeply), product viewers (looked at specific products), cart abandoners (added to cart but didn't purchase), video viewers (watched 50%+ of your ad), and past customers (for upsells and repeat purchases). Each segment gets different creative — a cart abandoner sees a reminder with urgency, while a video viewer sees deeper product information." },
    { heading: "Retargeting Creative Strategy", text: "The biggest retargeting mistake is showing the same ad that the person already saw. Retargeting creative should escalate the conversation: if they saw a product overview, show them testimonials. If they saw testimonials, show them a limited-time offer. If they abandoned cart, show them the specific product with a shipping incentive. Each touchpoint should add new information or motivation, not repeat what they've already seen." },
  ],
  example: "An online furniture store segments their retargeting into three tiers. Tier 1 (site visitors, no product views): UGC-style video showing the brand story and best sellers — 4.2% CTR. Tier 2 (product viewers, no cart): testimonial video from a customer who bought the same product category — 6.8% CTR. Tier 3 (cart abandoners): specific product reminder with 'free delivery this week' overlay — 9.1% CTR. Each tier uses different creative that matches the visitor's level of intent, resulting in a blended retargeting CPA of $18 versus $52 for cold prospecting.",
  product: {
    intro: "members.mom helps you create dedicated retargeting creative that moves prospects through the funnel:",
    points: [
      "Funnel-specific video content — Generate different videos for each retargeting tier: brand story for site visitors, testimonials for product viewers, urgency-driven content for cart abandoners. Each audience gets the right message.",
      "Fresh retargeting creative prevents fatigue — Retargeting audiences are small and fatigue fast. Refresh your retargeting videos every 1–2 weeks with members.mom to keep engagement high and frequency manageable.",
      "Objection-handling videos — Create videos that address the top reasons people don't buy: price concerns, quality doubts, shipping questions. AI presenters deliver these messages naturally and authentically. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Custom Audience", slug: "custom-audience" },
    { term: "Lookalike Audience", slug: "lookalike-audience" },
    { term: "Conversion Rate", slug: "conversion-rate" },
    { term: "Ad Fatigue", slug: "ad-fatigue" },
    { term: "Conversion Campaign", slug: "conversion-campaign" },
    { term: "Paid Social", slug: "paid-social" },
  ],
  relatedNote: "Retargeting uses custom audiences built from website and engagement data. Lookalike audiences extend retargeting by finding new people similar to your converters. Retargeting is especially vulnerable to ad fatigue due to small audience sizes, and it's the primary tactic within conversion campaigns on paid social platforms.",
};
export default data;
