import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Plans Starting at $49/mo | ReUGC",
  description: "Simple, transparent pricing for AI UGC videos. Starter $49/mo, Pro $99/mo, Pro Plus $199/mo. 50x cheaper than hiring creators. Cancel anytime.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
