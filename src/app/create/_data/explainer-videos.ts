import type { CreatePageData } from "./_shared";

const data: CreatePageData = {
  title: "Create AI Explainer Videos — Break Down Complex Topics",
  readTime: "8 min",
  meta: "Create AI explainer videos that simplify complex products and concepts. Includes script framework, hook templates, and best practices for educational marketing content.",
  intro: "Explainer videos increase conversion rates by 20% on landing pages and 80% of marketers say video has directly helped increase sales. The format works because it takes something confusing and makes it simple. If your product requires explanation — how it works, why it's different, what problem it solves — an explainer video does in 30 seconds what a landing page tries to do in 2,000 words. The bottleneck has always been production. Traditional explainer videos cost $5,000–$20,000 and take 4–8 weeks. AI-generated explainer videos with a presenter cost a fraction of that and ship in minutes. Here's how to build explainer content that actually explains — and converts.",
  what: {
    definition: "An explainer video is a short video that breaks down a product, service, or concept into simple, digestible terms. It answers the fundamental question every potential customer has: 'What is this and why should I care?'",
    reasons: [
      { label: "Clarity converts", text: "Confused visitors don't buy. If someone lands on your site and can't understand what you do in 10 seconds, they leave. An explainer video communicates your value proposition faster and more memorably than text — viewers retain 95% of a message from video vs. 10% from text." },
      { label: "Reduces support load", text: "Every question your explainer video answers is a support ticket that never gets filed. For SaaS products and complex services, a good explainer video can reduce onboarding questions by 40%." },
      { label: "Versatile placement", text: "Explainer videos work everywhere — landing pages, email sequences, social ads, sales decks, onboarding flows. One video serves multiple touchpoints across the entire customer journey." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Name the problem your audience faces. Be specific enough that they immediately think 'that's me.'", examples: ["\"If you're spending hours on [task] and still not getting results, there's a better way.\"", "\"Most [audience] waste $[amount] a month on [category] because they don't know this exists.\""], why: "Problem-first hooks work for explainers because the audience is already problem-aware. Naming their specific frustration creates instant relevance.", mistake: "Starting with 'Let me tell you about [product].' Nobody wants to hear about your product — they want to hear about their problem." },
    { step: "The Setup", time: "3–8 seconds", what: "Briefly explain why the current solutions don't work. This creates the gap that your product fills.", examples: ["\"Traditional [solution] is slow, expensive, and requires [skill/resource] most people don't have. You end up spending more time managing the process than getting results.\""], why: "Explaining why existing solutions fail positions your product as the logical next step. The viewer thinks 'yeah, that's exactly my experience' — and they're primed for your solution.", mistake: "Spending too long on the problem. You have 5 seconds — name the pain, explain why current solutions fail, and move on." },
    { step: "The Payoff", time: "8–20 seconds", what: "Introduce your product as the solution. Explain what it does (not how it works) in simple, benefit-focused language.", examples: ["\"[Product] does [core function] in [timeframe]. You [simple action], and it [delivers result]. No [common pain point], no [common pain point]. Just [desired outcome].\""], why: "The 'what it does' framing is critical. Customers don't care about your technology stack — they care about the outcome. Keep it to one sentence: action → result.", mistake: "Explaining the technology instead of the benefit. 'We use proprietary AI algorithms' means nothing. 'You get a finished video in 5 minutes' means everything." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Direct the viewer to the next step with a clear, low-friction CTA.", examples: ["\"See how it works — link in bio.\"", "\"Start creating today. Link below.\""], why: "Explainer CTAs should be action-oriented and low-commitment. 'See how it works' is less intimidating than 'Sign up now' for a product the viewer just learned about." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"If you're still paying $300 per UGC video and\nwaiting 2 weeks for delivery, you need to hear this."\n[Direct to camera, knowing expression]\n\n[SETUP — 3-8s]\n"Hiring creators is expensive, slow, and half the\ntime the videos need reshoots anyway. You can't\ntest fast enough, you can't scale, and your creative\nteam is stuck managing freelancers instead of\nactually being creative."\n[Casual, conversational tone]\n\n[PAYOFF — 8-18s]\n"ReUGC generates UGC-style videos with AI\nactors. You write a script — or let AI write it — pick\nan actor, and get a finished video in minutes. Not\ndays. Minutes. Same authentic feel, fraction of the\ncost, and you can make 20 variations before lunch."\n[Confident, showing the simplicity]\n\n[CTA — 18-22s]\n"See how it works. Link in bio."\n[Point to link, simple close]`,
  hooks: [
    { line: "You're overcomplicating [task]. Here's the simple version.", trigger: "Implies the viewer is doing something wrong and offers a simpler alternative. The promise of simplification is universally appealing.", products: "SaaS tools, productivity apps, complex services, B2B solutions" },
    { line: "I'm going to explain [product/concept] in 30 seconds. Ready?", trigger: "Sets a time expectation that feels manageable. The 'ready?' creates a micro-commitment to watch.", products: "Any product that requires explanation — tech, finance, health, B2B" },
    { line: "This tool replaced 3 apps in my workflow. Let me show you what it does.", trigger: "Consolidation appeal — replacing multiple tools with one is a strong value proposition that creates curiosity.", products: "SaaS, productivity tools, all-in-one platforms" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "30–60 seconds for social, 60–120 seconds for landing pages. The complexity of your product determines the length — simpler products need less explanation." },
    { label: "Simplicity", text: "Use 6th-grade language. If your explanation requires jargon, you haven't simplified enough. The test: could a 12-year-old understand what your product does from this video?" },
    { label: "One concept", text: "Explain one thing per video. If your product does 5 things, make 5 explainer videos. Cramming everything into one video dilutes every message." },
    { label: "Benefit over feature", text: "Replace every feature mention with its benefit. 'AI-powered' → 'creates videos in minutes.' 'Cloud-based' → 'access from anywhere.' Features are how; benefits are why." },
    { label: "Visual metaphors", text: "Use comparisons the viewer already understands. 'It's like Canva but for video' communicates more in 6 words than a paragraph of feature descriptions." },
    { label: "Captions", text: "Bold key phrases and benefits in captions. Use a different color for the product name and core benefit. Sound-off viewers should understand the value proposition from captions alone." },
  ],
  whenToUse: {
    stage: "Top funnel. Explainer videos are for audiences who don't know your product exists or don't understand what it does. They're awareness and education tools.",
    audience: "Problem-aware but solution-unaware prospects. They know they have a problem but haven't found your product yet. The explainer bridges that gap.",
    platforms: "Landing pages (highest impact), YouTube pre-roll, Facebook and Instagram Feed ads, LinkedIn (for B2B). Also effective in email welcome sequences.",
    pairWith: "Follow explainer videos with demo or testimonial content. The explainer introduces the concept; the demo shows it in action; the testimonial provides social proof.",
  },
  ctaLine: "Create explainer videos that make complex products simple. No animation studio, no voiceover artists.",
};
export default data;
