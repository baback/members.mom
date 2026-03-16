import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ReUGC",
  description: "ReUGC terms of service. Usage rights, billing, and platform rules.",
};
export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <article className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Terms of Service</h1>
          <p className="text-sm text-muted mb-10">Last updated: March 1, 2026</p>

          <div className="space-y-8 text-sm text-muted leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
              <p>By accessing or using ReUGC, you agree to be bound by these Terms of Service. If you do not agree, do not use our platform.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">2. Description of Service</h2>
              <p>ReUGC provides AI-powered video generation tools that allow users to create UGC-style video content using AI actors. Our service includes script generation, AI actor selection, video rendering, and export capabilities.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">3. Account Registration</h2>
              <p>You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">4. Acceptable Use</h2>
              <p>You agree not to use our platform to create content that is illegal, harmful, deceptive, or infringes on the rights of others. We reserve the right to remove content and suspend accounts that violate these terms.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">5. Content Ownership</h2>
              <p>You retain ownership of the videos you create using our platform. By using our service, you grant us a limited license to process your inputs (scripts, settings) solely for the purpose of generating your requested content.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">6. Payment and Billing</h2>
              <p>Paid plans are billed monthly or annually as selected. You may cancel at any time, and your access will continue until the end of your current billing period. Refunds are handled on a case-by-case basis.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">7. Limitation of Liability</h2>
              <p>ReUGC is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of our service.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">8. Changes to Terms</h2>
              <p>We may modify these terms at any time. Continued use of the platform after changes constitutes acceptance. We will notify you of material changes via email.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">9. Contact</h2>
              <p>Questions about these terms? Contact us at legal@ReUGC.</p>
            </section>
          </div>
        </div>
      </article>
      <CTA />
      <Footer />
    </main>
  );
}
