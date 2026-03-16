import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import { pages } from "../_data";
import type { Metadata } from "next";
import { ogImageUrl } from "@/lib/og";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return {
    title: `${page.h1} | ReUGC`,
    description: page.meta,
    openGraph: { images: [{ url: ogImageUrl("Industries", page.h1, page.meta), width: 1200, height: 630 }] },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <main>
      <Navbar />
      <article className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs text-muted mb-3">Last updated: {page.updated}</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">{page.h1}</h1>
          <p className="text-base text-muted leading-relaxed mb-16 max-w-3xl">{page.intro}</p>

          {/* Challenges */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Why {page.name} Brands Need a Different Video Approach</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.challenges.map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-sm font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Video Formats */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Video Formats That Work for {page.name} Brands</h2>
            <div className="space-y-6">
              {page.formats.map((f, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="text-lg font-bold">{f.name}</h3>
                    <span className="text-xs text-muted">{f.length} · {f.platform}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{f.why}</p>
                  <div className="space-y-2">
                    {f.outline.map((step, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-[10px] font-bold">{j + 1}</span>
                        <p className="text-sm text-muted/80">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">The Numbers</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {page.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center">
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl mb-1">{s.num}</p>
                  <p className="text-sm font-medium mb-2">{s.label}</p>
                  <p className="text-xs text-muted leading-relaxed">{s.context}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hooks */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">{page.hooks.length} Hooks for {page.name} Video Ads</h2>
            <div className="space-y-4">
              {page.hooks.map((h, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">{i + 1}</span>
                    <div>
                      <p className="text-sm font-medium italic mb-1">&ldquo;{h.line}&rdquo;</p>
                      <p className="text-sm text-muted leading-relaxed">{h.why} <span className="text-xs text-muted/60">[{h.tag}]</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Case Stories */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">How {page.name} Brands Use ReUGC</h2>
            <div className="space-y-6">
              {page.stories.map((s, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-sm font-bold mb-3">{s.brand}</h3>
                  <div className="space-y-2 text-sm text-muted leading-relaxed">
                    <p><span className="font-medium text-foreground">Challenge:</span> {s.challenge}</p>
                    <p><span className="font-medium text-foreground">What they did:</span> {s.did}</p>
                    <p><span className="font-medium text-foreground">Result:</span> {s.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">FAQ</h2>
            <div className="space-y-4">
              {page.faq.map((f, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-bold mb-2">{f.q}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Page CTA */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">{page.ctaLine}</h2>
            <p className="text-base text-muted mb-8">50x cheaper. 29 languages. Batch generation. Ready in minutes.</p>
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
