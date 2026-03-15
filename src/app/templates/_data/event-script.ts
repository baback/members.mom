import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Events & Conferences",
  scriptCount: 3,
  h1: "UGC Video Script for Events & Conferences: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for events and conferences — attendee recap, speaker highlight, and FOMO-builder formats. Plus 5 hooks that sell tickets.",
  intro: "Event marketing is all about FOMO — and nothing creates FOMO like seeing real people having an incredible experience. UGC-style videos from attendees sharing their highlights convert because they show the energy, the connections, and the moments that make an event worth attending. Here are 3 scripts built for events and conferences.",
  scripts: [
    {
      name: "The Attendee Recap",
      subtitle: "Best for: Promoting next year's event. Audiences who missed this year and don't want to miss again.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"I almost didn't go to this conference. It\nended up being the best career decision I\nmade this year."\n\n[RECAP — 3-18s]\n"Day 1 — the keynote blew my mind. The speaker\nbroke down exactly how she scaled from $0 to\n$10M in 3 years and didn't hold anything back.\nI filled 6 pages of notes."\n"Day 2 — the networking. I sat next to someone\nat lunch who became my business partner. Not\nexaggerating — we signed a deal 3 weeks later."\n"Day 3 — the workshops. I learned a LinkedIn\nstrategy in a 90-minute session that's already\ngenerated 12 leads for my business."\n[Show event environment, energy]\n"The energy in that room was different. Everyone\nwas there to grow, not just to collect swag bags."\n\n[CTA — 18-24s]\n"Next year's tickets are already on sale and\nthey sold out last year. Don't be the person\nwho says 'I should have gone.' Link in bio."`,
      notes: [
        "\"Almost didn't go\" creates a near-miss narrative. The viewer thinks \"I almost didn't go\" about their own hesitation",
        "Each day highlights a different value: knowledge (keynote), connections (networking), skills (workshops). This covers all attendee motivations",
        "\"Became my business partner\" is a concrete, life-changing outcome from attending. Networking ROI is the strongest argument for conferences",
        "\"Sold out last year\" creates scarcity. Combined with \"don't be the person who says 'I should have gone,'\" it's a powerful urgency play",
      ],
    },
    {
      name: "The Speaker Highlight",
      subtitle: "Best for: Promoting specific speakers or sessions. Audiences who follow industry thought leaders.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"This 15-minute talk changed how I think about\nmy entire business. Let me break it down."\n[Post-session energy, notebook in hand]\n\n[HIGHLIGHT — 3-16s]\n"The speaker said something that hit me: 'You\ndon't have a traffic problem. You have a\nconversion problem. Stop spending money on\nads and fix your landing page first.'"\n"Then she showed her actual numbers. She cut\nher ad spend by 40% and doubled her revenue\nby fixing 3 things on her checkout page. She\nshowed the before and after. Real data, not\ntheory."\n"I went back to my hotel room and implemented\none of her suggestions that night. Already\nseeing results."\n\n[CTA — 16-21s]\n"This is the kind of content you get at this\nevent. Not fluff — actionable stuff you can\nuse immediately. Tickets for next year are\nlinked in bio."`,
      notes: [
        "Quoting a specific insight from the talk gives the viewer a taste of the content quality. It's a free sample that sells the full experience",
        "\"Real data, not theory\" differentiates this event from generic conferences full of motivational platitudes",
        "\"Implemented one suggestion that night\" shows the content is immediately actionable. This is the strongest selling point for business conferences",
        "\"Not fluff — actionable stuff\" directly addresses the concern that conferences are a waste of time and money",
      ],
    },
    {
      name: "The FOMO Builder",
      subtitle: "Best for: Early bird ticket sales. Creating urgency for upcoming events.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"Here's what you missed at this year's event.\nDon't let it happen again."\n[Montage of event highlights]\n\n[HIGHLIGHTS — 2-13s]\n"500 people in one room, all building something.\nThe energy was electric."\n"Speakers who've actually done the thing —\nnot just talked about it."\n"After-parties where I met 3 future clients\nover drinks I didn't pay for."\n"Workshops where I learned more in 2 hours\nthan I did in 6 months of podcasts."\n[Quick cuts of crowds, stages, networking]\n"And the connections — I left with 40 new\ncontacts and 5 genuine friendships."\n\n[CTA — 13-17s]\n"Next year is going to be bigger. Early bird\ntickets are live now and they won't last.\nLink in bio."`,
      notes: [
        "\"Here's what you missed\" is a direct FOMO trigger. It makes the viewer feel the loss of not attending",
        "Each highlight is one sentence — punchy and fast. This format creates momentum and excitement",
        "\"3 future clients over drinks I didn't pay for\" combines networking ROI with the fun factor. Business + pleasure is the conference sweet spot",
        "\"40 new contacts and 5 genuine friendships\" quantifies the networking outcome. Numbers make the value tangible",
      ],
    },
  ],
  hooks: [
    { line: "I paid $500 for this conference ticket and made $15,000 from one connection I made there", trigger: "ROI story", note: "The 30x return on a conference ticket is the most compelling argument for attendance. Specific numbers make it real." },
    { line: "The conference that made me realize I've been doing everything wrong — in the best way", trigger: "paradigm shift", note: "A mindset change is a powerful outcome. It signals the event delivers transformative insights, not just information." },
    { line: "POV: you walk into a room of 500 people and everyone is as ambitious as you", trigger: "tribe finding", note: "Finding your people is an emotional need. This hook promises a community of like-minded individuals." },
    { line: "I went to this event alone and left with a business partner, a mentor, and 3 new friends", trigger: "connection outcomes", note: "Going alone is scary. Leaving with meaningful connections is the dream. This hook addresses both." },
    { line: "Last year I watched from Instagram. This year I was in the room. The difference is everything.", trigger: "FOMO resolution", note: "Speaks directly to people who watched last year's content and regretted not attending. Powerful for returning events." },
  ],
  tips: [
    "Event UGC should capture energy, not just information. The crowd, the applause, the networking buzz — these moments create FOMO that sells tickets",
    "Include specific outcomes: connections made, deals closed, skills learned. Vague claims about \"great networking\" don't justify a $500+ ticket",
    "Post-event content sells next year's event. Capture attendee reactions, highlight reels, and testimonials during the event for year-round marketing",
    "Address the \"is it worth the money and time\" objection directly. Conference attendees need to justify the investment to themselves (and often their employer)",
    "Test different attendee personas: the first-timer, the returning attendee, the speaker, the sponsor. Each perspective adds a different dimension to the event's value proposition",
  ],
  ctaLine: "Create event UGC videos from these scripts. No event photographer needed.",
};
export default data;
