import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Baby & Kids Products",
  scriptCount: 3,
  h1: "UGC Video Script for Baby & Kids Products: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for baby and kids product brands — parent testimonial, daily routine, and product comparison formats. Plus 5 hooks that convert parents.",
  intro: "Parents don't buy from brands — they buy from other parents. A mom saying \"this saved my sanity during the newborn phase\" is worth more than any celebrity endorsement. UGC-style videos tap into the parenting community's trust network, and that's where purchase decisions happen. Here are 3 scripts built for baby and kids brands.",
  scripts: [
    {
      name: "The Parent Testimonial",
      subtitle: "Best for: Building trust with new or expecting parents. Cold audiences researching baby products.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"If I could only keep 3 baby products from my\nentire registry, this would be number one"\n\n[SETUP — 3-10s]\n"When I was pregnant everyone told me I was\noverpreparing. I had the $400 swing, the wipe\nwarmer, the fancy bottle sterilizer — and my\nbaby used maybe 20% of what I bought. Most of\nit collected dust."\n\n[PAYOFF — 10-20s]\n"But this carrier? I use it every single day.\nMy daughter falls asleep in it within 5 minutes.\nI can cook, clean, take the dog out, go grocery\nshopping — all hands-free. She's happy, I'm\nfunctional. That's the dream when you have a\nnewborn."\n[Show carrier being worn, baby content]\n\n[CTA — 20-25s]\n"If you're building your registry or you just\nhad a baby and you're drowning, get this first.\nEverything else is optional. Link in bio."`,
      notes: [
        "\"If I could only keep 3\" is a powerful framing device — it implies extensive experience and a clear winner",
        "Listing expensive products that didn't work (the $400 swing) makes the recommendation feel earned, not sponsored",
        "\"She's happy, I'm functional\" captures the dual benefit parents care about: baby's comfort AND parent's sanity",
        "\"You're drowning\" is honest language that resonates with new parents. Don't sugarcoat the newborn experience — authenticity converts",
      ],
    },
    {
      name: "The Parenting Routine",
      subtitle: "Best for: Showing product in daily context. Mid-funnel audiences comparing options.",
      duration: "20–25 seconds",
      script: `[HOOK — 0-3s]\n"Our bedtime routine went from 2 hours of\nscreaming to 20 minutes of calm. Here's\nexactly what changed."\n\n[ROUTINE — 3-16s]\n"Bath at 6:30 — we use their lavender wash.\nIt's gentle enough that his eczema doesn't\nflare up, which was a huge problem with other\nbrands."\n"Then this lotion — same line. Fragrance-free,\nthick enough to actually moisturize but not\ngreasy."\n"Sleep sack on. This is the game-changer.\nHe can't kick his blankets off, the temperature\nis regulated, and the zipper is inverted so\ndiaper changes don't wake him up fully."\n[Show each product in use]\n\n[CTA — 16-22s]\n"He sleeps 10 hours straight now. I'm not\nsaying it's magic — it took consistency. But\nthese products made the routine actually work.\nLink in bio for everything."`,
      notes: [
        "\"2 hours of screaming to 20 minutes of calm\" is a dramatic, specific transformation that every parent wants",
        "Mentioning eczema and specific product qualities (fragrance-free, inverted zipper) shows real product knowledge, not surface-level promotion",
        "\"I'm not saying it's magic\" is an important qualifier. Parents are skeptical of miracle claims — honesty builds trust",
        "Showing the full routine positions multiple products naturally, increasing average order value without feeling pushy",
      ],
    },
    {
      name: "The Parent Product Comparison",
      subtitle: "Best for: Competitive positioning. Parents actively shopping and comparing brands.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"I've tried 5 different stroller brands. Here's\nthe honest ranking."\n[Show strollers or product images]\n\n[COMPARISON — 2-14s]\n"The expensive one — beautiful but weighs 30\npounds. My trunk hated it."\n"The budget one — light but the wheels got\nstuck on every crack in the sidewalk."\n"The Instagram-famous one — looks great in\nphotos, terrible cup holder placement."\n"This one? One-hand fold, 15 pounds, smooth\non any surface, and the basket underneath\nactually fits a diaper bag. Not a tiny purse\n— a real diaper bag."\n\n[CTA — 14-18s]\n"I wish someone had told me this before I\nwasted $800 on the wrong strollers. Link\nin bio — you're welcome."`,
      notes: [
        "Ranking format keeps viewers watching to see where each product lands. It's a natural retention mechanic",
        "Criticizing competitors by category (\"the expensive one\", \"the budget one\") without naming them avoids legal issues while still positioning your product",
        "\"Actually fits a diaper bag\" is the kind of practical detail that only a real parent would mention. These specifics build credibility",
        "\"I wish someone had told me\" positions the speaker as saving the viewer from making the same expensive mistakes",
      ],
    },
  ],
  hooks: [
    { line: "My pediatrician recommended this and it's the only product advice I've actually followed", trigger: "authority + selectivity", note: "Doctor recommendation carries enormous weight with parents. The selectivity implies this one is special." },
    { line: "I returned $600 worth of baby stuff and kept only this", trigger: "curation", note: "The dollar amount signals extensive testing. Parents who've over-bought will immediately relate." },
    { line: "POV: your baby sleeps through the night for the first time", trigger: "aspiration", note: "Sleep is the #1 concern for new parents. This hook taps into their deepest desire." },
    { line: "Every mom in my playgroup uses this and I finally understand why", trigger: "social proof", note: "Peer group validation is the strongest purchase driver for parents. \"Everyone uses it\" creates FOMO." },
    { line: "The one baby product I'd buy again at full price without hesitation", trigger: "value conviction", note: "Parents are deal-hunters. Saying you'd pay full price is the strongest possible endorsement in this market." },
  ],
  tips: [
    "Safety is the #1 concern for parents. If your product has safety certifications, testing results, or pediatrician endorsements, mention them. Trust is non-negotiable in this category",
    "Show the product being used by a real baby or child if possible. Parents need to see how it looks in practice, not just in packaging",
    "Include the child's age when mentioning the product. \"My 4-month-old loves this\" is more useful than \"my baby loves this\" because parents shop by developmental stage",
    "Parent humor works incredibly well — \"I haven't slept in 6 months but at least the diaper bag is organized\" gets shares and builds community",
    "Test different parent personas: first-time mom, experienced dad, grandparent buying a gift. Each has different concerns and purchase triggers",
  ],
  ctaLine: "Create baby product UGC videos from these scripts. No sleep deprivation required.",
};
export default data;
