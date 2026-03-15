import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Check, X } from "lucide-react";
import { notFound } from "next/navigation";
import { pages } from "../_data";
import { FaqAccordion } from "./faq";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function AlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <main>
      <Navbar />
      <article className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs text-muted mb-3">Last updated: {page.updated}</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight mb-6">{page.h1}</h1>
          <div className="space-y-4 mb-10">
            {page.intro.map((p, i) => (
              <p key={i} className="text-base text-muted leading-relaxed">{p}</p>
            ))}
          </div>

          {/* Verdict Box */}
          <div className="rounded-xl border-2 border-foreground/15 bg-foreground/3 p-6 mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">TL;DR</p>
            <p className="text-sm leading-relaxed">{page.verdict}</p>
          </div>

          {/* Criteria */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">What to Look For in an {page.competitor} Alternative</h2>
            <div className="space-y-3">
              {page.criteria.map((c) => (
                <div key={c.title} className="flex gap-4 items-start rounded-xl border border-border bg-card p-5">
                  <span className="text-sm font-semibold shrink-0 w-36">{c.title}</span>
                  <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* #1 Pick */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">#1 Pick: members.mom</h2>
            <div className="rounded-xl border-2 border-foreground/15 bg-card p-6">
              <p className="text-sm font-medium mb-4">AI UGC video maker built for performance marketers who need volume and quality without the agency price tag.</p>
              <div className="space-y-2 mb-6">
                {page.pick.why.map((w, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Check className="size-4 shrink-0 text-foreground mt-0.5" />
                    <p className="text-sm text-muted leading-relaxed">{w}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3 mb-6">
                <div><p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">Best for</p><p className="text-sm">{page.pick.bestFor}</p></div>
                <div className="sm:col-span-2"><p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">Pricing</p><p className="text-sm">{page.pick.pricing}</p></div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Limitations</p>
                <div className="space-y-1.5">
                  {page.pick.limitations.map((l, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <X className="size-3.5 shrink-0 text-muted/50 mt-0.5" />
                      <p className="text-sm text-muted/70">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Alternatives */}
          <section className="mb-16">
            <div className="space-y-6">
              {page.alternatives.map((alt, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-bold mb-1">#{i + 2}: {alt.name}</h3>
                  <p className="text-sm text-muted mb-4">{alt.desc}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Best for: {alt.bestFor}</p>
                  <div className="grid gap-4 sm:grid-cols-2 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-green-700 mb-2">Pros</p>
                      <div className="space-y-1.5">{alt.pros.map((p, j) => <div key={j} className="flex gap-2 items-start"><Check className="size-3.5 shrink-0 text-green-700 mt-0.5" /><p className="text-sm text-muted">{p}</p></div>)}</div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 mb-2">Cons</p>
                      <div className="space-y-1.5">{alt.cons.map((c, j) => <div key={j} className="flex gap-2 items-start"><X className="size-3.5 shrink-0 text-red-700 mt-0.5" /><p className="text-sm text-muted">{c}</p></div>)}</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted/60 mb-2">{alt.pricing}</p>
                  <p className="text-sm text-muted italic">{alt.verdict}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Feature Comparison</h2>
            <div className="rounded-xl border border-border overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-foreground/3">
                    {page.table.headers.map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.table.rows.map((row, i) => (
                    <tr key={i} className={`border-b border-border last:border-0 ${row[0] === "members.mom" ? "bg-foreground/3" : ""}`}>
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium" : "text-muted"}`}>
                          {typeof cell === "boolean" ? (cell ? <Check className="size-4 text-foreground" /> : <X className="size-4 text-muted/40" />) : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Methodology */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-4">How We Evaluated</h2>
            <p className="text-sm text-muted leading-relaxed">{page.methodology}</p>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">FAQ</h2>
            <FaqAccordion items={page.faq} />
          </section>

          {/* Page CTA */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">{page.ctaLine}</h2>
            <p className="text-base text-muted mb-8">50x cheaper than hiring creators. 29 languages. Batch generation. Ready in minutes.</p>
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
