import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Fintech Apps",
  scriptCount: 3,
  h1: "UGC Video Script for Fintech Apps: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for fintech apps — money saved story, app walkthrough, and financial wake-up call formats. Plus 5 hooks that drive downloads.",
  intro: "Fintech apps sell on one thing: making money less stressful. UGC-style videos where someone shares how an app helped them save $5,000 or finally understand their spending convert because financial anxiety is universal. People don't want features — they want to feel in control. Here are 3 scripts built for fintech brands.",
  scripts: [
    {
      name: "The Money Saved Story",
      subtitle: "Best for: Savings and budgeting apps. Cold audiences who feel financially stressed.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"This app helped me save $6,200 in 8 months\nand I didn't change my lifestyle at all"\n\n[SETUP — 3-10s]\n"I've always been terrible with money. Not\nbecause I spend a lot — I just never knew\nwhere it was going. I'd check my account on\npayday and think 'where did it all go?' every\nsingle month. I tried spreadsheets, I tried\nenvelopes, I tried willpower. Nothing stuck."\n\n[PAYOFF — 10-20s]\n"This app connects to my bank and categorizes\neverything automatically. First month I realized\nI was spending $340 on subscriptions I forgot\nabout. $340. I cancelled 6 of them in 10 minutes."\n"It also rounds up every purchase and puts the\nchange into savings. I don't even notice it\nhappening but it adds up to $200-300 a month."\n[Show app interface briefly]\n\n[CTA — 20-25s]\n"$6,200 saved without trying. If you're bad\nwith money, you don't need discipline — you\nneed a better system. Link in bio."`,
      notes: [
        "\"Didn't change my lifestyle\" is the key message. People want to save money without sacrifice — this promises exactly that",
        "\"$340 on subscriptions I forgot about\" is a specific, relatable discovery. Most people have forgotten subscriptions draining their accounts",
        "The round-up feature explanation is simple and tangible. \"I don't even notice it\" removes the effort barrier",
        "\"You don't need discipline — you need a better system\" reframes the problem from personal failure to tool failure. This is empowering",
      ],
    },
    {
      name: "The App Walkthrough",
      subtitle: "Best for: Demonstrating key features. Mid-funnel audiences who are comparing fintech apps.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"Let me show you the app that finally made me\nunderstand where my money goes"\n[Show phone with app open]\n\n[WALKTHROUGH — 3-16s]\n"Home screen — everything at a glance. Total\nbalance, spending this month, savings progress.\nNo clutter."\n"Tap into spending — it breaks down every\ncategory. I can see I spent $420 on dining\nout this month. Ouch. But now I know."\n"The part I love most — it shows you recurring\ncharges and flags ones that increased. My\nstreaming service went up $3 and I had no\nidea until this app told me."\n[Screen recording with quick taps]\n"And the savings goals — I set a vacation fund\nfor $3,000 and it automatically moves money\ntoward it every week based on what I can afford."\n\n[CTA — 16-21s]\n"Knowing where your money goes is the first\nstep to keeping more of it. Link in bio."`,
      notes: [
        "\"Finally made me understand\" implies previous apps failed. It positions this app as the one that actually works",
        "\"$420 on dining out — ouch\" is an honest, relatable reaction. Self-awareness about spending habits creates connection",
        "The price increase alert ($3 streaming increase) is a small but powerful feature demo. It shows the app is watching out for you",
        "\"Based on what I can afford\" is important — it signals the app is smart, not aggressive with savings",
      ],
    },
    {
      name: "The Financial Wake-Up Call",
      subtitle: "Best for: Motivating action. Cold audiences who know they need to get their finances together.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"I added up everything I spent on impulse\npurchases last year and the number made me\nphysically ill"\n[Direct to camera, serious tone]\n\n[WAKE-UP — 2-10s]\n"$4,700. On stuff I don't even remember buying.\nThat's a vacation. That's 3 months of car\npayments. That's money I'll never get back\nbecause I didn't have a system to catch myself."\n\n[SOLUTION — 10-16s]\n"This year I'm using this app and it sends me\na notification before I make any purchase over\n$50. Just a little 'hey, do you actually need\nthis?' And honestly? Half the time I put my\nphone down and walk away."\n[Show notification example]\n\n[CTA — 16-19s]\n"Don't wait until December to add up the\ndamage. Start tracking now. Link in bio."`,
      notes: [
        "\"Made me physically ill\" is a strong emotional reaction that signals the number is genuinely shocking. It creates urgency",
        "Converting the wasted amount into tangible alternatives (vacation, car payments) makes the loss feel real and painful",
        "The $50 notification feature is simple to understand and immediately useful. It's a feature that sells itself",
        "\"Don't wait until December\" creates time-based urgency. The viewer feels like every day without the app is money lost",
      ],
    },
  ],
  hooks: [
    { line: "I checked my bank account for the first time in 3 months and this app is the reason I wasn't scared", trigger: "anxiety relief", note: "Financial anxiety is universal. The promise of checking your account without fear is deeply compelling." },
    { line: "This app found $280 in subscriptions I forgot I was paying for", trigger: "hidden money", note: "Forgotten subscriptions are free money waiting to be found. The specific amount creates urgency to check." },
    { line: "POV: you open your banking app and actually have money left at the end of the month", trigger: "aspiration", note: "Living paycheck to paycheck is common. The promise of money remaining is aspirational for millions." },
    { line: "I made $340 in interest last year by doing absolutely nothing. Here's how.", trigger: "passive income", note: "Earning money passively is the ultimate fintech promise. The specific amount and \"doing nothing\" create curiosity." },
    { line: "The app that made my accountant ask 'what changed?' at tax time", trigger: "professional validation", note: "An accountant noticing improvement is powerful third-party validation for financial management." },
  ],
  tips: [
    "Lead with the emotional outcome (peace of mind, control, confidence) not the features (categorization, round-ups, alerts). People download fintech apps to feel better about money",
    "Include specific dollar amounts saved or found. Fintech is a numbers game — \"I saved $6,200\" converts 10x better than \"I saved a lot\"",
    "Show the app interface briefly but don't make it the focus. The human story of financial transformation is what sells — the app is just the tool",
    "Address financial shame gently. Many people feel embarrassed about their money habits. UGC that normalizes financial struggles builds trust",
    "Test different financial situations: debt payoff, saving for a goal, subscription audit, investment growth. Each targets a different user motivation",
  ],
  ctaLine: "Create fintech UGC videos from these scripts in minutes. No financial advisor needed.",
};
export default data;
