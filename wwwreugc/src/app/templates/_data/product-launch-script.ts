import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Product Launches",
  scriptCount: 3,
  h1: "UGC Video Script for Product Launches: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for product launches — first look, why-it-exists, and hype-builder formats. Plus 5 hooks that create launch day momentum.",
  intro: "Product launches need social proof before they have social proof — that's the cold start problem. UGC-style videos solve it by creating the appearance of organic buzz from day one. When multiple \"real people\" are talking about your product on launch day, it signals momentum that drives purchases. Here are 3 scripts built for product launches.",
  scripts: [
    {
      name: "The First Look",
      subtitle: "Best for: Launch day. Creating initial buzz and social proof when you have zero reviews.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"This brand just launched something new and I\ngot my hands on it before everyone else. First\nimpressions — let's go."\n[Hold up product, sealed]\n\n[FIRST LOOK — 3-18s]\n"Okay so this is their [product name]. They've\nbeen teasing it for months and it finally dropped\ntoday."\n[Open/unbox product]\n"First thing I notice — the [quality detail].\nThis feels premium. Like noticeably better than\nwhat's currently on the market."\n"Let me try it right now."\n[Use product for the first time]\n"Oh. Okay. Yeah, this is good. The [specific\nfeature] works exactly like they said it would.\nAnd the [second feature] is actually better\nthan I expected."\n[Show genuine reaction]\n\n[CTA — 18-24s]\n"It just launched today and I have a feeling\nthis is going to sell out fast based on the\nhype I've been seeing. Link in bio if you\nwant to grab one."`,
      notes: [
        "\"Before everyone else\" creates exclusivity. The viewer feels like they're getting early access to information",
        "The live first-use moment is the content. Genuine reactions to trying a product for the first time are more compelling than rehearsed reviews",
        "\"Better than what's currently on the market\" positions the product against existing options without naming competitors",
        "\"Going to sell out fast\" creates urgency. For launches, perceived demand drives actual demand",
      ],
    },
    {
      name: "The Why-It-Exists Story",
      subtitle: "Best for: Products that solve a specific problem. Audiences who need to understand the value proposition.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"Finally. Someone made the thing I've been\nwanting for years. Let me explain."\n[Direct to camera, relieved expression]\n\n[PROBLEM — 3-9s]\n"I've been complaining about [specific problem]\nfor as long as I can remember. Every product\nin this category does [limitation]. Nobody\nthought to [obvious improvement]. It's been\ndriving me crazy."\n\n[SOLUTION — 9-18s]\n"This brand just launched [product] and it\nfinally does [the thing]. It's like someone\nread my diary of complaints and built exactly\nwhat I described."\n[Show product, demonstrate the key difference]\n"The [key feature] alone makes it worth it.\nBut they also [secondary benefit] which is\njust chef's kiss."\n\n[CTA — 18-22s]\n"It launched today. If you've been frustrated\nby the same thing I have, this is your answer.\nLink in bio."`,
      notes: [
        "\"Finally\" is a powerful opening word. It signals the end of a long wait and validates the viewer's own frustration",
        "Describing the problem before the product makes the solution feel earned. The viewer needs to feel the pain before they appreciate the fix",
        "\"Someone read my diary of complaints\" is hyperbolic but relatable. It positions the product as purpose-built for the audience",
        "\"Chef's kiss\" for the secondary benefit adds personality. The primary feature sells; the secondary feature delights",
      ],
    },
    {
      name: "The Hype Builder",
      subtitle: "Best for: Pre-launch and launch week. Creating momentum and FOMO.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"This product launches in 24 hours and here's\nwhy I'm setting an alarm"\n[Excited, anticipatory energy]\n\n[HYPE — 2-13s]\n"I've been following this brand for 6 months.\nThey've been dropping hints about this launch\nand every detail they've revealed has been\nexactly what this market needs."\n"[Feature 1] — nobody else does this.\n[Feature 2] — this alone is worth the price.\n[Feature 3] — and this is the one that's going\nto make everyone switch."\n"The waitlist already has 10,000 people on it.\nI'm not missing this."\n\n[CTA — 13-17s]\n"Launch is tomorrow. Link in bio to join the\nwaitlist — or just bookmark it and be ready\nat [launch time]."`,
      notes: [
        "\"Setting an alarm\" signals genuine excitement. It's the kind of thing real fans do for launches they care about",
        "\"Following this brand for 6 months\" establishes the speaker as an informed fan, not a random promoter",
        "Three features in rapid succession create momentum. Each one builds on the last to create a compelling case",
        "\"10,000 people on the waitlist\" is social proof that creates FOMO. If that many people are waiting, it must be worth it",
      ],
    },
  ],
  hooks: [
    { line: "I've been waiting for this product to launch for 4 months. It's finally here and it's even better than I expected.", trigger: "anticipation payoff", note: "Long anticipation + exceeded expectations is the best possible launch narrative. It validates the hype." },
    { line: "This just launched 2 hours ago and it's already trending. I see why.", trigger: "early momentum", note: "Trending within hours signals something special. The viewer doesn't want to miss what everyone else found." },
    { line: "POV: a brand actually listens to customer feedback and builds exactly what you asked for", trigger: "customer-driven", note: "Products built from customer feedback feel like they belong to the community. It creates ownership and loyalty." },
    { line: "I've tried every product in this category. This new one just made them all obsolete.", trigger: "category killer", note: "Bold claim that demands proof. The viewer watches to see if the product lives up to the statement." },
    { line: "The founder DM'd me the story behind this product and I have to share it", trigger: "insider story", note: "A founder's personal story adds emotional depth to a launch. It transforms a product into a mission." },
  ],
  tips: [
    "Launch day UGC should be published simultaneously across multiple accounts/formats to create the appearance of organic buzz. Volume matters on day one",
    "Include the launch date and time in every video. Urgency is your best friend during a launch — make it clear when the window opens",
    "Show genuine first reactions. Scripted enthusiasm feels fake; authentic surprise and delight feel real. The first-use moment is the most valuable content",
    "Create pre-launch, launch day, and post-launch content. Each phase needs different messaging: anticipation → excitement → social proof",
    "Test different angles: the excited fan, the skeptical reviewer, the problem-solver. Multiple perspectives create a more convincing narrative than a single voice",
  ],
  ctaLine: "Create product launch UGC videos from these scripts. No launch party needed.",
};
export default data;
