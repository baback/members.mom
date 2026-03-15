import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import VideoCard from "@/components/VideoCard";
import { notFound } from "next/navigation";

const data: Record<string, { name: string; headline: string; sub: string; benefits: string[]; stats: { num: string; label: string }[] }> = {
  ecommerce: {
    name: "E-Commerce",
    headline: "Product videos that move inventory",
    sub: "Generate unboxings, reviews, and demo videos for every SKU — without hiring a single creator.",
    benefits: [
      "Create product demos for your entire catalog in hours, not months",
      "A/B test different hooks and presenters to find what converts",
      "Localize content for every market with native-sounding AI actors",
      "Cut creative costs by 50x while increasing ad output 10x",
    ],
    stats: [
      { num: "50x", label: "cheaper than creators" },
      { num: "2 min", label: "per video" },
      { num: "10x", label: "more conversions" },
    ],
  },
  saas: {
    name: "SaaS & Software",
    headline: "Explain your product without a production team",
    sub: "Feature walkthroughs, onboarding videos, and product updates — generated in minutes.",
    benefits: [
      "Ship product update videos the same day you ship features",
      "Create onboarding content that reduces churn and support tickets",
      "Test different messaging angles without reshooting",
      "Scale content across 29 languages for global launches",
    ],
    stats: [
      { num: "50x", label: "cheaper than agencies" },
      { num: "100+", label: "AI presenters" },
      { num: "29", label: "languages" },
    ],
  },
  beauty: {
    name: "Beauty & Skincare",
    headline: "Reviews and routines that feel authentic",
    sub: "Before/after reveals, skincare routines, and product reviews — all AI-generated, all converting.",
    benefits: [
      "Generate authentic-looking review content at scale",
      "Test different presenters to match your brand aesthetic",
      "Create seasonal campaigns in hours instead of weeks",
      "Produce content for every product in your line simultaneously",
    ],
    stats: [
      { num: "50x", label: "cost savings" },
      { num: "50+", label: "variations per day" },
      { num: "10x", label: "higher ROAS" },
    ],
  },
  fitness: {
    name: "Fitness & Wellness",
    headline: "Transformation stories on demand",
    sub: "Workout tips, supplement promos, and motivational content — without coordinating athletes or influencers.",
    benefits: [
      "Create motivational content with diverse, fit AI presenters",
      "Generate supplement and product testimonials at scale",
      "Test different hooks for different audience segments",
      "Launch campaigns for new products in minutes, not weeks",
    ],
    stats: [
      { num: "50x", label: "cheaper" },
      { num: "2 min", label: "turnaround" },
      { num: "∞", label: "variations" },
    ],
  },
  "real-estate": {
    name: "Real Estate",
    headline: "Property tours and agent intros that close deals",
    sub: "Professional video content for every listing — without a videographer on site.",
    benefits: [
      "Create agent introduction videos that build trust instantly",
      "Generate property highlight reels from descriptions alone",
      "Produce market update content on a weekly cadence",
      "Localize content for international buyers",
    ],
    stats: [
      { num: "50x", label: "cost savings" },
      { num: "100+", label: "AI agents" },
      { num: "29", label: "languages" },
    ],
  },
  finance: {
    name: "Finance",
    headline: "Build trust with explainer content that converts",
    sub: "Product breakdowns, market updates, and educational content — compliant and on-brand.",
    benefits: [
      "Create trust-building explainer videos at scale",
      "Generate consistent educational content series",
      "Test different presenters and messaging for each audience",
      "Maintain brand compliance across all content",
    ],
    stats: [
      { num: "50x", label: "cheaper" },
      { num: "10x", label: "more content" },
      { num: "2 min", label: "per video" },
    ],
  },
  "ugc-ads": {
    name: "UGC Ads",
    headline: "Scroll-stopping ads without the creator headaches",
    sub: "Generate authentic-looking UGC ad creative for paid social — at 50x less cost.",
    benefits: [
      "Produce 50+ ad variations in the time it takes to brief one creator",
      "Test hooks, CTAs, and presenters to find winning combinations",
      "Never wait for a creator to deliver again",
      "Scale winning creative across platforms and markets instantly",
    ],
    stats: [
      { num: "50x", label: "cheaper" },
      { num: "10x", label: "more conversions" },
      { num: "50+", label: "variations per hour" },
    ],
  },
  "product-demos": {
    name: "Product Demos",
    headline: "Show your product with a real-looking presenter",
    sub: "Professional product demonstrations generated in minutes — for every SKU, every angle, every market.",
    benefits: [
      "Create demos for your entire product catalog fast",
      "Test different presentation styles and scripts",
      "Update demos instantly when products change",
      "Localize for every market with native presenters",
    ],
    stats: [
      { num: "2 min", label: "per demo" },
      { num: "50x", label: "cost savings" },
      { num: "100+", label: "presenters" },
    ],
  },
  testimonials: {
    name: "Testimonials",
    headline: "Social proof at scale",
    sub: "Generate authentic-looking testimonial videos without coordinating real customers.",
    benefits: [
      "Create diverse testimonial content for every audience segment",
      "Test different stories and presenters to maximize trust",
      "Produce testimonials for new products before you have customers",
      "Scale social proof across all your marketing channels",
    ],
    stats: [
      { num: "50x", label: "cheaper" },
      { num: "∞", label: "testimonials" },
      { num: "10x", label: "more trust" },
    ],
  },
  "social-content": {
    name: "Social Content",
    headline: "Native content for every platform",
    sub: "TikTok, Reels, Shorts — generate platform-native content without a content team.",
    benefits: [
      "Create platform-specific content at scale",
      "Test trending formats and hooks instantly",
      "Maintain a consistent posting cadence without burnout",
      "Repurpose one script across multiple formats and platforms",
    ],
    stats: [
      { num: "50x", label: "cheaper" },
      { num: "2 min", label: "per video" },
      { num: "∞", label: "content" },
    ],
  },
  explainers: {
    name: "Explainer Videos",
    headline: "Break down complex topics with a friendly face",
    sub: "Educational content, how-tos, and explainers — generated with AI presenters that audiences trust.",
    benefits: [
      "Create educational series without booking presenters",
      "Update explainers instantly when information changes",
      "Test different presentation styles for engagement",
      "Localize educational content for global audiences",
    ],
    stats: [
      { num: "100+", label: "AI presenters" },
      { num: "29", label: "languages" },
      { num: "2 min", label: "turnaround" },
    ],
  },
  localization: {
    name: "Localization",
    headline: "One video. Twenty-nine languages.",
    sub: "Take your best-performing content and launch it in every market — with perfect lip-sync.",
    benefits: [
      "Localize winning content to 29 languages instantly",
      "Perfect lip-sync that looks native in every language",
      "No translators, no local creators, no delays",
      "Test which markets respond best before committing budget",
    ],
    stats: [
      { num: "29", label: "languages" },
      { num: "50x", label: "cheaper than local creators" },
      { num: "2 min", label: "per localization" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = data[slug];
  if (!page) notFound();

  return (
    <main>
      <Navbar />
      <section className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 mb-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">{page.name}</p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight mb-4">
                {page.headline}
              </h1>
              <p className="text-base text-muted leading-relaxed mb-8">{page.sub}</p>
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:bg-foreground/85 cursor-pointer">
                Start Creating
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="mx-auto flex w-full max-w-sm items-end justify-center gap-4 lg:mx-0 lg:max-w-none lg:gap-5">
              <div className="w-[46%]"><VideoCard /></div>
              <div className="w-[46%] -translate-y-5"><VideoCard showMute={false} /></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-20">
            {page.stats.map((s) => (
              <div key={s.label} className="text-center rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">{s.num}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Why brands choose members.mom for {page.name.toLowerCase()}</h2>
            <div className="space-y-4">
              {page.benefits.map((b, i) => (
                <div key={i} className="flex gap-4 items-start rounded-xl border border-border bg-card p-5">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Ready to create {page.name.toLowerCase()} content?
            </h2>
            <p className="text-base text-muted mb-8">50x cheaper. 10x better results. Ready in minutes.</p>
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:bg-foreground/85 cursor-pointer">
              Get Started
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
