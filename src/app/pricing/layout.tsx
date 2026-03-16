import type { Metadata } from "next";
import { ogImageUrl } from "@/lib/og";

export const metadata: Metadata = {
  title: "Pricing — Plans Starting at $49/mo | ReUGC",
  description: "Simple, transparent pricing for AI UGC videos. Starter $49/mo, Pro $99/mo, Pro Plus $199/mo. 50x cheaper than hiring creators. Cancel anytime.",
  openGraph: { images: [{ url: ogImageUrl("Pricing", "Simple, Transparent Pricing", "Starter $49/mo, Pro $99/mo, Pro Plus $199/mo. 50x cheaper than hiring creators."), width: 1200, height: 630 }] },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
