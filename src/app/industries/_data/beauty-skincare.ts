import type { IndustryPageData } from "./_shared";

const data: IndustryPageData = {
  name: "Beauty & Skincare",
  h1: "AI UGC Videos for Beauty & Skincare Brands: Scale Ad Creative Without the Creator Headache",
  updated: "March 2026",
  meta: "The complete guide to AI UGC video for skincare and beauty brands. Includes 4 video formats, 5 ready-to-use hooks, and real cost breakdowns. Cut content costs by 50x.",
  intro: "The average skincare brand spends $2,400/month on UGC creators for 8–10 videos. Half of those underperform. The creator ghosts you mid-campaign, the lighting is wrong, the script feels off — and you're back to square one with a $300 invoice and nothing to show for it. Meanwhile, your competitors are testing 30 creatives a week while you're stuck waiting on a single revision. This guide covers how beauty and skincare brands are using AI-generated UGC to produce more video, test faster, and cut content costs by 50x.",
  challenges: [
    { title: "You can't fake texture on camera", text: "Skincare is tactile. Viewers want to see the serum drop, the cream spread, the glow after application. Your video tool needs to support product-in-hand demonstrations, not just floating heads reading scripts." },
    { title: "Diversity isn't optional — it's a conversion lever", text: "Your customers have different skin tones, skin types, and ages. A 22-year-old with perfect skin promoting an anti-aging serum doesn't convert with your 40-year-old target audience. AI actors let you match demographics without multiplying your budget." },
    { title: "TikTok moves weekly, not monthly", text: "Skincare trends on TikTok shift every 7–10 days. If your content production cycle takes 2–3 weeks from brief to delivery, you're always one trend behind. You need a workflow that lets you go from script to finished video in hours." },
    { title: "Creative fatigue hits skincare ads hard", text: "Beauty audiences scroll through dozens of skincare ads daily. The same testimonial format with the same hook stops working after 7–10 days. You need to refresh creatives constantly — which means you need volume." },
  ],
  formats: [
    { name: "The Texture Close-Up Testimonial", why: "Skincare buyers are visual. This format combines a talking-head testimonial with close-up product shots — the serum dropping onto fingers, the cream being applied, the skin glowing after.", length: "20–30 seconds", platform: "TikTok, Instagram Reels", outline: ["Hook: \"I've been using this for 3 weeks and look at my skin right now...\"", "Show close-up of skin / product application", "Describe the specific result: \"My texture is completely different. These bumps? Gone.\"", "CTA: \"Link in bio — seriously, just try it\""] },
    { name: "The Routine Stack", why: "Skincare audiences love routines. This format shows a 3–5 step routine with the featured product as the star of one step. It feels educational, not salesy.", length: "30–45 seconds", platform: "TikTok, YouTube Shorts", outline: ["Hook: \"My 4-step routine that finally cleared my hormonal acne\"", "Step through each product quickly (2–3 seconds each)", "Pause on the featured product: \"This is the one that made the difference\"", "Show result / CTA: \"Full routine linked below\""] },
    { name: "The Before/After Transformation", why: "Nothing converts like visual proof. This format shows a clear before state, introduces the product, then reveals the after. The key is making the before feel relatable and the after feel achievable.", length: "15–20 seconds", platform: "Instagram Reels, Facebook Feed", outline: ["Hook: \"3 weeks ago my skin looked like this...\" [show before]", "\"I started using [product] every night\"", "\"And now...\" [show after with natural lighting]", "CTA: \"If your skin looks like my before, try this\""] },
    { name: "The Ingredient Breakdown", why: "Skincare buyers are increasingly ingredient-savvy. This format positions the product as the smart choice by breaking down what's in it and why each ingredient matters.", length: "25–35 seconds", platform: "TikTok, Instagram Reels", outline: ["Hook: \"Your moisturizer probably doesn't have this ingredient...\"", "Name the hero ingredient + what it does", "\"Most brands use [cheaper alternative] instead because it's cheaper to produce\"", "\"[Product] uses [hero ingredient] at [percentage] — that's clinical strength\"", "CTA: \"Check the ingredients on yours. Then check this one.\""] },
  ],
  stats: [
    { num: "50x", label: "cheaper than hiring UGC creators", context: "The average skincare UGC creator charges $240–$500 per video. With AI, you're paying $4–$8 per video. For a brand testing 20 creatives per month, that's $5,000–$10,000 vs $80–$160." },
    { num: "3–5x", label: "more creatives per month", context: "Brands using AI UGC report producing 3–5x more video content. More creatives = more tests = faster learning = lower CPA over time." },
    { num: "40–60%", label: "lower CPA after 90 days", context: "Skincare brands that switch to high-volume AI creative testing typically see CPA drop by 40–60% within the first quarter — because testing 30 variations finds winners faster than testing 3." },
  ],
  hooks: [
    { line: "I spent $400 on skincare last year and my skin actually got worse...", why: "Opens with relatable frustration and a specific dollar amount that makes it feel real.", tag: "Problem-Solution" },
    { line: "My dermatologist asked me what I've been using and I was almost embarrassed to tell her...", why: "Creates curiosity — why would you be embarrassed? The viewer has to keep watching.", tag: "Testimonial" },
    { line: "POV: you finally find a serum that doesn't break you out", why: "Native TikTok format. The \"POV:\" prefix signals organic content, not an ad.", tag: "Relatability" },
    { line: "I'm 34 and people keep asking if I'm in my twenties. Here's my secret.", why: "Aspirational but believable. The specific age makes it feel authentic.", tag: "Social Proof" },
    { line: "Stop putting [common ingredient] on your face. Here's what to use instead.", why: "Controversy hook — challenges something the viewer might be doing. High thumb-stop rate.", tag: "Curiosity/Controversy" },
  ],
  stories: [
    { brand: "A DTC serum brand doing $30K/month", challenge: "Spending $1,500/month on 5 UGC creators, but only 2 out of 5 videos performed well enough to scale.", did: "Switched to ReUGC Pro plan ($99/month). Created 25 testimonial-style videos with 5 different hooks and 5 different AI actors matching their core demographics (women 25–45, diverse skin tones).", result: "Found 3 winning creatives in the first 2 weeks. CPA dropped 38% by month 2. Content spend went from $1,500/month to $99/month." },
    { brand: "A clean beauty brand expanding to Europe", challenge: "Had strong US ad performance but needed to launch in France, Germany, and Spain. Re-shooting with local creators would cost $3,000+ per market.", did: "Took their 5 best-performing English scripts and generated them in French, German, and Spanish using ReUGC's multilingual lip sync.", result: "Launched in 3 European markets in a single week. French market hit profitability in 18 days — faster than their original US launch." },
    { brand: "A Sephora-listed brand testing at scale", challenge: "Needed 50+ fresh creatives per month to feed Meta and TikTok campaigns across 12 SKUs. Their agency charged $15,000/month.", did: "Moved to ReUGC Pro Plus ($199/month for 60 videos). Built a library of scripts per SKU and generated variations weekly.", result: "Content production cost dropped from $15,000 to $199/month. Turnaround went from 2 weeks to same-day. Now testing 60 creatives per month instead of 15." },
  ],
  faq: [
    { q: "How much do skincare brands typically spend on video content?", a: "Most skincare brands spending $5K–$50K/month on ads allocate $1,500–$5,000/month on UGC content production. With AI UGC, that drops to $49–$199/month for the same or higher volume." },
    { q: "What video length works best for skincare ads?", a: "15–25 seconds is the sweet spot for paid skincare ads on TikTok and Instagram. Testimonials can stretch to 30 seconds. Routine videos work at 30–45 seconds. For Facebook feed, 15–20 seconds performs best." },
    { q: "Can AI actors look authentic for skincare products?", a: "For talking-head testimonials and script-based content, yes — modern AI actors are convincing enough that most viewers can't tell the difference in a scrolling feed. The limitation is product interaction: AI can't show real hands applying a real serum." },
    { q: "How many video ads should a skincare brand test per month?", a: "At minimum, 10–15 new creatives per month. High-performing skincare brands on TikTok and Meta test 30–50. If 1 in 5 creatives becomes a winner, you need to test 20 to find 4 winners." },
  ],
  ctaLine: "Stop overpaying for skincare video content.",
};
export default data;
