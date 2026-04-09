'use client';

import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-border">
        <Link href="/" className="font-domine text-2xl font-bold text-accent hover:opacity-80 transition">
          Grateful
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm font-semibold text-accent">
            Terms
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="font-domine text-4xl font-bold mb-12">Terms and Conditions</h1>

        <div className="space-y-8 font-dm-sans">
          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By downloading, installing, or using Grateful, you accept and agree to be bound by these Terms and Conditions. Grateful is a free app designed to help more people experience God&apos;s Word every day through personalized daily verses. If you do not agree to these terms, please do not use the app.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We grant you a personal, non-exclusive, non-transferable, revocable license to use Grateful for your own private, non-commercial purposes. The app is completely free to download and use. Optional donations are available in three tiers ($4.99, $9.99, and $19.99) to support development and help us reach more people with daily Scripture. These donations are entirely voluntary and are processed securely through the Apple App Store.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Modify, copy, or create derivative works of the app</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code</li>
              <li>Distribute, sell, or commercially exploit any part of the app</li>
              <li>Use the app for any unlawful purpose or to violate any applicable laws</li>
              <li>Remove or alter any copyright, trademark, or other proprietary notices</li>
              <li>Attempt to gain unauthorized access to any part of the app&apos;s systems</li>
            </ul>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">3. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The app and all content (including personalized daily Bible verses) are provided &quot;as is&quot; and &quot;as available.&quot; Grateful makes no warranties, express or implied, regarding the accuracy, completeness, or spiritual application of any verse. The verses are for personal inspiration and reflection only and are not intended as professional, legal, or medical advice.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">4. Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Grateful and its developers shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of (or inability to use) the app, even if advised of the possibility of such damages. This includes any loss of data, profit, or spiritual benefit.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide accurate and uplifting Bible verses from reliable public-domain and licensed translations. However, the app may contain occasional technical errors or display verses from different translations. Grateful reserves the right to update or change content at any time without notice to keep the daily verses fresh and relevant.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">6. Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              The app may occasionally include links to external websites (such as Bible resources or donation processing pages). Grateful is not responsible for the content, privacy practices, or availability of any linked third-party sites. Use of any linked website is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">7. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Grateful may revise these Terms and Conditions at any time. We will notify users of material changes through the app or our website. By continuing to use the app after changes are posted, you agree to the updated terms. Our goal remains the same: helping more people connect with God&apos;s Word daily.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by and construed in accordance with the laws of the United States. You agree to submit to the exclusive jurisdiction of the courts located in the United States for any disputes arising from your use of Grateful.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">9. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You are responsible for using Grateful in a respectful and appropriate manner. Since the app is fully local and stores everything on your device, you control your own data. You agree not to use the app to distribute harmful content, infringe on copyrights, or interfere with the experience of other users. Donations are completely optional and help us continue building features that bring more people closer to Scripture.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at: support@grateful.app
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-8 text-center text-sm text-muted-foreground mt-16">
        <p>&copy; 2026 Grateful. All rights reserved.</p>
      </footer>
    </div>
  );
}