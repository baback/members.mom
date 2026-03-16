import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reugc.com"),
  title: {
    default: "ReUGC — AI UGC Video Maker | 50x Cheaper, 10x More Conversions",
    template: "%s",
  },
  description:
    "Create UGC videos with AI actors that convert 10x more — at 50x less cost. No creators, no studios, no waiting.",
  icons: {
    icon: "/logo/png/favicon.png?v=2",
  },
  openGraph: {
    type: "website",
    siteName: "ReUGC",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}
