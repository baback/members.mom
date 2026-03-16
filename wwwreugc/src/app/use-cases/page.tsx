import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import VideoCard from "@/components/VideoCard";
import type { Metadata } from "next";
import { ogImageUrl } from "@/lib/og";

export const metadata: Metadata = {
  title: "AI UGC Video Use Cases by Industry & Content Type | ReUGC",
  description: "See how brands in e-commerce, SaaS, beauty, fitness, real estate, and finance use AI-generated UGC videos to scale ad creative and cut costs.",
  openGraph: { images: [{ url: ogImageUrl("Use Cases", "AI UGC Video Use Cases", "See how brands use AI-generated UGC videos to scale ad creative and cut costs."), width: 1200, height: 630 }] },
};
const cases = [
  { slug: "ecommerce", name: "E-Commerce", desc: "Product demos, unboxings, and review-style content that drives purchases." },
  { slug: "saas", name: "SaaS & Software", desc: "Feature walkthroughs, onboarding videos, and product explainers." },
  { slug: "beauty", name: "Beauty & Skincare", desc: "Before/after reveals, routine videos, and authentic reviews." },
  { slug: "fitness", name: "Fitness & Wellness", desc: "Transformation stories, workout tips, and supplement promos." },
  { slug: "real-estate", name: "Real Estate", desc: "Property tours, agent introductions, and market updates." },
  { slug: "finance", name: "Finance", desc: "Trust-building explainers, product breakdowns, and testimonials." },
  { slug: "ugc-ads", name: "UGC Ads", desc: "Scroll-stopping paid social creative for every platform." },
  { slug: "product-demos", name: "Product Demos", desc: "Show your product in action with a real-looking presenter." },
  { slug: "testimonials", name: "Testimonials", desc: "Social proof at scale — without coordinating real customers." },
  { slug: "social-content", name: "Social Content", desc: "Native content for TikTok, Reels, and Shorts." },
  { slug: "explainers", name: "Explainer Videos", desc: "Break down complex topics with a friendly AI presenter." },
  { slug: "localization", name: "Localization", desc: "One video, 29 languages. Perfect lip-sync every time." },
];

export default function UseCasesPage() {
  return (
    <main>
      <Navbar />
      <section className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built for{" "}
              <em className="font-normal italic" style={{ fontFamily: "var(--font-serif)" }}>
                every use case
              </em>
            </h1>
            <p className="mt-4 text-base text-muted">
              See how brands across industries use ReUGC to create content that converts.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <a
                key={c.slug}
                href={`/use-cases/${c.slug}`}
                className="group block rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-foreground/15 hover:shadow-sm"
              >
                <div className="p-4 pb-0">
                  <div className="mx-auto max-w-[140px]">
                    <VideoCard showMute={false} />
                  </div>
                </div>
                <div className="p-5 pt-4">
                  <h2 className="text-base font-semibold group-hover:underline decoration-1 underline-offset-4">
                    {c.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
