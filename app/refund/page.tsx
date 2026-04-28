import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy – 7-Day Money-Back Guarantee',
  description:
    '4K Live IPTV offers a full 7-day money-back guarantee on all plans. No questions asked. Learn how to request a refund.',
  alternates: { canonical: 'https://4kliveiptv.vip/refund' },
}

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: April 2025</p>

          {/* Highlight */}
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-10">
            <p className="text-lg font-semibold text-accent mb-2">7-Day Money-Back Guarantee</p>
            <p className="text-muted-foreground">
              We are confident in the quality of our service. If you are not satisfied within the
              first 7 days of your subscription, contact us and we will issue a full refund —
              no questions asked.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Refund requests must be made within 7 calendar days of your purchase date.</li>
                <li>The refund applies to all subscription plans (1, 3, 6, and 12 months).</li>
                <li>
                  Only one refund per customer per 12-month period is eligible under this
                  guarantee.
                </li>
                <li>
                  Accounts found to have violated our Terms of Service are not eligible for refunds.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How to Request a Refund</h2>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>
                  Contact us via WhatsApp at{' '}
                  <a
                    href="https://wa.me/212623636455"
                    className="text-accent hover:text-accent/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +212 623-636455
                  </a>{' '}
                  or email us at{' '}
                  <a
                    href="mailto:itv4k.iptv.store@gmail.com"
                    className="text-accent hover:text-accent/80"
                  >
                    itv4k.iptv.store@gmail.com
                  </a>
                  .
                </li>
                <li>
                  Include your order details: the email address used for purchase and your order
                  date.
                </li>
                <li>
                  Optionally, let us know why you are requesting a refund so we can improve our
                  service.
                </li>
                <li>
                  Refunds are processed within 3–5 business days to your original payment method.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">After the 7-Day Period</h2>
              <p className="text-muted-foreground leading-relaxed">
                Subscriptions are non-refundable after the 7-day guarantee period has expired.
                However, if you experience a service issue, please contact our support team — we
                will do everything we can to resolve the problem or offer a service extension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Processing Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once a refund is approved, please allow 3–5 business days for the funds to appear
                in your account. Processing times may vary depending on your bank or payment
                provider.
              </p>
            </section>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/212623636455" target="_blank" rel="noopener noreferrer">
                Request Refund via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="border-secondary/50 hover:bg-secondary/10">
              <Link href="/contact">Other Contact Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
