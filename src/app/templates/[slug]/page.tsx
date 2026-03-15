import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import { pages } from "../_data";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <main>
      <Navbar />
      <article className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-3 text-xs text-muted mb-3">
            <span>Niche: {page.niche}</span>
            <span>Scripts: {page.scriptCount}</span>
            <span>Hook variations: {page.hooks.length}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight mb-6">{page.h1}</h1>
          <p className="text-base text-muted leading-relaxed mb-16">{page.intro}</p>

          {/* Scripts */}
          <div className="space-y-12 mb-20">
            {page.scripts.map((s, i) => (
              <section key={i}>
                <div className="mb-4">
                  <h2 className="text-xl font-bold tracking-tight mb-1">Script {i + 1}: {s.name}</h2>
                  <p className="text-sm text-muted">{s.subtitle}</p>
                  <p className="text-xs text-muted/60 mt-1">Duration: {s.duration}</p>
                </div>
                <div className="rounded-xl border border-foreground/20 bg-foreground/3 p-6 mb-4">
                  <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans text-foreground/80">{s.script}</pre>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Customization notes</p>
                  {s.notes.map((n, j) => (
                    <p key={j} className="text-sm text-muted leading-relaxed pl-4 border-l-2 border-border">{n}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Hook Variations */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">{page.hooks.length} Hook Variations</h2>
            <div className="space-y-4">
              {page.hooks.map((h, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm font-medium italic mb-1">{i + 1}. &ldquo;{h.line}&rdquo; <span className="not-italic text-xs text-muted/60">({h.trigger})</span></p>
                  <p className="text-sm text-muted leading-relaxed">{h.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Tips for Customizing These Scripts</h2>
            <div className="space-y-3">
              {page.tips.map((t, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-[10px] font-bold mt-0.5">{i + 1}</span>
                  <p className="text-sm text-muted leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Page CTA */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">{page.ctaLine}</h2>
            <p className="text-base text-muted mb-8">50x cheaper than hiring creators. Realistic AI actors. Ready in minutes.</p>
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
