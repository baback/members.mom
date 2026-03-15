import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import Link from "next/link";
import { pages } from "../_data";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function GlossaryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <main>
      <Navbar />
      <article className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight mb-6">{page.h1}</h1>

          {/* Definition Box */}
          <div className="rounded-xl border-2 border-foreground/15 bg-foreground/3 p-6 mb-16">
            <p className="text-base leading-relaxed font-medium">{page.definition}</p>
          </div>

          {/* Why It Matters */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Why {page.term} Matters</h2>
            <div className="space-y-4">
              {page.whyMatters.map((r) => (
                <div key={r.label} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm font-semibold mb-2">{r.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">How {page.term} Works</h2>
            <div className="space-y-6">
              {page.howItWorks.map((s, i) => (
                <div key={i}>
                  {s.heading && <h3 className="text-lg font-bold mb-3">{s.heading}</h3>}
                  <p className="text-sm text-muted leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-foreground/15 bg-foreground/3 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Example</p>
              <p className="text-sm text-muted leading-relaxed">{page.example}</p>
            </div>
          </section>

          {/* Product Tie-in */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-4">How ReUGC Helps With {page.term}</h2>
            <p className="text-sm text-muted leading-relaxed mb-4">{page.product.intro}</p>
            <div className="space-y-3">
              {page.product.points.map((p, i) => (
                <div key={i} className="flex gap-3 items-start rounded-xl border border-border bg-card p-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">{i + 1}</span>
                  <p className="text-sm text-muted leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Terms */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Related Terms</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {page.related.map((r) => (
                <Link key={r.slug} href={`/glossary/${r.slug}`} className="text-sm rounded-full border border-border px-4 py-1.5 hover:bg-card transition">{r.term}</Link>
              ))}
            </div>
            <p className="text-sm text-muted leading-relaxed">{page.relatedNote}</p>
          </section>

          {/* CTA */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">See how ReUGC helps you stay ahead of {page.term.toLowerCase()}.</h2>
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
