import type { CreatePageData } from "./_shared";

const data: CreatePageData = {
  title: "Create AI How-To Tutorial Videos — Educate & Convert",
  readTime: "8 min",
  meta: "Create AI how-to tutorial videos that educate your audience and drive conversions. Includes script framework, hook templates, and best practices for educational content.",
  intro: "How-to videos are the most searched content category on YouTube — 'how to' queries generate over 500 million views per day. The format works because it meets people at their point of need. Someone searching 'how to remove dark spots' isn't browsing — they're actively looking for a solution. If your tutorial answers their question AND introduces your product as part of the solution, you've earned their trust and their click. The problem is that tutorial content takes time to produce. Scripting, filming, editing — a single 60-second tutorial can take a full day. AI video generation compresses that timeline to minutes, letting you build an entire library of educational content that drives organic traffic and converts viewers into customers.",
  what: {
    definition: "A how-to tutorial video walks the viewer through a specific process, technique, or solution step by step. The product is woven into the tutorial naturally — not as a pitch, but as a tool that makes the process easier or more effective.",
    reasons: [
      { label: "Search intent", text: "How-to queries signal active problem-solving. These viewers aren't passively scrolling — they're looking for answers. Content that solves their problem earns trust, and trust converts. Tutorial videos rank in both YouTube and Google search results." },
      { label: "Value-first selling", text: "Tutorials give before they ask. By teaching something useful, you build goodwill and authority. When the product appears as part of the solution, it feels like a natural recommendation — not an interruption." },
      { label: "Evergreen traffic", text: "Unlike trend-based content that peaks and dies, how-to videos generate consistent traffic for months or years. A well-optimized tutorial can drive organic views long after it's published." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Promise a specific outcome. The viewer should know exactly what they'll learn and why it matters.", examples: ["\"Here's how to get rid of dark spots in 2 weeks — no dermatologist needed.\"", "\"The 3-step routine that cleared my acne. Takes 5 minutes.\""], why: "Specific outcomes ('dark spots in 2 weeks') and low effort ('5 minutes') are the two strongest motivators for tutorial content. The viewer calculates effort vs. reward instantly.", mistake: "Vague hooks like 'skincare tips you need to know.' There's no specific outcome, so there's no reason to watch." },
    { step: "The Setup", time: "3–8 seconds", what: "Briefly explain why this method works or what makes it different from what they've tried before.", examples: ["\"Most people make the mistake of using vitamin C and retinol together. That's why it's not working. Here's the correct order...\""], why: "Calling out a common mistake positions you as an authority and explains why the viewer's previous attempts failed. This creates a 'that's why!' moment that hooks them deeper.", mistake: "Skipping the 'why' and jumping straight to steps. Without context, the tutorial feels generic." },
    { step: "The Payoff", time: "8–20 seconds", what: "Walk through the steps clearly and concisely. Introduce the product as one of the tools or steps — not the entire tutorial.", examples: ["\"Step 1: Cleanse with lukewarm water. Step 2: Apply [product] — two pumps, pat it in, don't rub. Step 3: SPF. Every single morning. That's it. My dark spots faded by week two.\""], why: "The product is step 2 of 3 — it's part of the solution, not the whole pitch. This feels educational rather than promotional. The result ('faded by week two') provides the proof.", mistake: "Making the entire tutorial about the product. If every step involves your product, it's a commercial, not a tutorial." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Tie the CTA to the tutorial outcome, not the product.", examples: ["\"Try this routine for 2 weeks and come back and tell me your results. Link to everything I used in bio.\"", "\"Save this so you don't forget the order. Link below for the full routine.\""], why: "The CTA focuses on the viewer's results, not on buying. 'Come back and tell me' creates a relationship. 'Save this' increases engagement metrics that boost distribution." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"Here's how to actually get rid of textured skin.\nThis routine takes 3 minutes."\n[Direct to camera, confident tone]\n\n[SETUP — 3-8s]\n"If you've been layering 10 products and your skin\nstill looks bumpy, you're probably over-exfoliating.\nI made the same mistake for years. Here's what\nactually works — and it's way simpler than you think."\n[Casual bathroom setting]\n\n[PAYOFF — 8-18s]\n"Step 1: Gentle cleanser. Nothing foamy, nothing\nstripping. Step 2: [Product] — one pump, press it\ninto your skin. This has the right percentage of\nAHA to resurface without irritating. Step 3: Barrier\ncream. That's the whole routine. My texture was\ngone in 10 days."\n[Show each step, hold product naturally]\n\n[CTA — 18-22s]\n"Try this for 2 weeks. I promise you'll see a\ndifference. Everything I used is linked in bio."\n[Point down, genuine expression]`,
  hooks: [
    { line: "You're probably doing this wrong. Here's the right way to [task]...", trigger: "Challenges the viewer's current approach, which creates an immediate need to watch and correct their method.", products: "Skincare routines, cooking techniques, fitness form, software workflows" },
    { line: "The 3-minute routine that replaced my entire [category] collection.", trigger: "Simplification is universally appealing. The promise of replacing complexity with a simple routine is irresistible.", products: "Beauty, cleaning, fitness, productivity tools" },
    { line: "I asked a [professional] for their #1 tip. This is what they said.", trigger: "Authority transfer — borrowing credibility from an expert makes the tutorial feel more trustworthy.", products: "Health, finance, skincare, home improvement" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "30–60 seconds for social platforms, 2–5 minutes for YouTube. Social tutorials should cover one technique; YouTube tutorials can be comprehensive guides." },
    { label: "Structure", text: "Number your steps. '3 steps,' '5 tips,' or 'the 2-minute method' — numbered frameworks are easier to follow and more likely to be saved and shared." },
    { label: "Product placement", text: "The product should be ONE step in the process, not the entire tutorial. If you're teaching a 3-step routine, the product is step 2. This maintains educational credibility." },
    { label: "Specificity", text: "Teach one specific thing per video. 'How to remove dark spots' is better than 'skincare tips.' Specific tutorials rank for specific search queries." },
    { label: "Authority signals", text: "Mention credentials, experience, or results early. 'I've been an esthetician for 8 years' or 'I tested this on 50 clients' builds trust before the tutorial begins." },
    { label: "Captions", text: "Use step-by-step captions with numbered labels. 'STEP 1:' 'STEP 2:' formatting helps sound-off viewers follow along and increases save rates." },
  ],
  whenToUse: {
    stage: "Top to mid funnel. Tutorials attract problem-aware audiences who are searching for solutions. They build trust and authority before asking for a purchase.",
    audience: "Active problem-solvers searching for specific solutions. They're typing queries into YouTube and Google, not passively scrolling. High intent, high engagement.",
    platforms: "YouTube (primary for search-driven tutorials), TikTok and Instagram Reels (quick tips), Pinterest (step-by-step saves). Also effective as blog post embeds.",
    pairWith: "Follow tutorials with product review or testimonial videos. The tutorial educates; the review provides social proof that the product delivers on its promise.",
  },
  ctaLine: "Create how-to videos that teach and convert. No filming, no editing, no production delays.",
};
export default data;
