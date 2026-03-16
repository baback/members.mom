import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReUGC Blog — AI UGC Tips, Guides & Insights",
  description: "Learn how to create high-converting UGC videos with AI. Scripts, strategies, and real data from brands scaling with AI-generated content.",
};

const posts = [
  {
    slug: "ai-ugc-vs-real-creators",
    title: "AI UGC vs. Real Creators: The Honest Comparison",
    excerpt: "Cost, speed, quality, and conversion data side by side. Real numbers from $240–$950 per human video vs. $2–$40 with AI — and when to use each.",
    date: "Mar 10, 2026",
    tag: "Insights",
    readTime: "8 min",
  },
  {
    slug: "how-to-write-ugc-scripts",
    title: "How to Write UGC Scripts That Actually Convert",
    excerpt: "Four proven frameworks (PAS, Testimonial, Unboxing, Comparison), six hook types, and the script length rules that top performance marketers follow.",
    date: "Mar 5, 2026",
    tag: "Guide",
    readTime: "10 min",
  },
  {
    slug: "50-ugc-ad-hooks",
    title: "50 UGC Ad Hooks You Can Steal Today",
    excerpt: "Organized by type: curiosity, social proof, problem-solution, bold claim, and direct question. Plus a testing framework to find your winners fast.",
    date: "Feb 28, 2026",
    tag: "Templates",
    readTime: "7 min",
  },
  {
    slug: "scaling-creative-with-ai",
    title: "How Brands Are Scaling Creative 10x With AI",
    excerpt: "The 70/20/10 creative testing framework, systematic variable isolation, and real examples of brands cutting CPA by 40% through volume testing.",
    date: "Feb 20, 2026",
    tag: "Case Study",
    readTime: "9 min",
  },
  {
    slug: "ai-actors-explained",
    title: "AI Actors Explained: How They Work and Why They Convert",
    excerpt: "The three-part generation pipeline behind realistic AI presenters — text-to-speech, lip-sync, and expression synthesis — and why faces outperform everything else in ads.",
    date: "Feb 14, 2026",
    tag: "Product",
    readTime: "8 min",
  },
  {
    slug: "localization-strategy",
    title: "Go Global in a Day: AI Video Localization for 29 Languages",
    excerpt: "A step-by-step playbook for testing international markets at 1/10th the cost. Includes the domestic Spanish-language strategy most brands miss.",
    date: "Feb 8, 2026",
    tag: "Strategy",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <section className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mt-3 text-base text-muted">
              Insights, guides, and strategies for AI-powered content creation.
            </p>
          </div>

          <div className="space-y-1">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl p-5 -mx-5 transition-colors hover:bg-card-hover"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                        {post.tag}
                      </span>
                      <span className="text-[11px] text-muted/50">{post.date}</span>
                      <span className="text-[11px] text-muted/50">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-semibold tracking-tight group-hover:underline decoration-1 underline-offset-4">
                      {post.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
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
