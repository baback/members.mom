import type { MetadataRoute } from "next";
import { pages as alternativePages } from "@/app/alternative/_data";
import { pages as industryPages } from "@/app/industries/_data";
import { pages as platformPages } from "@/app/platforms/_data";
import { pages as createPages } from "@/app/create/_data";
import { pages as glossaryPages } from "@/app/glossary/_data";
import { pages as templatePages } from "@/app/templates/_data";

const BASE = "https://reugc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/use-cases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const blogSlugs = [
    "ai-ugc-vs-real-creators",
    "how-to-write-ugc-scripts",
    "tiktok-ugc-ads-guide",
    "ai-avatars-explained",
    "ugc-for-ecommerce",
    "multilingual-video-ads",
  ];
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((s) => ({
    url: `${BASE}/blog/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const useCaseSlugs = [
    "ecommerce", "saas", "beauty", "fitness", "real-estate", "finance",
    "ugc-ads", "product-demos", "testimonials", "social-content", "explainers", "localization",
  ];
  const useCasePages: MetadataRoute.Sitemap = useCaseSlugs.map((s) => ({
    url: `${BASE}/use-cases/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const dynamicSections: { prefix: string; slugs: string[]; priority: number }[] = [
    { prefix: "alternative", slugs: Object.keys(alternativePages), priority: 0.7 },
    { prefix: "industries", slugs: Object.keys(industryPages), priority: 0.7 },
    { prefix: "platforms", slugs: Object.keys(platformPages), priority: 0.7 },
    { prefix: "create", slugs: Object.keys(createPages), priority: 0.6 },
    { prefix: "glossary", slugs: Object.keys(glossaryPages), priority: 0.5 },
    { prefix: "templates", slugs: Object.keys(templatePages), priority: 0.5 },
  ];

  const dynamicPages: MetadataRoute.Sitemap = dynamicSections.flatMap(({ prefix, slugs, priority }) =>
    slugs.map((s) => ({
      url: `${BASE}/${prefix}/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    }))
  );

  return [...staticPages, ...blogPages, ...useCasePages, ...dynamicPages];
}
