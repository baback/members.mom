import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Dynamic Creative",
  h1: "What Is Dynamic Creative? Auto-Optimize Ad Elements",
  meta: "Dynamic creative automatically combines and tests different ad elements (headlines, images, CTAs) to find the best-performing combinations. Learn how it works on Meta and when to use it.",
  definition: "Dynamic creative is an ad platform feature (primarily on Meta) that automatically combines different ad elements — videos, images, headlines, descriptions, and CTAs — into multiple variations and tests them against each other. Instead of manually creating each combination, you upload the individual components and the algorithm assembles and optimizes the best-performing combinations in real time.",
  whyMatters: [
    { label: "It automates multivariate testing", text: "Uploading 5 videos, 5 headlines, and 3 CTAs gives the algorithm 75 possible combinations to test. Creating and managing 75 individual ads manually would be impractical. Dynamic creative handles the combinatorial complexity automatically, finding winning combinations that you might never have thought to test." },
    { label: "It optimizes per audience segment", text: "Dynamic creative doesn't just find the single best combination — it finds the best combination for each audience segment. One headline might resonate with 25–34 year olds while another works better for 45–54 year olds. The algorithm serves different combinations to different segments, personalizing the ad experience at scale." },
    { label: "It accelerates learning", text: "Because the algorithm tests many combinations simultaneously, it reaches statistical significance faster than sequential A/B testing. You get actionable insights in days rather than weeks, which means you can iterate faster and find winners sooner." },
  ],
  howItWorks: [
    { heading: "Setting Up Dynamic Creative", text: "In Meta Ads Manager, enable 'Dynamic Creative' at the ad set level. Then upload multiple versions of each element: up to 10 videos/images, 5 headlines, 5 primary text options, 5 descriptions, and 5 CTA buttons. The algorithm will mix and match these elements, testing different combinations with different audience segments. After sufficient data, you can view the breakdown to see which individual elements and combinations performed best." },
    { heading: "Limitations and Best Practices", text: "Dynamic creative works best when each element is strong independently — a weak headline can drag down a great video. Ensure every component you upload is high quality. The main limitation is that you lose control over specific combinations — the algorithm might pair a serious headline with a humorous video. To prevent mismatches, ensure all elements share a consistent tone. Also, dynamic creative provides element-level insights but limited combination-level insights, making it harder to understand exactly why certain pairings work." },
  ],
  example: "A home fitness brand uploads 4 UGC-style videos, 4 headlines, and 3 CTAs into a dynamic creative campaign. The algorithm tests 48 combinations and identifies the winner within 5 days: Video 2 (before/after transformation) + Headline 3 ('No gym membership needed') + CTA 2 ('Start your free plan'). This combination delivers a $16 CPA versus the $24 average across all combinations. The brand also discovers that Video 2 outperforms regardless of headline pairing — indicating the video itself is the strongest element. They create 5 more variations of the transformation format for the next round.",
  product: {
    intro: "ReUGC provides the creative components that dynamic creative campaigns need:",
    points: [
      "Multiple video assets for dynamic testing — Generate 5–10 video variations with different hooks, presenters, and angles. Upload them all to a dynamic creative campaign and let the algorithm find the winning combinations.",
      "Consistent quality across variations — Every video from ReUGC maintains consistent production quality, ensuring that dynamic creative results reflect genuine audience preferences rather than quality differences between assets.",
      "Rapid component refresh — When dynamic creative identifies winning elements, generate more variations of those elements to keep the optimization engine running. ReUGC makes it easy to produce 'more like this' content. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Meta Advantage+", slug: "advantage-plus" },
    { term: "Creative Testing", slug: "creative-testing" },
    { term: "Split Testing", slug: "split-testing" },
    { term: "Multivariate Testing", slug: "multivariate-testing" },
    { term: "Ad Creative", slug: "ad-creative" },
    { term: "Batch Video Generation", slug: "batch-generation" },
  ],
  relatedNote: "Dynamic creative is Meta's automated approach to multivariate testing, sitting within the broader Advantage+ ecosystem. It complements manual split testing and creative testing by handling combinatorial optimization automatically. Batch video generation from tools like ReUGC provides the creative volume that dynamic creative campaigns require.",
};
export default data;
