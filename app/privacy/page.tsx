'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-border">
        <Link href="/" className="font-domine text-2xl font-bold text-accent hover:opacity-80 transition">
          Grateful
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/privacy" className="text-sm font-semibold text-accent">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition">
            Terms
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="font-domine text-4xl font-bold mb-12">Privacy Policy</h1>

        <div className="space-y-8 font-dm-sans">
          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to protecting your privacy. Grateful is a fully local, offline-first app. This Privacy Policy explains that we collect absolutely no personal data — everything you see in the app (including your personalized daily verses) lives only on your phone.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Grateful collects no information about you. The app is designed to keep everything private and local on your device. Specifically:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Personal Data: We do not collect your name, email address, or any other personally identifiable information.</li>
              <li>Device Data: We do not collect or transmit device identifiers, device type, or operating system details.</li>
              <li>Usage Data: We do not track your interactions, verses viewed, or any activity within the app.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">3. Use of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Because we collect no data, there is nothing for us to use or analyze. All personalization of your daily Bible verses happens directly on your device using only the information you choose to keep locally.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Generate and display your personalized daily verse on your phone</li>
              <li>Store your saved verses and reflections privately on your device</li>
              <li>Provide a beautiful, intuitive experience without ever sending data anywhere</li>
            </ul>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">4. Disclosure of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not disclose, share, or transmit any information because nothing is collected or leaves your device. Your data never reaches our servers or any third parties.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">5. Security of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since all your data stays on your device, you have complete control and the highest level of privacy. The app is built with security best practices to protect the information that lives locally on your phone.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at: privacy@grateful.app
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">7. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting to the website. If we make material changes to this policy, we will notify you here that it has been updated.
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