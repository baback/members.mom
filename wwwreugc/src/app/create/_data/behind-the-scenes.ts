import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Behind-the-Scenes Videos — Authenticity at Scale",
  readTime: "7 min",
  meta: "Create AI behind-the-scenes videos that showcase your brand's process and people. Includes script framework, hook templates, and best practices for BTS content.",
  intro: "Behind-the-scenes content generates 87% more engagement than polished brand content on Instagram. The reason is simple: people crave authenticity. When a brand pulls back the curtain and shows the messy, real process behind the product, it builds a level of trust that no amount of polished advertising can match. BTS content humanizes your brand — it shows the people, the process, and the passion behind what you sell. But producing BTS content consistently is a challenge. You can't always have a camera rolling in your warehouse or kitchen. AI-generated BTS-style videos let you create that authentic, insider feel on demand — without disrupting your actual operations.",
  what: {
    definition: "A behind-the-scenes video gives viewers an insider look at how a product is made, a team operates, or a brand functions day-to-day. It trades polish for authenticity, showing the real process rather than the finished result.",
    reasons: [
      { label: "Authenticity signal", text: "BTS content signals transparency. When a brand shows its process — including the imperfect parts — viewers interpret it as honesty. This trust signal is especially powerful for DTC brands competing against established players." },
      { label: "Emotional investment", text: "Seeing the people and effort behind a product creates emotional investment. A candle isn't just a candle when you've watched someone hand-pour it. The story behind the product increases perceived value and willingness to pay." },
      { label: "Content variety", text: "BTS content breaks the monotony of product-focused feeds. It gives your audience a reason to follow you beyond promotions — they're invested in the journey, not just the product." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Tease what the viewer is about to see behind the curtain. Create the feeling of exclusive access.", examples: ["\"Want to see how we actually make [product]? Most brands won't show you this.\"", "\"Here's what a day at [Brand] actually looks like. No filter.\""], why: "The 'most brands won't show you' framing creates exclusivity. 'No filter' signals raw authenticity. Both make the viewer feel like they're getting insider access.", mistake: "Starting with a polished intro. BTS content should feel spontaneous — a rehearsed opening kills the vibe." },
    { step: "The Setup", time: "3–8 seconds", what: "Set the scene — where you are, what's happening, and why it matters.", examples: ["\"It's 6 AM and we're in the lab. This is where every batch gets tested before it ships. Most people don't know we test each batch three times.\""], why: "Time stamps ('6 AM') and location details ('the lab') create immersion. The testing detail adds a quality signal that builds trust.", mistake: "Over-explaining. BTS content should feel like you're showing, not presenting. Keep narration casual." },
    { step: "The Payoff", time: "8–20 seconds", what: "Show the interesting part — the process, the detail, or the moment that makes viewers appreciate the product more.", examples: ["\"See this? Every bottle is hand-filled. It takes our team 4 hours to do a single batch. That's why we only release 500 units at a time. When we say small-batch, we mean it.\""], why: "Specific details ('4 hours,' '500 units') make the process tangible. The connection between process and product claim ('small-batch') validates marketing language with visual proof.", mistake: "Showing boring parts of the process. BTS content needs to be interesting — pick the moments that surprise or impress." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Connect the behind-the-scenes effort to the product the viewer can buy.", examples: ["\"This is what goes into every bottle. Link in bio to get yours.\"", "\"Now you know why we charge what we charge. Worth it, right? Link below.\""], why: "Connecting process to product justifies the price and creates appreciation. The viewer now understands the value behind the price tag." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"You've never seen how your skincare is actually made. Let me show you."\n[Walking into production area]\n\n[SETUP — 3-8s]\n"This is our lab. Every single batch starts here at 6 AM. Before anything gets bottled, it goes through three rounds of testing. Most brands skip this step."\n[Show lab environment, testing equipment]\n\n[PAYOFF — 8-18s]\n"See this machine? It fills exactly 30ml per bottle. Our team checks every tenth bottle by hand. It takes us a full day to produce one batch of 500 units. That's why we sell out — we literally can't make it faster without cutting corners. And we won't do that."\n[Show filling process, hand-checking, team working]\n\n[CTA — 18-22s]\n"This is what goes into every bottle you buy. Link in bio."\n[Hold up finished product, point to link]`,
  hooks: [
    { line: "Most brands would never show you this. We're different.", trigger: "Exclusivity and transparency in one line. The viewer feels they're getting access that other brands hide.", products: "Food, beauty, supplements, handmade goods, any product with a production process" },
    { line: "Here's what happens to your order after you click 'buy.'", trigger: "Connects the viewer's action (purchasing) to a process they've never seen. Creates curiosity about the fulfillment journey.", products: "E-commerce brands, subscription boxes, DTC products" },
    { line: "Our team has been up since 5 AM making your next order. Here's what that looks like.", trigger: "Humanizes the brand by showing the effort and dedication of real people. Creates appreciation and emotional connection.", products: "Small businesses, artisan brands, food and beverage, handcrafted products" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–45 seconds for social, 60–180 seconds for YouTube. BTS content can run longer than ads because viewers are watching for entertainment and education, not a sales pitch." },
    { label: "Raw aesthetic", text: "Don't over-produce BTS content. Slightly shaky camera, natural lighting, and ambient sound make it feel authentic. Studio-quality BTS defeats the purpose." },
    { label: "Interesting moments", text: "Show the parts of your process that surprise people. Hand-testing, quality checks, ingredient sourcing — the details that differentiate you from mass-market competitors." },
    { label: "People focus", text: "Show your team. Faces and names humanize the brand. 'This is Sarah, she's been with us since day one' creates connection that product shots can't." },
    { label: "Process to product", text: "Always connect the BTS content back to the product. The viewer should leave thinking 'now I understand why this product is special' — not just 'cool factory tour.'" },
    { label: "Captions", text: "Use casual, documentary-style captions. Time stamps ('6:00 AM'), location labels ('THE LAB'), and process descriptions ('BATCH #247') add context for sound-off viewers." },
  ],
  whenToUse: {
    stage: "Top to mid funnel. BTS content builds brand affinity and trust. It's most effective for audiences who are discovering your brand or considering their first purchase.",
    audience: "Curious consumers who value transparency and craftsmanship. Particularly effective for audiences who are willing to pay more for products with a story and visible quality process.",
    platforms: "Instagram Reels and Stories, TikTok, YouTube (both Shorts and long-form). BTS content also performs well on LinkedIn for B2B brands showcasing their operations.",
    pairWith: "Follow BTS content with product demos or testimonials. BTS builds appreciation for the process; demos and testimonials show the result of that process in action.",
  },
  ctaLine: "Create behind-the-scenes videos that build trust and transparency. No camera crew, no disrupted operations.",
};
export default data;