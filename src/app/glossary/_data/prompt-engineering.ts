import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Prompt Engineering for Video",
  h1: "What Is Prompt Engineering for Video? Get Better AI Output",
  meta: "Prompt engineering for video is the skill of crafting inputs that produce better AI-generated video content. Learn techniques for writing prompts that generate high-quality video ads.",
  definition: "Prompt engineering for video is the practice of crafting precise, detailed inputs to AI video generation tools to produce higher-quality output. Just as a creative brief guides a human creator, a well-engineered prompt guides AI to generate videos with the right tone, pacing, visual style, and messaging. The quality of your prompt directly determines the quality of your output.",
  whyMatters: [
    { label: "Garbage in, garbage out", text: "A vague prompt ('make a video about our product') produces generic, unusable output. A specific prompt ('30-second testimonial-style video, casual female presenter, opening with the pain point of dry skin, transitioning to product discovery, ending with a specific CTA') produces targeted, usable content. The difference between mediocre and excellent AI video is almost always the prompt, not the tool." },
    { label: "It's a learnable competitive advantage", text: "Most brands using AI video tools write basic prompts and get basic results. Brands that invest in prompt engineering skills get dramatically better output from the same tools. This skill gap creates a competitive advantage — you're getting more value from the same technology because you know how to communicate with it effectively." },
    { label: "It reduces iteration cycles", text: "A well-crafted prompt gets you 80% of the way to a finished video on the first render. A poor prompt requires 3–5 iterations to reach the same quality. Since each iteration costs time (and potentially a video credit), better prompts mean faster production and lower effective costs." },
  ],
  howItWorks: [
    { heading: "Prompt Components for Video", text: "An effective video prompt includes: format (testimonial, explainer, comparison, unboxing), duration (15 seconds, 30 seconds, 60 seconds), presenter description (age range, gender, energy level, speaking style), tone (casual, professional, urgent, humorous), structure (hook → problem → solution → CTA), specific messaging (key claims, statistics, product names), and visual direction (setting, framing, text overlay instructions). The more specific each component, the more predictable and usable the output." },
    { heading: "Iteration Techniques", text: "Even with great prompts, iteration improves results. Start with a detailed prompt, review the output, and refine. Common refinements: adjusting pacing ('speak more slowly in the opening'), changing emphasis ('stress the price point more'), modifying tone ('more conversational, less scripted'), and tweaking structure ('move the social proof before the CTA'). Each iteration teaches you what the tool responds to, building your prompt engineering intuition over time." },
  ],
  example: "A supplement brand generates two videos with different prompt quality. Prompt A: 'Make a video about our protein powder.' Result: generic, unfocused, no clear hook or CTA — unusable. Prompt B: '28-second UGC testimonial. Female presenter, 30s, athletic but approachable. Opens with: I was skeptical about another protein powder. Casual, phone-filmed feel. Mentions taste (chocolate), mixability, and 30g protein. Ends with: Try the starter pack — link in bio. Upbeat but not over-the-top.' Result: focused, authentic-feeling, ready to run as an ad with minor tweaks. Same tool, same cost — the prompt made the difference.",
  product: {
    intro: "members.mom is designed to make prompt engineering intuitive, even for beginners:",
    points: [
      "Guided script input — Rather than a blank prompt field, members.mom guides you through the key decisions: avatar selection, voice choice, script input, and format settings. The interface structures your input for optimal output.",
      "Visual preview before rendering — See how your script will look with your chosen avatar before committing a video credit. Adjust and refine before you render, reducing wasted iterations.",
      "Learn what works through testing — Generate multiple variations and compare results. Over time, you'll develop an intuition for which script styles, hooks, and structures produce the best output. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "AI Script Generation", slug: "ai-script-generation" },
    { term: "Text-to-Video AI", slug: "text-to-video" },
    { term: "AI UGC", slug: "ai-ugc" },
    { term: "Batch Video Generation", slug: "batch-generation" },
    { term: "Creative Strategy", slug: "creative-strategy" },
    { term: "Hook", slug: "hook" },
  ],
  relatedNote: "Prompt engineering is the skill layer that sits between AI script generation (what to say) and text-to-video AI (how to produce it). It's essential for AI UGC quality and batch video generation efficiency. Good prompt engineering is informed by creative strategy and produces better hooks.",
};
export default data;
