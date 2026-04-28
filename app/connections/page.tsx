'use client'

import { useState } from 'react'
import { Check, Shield, Zap, Headphones, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const durations = [
  { label: '1 Month', key: '1m', saving: null },
  { label: '3 Months', key: '3m', saving: 'Save 10%' },
  { label: '6 Months', key: '6m', saving: 'Save 20%' },
  { label: '12 Months', key: '12m', saving: 'Save 35%' },
]

const devicePlans = [
  {
    devices: 1,
    label: '1 Device',
    description: 'Perfect for solo streamers',
    popular: false,
    prices: { '1m': 18, '3m': 45, '6m': 65, '12m': 89 },
  },
  {
    devices: 2,
    label: '2 Devices',
    description: 'Great for couples',
    popular: false,
    prices: { '1m': 30, '3m': 60, '6m': 89, '12m': 170 },
  },
  {
    devices: 3,
    label: '3 Devices',
    description: 'Ideal for small families',
    popular: true,
    prices: { '1m': 40, '3m': 117, '6m': 177, '12m': 252 },
  },
  {
    devices: 4,
    label: '4 Devices',
    description: 'For the whole family',
    popular: false,
    prices: { '1m': 56, '3m': 140, '6m': 236, '12m': 320 },
  },
  {
    devices: 5,
    label: '5 Devices',
    description: 'Maximum connections',
    popular: false,
    prices: { '1m': 60, '3m': 150, '6m': 275, '12m': 395 },
  },
]

const includedFeatures = [
  'SD / HD / FHD / 4K Quality',
  'Over 40,000 Live Channels',
  'Over 100,000 VOD Content',
  'Electronic Program Guide',
  '24/7 Customer Support',
  '7-Day Money-Back Guarantee',
  'Instant Activation',
  'Anti-Freeze Technology',
  'Catch-Up TV & Replay Feature',
]

const pricingFaqs = [
  {
    q: 'What does "simultaneous connections" mean in a 4K IPTV plan?',
    a: 'It means the number of screens streaming at the same time on one subscription. A 3-device premium 4K IPTV plan lets 3 people in your household each watch a different channel in 4K UHD simultaneously.',
  },
  {
    q: 'Can I use the multi-screen 4K IPTV plan on Firestick and Apple TV at the same time?',
    a: 'Yes. Our premium 4K IPTV works on any combination of devices — Amazon Firestick 4K, Apple TV 4K, Smart TVs, Android boxes, phones, and PCs — all streaming at once on a multi-device plan.',
  },
  {
    q: 'Can I upgrade my multi-screen 4K IPTV plan later?',
    a: 'Yes. Contact our 24/7 support team and we will upgrade your plan and apply a prorated credit for your remaining subscription time.',
  },
  {
    q: 'Are there any hidden fees in your 4K IPTV plans?',
    a: 'No. The price shown is the total price. No setup fees, no auto-renewals, no hidden charges — just the best 4K IPTV at a transparent price.',
  },
  {
    q: 'What payment methods do you accept for 4K IPTV subscriptions?',
    a: 'We accept major credit cards, PayPal, and cryptocurrency. All payments are processed securely with SSL encryption.',
  },
]

const connectionsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does "simultaneous connections" mean in a 4K Live IPTV multi-screen package?',
      acceptedAnswer: { '@type': 'Answer', text: 'It means the number of screens that can stream your 4K Live IPTV at the same time on one subscription. A 3-device package lets 3 people each watch a different channel in 4K UHD simultaneously.' },
    },
    {
      '@type': 'Question',
      name: 'Can I use the 4K Live IPTV multi-screen package on Firestick and Apple TV at the same time?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The 4K Live IPTV multi-screen package works on any combination of devices — Firestick 4K, Apple TV 4K, Smart TVs, Android boxes, phones, and PCs — all streaming simultaneously.' },
    },
    {
      '@type': 'Question',
      name: 'Can I upgrade my 4K Live IPTV multi-screen package later?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Contact our 24/7 support team and we will upgrade your 4K Live IPTV package and apply a prorated credit for your remaining subscription time.' },
    },
    {
      '@type': 'Question',
      name: 'Are there hidden fees in the 4K Live IPTV packages?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. The price shown is the total price. No setup fees, no auto-renewals, no hidden charges — just the best 4K Live IPTV at a transparent price.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://4kliveiptv.vip' },
    { '@type': 'ListItem', position: 2, name: '4K Live IPTV Multi-Screen Package', item: 'https://4kliveiptv.vip/connections' },
  ],
}

const connectionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '4K Live IPTV Multi-Screen Package – 1 to 5 Devices',
  description:
    'Official 4K Live IPTV multi-screen package. Stream on 1 to 5 devices simultaneously with 40,000+ live channels, 200,000+ VOD, 4K UHD quality, and instant activation. From $18/month.',
  provider: { '@type': 'Organization', name: '4K Live IPTV', url: 'https://4kliveiptv.vip' },
  areaServed: 'Worldwide',
  serviceType: '4K Live IPTV Multi-Screen Subscription',
  offers: [
    { '@type': 'Offer', name: '4K Live IPTV – 1 Device Package', price: '18', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: '4K Live IPTV – 3 Devices Package', price: '40', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: '4K Live IPTV – 5 Devices Package', price: '60', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  ],
}

