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
              By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on our application for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the application</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              <li>Attempt to gain unauthorized access to any portion or feature of the application</li>
              <li>Knowingly transmit any data, send or upload any material that contains viruses or any other computer code</li>
            </ul>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">3. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on our application are provided on an &apos;as is&apos; basis. AppName makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">4. Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall AppName or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the application, even if AppName or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on the application could include technical, typographical, or photographic errors. AppName does not warrant that any of the materials on the application are accurate, complete, or current. AppName may make changes to the materials contained on the application at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">6. Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              AppName has not reviewed all of the sites linked to its application and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AppName of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">7. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              AppName may revise these terms of service for the application at any time without notice. By using the application, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which AppName is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">9. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree that you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password. You agree to notify AppName immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="font-domine text-2xl font-bold mb-4 text-accent">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at: support@appname.com
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
