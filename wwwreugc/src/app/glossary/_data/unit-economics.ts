import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Unit Economics",
  h1: "What Are Unit Economics? Revenue vs Cost Per Customer",
  meta: "Unit economics measures the revenue and costs associated with a single customer or transaction. Learn how to calculate unit economics and use them to guide growth decisions.",
  definition: "Unit economics is the analysis of revenue and costs on a per-customer or per-transaction basis. It answers the fundamental business question: do you make money on each customer? The core unit economics metrics are LTV (how much revenue a customer generates), CAC (how much it costs to acquire them), and contribution margin (how much profit each transaction generates after variable costs).",
  whyMatters: [
    { label: "It determines business viability", text: "A business with positive unit economics (LTV > CAC) can grow sustainably. A business with negative unit economics (LTV < CAC) loses money with every customer and will eventually fail unless the economics improve. No amount of revenue growth fixes broken unit economics — growing faster just means losing money faster." },
    { label: "It guides every growth decision", text: "Should you increase ad spend? Unit economics tells you if each incremental customer is profitable. Should you launch in a new market? Unit economics tells you if the market's CAC and LTV support expansion. Should you raise prices? Unit economics tells you how price changes affect contribution margin and customer acquisition. Every strategic decision should be filtered through unit economics." },
    { label: "It's what investors evaluate first", text: "Before looking at revenue, growth rate, or market size, sophisticated investors evaluate unit economics. A company with $1M in revenue and strong unit economics (4:1 LTV:CAC, 30% contribution margin) is more fundable than one with $5M in revenue and weak unit economics (1.5:1 LTV:CAC, 5% contribution margin). Unit economics is the foundation that everything else is built on." },
  ],
  howItWorks: [
    { heading: "Core Unit Economics Metrics", text: "The essential unit economics metrics are: LTV (customer lifetime value — total revenue per customer over their relationship), CAC (customer acquisition cost — total cost to acquire one customer), LTV:CAC ratio (should be 3:1 or higher for sustainability), contribution margin (revenue minus variable costs per transaction), and payback period (how many months until a customer's revenue covers their acquisition cost). Together, these metrics tell you whether your business model works at the unit level." },
    { heading: "Improving Unit Economics", text: "Four levers to improve unit economics: (1) Increase LTV — improve retention, increase purchase frequency, raise AOV through upsells and bundles. (2) Decrease CAC — better creative, better targeting, stronger organic channels. (3) Improve contribution margin — reduce COGS, optimize shipping, lower payment processing fees. (4) Shorten payback period — front-load revenue through subscriptions or bundles so you recover CAC faster. The highest-leverage move depends on which metric is weakest." },
  ],
  example: "A subscription box brand analyzes their unit economics. LTV: $180 (average customer stays 6 months at $30/month). CAC: $52 (blended across paid and organic). LTV:CAC ratio: 3.5:1 (healthy). Contribution margin per box: $8 after COGS, shipping, and processing. Payback period: 6.5 months (they recover CAC after the customer's 7th box, but average retention is only 6 months — meaning they barely break even). The fix: reduce CAC from $52 to $35 by switching from expensive creator content to AI-generated UGC. New payback period: 4.4 months. Now they're profitable by month 5, with 1+ month of pure contribution margin before the average customer churns.",
  product: {
    intro: "ReUGC improves unit economics by attacking the CAC component:",
    points: [
      "Direct CAC reduction — Replace $2,000–$5,000/month in creative production costs with ReUGC at $49–$199/mo. This directly reduces CAC and improves the LTV:CAC ratio.",
      "Better creative improves multiple metrics — Higher-performing video ads reduce CPA (lowering CAC), and authentic testimonial-style content can attract higher-LTV customers who stay longer and spend more.",
      "Measurable unit economics impact — Track your LTV:CAC ratio and contribution margin before and after implementing ReUGC. The improvement is directly attributable and easy to quantify.",
    ],
  },
  related: [
    { term: "LTV", slug: "ltv" },
    { term: "CAC", slug: "cac" },
    { term: "Contribution Margin", slug: "contribution-margin" },
    { term: "AOV", slug: "aov" },
    { term: "Blended CAC", slug: "blended-cac" },
    { term: "ROAS", slug: "roas" },
  ],
  relatedNote: "Unit economics is the framework that connects LTV, CAC, contribution margin, AOV, and blended CAC into a coherent picture of business health. ROAS is the ad-level metric that feeds into unit economics at the business level. All growth and spending decisions should be evaluated through the unit economics lens.",
};
export default data;