export default function PricingPage() {
  const [selectedDuration, setSelectedDuration] = useState<'1m' | '3m' | '6m' | '12m'>('1m')

  const currentDuration = durations.find((d) => d.key === selectedDuration)!

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(connectionsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(connectionsFaqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
            <p className="text-sm font-medium text-secondary">✅ Official 4K Live IPTV – Multi-Screen Package</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            4K Live IPTV <span className="text-accent">Multi-Screen Package</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The official <strong>4K Live IPTV multi-screen package</strong> — stream on 1 to 5 devices at the same time. 40,000+ live channels, 200,000+ VOD, 4K UHD quality, and instant activation. One plan, the whole family covered.
          </p>
        </div>
      </section>

      {/* Duration Toggle */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="bg-card border border-border rounded-xl p-1.5 flex gap-1">
            {durations.map((d) => (
              <button
                key={d.key}
                onClick={() => setSelectedDuration(d.key as '1m' | '3m' | '6m' | '12m')}
                className={`flex-1 flex flex-col items-center py-2.5 px-2 rounded-lg text-sm font-medium transition-all ${
                  selectedDuration === d.key
                    ? 'bg-accent text-accent-foreground shadow'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>{d.label}</span>
                {d.saving && (
                  <span className={`text-xs mt-0.5 ${
                    selectedDuration === d.key ? 'text-accent-foreground/80' : 'text-accent'
                  }`}>
                    {d.saving}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Device Plan Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {devicePlans.map((plan) => (
              <Card
                key={plan.devices}
                className={`bg-card border-border hover:border-accent/50 transition relative flex flex-col ${
                  plan.popular ? 'border-2 border-accent/60 shadow-lg shadow-accent/10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Device count badge */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 mb-4 mx-auto">
                    <span className="text-xl font-bold text-accent">{plan.devices}</span>
                  </div>

                  <h3 className="text-lg font-bold text-center mb-1">{plan.label}</h3>
                  <p className="text-xs text-muted-foreground text-center mb-5">{plan.description}</p>

                  {/* Price */}
                  <div className="text-center mb-2">
                    <span className="text-4xl font-bold text-accent">${plan.prices[selectedDuration]}</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mb-6">
                    for {currentDuration.label.toLowerCase()}
                  </p>

                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-6"
                  >
                    <a
                      href={`https://wa.me/212623636455?text=${encodeURIComponent(`Hi! I want to subscribe for ${currentDuration.label} - ${plan.label}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Now
                    </a>
                  </Button>

                  <ul className="space-y-2 text-sm mt-auto">
                    <li className="flex items-center gap-2 text-accent font-medium">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      {plan.devices} simultaneous stream{plan.devices > 1 ? 's' : ''}
                    </li>
                    {includedFeatures.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* All features note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include the complete feature set —{' '}
            <Link href="/#features" className="text-accent hover:text-accent/80 transition">
              see all features ↓
            </Link>
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Everything Included in Every 4K Live IPTV Package</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {includedFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3 border border-border rounded-lg p-4">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Shield className="w-10 h-10 text-accent" />
              <h3 className="font-bold">7-Day Money-Back</h3>
              <p className="text-sm text-muted-foreground">
                Not satisfied? Get a full refund within 7 days, no questions asked.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Zap className="w-10 h-10 text-accent" />
              <h3 className="font-bold">Instant Activation</h3>
              <p className="text-sm text-muted-foreground">
                Your subscription is activated within minutes after payment.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Headphones className="w-10 h-10 text-accent" />
              <h3 className="font-bold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Our team is available around the clock via WhatsApp and email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Customers Say About the 4K Live IPTV Multi-Screen Package</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'David R.',
                review: 'The 4K Live IPTV 3-device package is perfect for my family. We all stream different channels in 4K UHD at the same time with zero buffering. Best multi-screen IPTV I have tried.',
              },
              {
                name: 'Lisa M.',
                review: 'Started with the 4K Live IPTV 1-device package and upgraded to 5 screens after a week. Upgrade was instant, support was amazing. The quality on every screen is outstanding.',
              },
            ].map((t, i) => (
              <Card key={i} className="bg-background border-border p-6 text-left">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">&ldquo;{t.review}&rdquo;</p>
                <p className="font-semibold text-sm">{t.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">4K Live IPTV Multi-Screen Package – FAQ</h2>
          <div className="space-y-4">
            {pricingFaqs.map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your 4K Live IPTV Multi-Screen Package?</h2>
          <p className="text-muted-foreground mb-8">
            Join 50,000+ subscribers of the official 4K Live IPTV. Our team is available 24/7 via WhatsApp to help you choose the right multi-screen package.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
