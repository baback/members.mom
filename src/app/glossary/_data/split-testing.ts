import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Split Testing",
  h1: "What Is Split Testing? A/B Testing for Ads",
  meta: "Split testing (A/B testing) compares two or more ad variations to determine which performs better. Learn how to set up split tests, avoid common mistakes, and interpret results.",
  definition: "Split testing (also called A/B testing) is the practice of running two or more variations of an ad simultaneously, with each variation shown to a comparable audience segment, to determine which version performs better. It's the scientific method applied to advertising — change one variable, measure the outcome, and let data guide your decisions.",
  whyMatters: [
    { label: "It replaces opinions with evidence", text: "Without split testing, creative decisions are based on gut feeling, HiPPO (highest-paid person's opinion), or past assumptions. Split testing removes subjectivity entirely — the audience tells you what works through their behavior. This is especially important because internal predictions about ad performance are wrong more often than they're right." },
    { label: "Small improvements compound", text: "A 10% improvement in hook performance, a 15% improvement in CTR, and a 12% improvement in conversion rate — each discovered through split testing — compound into a 42% improvement in overall CPA. Split testing doesn't produce dramatic overnight wins (usually). It produces consistent, incremental improvements that compound into significant competitive advantages over months." },
    { label: "It builds institutional knowledge", text: "Every split test teaches you something about your audience, even when the 'loser' is informative. Over time, split testing builds a knowledge base: your audience responds to curiosity hooks over fear hooks, prefers female presenters over male, converts better with urgency CTAs than benefit CTAs. This knowledge makes every future creative decision more informed." },
  ],
  howItWorks: [
    { heading: "Setting Up a Valid Split Test", text: "A valid split test requires: one variable changed at a time (if you change the hook AND the CTA, you won't know which caused the difference), comparable audience segments (use the platform's built-in split test feature or ensure random distribution), sufficient sample size (at least 1,000 impressions per variation for directional data, 5,000+ for statistical significance), and a pre-defined success metric (decide whether you're optimizing for thumb-stop rate, CTR, or CPA before you launch)." },
    { heading: "Common Split Testing Mistakes", text: "The biggest mistakes are: testing too many variables at once (change one thing at a time), ending tests too early (wait for statistical significance, not just a trend), ignoring secondary metrics (a hook that wins on thumb-stop but loses on CPA isn't actually winning), and not testing enough variations (testing 2 options is good, testing 5 is better — more variations means more chances to find outliers)." },
  ],
  example: "A fitness app runs a split test on Meta with 4 ad variations, changing only the presenter while keeping the script, hook, and CTA identical. Presenter A (young male fitness enthusiast): $28 CPA. Presenter B (middle-aged woman): $19 CPA. Presenter C (older male): $34 CPA. Presenter D (young female): $22 CPA. Presenter B wins by a significant margin — the middle-aged woman resonated most with the app's actual user base (35–55 year olds), not the aspirational fitness demographic the team assumed. This insight reshapes their entire creative strategy.",
  product: {
    intro: "members.mom makes split testing economically viable by reducing the cost of each variation:",
    points: [
      "Test more variables, more often — When each video variation costs $4–$8 instead of $200–$500, you can test 5 hooks, 5 presenters, and 5 CTAs in a single month. More tests = more learnings = better performance.",
      "True single-variable testing — Swap just the hook, just the avatar, or just the CTA while keeping everything else identical. members.mom makes it trivial to isolate variables for clean split tests.",
      "Weekly testing cadence — With plans from $49/mo, you can run a new round of split tests every week instead of every month. This 4x increase in testing velocity translates directly to faster performance improvement.",
    ],
  },
  related: [
    { term: "Creative Testing", slug: "creative-testing" },
    { term: "Multivariate Testing", slug: "multivariate-testing" },
    { term: "Dynamic Creative", slug: "dynamic-creative" },
    { term: "Hook Rate", slug: "hook-rate" },
    { term: "CTR", slug: "ctr" },
    { term: "CPA", slug: "cpa" },
  ],
  relatedNote: "Split testing is the tactical execution of creative testing strategy. It differs from multivariate testing (which tests multiple variables simultaneously) and dynamic creative (which lets the platform auto-optimize combinations). The metrics you measure in split tests — hook rate, CTR, CPA — determine what you learn and how you optimize.",
};
export default data;
