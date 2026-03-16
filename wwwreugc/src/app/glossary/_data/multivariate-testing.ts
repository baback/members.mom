import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Multivariate Testing",
  h1: "What Is Multivariate Testing? Test Multiple Variables",
  meta: "Multivariate testing tests multiple ad variables simultaneously to find the best combination. Learn how it differs from A/B testing and when to use each approach.",
  definition: "Multivariate testing (MVT) is an experimentation method that tests multiple variables simultaneously to identify the optimal combination. Unlike split testing (which changes one variable at a time), multivariate testing changes several elements — hook, presenter, CTA, music, text overlay — and measures how different combinations perform together.",
  whyMatters: [
    { label: "Variables interact with each other", text: "A hook that works with Presenter A might fail with Presenter B. A CTA that converts with a fear-based script might underperform with a humor-based script. Split testing misses these interactions because it isolates variables. Multivariate testing captures them by testing combinations, revealing synergies and conflicts between creative elements that single-variable tests can't detect." },
    { label: "It finds global optima, not local ones", text: "Split testing finds the best hook, then the best CTA, then the best presenter — each optimized independently. But the best hook + the best CTA + the best presenter isn't necessarily the best combination. Multivariate testing searches the entire combination space, finding the global optimum that sequential split testing might miss." },
    { label: "It requires volume", text: "The catch with multivariate testing is that it requires significantly more variations and more data. Testing 3 hooks × 3 presenters × 3 CTAs = 27 combinations. Each needs sufficient impressions for statistical significance. This is why multivariate testing was historically impractical for video ads — producing 27 video variations was prohibitively expensive. AI video generation changes this equation entirely." },
  ],
  howItWorks: [
    { heading: "MVT Design", text: "A multivariate test defines the variables (hook, presenter, CTA), the levels of each variable (3 hooks, 3 presenters, 3 CTAs), and creates all possible combinations (27 in this case). Each combination runs as a separate ad with equal budget. After sufficient data collection, statistical analysis identifies which combination performs best AND which individual variables have the strongest impact. This dual insight — best combination plus most important variables — makes MVT more informative than split testing." },
    { heading: "When to Use MVT vs. Split Testing", text: "Use split testing when you're early in your creative journey and need to establish baselines for individual elements. Use multivariate testing when you've identified your key variables and want to find the optimal combination. Split testing is simpler and requires less volume. MVT is more comprehensive but requires more variations and more budget. The ideal approach is to start with split tests to narrow your options, then use MVT to optimize the combinations." },
  ],
  example: "A beauty brand runs a multivariate test with 2 hooks × 3 avatars × 2 CTAs = 12 video combinations. They generate all 12 using AI in under an hour. After running for 5 days with $50/day per variation ($3,000 total test budget), the results reveal: Hook B + Avatar 2 + CTA A is the winning combination at $14 CPA. But the data also shows that Avatar 2 is the strongest individual variable — it outperforms the other avatars regardless of hook or CTA pairing. They scale the winning combination and use Avatar 2 as the default for all future creative.",
  product: {
    intro: "ReUGC makes multivariate testing practical for video ads for the first time:",
    points: [
      "Generate all combinations instantly — Define your hooks, avatars, and CTAs, and ReUGC can produce every combination in minutes. A 3×3×3 test (27 videos) that would cost $8,000+ with creators costs under $200 with ReUGC.",
      "True combinatorial testing — Swap individual elements while keeping others constant. ReUGC's modular approach to video generation is perfectly suited for multivariate test design.",
      "Affordable at scale — Even the most ambitious MVT designs (30+ variations) are financially viable with ReUGC's pricing. Pro Plus at $199/mo gives you 60 videos — enough for multiple MVT rounds per month.",
    ],
  },
  related: [
    { term: "Split Testing", slug: "split-testing" },
    { term: "Creative Testing", slug: "creative-testing" },
    { term: "Dynamic Creative", slug: "dynamic-creative" },
    { term: "Batch Video Generation", slug: "batch-generation" },
    { term: "Hook Rate", slug: "hook-rate" },
    { term: "CPA", slug: "cpa" },
  ],
  relatedNote: "Multivariate testing is the advanced version of split testing, both falling under the creative testing umbrella. Dynamic creative automates a simplified version of MVT within the ad platform. Batch video generation is the production capability that makes MVT practical for video ads. Results are measured through hook rate, CPA, and other performance metrics.",
};
export default data;
