import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Custom Audience",
  h1: "What Is a Custom Audience? Target Existing Customers",
  meta: "A custom audience lets you target ads to people who've already interacted with your brand. Learn how to create custom audiences on Meta and TikTok for retargeting and lookalikes.",
  definition: "A custom audience is an ad targeting option that lets you reach people who have already interacted with your business — website visitors, email subscribers, app users, video viewers, or existing customers. You upload your data (email lists, phone numbers) or use platform pixel data, and the ad platform matches it against its user base to create a targetable audience segment.",
  whyMatters: [
    { label: "It's your highest-intent audience", text: "Custom audiences contain people who already know your brand. They've visited your site, watched your content, or given you their email. This familiarity means they convert at 3–10x the rate of cold audiences. Custom audiences are the foundation of retargeting — the most efficient segment in most ad accounts." },
    { label: "It seeds your lookalike audiences", text: "The quality of your custom audience directly determines the quality of your lookalike audiences. A custom audience of high-LTV customers produces better lookalikes than one of all website visitors. Building and maintaining clean, segmented custom audiences is an investment that pays dividends across your entire paid acquisition strategy." },
    { label: "It enables exclusion targeting", text: "Custom audiences aren't just for targeting — they're for exclusion. Exclude existing customers from prospecting campaigns to avoid wasting budget on people who've already bought. Exclude recent purchasers from retargeting to avoid annoying them. Exclusion targeting is one of the most underused optimization tactics in paid social." },
  ],
  howItWorks: [
    { heading: "Types of Custom Audiences", text: "The main custom audience types are: Customer list (upload emails/phones matched to platform users), Website traffic (pixel-based, segmented by pages visited, time on site, or actions taken), App activity (users who installed, opened, or took actions in your app), Engagement (people who interacted with your content on the platform — video viewers, page likers, ad engagers), and Offline activity (in-store purchases or phone orders matched to online profiles). Each type captures a different level of intent and requires different creative approaches." },
    { heading: "Audience Hygiene", text: "Custom audiences degrade over time. A website visitor from 180 days ago is much less valuable than one from 7 days ago. Best practices: use recency windows (7-day, 30-day, 90-day segments), refresh customer lists monthly, exclude converters from retargeting pools, and layer audiences by engagement depth (video viewers who also visited your site are more valuable than video viewers alone). Clean, well-segmented custom audiences outperform large, stale ones." },
  ],
  example: "An e-commerce brand builds 5 custom audiences on Meta: (1) All site visitors, last 30 days — 45,000 people. (2) Product page viewers, last 14 days — 12,000 people. (3) Cart abandoners, last 7 days — 3,200 people. (4) Past purchasers, last 180 days — 8,500 people. (5) Email subscribers who haven't purchased — 22,000 people. Each audience gets tailored creative: audience 1 sees brand story content, audience 2 sees product testimonials, audience 3 sees cart reminder with free shipping, audience 4 sees new product launches, and audience 5 sees first-purchase incentives. Blended retargeting ROAS: 8.2x.",
  product: {
    intro: "members.mom helps you create tailored video content for every custom audience segment:",
    points: [
      "Segment-specific creative — Generate different videos for different audience segments. Cart abandoners get urgency messaging, email subscribers get introduction content, past customers get upsell videos. Each segment gets the right message.",
      "Refresh at the speed of audience decay — Custom audiences are time-sensitive. members.mom lets you refresh creative weekly to match the recency of your audience data, keeping messaging relevant and engagement high.",
      "Exclusion-friendly volume — When you exclude converters from retargeting, your audience shrinks and needs fresh creative more often. members.mom's affordable plans ($49–$199/mo) ensure you can keep up. ",
    ],
  },
  related: [
    { term: "Retargeting", slug: "retargeting" },
    { term: "Lookalike Audience", slug: "lookalike-audience" },
    { term: "Broad Targeting", slug: "broad-targeting" },
    { term: "Paid Social", slug: "paid-social" },
    { term: "Meta Advantage+", slug: "advantage-plus" },
    { term: "Conversion Campaign", slug: "conversion-campaign" },
  ],
  relatedNote: "Custom audiences are the data foundation for retargeting (showing ads to known users) and lookalike audiences (finding similar new users). They work alongside broad targeting and Advantage+ in a layered paid social strategy, and they're essential for conversion campaigns that target warm prospects.",
};
export default data;
