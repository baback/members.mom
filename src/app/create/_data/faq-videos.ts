import type { CreatePageData } from "./_shared";
const data: CreatePageData = {
  title: "Create AI FAQ Videos — Answer Questions With a Face",
  readTime: "7 min",
  meta: "Create AI FAQ videos that answer customer questions with a human face. Includes script framework, hook templates, and best practices for video-based customer support.",
  intro: "FAQ pages are the most visited section on most e-commerce sites — but they're also the most boring. Walls of text that nobody reads. Video FAQs flip the format: instead of scanning paragraphs, customers watch a 15-second clip of someone answering their exact question. The result? 4x higher engagement, 35% fewer support tickets, and faster purchase decisions. The problem is that filming FAQ videos for every question is tedious. You need a presenter, a script for each question, and editing time. AI-generated FAQ videos solve this completely — you can produce an entire FAQ video library in an afternoon and update it whenever new questions emerge.",
  what: {
    definition: "An FAQ video is a short clip where a presenter answers a single customer question in a conversational, direct format. It replaces text-based FAQ sections with face-to-face communication that feels personal and trustworthy.",
    reasons: [
      { label: "Reduces friction", text: "Unanswered questions are the #1 reason for cart abandonment. When a customer can watch a 15-second video that addresses their specific concern, the friction disappears. Video answers feel more complete and trustworthy than text." },
      { label: "Humanizes the brand", text: "A face answering your question feels like customer service — not a knowledge base. This human element builds trust, especially for first-time buyers who don't know your brand yet." },
      { label: "Scales support", text: "Every FAQ video you create is a support agent that works 24/7. One video answering 'how long does shipping take?' prevents hundreds of identical support tickets per month." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "State the question directly. No preamble — the viewer clicked because they have this exact question.", examples: ["\"'Does this actually work on sensitive skin?' I get this question every day. Here's the answer.\"", "\"'How long until I see results?' Let me break it down.\""], why: "Repeating the question back confirms the viewer is in the right place. 'I get this question every day' normalizes the concern and signals you have a practiced answer.", mistake: "Long introductions before addressing the question. The viewer has a specific question — answer it immediately." },
    { step: "The Setup", time: "3–8 seconds", what: "Acknowledge why the question matters. Show empathy for the concern behind the question.", examples: ["\"I totally understand the concern. If you've had reactions to other products, the last thing you want is to spend money on something that irritates your skin.\""], why: "Empathy before information builds trust. Acknowledging the fear behind the question ('reactions to other products') shows you understand the customer, not just the question.", mistake: "Jumping straight to the answer without acknowledging the concern. It feels dismissive." },
    { step: "The Payoff", time: "8–20 seconds", what: "Answer the question clearly and specifically. Include proof points — ingredients, test results, customer feedback.", examples: ["\"Yes, it's formulated for sensitive skin. We use zero fragrances, zero sulfates, and it's dermatologist-tested. Over 8,000 customers with sensitive skin use it daily. If you do react, we have a full refund policy — no questions asked.\""], why: "The answer addresses the question (yes), provides evidence (ingredients, testing), adds social proof (8,000 customers), and removes risk (refund policy). Every layer reduces anxiety.", mistake: "Vague answers like 'it works for most skin types.' Specificity is what converts uncertain buyers." },
    { step: "The CTA", time: "last 3–5 seconds", what: "Direct them to the next step or invite more questions.", examples: ["\"Still have questions? Drop them in the comments. Otherwise, link in bio to try it risk-free.\"", "\"Hope that helps. Link below to check it out.\""], why: "Inviting more questions shows confidence and openness. 'Risk-free' reinforces the refund policy mentioned in the answer." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"'Will this break me out?' I get this question literally every single day."\n[Direct to camera, understanding expression]\n\n[SETUP — 3-8s]\n"I get it. You've probably tried products that claimed to be gentle and then woke up with a face full of bumps. That's the worst feeling."\n[Empathetic tone, nodding]\n\n[PAYOFF — 8-18s]\n"Here's the deal: this is non-comedogenic, fragrance-free, and we tested it on over 200 people with acne-prone skin before launching. Zero breakout reports. If you're still nervous, we have a 30-day refund policy. Try it, and if your skin doesn't love it, you get your money back."\n[Confident, reassuring tone]\n\n[CTA — 18-22s]\n"Any other questions? Drop them below. Link in bio to try it yourself."\n[Point to comments, then to link]`,
  hooks: [
    { line: "The #1 question I get about [product]: '[question].' Here's the truth.", trigger: "Framing it as the most common question validates the viewer's concern and promises a definitive answer.", products: "Any product with common objections — skincare, supplements, SaaS, services" },
    { line: "Before you buy [product], you need to know this.", trigger: "Creates urgency and positions the video as essential pre-purchase information. The viewer feels they'd be making a mistake not watching.", products: "High-consideration purchases — electronics, skincare routines, subscription services" },
    { line: "'Is [product] worth $[price]?' Let me be completely honest.", trigger: "Price is the most common objection. Promising honesty about value signals transparency.", products: "Premium-priced products in any category" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "10–20 seconds per question. FAQ videos should be short and focused — one question, one answer. Viewers want quick resolution, not a lecture." },
    { label: "One question per video", text: "Never bundle multiple questions into one video. Each question deserves its own clip. This makes them searchable, embeddable, and easy to navigate." },
    { label: "Empathy first", text: "Acknowledge the concern before answering. 'I totally get why you're asking this' builds rapport in 2 seconds and makes the answer feel more personal." },
    { label: "Proof points", text: "Back up every answer with evidence — test results, ingredient lists, customer numbers, refund policies. Assertions without proof don't resolve concerns." },
    { label: "Placement", text: "Embed FAQ videos on product pages next to the relevant section, in cart abandonment emails, and on your FAQ page. Put the answer where the question arises." },
    { label: "Captions", text: "Display the question as a text overlay at the start. Use bold captions for key proof points. The question-answer format should be clear even without sound." },
  ],
  whenToUse: {
    stage: "Bottom funnel. FAQ videos address specific purchase objections. They're most effective at the point of decision — product pages, checkout flows, and cart abandonment sequences.",
    audience: "Hesitant buyers with specific concerns. They want to buy but need one more piece of information or reassurance before committing.",
    platforms: "Product pages (highest impact), email campaigns (cart abandonment), Instagram Stories (Q&A format), TikTok (comment reply format).",
    pairWith: "Combine FAQ videos with testimonial content. The FAQ addresses the logical objection; the testimonial provides emotional reassurance from someone who had the same concern.",
  },
  ctaLine: "Create FAQ videos that answer every question with a face. No filming, no support backlog.",
};
export default data;