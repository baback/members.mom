import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Insurance",
  scriptCount: 3,
  h1: "UGC Video Script for Insurance: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for insurance companies — claim story, savings comparison, and myth-buster formats. Plus 5 hooks that generate quotes.",
  intro: "Insurance is the hardest product to make interesting on social media — but UGC changes that. When someone shares a real story about how their insurance saved them $15,000 after a fender bender, suddenly insurance isn't boring anymore. It's essential. Personal stories cut through the jargon and make people actually want to check their coverage. Here are 3 scripts built for insurance brands.",
  scripts: [
    {
      name: "The Claim Story",
      subtitle: "Best for: Demonstrating value when it matters most. Cold audiences who think insurance is a waste of money.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"My basement flooded last March and my insurance\npaid out $23,000 in 11 days. Let me tell you\nwhy that matters."\n\n[SETUP — 3-10s]\n"I came home from work and there was 3 inches\nof water in my basement. Furnace destroyed,\ndrywall ruined, everything in storage — gone.\nI was panicking. My neighbor had the same thing\nhappen and his insurance fought him for 4 months\nand paid out half of what he needed."\n\n[PAYOFF — 10-20s]\n"I called my insurance at 8pm on a Tuesday.\nAn adjuster was at my house the next morning.\nThey documented everything, approved the claim\nin 5 days, and the money was in my account by\nday 11. No fighting, no lowball offers, no\n'we'll get back to you.'"\n"My neighbor switched to my insurance the\nfollowing week."\n\n[CTA — 20-25s]\n"You don't think about insurance until you\nneed it. When you need it, you want these\npeople in your corner. Link in bio for a\nfree quote."`,
      notes: [
        "The specific payout ($23,000) and timeline (11 days) make the story concrete and verifiable. Vague claims don't work for insurance",
        "The neighbor comparison creates a direct contrast between good and bad insurance experiences. It makes the choice feel obvious",
        "\"No fighting, no lowball offers\" addresses the #1 fear about insurance: that they won't pay when you need them",
        "\"You don't think about insurance until you need it\" is a universal truth that reframes insurance from expense to protection",
      ],
    },
    {
      name: "The Savings Comparison",
      subtitle: "Best for: Price-conscious audiences. People who haven't shopped their insurance in years.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"I saved $1,400 a year on car insurance by\nspending 10 minutes on my phone. I'm actually\nmad I didn't do this sooner."\n\n[PROBLEM — 3-9s]\n"I'd been with the same insurance company for\n7 years. Never checked if I was overpaying\nbecause switching seemed like a hassle. Turns\nout I was paying $2,800 a year for coverage\nthat should have cost $1,400."\n\n[SOLUTION — 9-18s]\n"I got a quote from this company — same coverage,\nsame deductible, same everything. $1,400 less.\nThe switch took 10 minutes online. They even\ncancelled my old policy for me."\n"That's $1,400 back in my pocket every year\nfor doing basically nothing."\n\n[CTA — 18-22s]\n"If you haven't shopped your insurance in more\nthan 2 years, you're probably overpaying. Get\na free quote — link in bio. It takes 3 minutes."`,
      notes: [
        "\"$1,400 a year\" is a specific, meaningful savings that gets attention. Replace with realistic savings for your product",
        "\"7 years without checking\" is relatable — most people set and forget their insurance. The viewer immediately wonders if they're overpaying too",
        "\"Same coverage, same deductible, same everything\" preemptively addresses the concern that cheaper means less coverage",
        "\"They even cancelled my old policy for me\" removes the switching friction. Convenience is a major selling point for insurance",
      ],
    },
    {
      name: "The Insurance Myth-Buster",
      subtitle: "Best for: Educating and converting. Cold audiences who don't understand their coverage.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"3 things your insurance agent probably never\ntold you that could save you thousands"\n[Direct to camera, helpful tone]\n\n[MYTHS — 2-13s]\n"One — your credit score affects your premium.\nImprove your credit by 50 points and your\nrate could drop 15-20%. Nobody tells you this."\n"Two — you're probably paying for coverage you\ndon't need. If your car is worth less than\n$5,000, comprehensive coverage might be costing\nyou more than the car is worth."\n"Three — bundling isn't always cheaper. Sometimes\nseparate policies from different companies save\nyou more than a bundle discount."\n\n[CTA — 13-17s]\n"Knowledge saves money. Get a free coverage\nreview — link in bio. You might be surprised\nwhat you find."`,
      notes: [
        "\"Your agent probably never told you\" creates an us-vs-them dynamic where the viewer feels like they're getting insider information",
        "Each tip is actionable and specific. Vague advice like \"shop around\" doesn't convert — specific strategies do",
        "\"Bundling isn't always cheaper\" challenges conventional wisdom, which makes the viewer question their current setup",
        "Offering a \"free coverage review\" is a low-friction CTA that starts a conversation and generates qualified leads",
      ],
    },
  ],
  hooks: [
    { line: "My car got totaled and my insurance paid off the entire loan plus gave me $3,000 extra", trigger: "claim success", note: "A positive claim experience is the most powerful insurance ad possible. The extra $3K creates a \"wait, really?\" moment." },
    { line: "I've been overpaying for insurance for 6 years and I just found out how much", trigger: "discovery shock", note: "The viewer immediately wonders if they're overpaying too. Self-referential hooks drive the highest engagement." },
    { line: "POV: you actually understand your insurance policy for the first time", trigger: "empowerment", note: "Most people don't understand their coverage. The promise of clarity is surprisingly compelling." },
    { line: "My insurance company sent me a check I wasn't even expecting. Here's why.", trigger: "pleasant surprise", note: "An insurance company proactively paying out is so unusual it demands attention. Great for brands with proactive service." },
    { line: "The one question I asked my insurance agent that saved me $800 a year", trigger: "insider tip", note: "A single question saving $800 is specific and actionable. The viewer wants to know the question." },
  ],
  tips: [
    "Insurance UGC must tell stories, not list features. \"My claim was paid in 11 days\" converts. \"We offer fast claims processing\" doesn't. Always lead with the human experience",
    "Include specific dollar amounts for savings and payouts. Insurance is a numbers game — vague promises don't build confidence in a financial product",
    "Address the switching friction directly. Most people stay with bad insurance because switching seems hard. Show how easy the process actually is",
    "Compliance matters — ensure all claims about savings and coverage are accurate and include appropriate disclaimers where required by regulations",
    "Test different life events: car accident, home damage, health scare, new baby. Each event triggers a different insurance need and emotional response",
  ],
  ctaLine: "Create insurance UGC videos from these scripts. No claims adjuster needed.",
};
export default data;
