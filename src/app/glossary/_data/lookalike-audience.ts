import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Lookalike Audience",
  h1: "What Is a Lookalike Audience? Find More Buyers",
  meta: "A lookalike audience is a targeting option that finds new users similar to your existing customers. Learn how lookalikes work on Meta and TikTok, and how to optimize them.",
  definition: "A lookalike audience is a targeting feature offered by ad platforms (Meta, TikTok, Google) that finds new users who share characteristics with your existing customers or high-value audiences. You provide a 'seed' audience (your customer list, website visitors, or video viewers), and the platform's algorithm identifies millions of similar users who are likely to be interested in your product.",
  whyMatters: [
    { label: "It scales your best customers", text: "Lookalike audiences take the patterns from your highest-value customers — demographics, interests, online behaviors — and find millions more people who match those patterns. It's like cloning your best buyers at scale. A 1% lookalike of your top purchasers on Meta can reach 2–3 million people who statistically resemble the customers who already love your product." },
    { label: "It outperforms interest-based targeting", text: "Interest targeting relies on self-reported data and broad categories. Lookalike targeting uses actual behavioral data from your real customers. In head-to-head tests, lookalike audiences consistently deliver 20–40% lower CPAs than interest-based targeting because the signal quality is higher — you're targeting based on proven purchase behavior, not assumed interests." },
    { label: "Seed quality determines everything", text: "A lookalike audience is only as good as its seed. A lookalike based on all website visitors will be mediocre. A lookalike based on customers with 3+ purchases and $200+ LTV will be excellent. The more specific and high-quality your seed audience, the more precisely the algorithm can identify similar high-value prospects." },
  ],
  howItWorks: [
    { heading: "Creating Lookalike Audiences", text: "On Meta, you create a lookalike by selecting a source audience (customer list, pixel data, or engagement audience), choosing a percentage (1% = most similar, 10% = broadest reach), and selecting target countries. A 1% lookalike in the US reaches about 2.4 million people. TikTok and Google offer similar features. Best practice: create multiple lookalikes from different seeds (purchasers, high-LTV customers, email subscribers) and test which performs best." },
    { heading: "Lookalikes in the Advantage+ Era", text: "With Meta's shift toward Advantage+ and broad targeting, traditional lookalike audiences are becoming less manually configured and more algorithmically driven. Advantage+ essentially creates dynamic lookalikes in real time based on your conversion data. However, providing a strong seed audience still helps the algorithm learn faster. The trend is toward giving the algorithm your best data and letting it find the audience, rather than manually defining lookalike parameters." },
  ],
  example: "A skincare brand creates three lookalike audiences on Meta: LAL 1 (based on all purchasers, 1%) — $26 CPA. LAL 2 (based on repeat purchasers with 2+ orders, 1%) — $19 CPA. LAL 3 (based on top 25% by LTV, 1%) — $15 CPA. LAL 3 wins because the seed audience represents the brand's most valuable customers, giving the algorithm a clearer signal of who to find. They scale LAL 3 from $50/day to $500/day while maintaining sub-$18 CPA, generating 800+ new customers per month from a single audience.",
  product: {
    intro: "members.mom helps you maximize lookalike audience performance with creative that converts cold traffic:",
    points: [
      "Cold-audience creative — Lookalike audiences are cold — they've never heard of you. members.mom generates the introductory, trust-building UGC content that converts strangers into customers. First impressions matter.",
      "Test creative across lookalike segments — Different lookalike seeds attract different types of prospects. Generate unique video creative for each lookalike segment to maximize relevance and conversion rates.",
      "Scale creative alongside audience — As you scale lookalike budgets, you need more creative to prevent fatigue. members.mom ensures your creative volume keeps pace with your audience expansion. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Custom Audience", slug: "custom-audience" },
    { term: "Broad Targeting", slug: "broad-targeting" },
    { term: "Retargeting", slug: "retargeting" },
    { term: "Paid Social", slug: "paid-social" },
    { term: "Conversion Campaign", slug: "conversion-campaign" },
    { term: "Meta Advantage+", slug: "advantage-plus" },
  ],
  relatedNote: "Lookalike audiences are built from custom audiences (your seed data) and represent a middle ground between retargeting (warm audiences) and broad targeting (no audience definition). They're a core tactic in paid social conversion campaigns and are increasingly integrated into Meta's Advantage+ automated targeting.",
};
export default data;
