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
    openGraph: { images: [{ url: ogImageUrl("Platforms", page.h1, page.meta), width: 1200, height: 630 }] },
  };
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <main>
      <Navbar />
      <article className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs text-muted mb-3">Specs verified: {page.verified}</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight mb-6">{page.h1}</h1>
          <p className="text-base text-muted leading-relaxed mb-16 max-w-3xl">{page.intro}</p>

          {/* Specs Table */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-6">{page.platform} Video Ad Specs (2026)</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {page.specs.map((s, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                      <td className="px-5 py-3.5 font-medium w-40">{s.label}</td>
                      <td className="px-5 py-3.5 text-muted">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted/60 mt-3">Specs current as of {page.verified}. {page.platform} updates ad specs periodically — verify in {page.platform} Ads Manager before launching.</p>
          </section>

          {/* Ad Formats */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Top {page.formats.length} Performing Ad Formats on {page.platform}</h2>
            <div className="space-y-6">
              {page.formats.map((f, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-bold mb-2">{f.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{f.why}</p>
                  <div className="space-y-2 mb-4">
                    {f.structure.map((s, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <span className="text-xs font-mono text-muted shrink-0 w-12 pt-0.5">{s.time}</span>
                        <p className="text-sm text-muted/80">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-muted/60">
                    <span>Ideal length: {f.length}</span>
                    <span>First frame: {f.firstFrame}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scripts */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">{page.scripts.length} Ready-to-Use {page.platform} Ad Scripts</h2>
            <div className="space-y-8">
              {page.scripts.map((s, i) => (
                <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <h3 className="text-lg font-bold mb-1">Script {i + 1}: {s.name}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-muted">
                      <span>Best for: {s.bestFor}</span>
                      <span>Duration: {s.duration}</span>
                    </div>
                  </div>
                  <div className="bg-foreground/3 p-6">
                    <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans text-foreground/80">{s.script}</pre>
                  </div>
                  <div className="p-6 space-y-2">
                    <p className="text-sm text-muted leading-relaxed">{s.why}</p>
                    <p className="text-xs text-muted/60 italic">{s.customization}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Creative Testing Tips */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Creative Testing Tips for {page.platform}</h2>
            <div className="space-y-4">
              {page.tips.map((t, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-bold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Do's and Don'ts */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Do&apos;s and Don&apos;ts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-bold mb-4 text-green-700">✅ Do</h3>
                <ul className="space-y-3">
                  {page.dos.map((d, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-bold mb-4 text-red-700">❌ Don&apos;t</h3>
                <ul className="space-y-3">
                  {page.donts.map((d, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Page CTA */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">{page.ctaLine}</h2>
            <p className="text-base text-muted mb-8">50x cheaper than hiring creators. Native UGC style. Batch generation for creative testing.</p>
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
