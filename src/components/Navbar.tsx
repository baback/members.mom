"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import VideoCard from "./VideoCard";

const useCases = [
  {
    category: "By Industry",
    items: [
      { name: "E-Commerce", href: "/use-cases/ecommerce", desc: "Product demos & unboxings" },
      { name: "SaaS & Software", href: "/use-cases/saas", desc: "Feature walkthroughs & tutorials" },
      { name: "Beauty & Skincare", href: "/use-cases/beauty", desc: "Reviews & before/after content" },
      { name: "Fitness & Wellness", href: "/use-cases/fitness", desc: "Transformation stories & tips" },
      { name: "Real Estate", href: "/use-cases/real-estate", desc: "Property tours & agent intros" },
      { name: "Finance", href: "/use-cases/finance", desc: "Explainers & trust-building content" },
    ],
  },
  {
    category: "By Content Type",
    items: [
      { name: "UGC Ads", href: "/use-cases/ugc-ads", desc: "Scroll-stopping paid social" },
      { name: "Product Demos", href: "/use-cases/product-demos", desc: "Show, don't tell" },
      { name: "Testimonials", href: "/use-cases/testimonials", desc: "Social proof at scale" },
      { name: "Social Content", href: "/use-cases/social-content", desc: "TikTok, Reels, Shorts" },
      { name: "Explainer Videos", href: "/use-cases/explainers", desc: "Break down complex topics" },
      { name: "Localization", href: "/use-cases/localization", desc: "One video, 29 languages" },
    ],
  },
];

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 glass border-b border-border/60">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="/" className="flex items-center">
          <img src="/logo/svg/logo-full-dark.svg" alt="members.mom" className="h-4" />
        </a>

        {/* Center nav — desktop */}
        <div className="hidden items-center gap-6 text-[13px] text-muted md:flex absolute left-1/2 -translate-x-1/2">
          <a href="/pricing" className="transition-colors hover:text-foreground">Pricing</a>

          {/* Use Cases dropdown trigger */}
          <button
            type="button"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground cursor-pointer"
            onMouseEnter={() => setMegaOpen(true)}
            onClick={() => setMegaOpen(!megaOpen)}
          >
            Use Cases
            <ChevronDown className={`size-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
          </button>

          <a href="/blog" className="transition-colors hover:text-foreground">Blog</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2.5">
          <button type="button" className="hidden text-[13px] text-muted transition-colors hover:text-foreground sm:inline-flex px-3 py-1.5">
            Log in
          </button>
          <button type="button" className="rounded-full bg-foreground px-4 py-1.5 text-[13px] font-medium text-background transition-colors hover:bg-foreground/85 cursor-pointer">
            Get Started
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex size-8 items-center justify-center text-foreground cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mega menu — desktop */}
      {megaOpen && (
        <div
          className="hidden md:block absolute inset-x-0 top-full border-b border-border/60 bg-background shadow-lg shadow-black/[0.05]"
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="mx-auto max-w-6xl px-8 py-8">
            <div className="grid grid-cols-[1fr_1fr_auto] gap-10">
              {useCases.map((group) => (
                <div key={group.category}>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted mb-4">
                    {group.category}
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {group.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group block rounded-lg p-2.5 -m-2.5 transition-colors hover:bg-card-hover"
                        onClick={() => setMegaOpen(false)}
                      >
                        <p className="text-sm font-medium text-foreground group-hover:text-foreground">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Featured video */}
              <div className="flex flex-col items-center gap-3 pl-6 border-l border-border/60">
                <div className="w-[120px]">
                  <VideoCard showMute={false} />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold">See it in action</p>
                  <p className="text-[11px] text-muted mt-0.5">AI-generated UGC</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
              <p className="text-sm text-muted">Not sure which fits? We can help.</p>
              <a href="/use-cases" className="text-sm font-medium text-foreground hover:underline">
                View all use cases →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border/60 glass">
          <div className="px-5 py-4 space-y-3">
            <a href="/pricing" className="block text-sm text-foreground py-1.5" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="/use-cases" className="block text-sm text-foreground py-1.5" onClick={() => setMobileOpen(false)}>Use Cases</a>
            <a href="/blog" className="block text-sm text-foreground py-1.5" onClick={() => setMobileOpen(false)}>Blog</a>
            <div className="pt-2 border-t border-border/60">
              <a href="/login" className="block text-sm text-muted py-1.5">Log in</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
