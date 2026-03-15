"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Check, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    desc: "For creators and small brands getting started with AI video.",
    features: [
      "10 videos per month",
      "20+ AI actors",
      "Commercial usage rights",
      "Email support",
    ],
    cta: "Get Started",
    tag: null,
    featured: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    desc: "For growing brands that need volume and quality.",
    features: [
      "25 videos per month",
      "100+ AI actors",
      "AI script generation",
      "Custom brand kit",
      "Priority support",
      "29 languages",
    ],
    cta: "Get Started",
    tag: "Most Popular",
    featured: true,
  },
  {
    name: "Pro Plus",
    price: "$199",
    period: "/mo",
    desc: "For teams and agencies producing at scale.",
    features: [
      "60 videos per month",
      "100+ AI actors",
      "AI script generation",
      "Custom brand kit",
      "API access",
      "Dedicated account manager",
      "29 languages",
    ],
    cta: "Get Started",
    tag: "Best Value",
    featured: false,
  },
];

const faqCategories = [
  {
    title: "About members.mom",
    questions: [
      {
        q: "What is members.mom?",
        a: "members.mom is an AI video maker that lets you create UGC-style videos using lifelike AI actors. Write a script (or let our AI write one), pick an actor, and get a polished video in under 2 minutes.",
      },
      {
        q: "How is this different from other AI video tools?",
        a: "Most AI video tools produce robotic, obviously-fake content. Our actors have natural expressions, gestures, and lip-sync that audiences actually engage with. The result is content that converts — not just content that exists.",
      },
      {
        q: "Who is members.mom built for?",
        a: "Any brand that needs video content at scale — e-commerce, SaaS, beauty, fitness, real estate, finance, and agencies. If you're spending money on creators or struggling to produce enough content, members.mom is for you.",
      },
      {
        q: "Is the video quality good enough for paid ads?",
        a: "Yes. Our videos are used in paid campaigns across Meta, TikTok, YouTube, and Google. The AI actors are realistic enough that most viewers can't tell the difference.",
      },
    ],
  },
  {
    title: "Video Generation",
    questions: [
      {
        q: "What do I get when I generate a video?",
        a: "A fully rendered, ready-to-publish video file with your chosen AI actor delivering your script. It includes natural lip-sync, expressions, and gestures. Download it and use it anywhere.",
      },
      {
        q: "Can I control how the actors look and sound?",
        a: "Yes. You choose the actor, the tone, the pacing, and the language. The AI handles the rest — expressions, gestures, and lip-sync are all generated to match the content naturally.",
      },
      {
        q: "How many languages are supported?",
        a: "29 languages with native-sounding speech and perfect lip-sync. Your AI actor will look like they're actually speaking the language, not just dubbed over.",
      },
      {
        q: "How fast is video generation?",
        a: "Under 2 minutes from script to finished video. Most videos are ready in about 90 seconds.",
      },
    ],
  },
  {
    title: "Licensing & Billing",
    questions: [
      {
        q: "Can I use the videos commercially?",
        a: "Absolutely. All plans include full commercial usage rights. Use your videos for paid ads, social media, websites, email campaigns — anywhere you need them.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. No contracts, no cancellation fees. Cancel anytime and your access continues until the end of your billing period.",
      },
      {
        q: "Do unused videos roll over?",
        a: "No, video credits reset each billing cycle. We recommend choosing the plan that matches your monthly production needs.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Anytime. Upgrades take effect immediately with prorated billing. Downgrades apply at the start of your next billing cycle.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [a]);

  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[15px] font-medium pr-4 group-hover:text-foreground transition-colors">{q}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-muted transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? `${height}px` : "0px", opacity: open ? 1 : 0 }}
      >
        <div ref={contentRef}>
          <p className="pb-5 text-sm text-muted leading-relaxed pr-8">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      {/* Pricing */}
      <section className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple,{" "}
              <em className="font-normal italic" style={{ fontFamily: "var(--font-serif)" }}>
                transparent
              </em>{" "}
              pricing
            </h1>
            <p className="mt-4 text-base text-muted leading-relaxed">
              50x cheaper than hiring creators. No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 flex flex-col ${
                  plan.featured
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card"
                }`}
              >
                {plan.tag && (
                  <span className={`absolute -top-3 left-6 rounded-full px-3 py-0.5 text-[11px] font-semibold ${
                    plan.featured
                      ? "bg-background text-foreground"
                      : "bg-foreground text-background"
                  }`}>
                    {plan.tag}
                  </span>
                )}

                <p className={`text-sm font-semibold ${plan.featured ? "text-background/70" : "text-muted"}`}>
                  {plan.name}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`text-sm ${plan.featured ? "text-background/50" : "text-muted"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm leading-relaxed ${plan.featured ? "text-background/60" : "text-muted"}`}>
                  {plan.desc}
                </p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className={`size-4 shrink-0 mt-0.5 ${plan.featured ? "text-background/60" : "text-foreground/40"}`} />
                      <span className={`text-sm ${plan.featured ? "text-background/80" : ""}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-7 w-full rounded-full py-2.5 text-sm font-medium transition cursor-pointer ${
                    plan.featured
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/85"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">FAQ</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Got{" "}
              <em className="font-normal italic" style={{ fontFamily: "var(--font-serif)" }}>
                questions?
              </em>
            </h2>
          </div>

          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">{cat.title}</h3>
                <div className="rounded-2xl border border-border bg-card px-6">
                  {cat.questions.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}