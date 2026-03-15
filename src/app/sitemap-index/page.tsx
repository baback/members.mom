import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pages as alternativePages } from "@/app/alternative/_data";
import { pages as industryPages } from "@/app/industries/_data";
import { pages as platformPages } from "@/app/platforms/_data";
import { pages as createPages } from "@/app/create/_data";
import { pages as glossaryPages } from "@/app/glossary/_data";
import { pages as templatePages } from "@/app/templates/_data";

export const metadata: Metadata = {
  title: "Sitemap — All Pages | ReUGC",
  description: "Browse all 250+ pages on ReUGC — alternatives, industries, platforms, video types, glossary terms, and script templates.",
};

const sections = [
  {
    title: "Alternative Pages",
    description: "Compare ReUGC to other AI video tools",
    route: "/alternative",
    count: Object.keys(alternativePages).length,
    pages: Object.entries(alternativePages).map(([slug, d]) => ({ slug, label: d.h1 })),
  },
  {
    title: "Industry Pages",
    description: "AI UGC videos for your industry",
    route: "/industries",
    count: Object.keys(industryPages).length,
    pages: Object.entries(industryPages).map(([slug, d]) => ({ slug, label: d.h1 })),
  },
  {
    title: "Platform Pages",
    description: "Video specs and strategy by ad platform",
    route: "/platforms",
    count: Object.keys(platformPages).length,
    pages: Object.entries(platformPages).map(([slug, d]) => ({ slug, label: d.h1 })),
  },
  {
    title: "Create Pages",
    description: "How to create every type of AI video",
    route: "/create",
    count: Object.keys(createPages).length,
    pages: Object.entries(createPages).map(([slug, d]) => ({ slug, label: d.title })),
  },
  {
    title: "Glossary",
    description: "Video marketing terms explained",
    route: "/glossary",
    count: Object.keys(glossaryPages).length,
    pages: Object.entries(glossaryPages).map(([slug, d]) => ({ slug, label: d.h1 })),
  },
  {
    title: "Script Templates",
    description: "Ready-to-use UGC video scripts",
    route: "/templates",
    count: Object.keys(templatePages).length,
    pages: Object.entries(templatePages).map(([slug, d]) => ({ slug, label: d.h1 })),
  },
];

const total = sections.reduce((sum, s) => sum + s.count, 0);

export default function SitemapIndexPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Sitemap</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            All Pages <span className="text-muted font-normal text-xl">({total})</span>
          </h1>
          <p className="mt-3 text-muted text-sm max-w-xl">
            Every page on ReUGC — browse by category or use Ctrl+F to find what you need.
          </p>

          <div className="mt-14 space-y-16">
            {sections.map((section) => (
              <section key={section.route}>
                <div className="flex items-baseline gap-3 mb-1">
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <span className="text-xs text-muted">{section.count} pages</span>
                </div>
                <p className="text-sm text-muted mb-5">{section.description}</p>
                <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                  {section.pages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`${section.route}/${page.slug}`}
                      className="group flex items-start gap-2 rounded-md px-2 py-1.5 -mx-2 transition-colors hover:bg-card-hover"
                    >
                      <span className="text-muted text-xs mt-0.5 shrink-0">→</span>
                      <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors leading-snug">
                        {page.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Other pages */}
          <section className="mt-16">
            <div className="flex items-baseline gap-3 mb-1">
              <h2 className="text-lg font-semibold">Other Pages</h2>
            </div>
            <p className="text-sm text-muted mb-5">Core site pages</p>
            <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "/", label: "Home" },
                { href: "/pricing", label: "Pricing" },
                { href: "/blog", label: "Blog" },
                { href: "/use-cases", label: "Use Cases" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-start gap-2 rounded-md px-2 py-1.5 -mx-2 transition-colors hover:bg-card-hover"
                >
                  <span className="text-muted text-xs mt-0.5 shrink-0">→</span>
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors leading-snug">
                    {page.label}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
