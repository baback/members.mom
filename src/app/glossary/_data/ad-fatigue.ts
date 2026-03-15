import type { GlossaryPageData } from "./_shared";

const data: GlossaryPageData = {
  term: "Ad Fatigue",
  h1: "What Is Ad Fatigue? Signs & How to Fix It",
  meta: "Ad fatigue occurs when your audience sees your ads too often, causing performance to decline. Learn the signs, how it differs from creative fatigue, and strategies to combat it.",
  definition: "Ad fatigue is the broad decline in advertising performance that occurs when your target audience becomes overexposed to your ads. It encompasses creative fatigue (the specific creative wears out), audience fatigue (your targeting pool is exhausted), and offer fatigue (the promotion itself becomes stale). Ad fatigue manifests as rising CPAs, declining CTRs, and increasing frequency metrics.",
  whyMatters: [
    { label: "It's inevitable — the question is when", text: "Every ad will eventually fatigue. The only variable is how quickly. On TikTok, fatigue can set in within 7 days. On Meta, 14–21 days is typical. On YouTube, ads last longer (30–45 days) because the viewing context is different. Brands that plan for fatigue — by maintaining a pipeline of fresh creative — outperform those that react to it after performance has already declined." },
    { label: "It wastes budget silently", text: "Ad fatigue doesn't announce itself with a notification. It shows up as a gradual performance decline that's easy to miss if you're not watching the right metrics daily. A creative that was delivering $20 CPAs slowly drifts to $30, then $40 — and by the time you notice, you've wasted weeks of budget on declining returns." },
    { label: "It's broader than creative fatigue", text: "While creative fatigue is about one specific ad wearing out, ad fatigue can affect your entire account. When your audience has seen all your ads too many times, even new creative can underperform because the audience is fatigued with your brand's presence in their feed. This account-level fatigue requires not just new creative, but new audiences, new offers, or new angles." },
  ],
  howItWorks: [
    { heading: "The Three Types of Ad Fatigue", text: "Creative fatigue: the specific video, image, or copy has been seen too many times. Fix: replace the creative with fresh variations. Audience fatigue: your targeting pool is too small and everyone in it has been reached multiple times. Fix: expand targeting, use lookalike audiences, or try new platforms. Offer fatigue: the promotion itself (20% off, free shipping, etc.) has lost its novelty. Fix: change the offer, angle, or value proposition. Diagnosing which type you're experiencing determines the correct fix." },
    { heading: "Early Warning Signals", text: "Monitor these metrics daily to catch fatigue early: Frequency rising above 2.5 (people are seeing your ad too often), CTR declining 15%+ week-over-week (engagement is dropping), CPM increasing (the algorithm is struggling to find engaged users), CPA rising with stable conversion rate (the ad is losing efficiency, not the landing page). When you see 2+ of these signals simultaneously, fatigue is setting in and it's time to refresh." },
  ],
  example: "A DTC brand notices their Meta campaign CPA has risen from $22 to $35 over 3 weeks. They diagnose: frequency is 4.2 (too high), CTR has dropped from 1.6% to 0.9%, but conversion rate is stable at 3.1%. This pattern indicates creative fatigue — the landing page still converts, but the ad isn't generating quality clicks anymore. They launch 6 new video variations using AI-generated content. Within 4 days, the top 2 performers bring CPA back to $24. They set a calendar reminder to refresh creative every 2 weeks proactively, rather than waiting for fatigue to set in.",
  product: {
    intro: "ReUGC is the antidote to ad fatigue — fresh creative on demand:",
    points: [
      "Proactive creative refreshes — Don't wait for fatigue to tank your performance. Generate fresh video variations every 1–2 weeks and rotate them into your campaigns before the old ones decline.",
      "Volume that outpaces fatigue — With 10–60 videos per month ($49–$199/mo), you always have fresh creative in the pipeline. When one ad fatigues, the next one is already ready to deploy.",
      "New angles, not just new creative — Combat offer fatigue by generating videos with entirely different angles, scripts, and value propositions. ReUGC makes it easy to explore new messaging directions without the cost of traditional production.",
    ],
  },
  related: [
    { term: "Creative Fatigue", slug: "creative-fatigue" },
    { term: "Content Velocity", slug: "content-velocity" },
    { term: "Creative Testing", slug: "creative-testing" },
    { term: "CPM", slug: "cpm" },
    { term: "Retargeting", slug: "retargeting" },
    { term: "Broad Targeting", slug: "broad-targeting" },
  ],
  relatedNote: "Ad fatigue is the umbrella term that includes creative fatigue as a subset. It's combated through content velocity (producing more creative, faster) and creative testing (finding new winners before old ones decline). Rising CPM is an early indicator. Retargeting audiences are especially susceptible to fatigue, and broad targeting can help by expanding the audience pool.",
};
export default data;
