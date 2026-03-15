import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Conversion Campaign",
  h1: "What Is a Conversion Campaign? Bottom-Funnel Ads",
  meta: "A conversion campaign is an ad campaign optimized for specific actions like purchases or sign-ups. Learn how to set up conversion campaigns, choose objectives, and optimize for results.",
  definition: "A conversion campaign is an advertising campaign optimized for a specific, measurable action — a purchase, lead form submission, app install, or sign-up. The ad platform's algorithm focuses delivery on users most likely to complete that action, using historical conversion data to predict and target high-intent prospects. Conversion campaigns are the revenue-generating engine of performance marketing.",
  whyMatters: [
    { label: "They directly generate revenue", text: "Unlike awareness campaigns (which build familiarity) or traffic campaigns (which drive clicks), conversion campaigns are optimized for the actions that generate revenue. The algorithm learns from every conversion and gets smarter over time, progressively finding more efficient paths to your target action." },
    { label: "They require conversion data to work", text: "Conversion campaigns need historical data to optimize effectively. Meta recommends at least 50 conversions per week per ad set for optimal learning. Without sufficient data, the algorithm can't identify patterns and your campaigns will underperform. This creates a chicken-and-egg problem for new brands — you need conversions to optimize for conversions." },
    { label: "Creative quality determines conversion efficiency", text: "The algorithm finds the right people; the creative convinces them to convert. A conversion campaign with weak creative will find high-intent users but fail to convert them. A conversion campaign with strong creative converts efficiently because the ad does the selling before the user even reaches the landing page." },
  ],
  howItWorks: [
    { heading: "Conversion Objectives", text: "Ad platforms offer multiple conversion objectives: purchases (optimized for completed transactions), leads (optimized for form submissions), add-to-cart (optimized for cart additions, useful when purchase volume is too low), and value optimization (optimized for highest-value conversions, not just volume). Choose the objective closest to revenue that still generates 50+ weekly events. If you don't get 50 purchases per week, optimize for add-to-cart instead and let the landing page close the sale." },
    { heading: "The Conversion Campaign Stack", text: "Most brands run a layered conversion campaign structure: prospecting campaigns (broad or lookalike targeting, introducing the brand to new audiences), retargeting campaigns (targeting website visitors, video viewers, and engagers), and retention campaigns (targeting past customers for repeat purchases and upsells). Each layer uses different creative — prospecting needs attention-grabbing UGC, retargeting needs objection-handling content, and retention needs new product or loyalty messaging." },
  ],
  example: "A DTC supplement brand structures their conversion campaigns in three layers. Layer 1 (prospecting): broad targeting with UGC testimonial ads, $200/day budget, $26 CPA. Layer 2 (retargeting): website visitors and video viewers with social proof and urgency content, $80/day budget, $14 CPA. Layer 3 (retention): past customers with new flavor announcements and subscription offers, $40/day budget, $8 CPA. Blended CPA across all layers: $19. The layered approach ensures they're acquiring new customers while efficiently converting warm audiences and retaining existing ones.",
  product: {
    intro: "ReUGC provides the creative for every layer of your conversion campaign stack:",
    points: [
      "Prospecting creative — Generate attention-grabbing UGC-style videos that introduce your brand to cold audiences. Strong hooks and authentic delivery convert strangers into customers.",
      "Retargeting creative — Create dedicated retargeting videos that address objections, showcase social proof, and add urgency. Different messaging for different funnel stages, all from one platform.",
      "Creative volume for the full stack — Running 3 campaign layers means 3x the creative need. ReUGC's plans ($49–$199/mo) provide the volume to keep every layer fresh and performing.",
    ],
  },
  related: [
    { term: "Consideration Stage", slug: "consideration" },
    { term: "Brand Awareness", slug: "brand-awareness" },
    { term: "CPA", slug: "cpa" },
    { term: "ROAS", slug: "roas" },
    { term: "Retargeting", slug: "retargeting" },
    { term: "Landing Page", slug: "landing-page" },
  ],
  relatedNote: "Conversion campaigns are the bottom of the funnel, following brand awareness and consideration stages. Their efficiency is measured by CPA and ROAS. They work best when paired with retargeting for warm audiences and optimized landing pages that complete the conversion journey.",
};
export default data;
