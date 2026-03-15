import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "SaaS Products",
  scriptCount: 3,
  h1: "UGC Video Script for SaaS Products: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for SaaS marketing — founder story, pain-point, and screen-walkthrough formats. Plus 5 hooks that convert B2B and B2C audiences.",
  intro: "SaaS ads that open with feature lists get ignored. The ones where someone says \"this tool saved me 10 hours a week\" get clicks. UGC works for software because buying decisions are emotional even in B2B — people want to hear from other people who had the same problem. Here are 3 scripts built for SaaS.",
  scripts: [
    {
      name: "The SaaS Founder Story",
      subtitle: "Best for: Early-stage SaaS. Building brand trust. Cold audiences who've never heard of you.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"I built this tool because I was sick of paying\n$300/month for software that did 10% of what\nI actually needed."\n\n[SETUP — 3-10s]\n"I was running a small agency and every project\nmanagement tool was either way too complex —\nlike I need a PhD to set up a workflow — or so\nsimple it couldn't handle more than a to-do list.\nI was using 4 different tools duct-taped together."\n\n[PAYOFF — 10-20s]\n"So I built the thing I wanted. One dashboard.\nProjects, clients, invoices, time tracking — all\nin one place. No 45-minute onboarding video.\nYou sign up and you're working in 2 minutes."\n[Brief screen recording of dashboard]\n\n[CTA — 20-25s]\n"We're at 2,000 users now and growing every week.\nIf you're tired of overpaying for bloated software,\ncome check it out. Link in bio."`,
      notes: [
        "Founder stories work because they answer \"why does this exist?\" — which is the first question skeptical SaaS buyers ask",
        "The $300/month figure creates instant price anchoring. Replace with whatever your competitors charge",
        "\"You sign up and you're working in 2 minutes\" addresses the #1 SaaS objection: onboarding friction",
        "The user count (\"2,000 users\") adds social proof. Use your real number — even small numbers work if framed right (\"500 teams already switched\")",
      ],
    },
    {
      name: "The SaaS Pain-Point Ad",
      subtitle: "Best for: Targeting users of competing products. Mid-funnel audiences who know they need a solution.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"If you're still tracking client projects in\nspreadsheets, I need you to stop what you're\ndoing and watch this."\n\n[PROBLEM — 3-9s]\n"I used to spend every Monday morning updating\na Google Sheet with project statuses. Copy-pasting\nfrom Slack, checking email threads, asking my\nteam 'where are we on this?' It took 2 hours\nevery single week."\n\n[SOLUTION — 9-18s]\n"Now everything updates automatically. When my\nteam moves a task, the client dashboard updates.\nWhen a milestone hits, the invoice generates.\nI went from 2 hours of Monday admin to zero."\n[Show tool interface, quick transitions]\n\n[CTA — 18-22s]\n"If Monday mornings stress you out, this will\nfix that. Link in bio."`,
      notes: [
        "\"If you're still doing X\" immediately qualifies the audience and creates slight shame — a powerful motivator in B2B",
        "The problem section describes a process, not a feeling. SaaS buyers relate to workflows more than emotions",
        "\"2 hours to zero\" is a concrete, measurable result. Always quantify the time or money saved when possible",
        "Keep the screen recording clips fast — 1-2 seconds each. The viewer doesn't need to understand the UI, just see that it exists and looks clean",
      ],
    },
    {
      name: "The SaaS Screen Walkthrough",
      subtitle: "Best for: Bottom-funnel audiences ready to buy. Retargeting visitors who viewed pricing.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"Let me show you why 2,000 teams switched to\nthis in the last 3 months"\n[Screen recording starts immediately]\n\n[DEMO — 2-12s]\n"You log in — here's your dashboard. Every\nproject, every deadline, every team member.\nOne screen."\n"Click into a project — here's your timeline,\nyour tasks, your files. No digging through\nfolders."\n"Need to invoice? Click here. It pulls the\nhours automatically. Done in 10 seconds."\n[Fast screen recording with cursor movements]\n\n[SOCIAL PROOF — 12-16s]\n"We just hit 4.8 stars on G2 with 200+ reviews.\nPeople keep saying the same thing: 'Why didn't\nI switch sooner?'"\n\n[CTA — 16-19s]\n"Link in bio. You'll set it up in under\n5 minutes."`,
      notes: [
        "Screen walkthroughs work for bottom-funnel because these viewers already know they want a tool — they just need to see it works",
        "Keep the demo to 3 key actions max. Don't try to show everything. Show the 3 things that make people say \"oh that's nice\"",
        "G2/Capterra ratings are powerful social proof for SaaS. If you have them, use them. If not, use customer count or testimonial quotes",
        "\"You'll set it up in under 5 minutes\" removes the last objection: implementation effort",
      ],
    },
  ],
  hooks: [
    { line: "I replaced 4 tools with this one and saved $847/month", trigger: "cost savings", note: "Specific dollar amount is more believable than \"saves money.\" Replace with your actual consolidation story." },
    { line: "My team almost quit because of our old project management tool", trigger: "pain amplification", note: "Dramatic but relatable for anyone who's dealt with bad software. High emotional engagement." },
    { line: "This is the tool I wish existed when I started my business", trigger: "founder empathy", note: "Works for founder-led brands. Creates a \"built by someone like me\" connection." },
    { line: "I'm about to show you a 30-second demo that'll make you cancel your current subscription", trigger: "bold claim", note: "Confidence is magnetic. The viewer watches to see if the claim holds up." },
    { line: "POV: you find software that actually works the way your brain works", trigger: "relatability", note: "Speaks to the frustration of adapting your workflow to bad UX. Native social format." },
  ],
  tips: [
    "SaaS UGC should feel like a peer recommendation, not a product demo. Lead with the problem and the result — the product is just the bridge",
    "Screen recordings should be crisp and fast. Use zoom-ins on key features and keep each clip under 3 seconds. Nobody watches a full walkthrough in an ad",
    "B2B SaaS buyers often watch ads on LinkedIn and Twitter — test horizontal (16:9) formats in addition to vertical for these platforms",
    "Include pricing if you're competitive. SaaS buyers comparison-shop aggressively — transparency builds trust and pre-qualifies leads",
    "Test different personas: the founder, the team lead, the frustrated employee. Each angle resonates with a different buyer in the decision chain",
  ],
  ctaLine: "Turn these SaaS scripts into professional UGC videos. No actors or cameras needed.",
};
export default data;
