import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for 4K Live IPTV. Learn how we collect, use, and protect your personal information.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://4kliveiptv.vip/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-invert prose-headings:text-white prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: April 2025</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you purchase a subscription or contact us, we may collect the following
                information: your name, email address, and payment information (processed securely
                by our payment providers — we do not store card details). We also collect basic
                usage data such as device type and connection logs to maintain service quality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To process your subscription and deliver your service credentials.</li>
                <li>To send transactional emails (order confirmation, renewal reminders).</li>
                <li>To provide customer support when you contact us.</li>
                <li>To improve our service and troubleshoot technical issues.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may
                share data with trusted service providers (payment processors, hosting providers)
                solely to operate our service. These providers are bound by confidentiality
                agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses essential cookies to ensure proper functionality. We also use
                analytics cookies (Vercel Analytics) to understand how visitors interact with our
                site. No personal data is stored in these analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data for as long as your subscription is active and for a reasonable
                period afterward for accounting and legal compliance. You may request deletion of
                your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete the personal information we hold
                about you. To exercise these rights, contact us at{' '}
                <a
                  href="mailto:itv4k.iptv.store@gmail.com"
                  className="text-accent hover:text-accent/80"
                >
                  itv4k.iptv.store@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures including SSL encryption to protect
                your personal information. However, no method of transmission over the internet is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a
                  href="mailto:itv4k.iptv.store@gmail.com"
                  className="text-accent hover:text-accent/80"
                >
                  itv4k.iptv.store@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
