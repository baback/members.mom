import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Black Friday Sales",
  scriptCount: 3,
  h1: "UGC Video Script for Black Friday Sales: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for Black Friday campaigns — deal reveal, haul, and countdown urgency formats. Plus 5 hooks that cut through the Black Friday noise.",
  intro: "Black Friday is the noisiest advertising day of the year — every brand is screaming \"SALE\" and consumers are numb to it. UGC-style videos cut through because they feel like a friend tipping you off about a deal, not a brand shouting at you. Personal recommendations convert when banner ads don't. Here are 3 scripts built for Black Friday.",
  scripts: [
    {
      name: "The Deal Reveal",
      subtitle: "Best for: Announcing your Black Friday offer. Cold audiences who haven't seen your brand before.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"Okay this brand just dropped their Black Friday\ndeal and it's the best one I've seen this year.\nLet me show you before it sells out."\n\n[REVEAL — 3-14s]\n"They're doing 40% off everything — no exclusions,\nno minimum order. That never happens with this\nbrand. Their bestselling [product] that's normally\n$89 is $53 right now."\n"But here's the part nobody's talking about —\nif you spend over $100, you get a free [bonus\nitem] worth $35. So you're basically getting\n50% off when you factor that in."\n[Show products, show prices on screen]\n\n[CTA — 14-20s]\n"This ends Monday at midnight and their stuff\nsells out every Black Friday. I'm not being\ndramatic — last year the bestsellers were gone\nby Saturday. Link in bio. Go now."`,
      notes: [
        "\"Best deal I've seen this year\" positions this offer above the competition. In a sea of sales, ranking matters",
        "\"No exclusions, no minimum order\" preemptively addresses the fine print that usually disappoints Black Friday shoppers",
        "The bonus item math (\"basically 50% off\") helps the viewer see the full value. Do the math for them — they won't do it themselves",
        "\"Gone by Saturday\" creates real urgency based on past behavior. Historical sell-out data is more convincing than arbitrary countdown timers",
      ],
    },
    {
      name: "The Black Friday Haul",
      subtitle: "Best for: Showing product range. Audiences who are already shopping and looking for recommendations.",
      duration: "20–26 seconds",
      script: `[HOOK — 0-3s]\n"Everything I'm buying from this brand's Black\nFriday sale — I saved $247 total"\n[Show shopping bags or packages]\n\n[HAUL — 3-18s]\n"First — their [hero product]. I've been waiting\nall year for this to go on sale. Normally $120,\ngot it for $72. This is the one thing I'd tell\neveryone to grab."\n"Second — [product 2] as a gift for my sister.\n$45 down to $27. She's been wanting this forever."\n"Third — [product 3] for myself because at 40%\noff I couldn't say no. $65 down to $39."\n"And they threw in free shipping plus a mystery\ngift with orders over $100."\n[Show each item with price comparison]\n\n[CTA — 18-23s]\n"$247 saved and I got all my holiday shopping\ndone in one order. The sale ends Monday.\nLink in bio — don't sleep on this."`,
      notes: [
        "\"I saved $247\" is a specific, impressive number that validates the shopping decision. It makes the viewer want to calculate their own savings",
        "\"I've been waiting all year\" signals the speaker is a genuine fan, not a random promoter. Patience implies loyalty",
        "Including a gift purchase (\"for my sister\") reminds viewers that Black Friday is also for holiday gift shopping",
        "\"Got all my holiday shopping done in one order\" positions the brand as a one-stop gift solution. Convenience is a major Black Friday motivator",
      ],
    },
    {
      name: "The Countdown Urgency",
      subtitle: "Best for: Last-day pushes. Audiences who are procrastinating on their Black Friday purchases.",
      duration: "13–18 seconds",
      script: `[HOOK — 0-2s]\n"This sale ends in 6 hours and I need you to\nstop scrolling and listen"\n[Direct to camera, urgent energy]\n\n[URGENCY — 2-11s]\n"Their bestseller is almost sold out — the\n[product name] in [popular variant] is gone.\nThe [second variant] has maybe 50 left based\non what I'm seeing."\n"This is 40% off. They do this once a year.\nOnce. If you've been thinking about it, the\ntime for thinking is over."\n[Show product, show sale price]\n\n[CTA — 11-15s]\n"6 hours. Link in bio. You'll thank me\ntomorrow when everyone else is paying full\nprice."`,
      notes: [
        "\"Stop scrolling and listen\" is a direct command that creates a pattern interrupt. Urgency demands attention",
        "Mentioning specific variants selling out (\"the [color] is gone\") creates real scarcity. It's more believable than \"selling fast\"",
        "\"Once a year\" reinforces that this isn't a recurring sale. Missing it means waiting 12 months",
        "\"You'll thank me tomorrow\" positions the speaker as looking out for the viewer. It's a friend's advice, not a sales pitch",
      ],
    },
  ],
  hooks: [
    { line: "I work in marketing and this is the only Black Friday deal I'm personally buying", trigger: "insider endorsement", note: "Someone who sees all the deals choosing just one is a powerful filter. Industry credibility adds weight." },
    { line: "Last year I missed this sale and paid full price in January. Not making that mistake again.", trigger: "regret avoidance", note: "Personal regret is relatable and motivating. The viewer doesn't want to repeat the speaker's mistake." },
    { line: "POV: you find a Black Friday deal that's actually good and not just 10% off with a fake original price", trigger: "authenticity", note: "Calls out the fake discounting that plagues Black Friday. Positions this deal as genuinely good." },
    { line: "The one brand I stock up on every Black Friday because their sale is actually worth it", trigger: "annual ritual", note: "Repeat Black Friday purchasing signals consistent quality and genuine value. It's a tradition, not an impulse." },
    { line: "My cart total was $340. After the Black Friday code it's $189. I'm shaking.", trigger: "savings shock", note: "The before/after cart total is viscerally satisfying. \"I'm shaking\" adds genuine emotional reaction." },
  ],
  tips: [
    "Black Friday UGC needs to be fast and urgent. Every second counts when the sale has a deadline. Keep scripts under 20 seconds for maximum impact",
    "Show the math. Before price → sale price → savings amount. Viewers need to see the value instantly — don't make them calculate",
    "Mention when the sale ends in every video. Urgency is the #1 conversion driver during Black Friday. Be specific: \"ends Monday at midnight\" not \"limited time\"",
    "Create multiple videos for different stages: teaser (before the sale), reveal (sale goes live), reminder (mid-sale), urgency (last hours). Each stage needs different energy",
    "Test gift-giving angles alongside self-purchase angles. Many Black Friday shoppers are buying gifts — position your products as perfect gifts with the added bonus of a discount",
  ],
  ctaLine: "Create Black Friday UGC videos from these scripts in minutes. No holiday stress needed.",
};
export default data;
