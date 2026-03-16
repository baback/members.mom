import type { CreatePageData } from "./_shared";

const data: CreatePageData = {
  title: "Create AI Before & After Videos — Transformation Content",
  readTime: "8 min",
  meta: "Create AI before and after videos that showcase product transformations. Includes script framework, hook templates, and best practices for conversion-focused content.",
  intro: "Before-and-after content is the most persuasive format in advertising because it does something no other format can: it shows proof. Not claims, not promises — visual evidence that something changed. Dermatologists use it. Personal trainers use it. Home renovation shows are built on it. The format works because our brains are wired to notice contrast. When you see a 'before' state that matches your current situation and an 'after' state you want, the product becomes the bridge. The challenge has always been producing this content consistently. AI video generation makes it possible to create transformation narratives at scale — without waiting for real results to photograph.",
  what: {
    definition: "A before-and-after video shows a transformation — the state before using a product and the improved state after. It can be visual (skin, hair, space) or narrative (describing the change in lifestyle, routine, or results).",
    reasons: [
      { label: "Visual proof", text: "Before-and-after content provides the strongest form of social proof because it's evidence-based. Viewers don't have to take your word for it — they can see the difference. This bypasses skepticism in a way that testimonials and reviews can't." },
      { label: "Emotional contrast", text: "The format creates an emotional arc in seconds. The 'before' triggers recognition ('that's me'), and the 'after' triggers desire ('I want that'). This emotional contrast is what drives action." },
      { label: "Shareability", text: "Dramatic transformations are inherently shareable. People tag friends, save posts, and share in DMs. This organic amplification means your paid content gets free distribution on top of your ad spend." },
    ],
  },
  framework: [
    { step: "The Hook", time: "0–3 seconds", what: "Open with the 'after' state or tease the transformation. Leading with the result creates immediate curiosity about how it happened.", examples: ["\"3 weeks ago my skin looked NOTHING like this...\"", "\"I can't believe this is the same [product/space/person]. Let me show you the before.\""], why: "Leading with the 'after' is counterintuitive but effective. It shows the best version first, then the viewer stays to understand the journey. This is more engaging than starting with the problem.", mistake: "Starting with a long explanation of the problem. Show the transformation first, explain later." },
    { step: "The Setup", time: "3–8 seconds", what: "Show or describe the 'before' state with specific, relatable details. The more the viewer identifies with the 'before,' the more they'll want the 'after.'", examples: ["\"This was me three weeks ago. Breakouts along my jawline, texture everywhere, and I'd basically given up on finding something that worked.\""], why: "Specific details ('jawline breakouts,' 'texture everywhere') make the before state feel real and relatable. Vague descriptions like 'my skin was bad' don't create the same emotional connection.", mistake: "Making the 'before' too extreme. If it looks unrealistic, viewers won't believe the transformation either." },
    { step: "The Payoff", time: "8–20 seconds", what: "Reveal the 'after' with a direct comparison. Use side-by-side visuals or a clear transition. Narrate the specific changes.", examples: ["\"Look at my skin now. The breakouts are completely gone. The texture is smooth. I'm wearing zero foundation in this video. Three weeks. One product. That's it.\""], why: "The payoff needs to be undeniable. 'Zero foundation' is a proof point the viewer can verify visually. 'Three weeks, one product' simplifies the path to results.", mistake: "Overselling the results. 'It completely changed my life' is less believable than 'my breakouts cleared up in three weeks.'" },
    { step: "The CTA", time: "last 3–5 seconds", what: "Connect the transformation to the viewer's potential results.", examples: ["\"If your skin looks like my 'before,' you need to try this. Link in bio.\"", "\"I wish I'd started sooner. Don't wait like I did. Link below.\""], why: "The first CTA directly connects the viewer's current state to the transformation they just witnessed. The second adds urgency through regret framing." },
  ],
  exampleScript: `[HOOK — 0-3s]\n"You would NOT believe what my skin looked like\n3 weeks ago..."\n[Show clear skin, confident expression]\n\n[SETUP — 3-8s]\n"This was me. Breakouts everywhere, redness along\nmy cheeks, and this texture that no amount of\nmakeup could cover. I'd tried retinol, I'd tried\nniacinamide, I'd tried expensive facials. Nothing."\n[Show 'before' state or describe with emotion]\n\n[PAYOFF — 8-18s]\n"Then I started using [product] twice a day. By day 5,\nthe redness calmed down. By week 2, the breakouts\nstopped. And now — look. This is my bare skin right\nnow. No filter, no foundation. Just the product."\n[Show transformation, touch skin, close-up]\n\n[CTA — 18-22s]\n"If your skin looks like my before photo, just try it.\nI'm so mad I didn't start sooner. Link in bio."\n[Hold product, point to link]`,
  hooks: [
    { line: "I almost didn't post this because the before is embarrassing... but you need to see it.", trigger: "Vulnerability creates trust. The admission of embarrassment signals authenticity and makes the transformation more impactful.", products: "Skincare, dental products, hair care, fitness, home improvement" },
    { line: "Same person. Same lighting. 30 days apart. Here's what changed.", trigger: "The 'same lighting' detail preemptively addresses the biggest criticism of before/after content — that the conditions were manipulated.", products: "Any product with visible results over time" },
    { line: "My [friend/partner/mom] didn't recognize my [skin/hair/space]. That's when I knew this actually worked.", trigger: "Third-party validation is powerful. If someone close to you notices the change, it must be significant.", products: "Beauty, wellness, home renovation, fitness transformations" },
  ],
  bestPractices: [
    { label: "Ideal length", text: "15–30 seconds for social ads, 30–60 seconds for organic content. The transformation reveal should happen by second 15 at the latest — don't make viewers wait too long." },
    { label: "Consistency", text: "Keep lighting, angle, and framing consistent between before and after. Inconsistent conditions make the transformation look fake, even if it's real." },
    { label: "Specificity", text: "Quantify the change whenever possible. 'My pores are 50% smaller' beats 'my skin looks better.' Numbers make transformations concrete and believable." },
    { label: "Honest framing", text: "Include one caveat or realistic detail. 'It didn't fix my acne scars, but the texture and breakouts are gone' is more credible than claiming perfection." },
    { label: "Timeline", text: "Always mention how long the transformation took. Unrealistic timelines ('overnight results') trigger skepticism. Realistic timelines ('3 weeks of consistent use') build trust." },
    { label: "Captions", text: "Use split-screen caption styles with 'BEFORE' and 'AFTER' labels. Bold the timeline ('3 WEEKS') and key results. Visual hierarchy helps sound-off viewers follow the story." },
  ],
  whenToUse: {
    stage: "Mid to bottom funnel. Before-and-after content is most effective for audiences who understand the problem and need proof that a solution works. Strong for retargeting.",
    audience: "Problem-aware buyers who have tried other solutions without success. They're skeptical but open to evidence. The 'before' state needs to mirror their current situation.",
    platforms: "Instagram Reels, TikTok, Facebook Feed, Pinterest. Before-and-after content also performs exceptionally well on product pages and in email campaigns.",
    pairWith: "Combine with testimonial videos for maximum impact. The before/after shows the transformation; the testimonial adds the emotional narrative behind it.",
  },
  ctaLine: "Create before-and-after videos that prove your product works. No photoshoots, no waiting for results.",
};
export default data;
