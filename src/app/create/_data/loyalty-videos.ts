import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI Loyalty & Rewards Videos — Retain Customers",
  readTime: "7 min",
  meta: "Create AI loyalty and rewards videos that retain customers and increase lifetime value. Includes script framework, hook templates, and best practices for retention content.",
  intro: "Increasing customer retention by just 5% increases profits by 25–95%. Yet most brands spend 80% of their marketing budget on acquisition and almost nothing on retention. Loyalty videos flip this equation by making existing customers feel valued, informed, and excited about their relationship with your brand. A well-timed loyalty video — celebrating a milestone, explaining rewards, or offering an exclusive perk — reminds customers why they chose you and gives them a reason to stay. AI-generated loyalty videos let you create personalized retention content for every customer segment and milestone without the production overhead of filming individual messages.",
  what: {
    definition: "A loyalty or rewards video communicates the value of continued engagement with your brand — rewards program benefits, milestone celebrations, exclusive offers, and VIP perks. It's designed to make customers feel appreciated and incentivized to stay.",
    reasons: [
      { label: "Retention ROI", text: "Retaining a customer costs 5–7x less than acquiring a new one. Loyalty videos are a low-cost, high-impact retention tool that keeps customers engaged between purchases." },
      { label: "Lifetime value", text: "Customers who feel valued spend 67% more than new customers. A loyalty video that says 'you're special to us' translates directly into higher average order values and more frequent purchases." },
      { label: "Referral engine", text: "Loyal customers are your best marketers. A customer who feels appreciated is 4x more likely to refer friends. Loyalty videos create the emotional connection that drives word-of-mouth." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Make the customer feel recognized. Reference their loyalty or milestone.", examples: ["\"You've been with us for a year now. We wanted to do something special for you.\"", "\"You're one of our top 100 customers. That means something to us.\""], why: "Personal recognition is the most powerful retention tool. Being called a 'top 100 customer' creates a sense of status and belonging that generic marketing can't match.", mistake: "Starting with the reward before the recognition. The emotional connection comes from feeling valued, not from the discount. Lead with appreciation." },
    { step: "The Setup", time: "3–8 seconds", what: "Explain what their loyalty means to the brand. Be genuine and specific.", examples: ["\"When you bought from us the first time, we were a 5-person team shipping orders from a garage. Now we're here because of customers like you. Your support literally built this company.\""], why: "Connecting the customer's loyalty to the brand's growth creates emotional investment. They feel like a stakeholder, not just a buyer.", mistake: "Being generic. 'We appreciate your business' is corporate. 'Your support built this company' is personal." },
    { step: "The Payoff", time: "8–20 seconds", what: "Reveal the reward, perk, or exclusive offer. Make it feel earned, not promotional.", examples: ["\"As a thank you, we're giving you early access to our new collection — 48 hours before anyone else. Plus a 25% loyalty discount that's just for you. No code needed — it's already applied to your account.\""], why: "Early access creates exclusivity. 'Just for you' reinforces the personal nature. 'Already applied' removes friction. The reward feels earned through loyalty, not offered as a promotion.", mistake: "Making the reward feel like a standard promotion. Loyalty rewards should feel exclusive and personal — not like something everyone gets." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Thank them again and direct them to claim their reward.", examples: ["\"Thank you for being part of this. Your early access is live now — link in bio.\"", "\"We don't take your loyalty for granted. Enjoy your reward. Link below.\""], why: "Bookending with gratitude reinforces the emotional connection. The reward claim is secondary to the appreciation." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"You've ordered from us 5 times this year. We noticed — and we want to say thank you."\n[Warm, genuine, direct to camera]\n\n[SETUP — 3-8s]\n"Repeat customers like you are the reason we're still here. Seriously. When we started, we had 12 customers. Now we have 50,000 — and the ones who come back are the ones who keep us going."\n[Sincere, slightly emotional]\n\n[PAYOFF — 8-18s]\n"So here's what we're doing: you're getting VIP early access to our holiday collection — 3 days before the public launch. Plus a 30% loyalty discount that's already in your account. No code, no hoops. Just our way of saying we see you and we appreciate you."\n[Excited, revealing the reward]\n\n[CTA — 18-22s]\n"Your VIP access is live. Link in bio. And genuinely — thank you."\n[Heartfelt close, point to link]`,
  hooks: [
    { line: "You've been a customer for [X months/years]. We have something special for you.", trigger: "Time-based recognition creates a milestone moment. The viewer feels acknowledged for their loyalty.", products: "Subscription services, repeat-purchase brands, loyalty program members" },
    { line: "This offer is only for our VIP customers. You made the list.", trigger: "Exclusivity and status. Being on a 'VIP list' creates a sense of belonging and privilege.", products: "Brands with tiered loyalty programs, premium customer segments" },
    { line: "We just hit [milestone] and it's because of customers like you. Here's how we're saying thanks.", trigger: "Shared celebration connects the customer to the brand's success. The reward feels like a genuine thank-you, not a promotion.", products: "Growing brands celebrating milestones — customer count, revenue, anniversaries" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–30 seconds. Loyalty videos should be warm and concise. The customer doesn't need a long pitch — they need to feel appreciated and know how to claim their reward." },
    { label: "Personalization", text: "Segment loyalty videos by customer behavior — purchase frequency, total spend, tenure. A 5x buyer gets a different message than a first-time repeat customer." },
    { label: "Genuine tone", text: "Loyalty videos should feel sincere, not transactional. Lead with gratitude, not the offer. The emotional connection is more valuable than the discount." },
    { label: "Exclusive rewards", text: "Loyalty rewards should feel exclusive — early access, VIP discounts, limited products. If everyone gets the same offer, it's not a loyalty reward, it's a promotion." },
    { label: "Milestone triggers", text: "Send loyalty videos at meaningful moments — purchase anniversaries, order milestones (5th order, 10th order), birthday, or brand anniversaries." },
    { label: "Captions", text: "Display the reward clearly — 'VIP EARLY ACCESS,' '30% LOYALTY DISCOUNT,' 'JUST FOR YOU.' The exclusivity should be visible in captions for sound-off viewers." },
  ],
  whenToUse: {
    stage: "Retention. Loyalty videos are for existing customers at risk of churning or at milestone moments that present re-engagement opportunities.",
    audience: "Repeat customers, loyalty program members, high-LTV customers, and customers approaching churn risk. Segment by behavior for maximum relevance.",
    platforms: "Email (primary — personalized delivery), SMS, in-app notifications, direct mail (QR code to video). Loyalty content should feel personal, not broadcast.",
    pairWith: "Follow loyalty videos with new product announcements or exclusive previews. The loyalty video reinforces the relationship; the exclusive content rewards it.",
  },
  ctaLine: "Create loyalty videos that make customers feel valued. No generic emails, no impersonal rewards.",
};
export default data;