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
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
              <li>Device Data: Device identifiers such as your device ID, device type, and device operating system.</li>
              <li>Usage Data: Information about your interactions with the Site, including pages visited, features used, and actions taken.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">3. Use of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Create and manage your account</li>
              <li>Process your transactions and send you related information</li>
              <li>Email you regarding updates, news, and general information about the services</li>
              <li>Improve our services and develop new features</li>
              <li>Monitor and analyze trends, usage, and activities for security purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">4. Disclosure of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or in the good-faith belief that such action is necessary to comply with the law and the reasonable requests of lawmen; to protect the security or integrity of our Site; and to exercise or protect the rights, property, or personal safety of AppName, our users, or the public.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">5. Security of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at: privacy@appname.com
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">7. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting to the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-8 text-center text-sm text-muted-foreground mt-16">
        <p>&copy; 2024 AppName. All rights reserved.</p>
      </footer>
    </div>
  );
}
