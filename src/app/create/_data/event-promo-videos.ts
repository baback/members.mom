import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Event Promo Videos — Fill Seats With AI",
  readTime: "7 min",
  meta: "Create AI event promo videos that drive registrations and attendance. Includes script framework, hook templates, and best practices for event marketing content.",
  intro: "Event promo videos increase registration rates by 35% compared to static graphics and email-only campaigns. Video communicates the energy, value, and urgency of an event in ways that a flyer never can. A well-crafted promo video answers three questions instantly: what's happening, why should I care, and how do I sign up. The problem is timing. Events have fixed dates, which means your promotional window is limited. By the time you've briefed a videographer, filmed, edited, and approved the content, you've lost a week of promotion. AI-generated event promo videos let you launch promotional content the same day you announce the event — and iterate with new angles as the date approaches.",
  what: {
    definition: "An event promo video promotes an upcoming event — conference, webinar, workshop, sale, or launch — with the goal of driving registrations, ticket sales, or attendance. It combines event details with emotional appeal to create urgency.",
    reasons: [
      { label: "Urgency amplifier", text: "Events have built-in deadlines. Video amplifies this urgency by combining visual energy with countdown messaging. 'Only 50 seats left' hits harder in video than in an email subject line." },
      { label: "Value preview", text: "A promo video can preview the event experience — speakers, topics, atmosphere, past highlights. This preview reduces the perceived risk of attending and increases the perceived value." },
      { label: "Shareability", text: "Event promo videos are shared by attendees, speakers, and sponsors — each share extending your reach to new audiences. A compelling promo video becomes a marketing asset that promotes itself." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Lead with the biggest draw — the headline speaker, the topic, or the exclusive opportunity.", examples: ["\"The marketing event everyone's talking about is happening next month. Here's why you need to be there.\"", "\"We're bringing together 500 founders for one day. Spots are almost gone.\""], why: "Leading with scale ('500 founders') or social proof ('everyone's talking about') creates FOMO. The viewer immediately evaluates whether they should be part of this.", mistake: "Starting with the event name and date. Nobody cares about the name until they know why it matters." },
    { step: "The Setup", time: "3–8 seconds", what: "Explain what the event offers and who it's for. Make the viewer self-select.", examples: ["\"If you're a DTC founder spending money on ads and not seeing returns, this event will change how you think about growth. We've got 12 speakers who've scaled brands past $10M sharing exactly what worked.\""], why: "The qualifier ('DTC founder spending money on ads') helps the right audience self-identify. The speaker credibility ('scaled past $10M') establishes the event's value.", mistake: "Being too broad. 'An event for everyone' appeals to no one. Specific audiences respond to specific invitations." },
    { step: "The Payoff", time: "8–20 seconds", what: "Share specific highlights — speakers, topics, networking opportunities, or exclusive perks.", examples: ["\"You'll learn the exact ad frameworks that generated $50M in revenue last year. You'll network with 500 founders in your space. And every attendee gets a private resource vault worth $2,000. This isn't a generic conference — it's a playbook.\""], why: "Specific value points ('$50M in revenue,' '$2,000 resource vault') make the event feel worth the investment. The contrast with 'generic conference' positions it as premium.", mistake: "Listing logistics instead of value. Nobody gets excited about 'doors open at 8 AM.' They get excited about what they'll learn and who they'll meet." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Create urgency with limited availability or an early-bird deadline.", examples: ["\"Early bird pricing ends Friday. Grab your spot — link in bio.\"", "\"Only 50 seats left. Don't miss this. Link below.\""], why: "Real scarcity (limited seats, deadline pricing) creates urgency that drives immediate action. Event CTAs should always include a deadline." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"The biggest DTC marketing event of the year is happening in 3 weeks. Here's why you can't miss it."\n[Energetic, direct to camera]\n\n[SETUP — 3-8s]\n"If you're running a brand and struggling with rising ad costs, creative fatigue, or scaling past $1M — this event was built for you. 15 speakers who've been in your shoes and figured it out."\n[Confident, inviting tone]\n\n[PAYOFF — 8-18s]\n"You'll get the exact playbooks behind $100M+ brands. Live workshops on ad creative, retention, and scaling. Plus networking with 300 founders who are solving the same problems you are. Last year's attendees said it was worth 10x the ticket price."\n[Show event highlights, speaker names, testimonial quotes]\n\n[CTA — 18-22s]\n"Early bird ends this Friday. Grab your ticket — link in bio."\n[Urgency in voice, point to link]`,
  hooks: [
    { line: "If you're in [industry], you need to be at this event. Here's why.", trigger: "Direct industry targeting creates immediate relevance. The viewer self-selects based on their identity.", products: "Industry conferences, workshops, webinars, networking events" },
    { line: "Last year this event changed my business. This year it's even bigger.", trigger: "Personal endorsement combined with growth signals. The viewer trusts a returning attendee's recommendation.", products: "Annual events, recurring conferences, community gatherings" },
    { line: "500 [professionals] in one room for one day. The networking alone is worth the ticket.", trigger: "Networking value is often the primary draw for events. Quantifying the attendee count makes it tangible.", products: "Networking events, industry conferences, founder meetups" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–30 seconds for social ads, 30–60 seconds for email and landing pages. Event promos should be energetic and concise — match the excitement of the event." },
    { label: "Urgency mechanics", text: "Always include a deadline — early bird pricing, limited seats, registration cutoff. Events have natural urgency; your video should amplify it." },
    { label: "Value stacking", text: "List 3–4 specific value points — speakers, workshops, networking, resources. Each point should make the viewer think 'that alone is worth the ticket.'" },
    { label: "Social proof", text: "Include past attendee quotes, attendance numbers, or returning speaker highlights. Social proof reduces the perceived risk of attending a new event." },
    { label: "Multiple versions", text: "Create different promo videos for different audiences — one focused on speakers, one on networking, one on workshops. Different value propositions resonate with different segments." },
    { label: "Captions", text: "Display event name, date, location, and key highlights in captions. Include the registration deadline prominently. Sound-off viewers should get all essential details from captions." },
  ],
  whenToUse: {
    stage: "All funnel stages during the promotional window. Awareness for new audiences, conversion for warm leads. Increase urgency as the event date approaches.",
    audience: "Professionals and enthusiasts in your event's target industry. Segment by interest — some care about speakers, others about networking, others about workshops.",
    platforms: "LinkedIn (B2B events), Instagram, Facebook, TikTok, email campaigns. Event promos should run on every platform where your target audience is active.",
    pairWith: "Follow event promos with speaker highlight videos and past attendee testimonials. The promo creates interest; the highlights and testimonials convert interest into registrations.",
  },
  ctaLine: "Create event promo videos that fill seats fast. No videographer, no production timeline, no missed deadlines.",
};
export default data;