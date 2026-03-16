import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "App Launches",
  scriptCount: 3,
  h1: "UGC Video Script for App Launches: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for app launches — early adopter review, problem-solution, and feature showcase formats. Plus 5 hooks that drive downloads on launch day.",
  intro: "App launches live or die in the first 48 hours — and UGC-style content is the fastest way to build social proof when you have zero reviews. Early adopter testimonials, problem-solution demos, and feature showcases create the momentum that turns a launch into a movement. Here are 3 scripts built for app launch day.",
  scripts: [
    {
      name: "The Early Adopter Review",
      subtitle: "Best for: Launch day and week one. Building initial social proof with zero existing reviews.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"I got early access to this app and I've been\nusing it for 2 weeks before anyone else. Here's\nmy honest take."\n\n[SETUP — 3-10s]\n"So this app is supposed to replace the 3\ndifferent tools I use to manage my freelance\nbusiness — invoicing, time tracking, and client\ncommunication. I was skeptical because every\n'all-in-one' app I've tried does everything\npoorly instead of one thing well."\n\n[REVIEW — 10-20s]\n"Two weeks in — I'm genuinely impressed. The\ninvoicing is cleaner than my dedicated invoicing\napp. The time tracker runs in the background\nwithout killing my battery. And the client\nportal means I stopped sending 40 emails a week."\n"It's not perfect — the calendar integration\nis a bit clunky. But the team is shipping\nupdates weekly and they actually respond to\nfeedback in the community."\n\n[CTA — 20-25s]\n"It launches today. If you're a freelancer\njuggling too many tools, this is the one to\nwatch. Link in bio to download."`,
      notes: [
        "\"Early access\" creates exclusivity. The viewer feels like they're getting insider information before the masses",
        "Acknowledging skepticism (\"every all-in-one app does everything poorly\") validates the viewer's own hesitation and makes the positive review more credible",
        "Including a minor criticism (calendar integration) makes the review honest. Perfect reviews feel fake, especially for new apps",
        "\"Shipping updates weekly\" signals an active, responsive team. For new apps, ongoing development is as important as current features",
      ],
    },
    {
      name: "The Problem-Solution Launch",
      subtitle: "Best for: Explaining why the app exists. Cold audiences who have the problem the app solves.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"If you've ever lost a receipt and panicked\nduring tax season, this app was literally\nbuilt for you"\n\n[PROBLEM — 3-9s]\n"Last year I spent 3 days digging through\nemail, photos, and shoeboxes trying to find\nreceipts for my tax deductions. I missed\n$2,400 in write-offs because I couldn't prove\nthem. That's money I earned and gave away\nbecause I was disorganized."\n\n[SOLUTION — 9-18s]\n"This app just launched and it solves this\ncompletely. You snap a photo of any receipt,\nit auto-categorizes it, extracts the amount,\nand stores it by tax category. At year-end,\nyou export everything in one click."\n[Show app in action — snap, categorize, export]\n"I've been using the beta for a month and I\nalready have 47 receipts organized. Tax season\nis going to take me 20 minutes this year."\n\n[CTA — 18-22s]\n"It just launched today. Download it now and\nstart scanning before you lose another receipt.\nLink in bio."`,
      notes: [
        "\"Lost a receipt and panicked during tax season\" is a universal pain point for freelancers and small business owners",
        "\"$2,400 in missed write-offs\" quantifies the cost of the problem. It makes the app feel like a money-saving tool, not just an organizer",
        "Showing the app workflow (snap → categorize → export) in 3 steps makes it feel simple and immediate",
        "\"47 receipts organized\" from beta use provides social proof that the app works in practice, not just in theory",
      ],
    },
    {
      name: "The Feature Showcase",
      subtitle: "Best for: Differentiating from competitors. Audiences who already use a similar app.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"This app just launched and it does 3 things\nno other app in this space does"\n[Show app on phone]\n\n[FEATURES — 2-13s]\n"One — it works offline. Full functionality\nwithout WiFi. I tested it on a flight and\neverything synced when I landed."\n"Two — the AI doesn't just suggest — it\nexplains why. Every recommendation comes with\na one-line reason so you actually learn, not\njust follow blindly."\n"Three — it's privacy-first. Your data stays\non your device unless you explicitly choose\nto sync. No selling your info to advertisers."\n\n[CTA — 13-17s]\n"It launched today and it's already trending\non Product Hunt. Get it before everyone else\ndoes. Link in bio."`,
      notes: [
        "\"3 things no other app does\" is a competitive positioning hook. It promises unique value that justifies switching",
        "Each feature addresses a real frustration with existing apps: offline access, explainability, privacy. These are genuine differentiators",
        "\"Tested it on a flight\" is a real-world proof point. It shows the feature works in practice, not just in marketing copy",
        "\"Trending on Product Hunt\" adds social proof for tech-savvy audiences. It signals the app is gaining momentum",
      ],
    },
  ],
  hooks: [
    { line: "I deleted 3 apps from my phone after downloading this one", trigger: "replacement", note: "Consolidation is powerful. The viewer wonders which 3 apps and whether they use them too." },
    { line: "This app launched 24 hours ago and already has 10,000 downloads. I see why.", trigger: "momentum", note: "Early traction creates bandwagon effect. The viewer doesn't want to miss what everyone else found." },
    { line: "POV: you find an app that actually does what it promises on the App Store", trigger: "skepticism resolved", note: "App Store disappointment is universal. The promise of an app that delivers is refreshingly compelling." },
    { line: "The founder built this because she was frustrated with the same thing you are", trigger: "founder empathy", note: "Founder stories create emotional connection. The app feels like it was built by someone who understands." },
    { line: "I've beta tested 20+ apps this year. This is the first one I'm telling people about.", trigger: "selective endorsement", note: "Volume of testing establishes credibility. Selective recommendation signals genuine quality." },
  ],
  tips: [
    "Launch day UGC should create urgency and momentum. \"Just launched today\" and \"get it before everyone else\" drive immediate downloads",
    "Include one honest criticism alongside the praise. New apps aren't perfect — acknowledging that builds trust and makes the positive points more believable",
    "Show the app being used in real scenarios, not just the interface. Context (on a flight, at a coffee shop, during a meeting) makes the app feel practical",
    "Mention the team's responsiveness to feedback. For new apps, knowing the developers listen and iterate is a major trust signal",
    "Test different user personas: the early adopter, the frustrated switcher, the first-time user. Each perspective highlights different aspects of the app's value",
  ],
  ctaLine: "Create app launch UGC videos from these scripts. No beta testers needed.",
};
export default data;
