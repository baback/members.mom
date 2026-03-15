"use client";

const links = {
  Product: [
    { name: "Pricing", href: "/pricing" },
    { name: "UGC Generator", href: "/use-cases/ugc-ads" },
    { name: "AI Actors", href: "/use-cases/testimonials" },
    { name: "Product Demos", href: "/use-cases/product-demos" },
    { name: "Localization", href: "/use-cases/localization" },
  ],
  "Use Cases": [
    { name: "E-Commerce", href: "/use-cases/ecommerce" },
    { name: "Beauty & Skincare", href: "/use-cases/beauty" },
    { name: "SaaS & Software", href: "/use-cases/saas" },
    { name: "Fitness", href: "/use-cases/fitness" },
    { name: "Real Estate", href: "/use-cases/real-estate" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "All Use Cases", href: "/use-cases" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="border-t border-background/10" />

        <div className="py-14 lg:flex lg:gap-16">
          <div className="lg:max-w-xs shrink-0">
            <a href="/">
              <img src="/logo/svg/logo-full-white.svg" alt="members.mom" className="h-5" />
            </a>
            <p className="mt-3 text-sm text-background/50 leading-relaxed">
              AI video maker for brands.<br />50x cheaper. 10x better.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3 lg:mt-0 lg:ml-auto lg:max-w-2xl lg:gap-12">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-background/40">{title}</h3>
                <ul className="mt-3.5 space-y-2.5">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-background/65 transition-colors hover:text-background">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-background/10" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-background/40">&copy; {new Date().getFullYear()} members.mom</p>
          <div className="flex gap-4 text-xs text-background/40">
            <a href="/privacy" className="hover:text-background/60 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-background/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
