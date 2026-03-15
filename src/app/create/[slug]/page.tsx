import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import { pages } from "../_data";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function CreatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <main>
      <Navbar />
      <article className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs text-muted mb-3">Read time: {page.readTime}</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight mb-6">{page.title}</h1>
          <p className="text-base text-muted leading-relaxed mb-16">{page.intro}</p>

          {/* What & Why */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-4">What It Is and Why It Works</h2>
            <p className="text-base text-muted leading-relaxed mb-6">{page.what.definition}</p>
            <div className="space-y-4">
              {page.what.reasons.map((r) => (
                <div key={r.label} className="flex gap-4 items-start rounded-xl border border-border bg-card p-5">
                  <span className="text-sm font-semibold shrink-0 w-28">{r.label}</span>
                  <p className="text-sm text-muted leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Script Framework */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8">The Script Framework</h2>
            <div className="space-y-8">
              {page.framework.map((s, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">{i + 1}</span>
                    <h3 className="text-lg font-bold">{s.step}</h3>
                    <span className="text-xs text-muted">({s.time})</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{s.what}</p>
                  <div className="space-y-2 mb-4">
                    {s.examples.map((ex, j) => (
                      <p key={j} className="text-sm italic text-foreground/80 pl-4 border-l-2 border-border">{ex}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{s.why}</p>
                  {s.mistake && (
                    <p className="text-sm text-muted/70 mt-3 italic">Common mistake: {s.mistake}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Complete Example Script */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Complete Example Script</h2>
            <div className="rounded-xl border border-foreground/20 bg-foreground/3 p-6">
              <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans text-foreground/80">{page.exampleScript}</pre>
            </div>
          </section>

          {/* Hook Variations */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">{page.hooks.length} Hook Variations</h2>
            <div className="space-y-4">
              {page.hooks.map((h, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm font-medium italic mb-2">&ldquo;{h.line}&rdquo;</p>
                  <p className="text-sm text-muted leading-relaxed mb-1">{h.trigger}</p>
                  <p className="text-xs text-muted/60">Works for: {h.products}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Best Practices</h2>
            <div className="space-y-3">
              {page.bestPractices.map((bp) => (
                <div key={bp.label} className="flex gap-4 items-start rounded-xl border border-border bg-card p-5">
                  <span className="text-sm font-semibold shrink-0 w-28">{bp.label}</span>
                  <p className="text-sm text-muted leading-relaxed">{bp.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When to Use */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">When to Use This Format</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(page.whenToUse).map(([key, val]) => (
                <div key={key} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    {key === "pairWith" ? "Pair with" : key === "stage" ? "Funnel stage" : key === "audience" ? "Audience type" : "Best platforms"}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{val}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Page CTA */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">{page.ctaLine}</h2>
            <p className="text-base text-muted mb-8">50x cheaper than hiring creators. Realistic AI actors. 29 languages.</p>
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:bg-foreground/85 cursor-pointer">
              Get Started
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </article>
      <CTA />
      <Footer />
    </main>
  );
}
