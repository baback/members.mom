import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import VideoCard from "@/components/VideoCard";
import { notFound } from "next/navigation";

const pages: Record<string, {
  niche: string;
  h1: string;
  meta: string;
  intro: string;
  whyUgc: string;
  examples: { title: string; format: string; platform: string; duration: string; description: string; why: string; takeaway: string }[];
  patterns: { title: string; text: string }[];
  ctaLine: string;
}> = {
  "skincare-ads": {
    niche: "Skincare",
    h1: "Skincare UGC Video Ad Examples That Convert",
    meta: "8 skincare UGC video ad examples that actually convert — with breakdowns of the hooks, formats, and CTAs that make them work. Steal these patterns.",
    intro: "The best skincare UGC ads don't sell the product — they sell the transformation. After analyzing hundreds of top-performing skincare video ads across TikTok, Instagram, and Facebook, the same patterns keep showing up: vulnerable hooks, visual proof, and soft CTAs. Here are 8 examples that nail it, with breakdowns of exactly why they work so you can steal the structure for your own brand.",
    whyUgc: "Skincare is inherently personal — viewers need to see the product on real skin, in real lighting, with real reactions. Studio-shot product ads with perfect models and ring lights actually underperform because they don't feel trustworthy. When someone with visible pores and imperfect skin says \"this actually worked,\" it's 10x more convincing than a retouched model saying the same thing. UGC-style skincare ads see 2.4x higher engagement rates than branded content on TikTok, and 1.8x higher CTR on Meta.",
    examples: [
      {
        title: "The Vulnerable Confession",
        format: "Testimonial", platform: "TikTok", duration: "22s",
        description: "A woman in her 30s, no makeup, natural window lighting. She starts by saying \"I almost didn't post this because you can see every pore on my face right now...\" then shows her skin transformation over 4 weeks using a vitamin C serum.",
        why: "The opening line is pure vulnerability — it makes the viewer lean in because it feels real, not rehearsed. Showing imperfect skin at the start builds trust. The \"I don't even wear foundation anymore\" close is a powerful proof statement.",
        takeaway: "Vulnerability is your strongest hook in skincare. Start with imperfection, end with confidence.",
      },
      {
        title: "The Ingredient Callout",
        format: "Curiosity/Educational", platform: "Instagram Reels", duration: "18s",
        description: "Opens with text on screen: \"Your moisturizer probably has this ingredient and it's making your acne worse.\" The presenter names a common ingredient, explains in 8 seconds why it's problematic, then introduces the alternative product.",
        why: "The controversy hook triggers immediate concern — the viewer checks their own product mentally. The educational angle positions the ad as helpful content, not a sales pitch. The short length means high completion rates.",
        takeaway: "Challenge what the viewer is currently doing. \"You're doing it wrong\" hooks outperform \"try this\" hooks by 2x in skincare.",
      },
      {
        title: "The Speed Routine",
        format: "Demo/Routine", platform: "TikTok", duration: "28s",
        description: "A 4-step morning skincare routine shown in fast-forward with a voiceover narrating each step. The featured product gets 8 seconds of screen time while the other 3 steps get 3 seconds each.",
        why: "Routine content is one of the most-watched formats in skincare TikTok. The fast pacing keeps viewers engaged, and the unequal time distribution subtly highlights the product without feeling like an ad.",
        takeaway: "In routine-format ads, give your product 2–3x more screen time than the other steps. The viewer won't notice the imbalance consciously.",
      },
      {
        title: "The Price Comparison",
        format: "Problem-Solution", platform: "Facebook Feed", duration: "16s",
        description: "Opens with: \"$14 and it works better than my $80 serum.\" The presenter holds both products, does a quick side-by-side application on each hand, and shows the result.",
        why: "Price anchoring is one of the most effective psychological triggers. By naming the $80 competitor first, the $14 product feels like a steal. The side-by-side demo provides visual proof.",
        takeaway: "If your product is cheaper than the competition, lead with the price gap. \"$14 vs $80\" is a hook that stops the scroll on its own.",
      },
      {
        title: "The Before/After Timeline",
        format: "Before/After", platform: "Instagram Reels", duration: "25s",
        description: "Shows a split-screen timeline: Day 1 (visible acne), Day 7 (slight improvement), Day 14 (noticeable clearing), Day 21 (mostly clear). Each stage gets 4 seconds with a date stamp.",
        why: "The timeline format adds credibility that a simple before/after doesn't have. Showing incremental progress feels honest and believable. The \"I documented every single day\" framing positions it as a real experiment.",
        takeaway: "Gradual progress is more believable than dramatic transformation. Show the messy middle — Day 7 where it's \"slightly better.\"",
      },
      {
        title: "The Dermatologist React",
        format: "Authority/Educational", platform: "TikTok", duration: "30s",
        description: "A presenter styled as a skincare professional reviews the product's ingredient list on camera. \"Let me break down what's actually in this...\" Goes through 3 key ingredients, explains what each does in plain language.",
        why: "Authority hooks work in skincare because the industry is full of misinformation. A \"professional review\" format borrows credibility. The ingredient breakdown educates the viewer, which builds trust.",
        takeaway: "Position your ad as expert analysis, not a sales pitch. \"Let me break this down\" is a trust-building frame.",
      },
      {
        title: "The Relatable Struggle",
        format: "Testimonial", platform: "Facebook Feed", duration: "20s",
        description: "A woman in her 40s talks about how she'd given up on finding a moisturizer that didn't make her skin greasy OR dry. Found this product through a friend's recommendation, tried it skeptically, now uses it daily.",
        why: "The \"I'd given up\" narrative resonates with skincare buyers who've been through the trial-and-error cycle. The friend recommendation adds social proof. The lack of dramatic claims is refreshing.",
        takeaway: "Understated claims convert better than bold ones for mature audiences. \"It just works\" is more believable than \"it transformed my skin overnight.\"",
      },
      {
        title: "The Unboxing First Impression",
        format: "Unboxing", platform: "TikTok", duration: "19s",
        description: "Opens with the package arriving. The presenter opens it on camera, reacts to the packaging, pumps the product onto their hand, applies it, and gives an immediate first impression: \"Oh wow, the texture is insane. It's like silk.\"",
        why: "Unboxing content triggers the \"new product excitement\" that viewers love to experience vicariously. The first-impression format feels authentic because there's no time for rehearsal. Sensory descriptions help the viewer imagine the experience.",
        takeaway: "First impressions feel more honest than long-term reviews. The \"I just got this\" energy is contagious and drives impulse clicks.",
      },
    ],
    patterns: [
      { title: "Personal Hooks Beat Product Hooks", text: "7 out of 8 examples open with a personal statement or emotion — not the product name, not a feature, not a benefit. The product doesn't appear until 3–8 seconds in. Lead with the person, not the product." },
      { title: "Specificity Creates Believability", text: "The examples that feel most authentic use specific details: \"$14 vs $80,\" \"80% lighter in 3 weeks,\" \"Day 7, Day 14, Day 21.\" Vague claims feel like marketing. Specific claims feel like a real person sharing a real experience." },
      { title: "Soft CTAs Match the Format", text: "Every example uses a casual CTA: \"link in bio,\" \"just try it,\" \"you need this in your routine.\" None use hard-sell language. The CTA should feel like the natural end of a conversation." },
      { title: "15–25 Seconds Is the Sweet Spot", text: "6 out of 8 examples fall between 16 and 25 seconds. The two longer ones work because their formats require more time. For standard testimonials and demos, keep it under 25 seconds." },
    ],
    ctaLine: "Create skincare video ads like these. No camera, no creators, no editing.",
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function ShowcasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <main>
      <Navbar />
      <article className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight mb-6">{page.h1}</h1>
          <p className="text-base text-muted leading-relaxed mb-10 max-w-3xl">{page.intro}</p>

          {/* Why UGC */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Why UGC Works for {page.niche}</h2>
            <p className="text-sm text-muted leading-relaxed">{page.whyUgc}</p>
          </section>

          {/* Examples Grid */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">The Examples</h2>
            <div className="space-y-12">
              {page.examples.map((ex, i) => (
                <div key={i} className="grid gap-6 lg:grid-cols-[240px_1fr] items-start">
                  <div className="mx-auto w-full max-w-[240px]">
                    <VideoCard showMute={false} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="text-lg font-bold">{i + 1}. {ex.title}</h3>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted bg-foreground/5 rounded-full px-2.5 py-0.5">{ex.format}</span>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted bg-foreground/5 rounded-full px-2.5 py-0.5">{ex.platform}</span>
                      <span className="text-[10px] text-muted">{ex.duration}</span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-3">{ex.description}</p>
                    <p className="text-sm text-muted/80 leading-relaxed mb-3">{ex.why}</p>
                    <p className="text-sm font-medium">Takeaway: {ex.takeaway}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Patterns */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Winning Patterns Across These Examples</h2>
            <div className="space-y-4">
              {page.patterns.map((p, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-bold mb-2">Pattern {i + 1}: {p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Create Your Own */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Create Your Own</h2>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">1</span>
                <p className="text-sm text-muted leading-relaxed">Pick a format from the examples above — testimonial and before/after have the highest conversion rates for skincare</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">2</span>
                <p className="text-sm text-muted leading-relaxed">Use the matching script template from our <a href="/templates/skincare-script" className="underline hover:text-foreground transition">skincare script templates</a> page</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">3</span>
                <p className="text-sm text-muted leading-relaxed">Generate 5–10 variations with different hooks and AI actors, then test them</p>
              </div>
            </div>
          </section>

          {/* Page CTA */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">{page.ctaLine}</h2>
            <p className="text-base text-muted mb-8">50x cheaper than hiring creators. Realistic AI actors. Batch generation for testing.</p>
            <a href="https://studio.reugc.com" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:bg-foreground/85 cursor-pointer">
              Get Started
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </article>
      <CTA />
      <Footer />
    </main>
  );
}