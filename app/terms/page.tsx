import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for 4K Live IPTV subscriptions.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://4kliveiptv.vip/terms' },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: April 2025</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By purchasing a subscription from 4K Live IPTV, you agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                4K Live IPTV provides access to live TV channels and video-on-demand content via
                internet protocol. Access is provided through login credentials (username, password,
                server URL or M3U playlist) delivered to your email after purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Acceptable Use</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Subscriptions are for personal, non-commercial use only. You may not resell,
                  sublicense, or share your credentials with individuals outside your household
                  without a multi-connection plan.
                </li>
                <li>
                  You may not use our service to record, redistribute, or commercially exploit any
                  content.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of your account
                  credentials.
                </li>
                <li>
                  Violations may result in immediate suspension without refund.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Payment & Billing</h2>
              <p className="text-muted-foreground leading-relaxed">
                All payments are processed securely. Subscriptions are prepaid and do not
                auto-renew. Prices are displayed in USD and are subject to change. Your current
                subscription price is locked for its duration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer a 7-day money-back guarantee on all plans. Refund requests made within 7
                days of purchase will be honored. After 7 days, subscriptions are non-refundable.
                See our{' '}
                <a href="/refund" className="text-accent hover:text-accent/80">
                  Refund Policy
                </a>{' '}
                for full details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive for 99.95% uptime but cannot guarantee uninterrupted service. Planned
                maintenance and unforeseen technical issues may occasionally affect availability.
                We will not be liable for any interruption in service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content available through our service is protected by copyright. You are
                granted a limited, non-exclusive license to access the content for personal viewing
                only. No content may be downloaded, copied, or redistributed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                4K Live IPTV shall not be liable for any indirect, incidental, or consequential
                damages arising from use or inability to use our service. Our total liability
                shall not exceed the amount paid for your current subscription period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these terms at any time. Continued use of the
                service after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, contact us at{' '}
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
