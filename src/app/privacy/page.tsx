import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <article className="px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted mb-10">Last updated: March 1, 2026</p>

          <div className="space-y-8 text-sm text-muted leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">1. Information We Collect</h2>
              <p>We collect information you provide directly, such as your name, email address, and payment details when you create an account or subscribe to our services. We also collect usage data including how you interact with our platform, the videos you generate, and your device and browser information.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">2. How We Use Your Information</h2>
              <p>We use your information to provide and improve our services, process payments, send you updates and marketing communications (with your consent), and ensure the security of our platform. We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">3. Data Storage and Security</h2>
              <p>Your data is stored on secure servers with industry-standard encryption. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">4. Your Content</h2>
              <p>Videos you generate using our platform are your property. We do not claim ownership over your generated content. We may use anonymized, aggregated data to improve our AI models, but we will never use your specific content without your explicit consent.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">5. Cookies</h2>
              <p>We use essential cookies to keep our platform running and analytics cookies to understand how you use our service. You can manage your cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data at any time. You can also request a copy of your data or ask us to stop processing it. Contact us at privacy@ReUGC to exercise these rights.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">7. Changes to This Policy</h2>
              <p>We may update this policy from time to time. We will notify you of significant changes via email or through our platform. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-2">8. Contact</h2>
              <p>If you have questions about this privacy policy, contact us at privacy@ReUGC.</p>
            </section>
          </div>
        </div>
      </article>
      <CTA />
      <Footer />
    </main>
  );
}
