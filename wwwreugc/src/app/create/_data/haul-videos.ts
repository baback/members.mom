import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Haul Videos — Shopping Content That Sells",
  readTime: "7 min",
  meta: "Create AI haul videos that showcase multiple products and drive purchases. Includes script framework, hook templates, and best practices for shopping haul content.",
  intro: "Haul videos drive $2.6 billion in annual consumer spending influenced by creator recommendations. The format — showing off a collection of recent purchases — taps into the same excitement as unboxing but with the added appeal of curation. Viewers watch hauls to discover new products, validate their own shopping choices, and experience the thrill of a shopping spree vicariously. For brands, haul videos are a multi-product showcase disguised as entertainment. Your product appears alongside complementary items, which creates context and reduces the 'ad' feeling. AI-generated haul videos let you produce this high-engagement format featuring your products in curated collections — without waiting for creators to organically include you in their hauls.",
  what: {
    definition: "A haul video showcases a collection of recently purchased products, with the presenter showing each item, sharing first impressions, and giving quick reviews. The format is fast-paced, visually rich, and designed to inspire purchases.",
    reasons: [
      { label: "Discovery engine", text: "Haul videos are how consumers discover new products. 73% of haul viewers report buying a product they first saw in a haul video. The format serves as a curated shopping guide that feels personal rather than promotional." },
      { label: "Multi-product exposure", text: "A single haul video can feature 5–15 products, giving each one screen time and a mini-review. This is the most efficient format for showcasing product lines or collections." },
      { label: "Shopping momentum", text: "Haul videos create a shopping mindset. The viewer watches someone else's purchases and starts thinking about their own. This psychological priming increases purchase intent for every product shown." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Tease the haul with a total spend, store name, or standout item that creates curiosity.", examples: ["\"I spent $200 at [Store] and everything is under $30. Let me show you what I got.\"", "\"The best [category] haul I've ever done. Every single item is a 10/10.\""], why: "The spending amount creates scale expectations. 'Everything under $30' adds a value angle. 'Every item is 10/10' is a bold claim that makes viewers want to verify.", mistake: "Starting with 'I went shopping' without a hook. The haul needs a framing angle — budget, store, theme, or standout item." },
    { step: "The Setup", time: "3–8 seconds", what: "Set the context — why you went shopping, what you were looking for, or what the theme of the haul is.", examples: ["\"I've been needing to refresh my skincare routine for summer. Everything I had was too heavy. So I went on a mission to find lightweight products that actually work.\""], why: "The seasonal context ('summer refresh') makes the haul timely and relevant. The criteria ('lightweight products that work') gives the haul a purpose beyond random shopping.", mistake: "No context for the haul. Random purchases feel disorganized. A themed haul feels curated and intentional." },
    { step: "The Payoff", time: "8–20 seconds", what: "Show each product with a quick comment — what it is, why you picked it, and your first impression. Feature your hero product with slightly more detail.", examples: ["\"First up: this cleanser, $18, smells like a spa. Next: this toner, $22, so refreshing. This SPF, $25, no white cast — finally. And the star: [Product], $28. This serum is the reason I did this whole haul. The texture is unreal and my skin drinks it up.\""], why: "Quick, punchy comments keep the pace fast. Each product gets a one-line review. The hero product gets extra detail and the 'star' label.", mistake: "Spending too long on any single product. Haul videos thrive on pace — keep each item to 3–5 seconds." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Summarize the haul and direct viewers to the standout product.", examples: ["\"Best haul I've done in months. Everything is linked in bio — but the serum is the must-buy.\"", "\"Save this for your next shopping trip. Link below for my favorites.\""], why: "Highlighting one must-buy simplifies the decision for viewers who want to purchase but don't want to buy everything." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"$150 skincare haul and every product is a winner. Let me show you."\n[Bags/products spread out on table]\n\n[SETUP — 3-8s]\n"I needed a complete summer skincare refresh. My winter routine was way too heavy. I spent a week researching and here's what I landed on."\n[Pick up first product]\n\n[PAYOFF — 8-18s]\n"This gel cleanser — $16, feels like water, removes everything. This vitamin C — $24, no irritation, actually brightens. This SPF — $22, lightweight, no white cast. And THIS — [Product] hydrating serum, $30. This is the one. It layers perfectly under everything, absorbs in seconds, and my skin has been glowing since I started using it."\n[Show each product, linger on hero product]\n\n[CTA — 18-22s]\n"Everything is linked in bio. If you only get one thing, get the serum. Trust me on this."\n[Hold up hero product, point to link]`,
  hooks: [
    { line: "I found 5 products under $25 that look and feel expensive. Here's the haul.", trigger: "Budget luxury is universally appealing. The promise of premium quality at affordable prices drives immediate interest.", products: "Affordable beauty, fashion, home decor, kitchen products" },
    { line: "Everything I bought this month that I'm actually keeping. No returns.", trigger: "The 'actually keeping' filter signals genuine quality. It implies a high bar and curated selection.", products: "Fashion, beauty, home goods, tech accessories" },
    { line: "The [store/brand] haul that's about to empty your wallet. Sorry in advance.", trigger: "Playful warning creates anticipation. The viewer expects to find products they'll want to buy.", products: "Any brand or retailer with a product range" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "30–60 seconds for social, 5–15 minutes for YouTube. Social hauls should feature 4–6 products; YouTube hauls can include 10–20 items." },
    { label: "Fast pacing", text: "Each product gets 3–5 seconds on social. Show it, name it, give one comment, move on. The pace is what makes haul videos addictive." },
    { label: "Theme your haul", text: "Give the haul a theme — summer refresh, under $30, one-brand haul, travel essentials. Themed hauls feel curated; random hauls feel disorganized." },
    { label: "Hero product", text: "Feature your product as the standout item. Give it 2–3x more screen time and the strongest endorsement. 'This is the reason I did this haul' positions it as the star." },
    { label: "Price mentions", text: "Include prices for every product. Price transparency builds trust and helps viewers assess value. It also makes the content more useful and save-worthy." },
    { label: "Captions", text: "Display product name and price as each item appears. Use a consistent format throughout. Viewers screenshot haul videos for shopping lists — make it easy." },
  ],
  whenToUse: {
    stage: "Top to mid funnel. Haul videos are discovery content — they introduce products to new audiences through curated collections and first impressions.",
    audience: "Shopping-oriented consumers who watch haul content for product discovery and inspiration. Primarily women 18–35, but the format works for any product category.",
    platforms: "TikTok, Instagram Reels, YouTube (both Shorts and long-form). Haul content also performs well on Pinterest as shopping inspiration.",
    pairWith: "Follow haul videos with detailed reviews of the hero product. The haul introduces it in a curated context; the review provides the depth needed to convert.",
  },
  ctaLine: "Create haul videos that showcase your products in curated collections. No creators, no shipping, no waiting.",
};
export default data;