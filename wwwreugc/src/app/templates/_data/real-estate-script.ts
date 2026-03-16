import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Real Estate",
  scriptCount: 3,
  h1: "UGC Video Script for Real Estate: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for real estate agents and brokerages — buyer testimonial, neighborhood tour, and market update formats. Plus 5 hooks that generate leads.",
  intro: "Real estate is a relationship business — and UGC-style videos build relationships at scale. A happy homebuyer sharing their experience is more persuasive than any listing photo or market report. When someone says \"my agent found us our dream home under budget,\" that's the ad that generates calls. Here are 3 scripts built for real estate.",
  scripts: [
    {
      name: "The Homebuyer Testimonial",
      subtitle: "Best for: Building trust with prospective buyers. Cold audiences in your target market.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"We just closed on our first home and I still\ncan't believe we got it $15K under asking in\nthis market"\n[Standing in front of new home]\n\n[SETUP — 3-10s]\n"We'd been looking for 8 months. Lost 3 bidding\nwars. Our budget was tight and every house we\nloved went $50K over asking. We were about to\ngive up and keep renting for another year."\n\n[PAYOFF — 10-20s]\n"Then our agent showed us a listing that had\nbeen on the market for 12 days — everyone\nskipped it because the photos were terrible.\nShe saw past that. We toured it, fell in love,\nand she negotiated $15K under asking because\nthe sellers were motivated."\n[Show house, genuine excitement]\n"We closed in 28 days. The house appraised\n$30K above what we paid."\n\n[CTA — 20-25s]\n"If you're house hunting and feeling defeated,\nget an agent who actually knows the market.\nShe's linked in my bio — tell her I sent you."`,
      notes: [
        "\"$15K under asking in this market\" immediately establishes credibility. Specific numbers in real estate are essential",
        "The 8-month struggle and lost bidding wars create empathy. Every buyer in a competitive market has felt this frustration",
        "\"The photos were terrible\" is a real insight that shows the agent's expertise. It's the kind of detail that builds trust",
        "\"Appraised $30K above what we paid\" is the ultimate proof of a good deal. It's verifiable and impressive",
      ],
    },
    {
      name: "The Neighborhood Tour",
      subtitle: "Best for: Attracting buyers to a specific area. Audiences relocating or exploring neighborhoods.",
      duration: "20–25 seconds",
      script: `[HOOK — 0-3s]\n"I moved to this neighborhood 2 years ago and\nhere's why I'd never leave"\n[Walking through neighborhood]\n\n[TOUR — 3-16s]\n"The coffee shop on the corner — best cortado\nin the city and the owner knows my name."\n"This park — my kids play here every weekend\nand there's a farmers market on Saturdays."\n"The elementary school is rated 9 out of 10\nand it's a 4-minute walk from my front door."\n"And the commute — 22 minutes to downtown\nwithout getting on the highway."\n[Show each location with quick cuts]\n"Median home price right now is $385K which\nis $60K less than the neighborhood next door\nwith the same school district."\n\n[CTA — 16-22s]\n"If you're looking in this area, I know every\nstreet and every listing. DM me or link in\nbio to start your search."`,
      notes: [
        "Personal neighborhood knowledge (\"the owner knows my name\") can't be faked. It signals genuine local expertise",
        "School ratings, commute times, and median prices are the three data points that drive neighborhood decisions. Include all three",
        "The value comparison (\"$60K less than next door, same school district\") is a powerful insight that positions the agent as knowledgeable",
        "Quick cuts of real locations make the neighborhood feel alive and walkable. Static shots of houses don't sell neighborhoods — lifestyle does",
      ],
    },
    {
      name: "The Market Update",
      subtitle: "Best for: Establishing authority. Audiences who are considering buying or selling in the near future.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"If you're thinking about buying a home this\nyear, here are 3 things you need to know\nright now"\n[Direct to camera, professional but approachable]\n\n[UPDATE — 2-14s]\n"One — inventory is up 18% from last year.\nThat means more options and less competition.\nYou're not fighting 12 offers on every house\nanymore."\n"Two — interest rates are stabilizing. If you're\nwaiting for 4% rates, you'll be waiting forever.\nBuy now, refinance later."\n"Three — sellers are negotiating again. I got\n3 clients closing costs covered last month.\nThat wasn't happening 12 months ago."\n\n[CTA — 14-18s]\n"The market is shifting in buyers' favor. If\nyou've been waiting, this is your window.\nLink in bio for a free market analysis."`,
      notes: [
        "\"3 things you need to know\" is a proven retention format. Viewers stay to hear all three points",
        "Specific data (18% inventory increase, 3 clients with closing costs covered) builds authority. Vague market commentary doesn't convert",
        "\"Buy now, refinance later\" is actionable advice that addresses the rate objection directly. It shows the agent thinks strategically",
        "Offering a free market analysis as the CTA is a low-friction lead generation tool. It starts a conversation without pressure",
      ],
    },
  ],
  hooks: [
    { line: "We got our dream home $40K under budget and I'm going to tell you exactly how", trigger: "deal story", note: "Specific savings create curiosity. Every buyer wants to know the strategy behind a great deal." },
    { line: "My real estate agent told me something that saved me $20,000 at closing", trigger: "insider knowledge", note: "Implies the agent has expertise that directly translates to money saved. High engagement with active buyers." },
    { line: "POV: you find out the neighborhood you've been ignoring is actually the best value in the city", trigger: "hidden gem", note: "Challenges assumptions about neighborhoods. Creates curiosity about which area and why." },
    { line: "I almost bought in [popular area] until my agent showed me the numbers on this neighborhood", trigger: "redirect", note: "Implies the popular choice isn't the smart choice. Data-driven redirection builds trust in the agent's expertise." },
    { line: "First-time buyers: stop making this mistake that's costing you thousands", trigger: "mistake avoidance", note: "Fear of making an expensive mistake is the #1 anxiety for first-time buyers. This hook promises protection." },
  ],
  tips: [
    "Real estate UGC should position the agent as a knowledgeable local expert, not a salesperson. Market insights and neighborhood knowledge convert better than \"call me for listings\"",
    "Include specific numbers: sale prices, days on market, savings, school ratings. Real estate buyers are data-driven and vague claims don't build confidence",
    "Neighborhood content has the longest shelf life. A great neighborhood tour video can generate leads for months because the content stays relevant",
    "Test different buyer personas: first-time buyer, growing family, downsizer, investor. Each has different priorities and responds to different messaging",
    "Always include a low-friction CTA (free market analysis, neighborhood guide, home valuation) rather than \"call me.\" Real estate is a high-consideration purchase — start with value, not a sales pitch",
  ],
  ctaLine: "Create real estate UGC videos from these scripts. No drone footage needed.",
};
export default data;
