import { Tv, Play, Shield, Zap, Users, Headphones, Check, ChevronRight, Star, Monitor, Smartphone, HardDrive, Globe, Clock, Wifi } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import FAQSection from '@/components/faq-section'
import { CountdownTimer, LiveVisitorCounter } from '@/components/pricing-extras'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Official 4K Live IPTV – Best 4K IPTV | 40,000+ Channels',
  description:
    'Official 4K Live IPTV – Best premium 4K IPTV service. 40,000+ live channels, 200K+ VOD, UHD quality, 99.95% uptime. From $18/mo. Instant activation.',
  keywords: [
    'official 4k live iptv',
    '4k iptv',
    'iptv premium 4k',
    'best 4k iptv',
    'premium 4k iptv',
    '4k uhd iptv',
    'iptv uhd',
    'firestick 4k iptv',
    'iptv smarters pro 4k',
    'iptv apple tv 4k',
  ],
  alternates: { canonical: 'https://4kliveiptv.vip' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: '4K Live IPTV',
    title: 'Official 4K Live IPTV – Best 4K IPTV Service',
    description:
      'Premium 4K IPTV with 40,000+ channels & 200K+ VOD. UHD quality, 99.95% uptime. Plans from $18/mo.',
    url: 'https://4kliveiptv.vip',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Official 4K Live IPTV – Premium Streaming Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@4kliveiptv',
    title: 'Official 4K Live IPTV – Best 4K IPTV Service',
    description: 'Premium 4K IPTV with 40,000+ channels. Plans from $18/mo. Instant activation.',
    images: ['/logo.png'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://4kliveiptv.vip' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the official 4K Live IPTV service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '4K Live IPTV is the official premium 4K IPTV provider with 13+ years of experience. We deliver 40,000+ live channels and 200,000+ VOD content in 4K UHD quality through your internet connection — no cable or satellite needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 4K Live IPTV compatible with Amazon Firestick 4K and Apple TV 4K?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our premium 4K IPTV service works on Amazon Fire TV Stick 4K, Apple TV 4K, Android TV boxes, Smart TVs (Samsung, LG, Sony), iOS and Android phones, Windows and Mac computers, MAG boxes, and Enigma2 receivers. You can also use IPTV Smarters Pro 4K as your player.',
      },
    },
    {
      '@type': 'Question',
      name: 'What quality does your 4K IPTV service support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support all quality levels: 4K UHD, Full HD 1080p, HD 720p, and SD. Our iptv premium 4k streams use advanced codecs including H.265/HEVC, HDR10 and Dolby Vision for the best picture quality on any screen.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is activation after I buy the best 4K IPTV plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Activation is instant. Within minutes of payment you receive your credentials via WhatsApp or email, 24/7 — no waiting, no delays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a money-back guarantee on your IPTV 4K plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All our 4K IPTV plans come with a full 7-day money-back guarantee, no questions asked. We also offer a free 2-hour test so you can verify stream quality before you commit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use your premium 4K IPTV on multiple screens at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We offer plans supporting 1 to 5 simultaneous connections. Your whole family can stream different 4K UHD channels at the same time with no quality loss.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Official 4K Live IPTV Subscription – Best 4K IPTV Service',
  description:
    'Official premium 4K IPTV service with 40,000+ live channels and 200,000+ VOD content in 4K UHD / Full HD quality. Best 4K IPTV provider with 13+ years of experience, 99.95% uptime, and instant activation.',
  provider: { '@type': 'Organization', name: '4K Live IPTV', url: 'https://4kliveiptv.vip' },
  areaServed: 'Worldwide',
  serviceType: 'IPTV Streaming Service',
  offers: [
    { '@type': 'Offer', name: '1 Month 4K IPTV Plan', price: '18', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: '3 Month 4K IPTV Plan', price: '40', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: '6 Month 4K IPTV Plan', price: '65', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    { '@type': 'Offer', name: '12 Month 4K IPTV Plan', price: '89', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  ],
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
                <p className="text-sm font-medium text-secondary">✅ Official 4K Live IPTV Service</p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">4.9/5 — Trusted by 25,000+ subscribers</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                <span className="text-[#111111]">Official 4K Live IPTV</span>
                <br />
                <span className="text-accent">The Best 4K IPTV Service</span>
              </h1>

              <p className="text-lg text-gray-500 mb-8 max-w-xl leading-relaxed">
                The <strong className="text-gray-700">official 4K Live IPTV</strong> — your premium 4K IPTV provider with 40,000+ live channels, 200,000+ VOD, and crystal-clear 4K UHD quality. Stream on Firestick, Apple TV, Smart TV or any device. Instant activation, zero buffering, 13+ years trusted.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  <Link href="/#pricing">
                    Get Started
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  <Link href="#features">See Features</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <Image
                src="/hero-character.png"
                alt="Official 4K Live IPTV – Best Premium 4K IPTV Streaming Service"
                width={520}
                height={560}
                className="w-full max-w-md drop-shadow-xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Banner */}
      <section className="bg-accent py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-accent-foreground text-center sm:text-left">
          <p className="text-sm font-medium">
            🎁 <strong>Try Before You Buy</strong> — Get a free 2-hour test before subscribing. No credit card needed.
          </p>
          <a
            href="https://wa.me/212623636455?text=Hi!%20I%20want%20to%20request%20a%20free%202h%20IPTV%20test"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-accent text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Request Free Trial →
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-border" aria-label="Service statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">13+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">40,000+</p>
              <p className="text-sm text-muted-foreground">Live Channels</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">200,000+</p>
              <p className="text-sm text-muted-foreground">VOD Content</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">99.95%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Stream 4K IPTV on Any Device</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our premium 4K IPTV works on Firestick 4K, Apple TV 4K, Smart TVs, Android boxes, phones, and PCs. Compatible with IPTV Smarters Pro and all major players.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {deviceCards.map((device) => (
              <Card key={device.name} className="bg-card border-border hover:border-accent/50 transition p-6 text-center">
                <device.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-sm">{device.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{device.desc}</p>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold tracking-wide uppercase">
              The Clear Choice
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5">
              Why Choose <span className="text-accent">4K Live IPTV</span>
              <br className="hidden sm:block" /> Over Other Providers?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not all IPTV services are created equal. See exactly what sets us apart — feature by feature.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border shadow-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left px-6 py-5 font-semibold text-muted-foreground bg-card/80 w-[38%] rounded-tl-2xl border-b border-border">
                    Feature
                  </th>
                  <th className="px-6 py-5 text-center bg-accent/10 border-b border-accent/30 w-[31%]">
                    <span className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent/70">Our Service</span>
                      <span className="text-base font-extrabold text-accent">4K Live IPTV</span>
                    </span>
                  </th>
                  <th className="px-6 py-5 text-center bg-card/80 border-b border-border w-[31%] rounded-tr-2xl">
                    <span className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">Competition</span>
                      <span className="text-base font-bold text-muted-foreground">Other Providers</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Stream Quality',
                    icon: '🎬',
                    ours: '4K UHD / FHD / HD / SD',
                    theirs: 'HD only or lower',
                    highlight: true,
                  },
                  {
                    feature: 'Live Channels',
                    icon: '📡',
                    ours: '50,000+ Channels',
                    theirs: '5,000 – 15,000',
                    highlight: false,
                  },
                  {
                    feature: 'VOD Library',
                    icon: '🎥',
                    ours: '200,000+ Movies & Series',
                    theirs: 'Limited library',
                    highlight: true,
                  },
                  {
                    feature: 'Catch-Up TV & Replay',
                    icon: '⏪',
                    ours: { check: true, label: '7-Day Catch-Up' },
                    theirs: { check: false, label: 'Not available' },
                    highlight: false,
                  },
                  {
                    feature: 'Anti-Freeze Technology',
                    icon: '⚡',
                    ours: { check: true, label: 'Zero buffering' },
                    theirs: { check: false, label: 'Frequent freezing' },
                    highlight: true,
                  },
                  {
                    feature: 'Simultaneous Screens',
                    icon: '📺',
                    ours: 'Up to 5 devices',
                    theirs: '1 – 2 devices max',
                    highlight: false,
                  },
                  {
                    feature: '24/7 Customer Support',
                    icon: '💬',
                    ours: { check: true, label: 'WhatsApp + Email' },
                    theirs: { check: false, label: 'Ticket only / slow' },
                    highlight: true,
                  },
                  {
                    feature: 'Money-Back Guarantee',
                    icon: '🛡️',
                    ours: { check: true, label: '7-Day guarantee' },
                    theirs: { check: false, label: 'No refund policy' },
                    highlight: false,
                  },
                  {
                    feature: 'Activation Time',
                    icon: '🚀',
                    ours: { check: true, label: 'Within minutes' },
                    theirs: { check: false, label: 'Up to 2h wait' },
                    highlight: true,
                  },
                  {
                    feature: 'Years in Service',
                    icon: '🏆',
                    ours: '13+ years trusted',
                    theirs: 'Often under 1 year',
                    highlight: false,
                  },
                ].map((row, i) => {
                  const renderCell = (val: string | { check: boolean; label: string }, isOurs: boolean) => {
                    if (typeof val === 'string') {
                      return (
                        <span className={isOurs ? 'font-semibold text-accent' : 'text-muted-foreground'}>
                          {val}
                        </span>
                      )
                    }
                    return (
                      <span className="inline-flex items-center gap-1.5">
                        <span className={`text-base ${val.check ? 'text-green-400' : 'text-red-400/70'}`}>
                          {val.check ? '✓' : '✗'}
                        </span>
                        <span className={val.check ? 'font-semibold text-accent' : 'text-muted-foreground'}>
                          {val.label}
                        </span>
                      </span>
                    )
                  }
                  return (
                    <tr
                      key={i}
                      className={`border-b border-border last:border-0 transition-colors group ${
                        row.highlight ? 'bg-background/60' : 'bg-card/10'
                      } hover:bg-accent/5`}
                    >
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-3">
                          <span className="text-lg">{row.icon}</span>
                          <span className="font-medium text-foreground">{row.feature}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center bg-accent/5">
                        {renderCell(row.ours, true)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {renderCell(row.theirs, false)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="text-foreground font-semibold">25,000+ subscribers</span> across 100+ countries who made the switch and never looked back.
            </p>
            <a
              href={`https://wa.me/212623636455?text=${encodeURIComponent('Hi! I want to subscribe to 4K Live IPTV')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition shadow-lg text-sm"
            >
              Get Started Today →
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Best 4K IPTV Plans – Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Get the best 4K IPTV subscription starting at just $18/month. All plans include 4K UHD quality, 40,000+ channels, and instant activation.
            </p>
            <LiveVisitorCounter />
            <CountdownTimer />
          </div>

          <div className="grid md:grid-cols-4 gap-6 pt-4">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-card border-border hover:border-accent/50 transition relative ${
                  plan.popular ? 'border-2 border-accent/50' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                      plan.popular ? 'bg-accent text-accent-foreground' : 'bg-secondary text-white'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-accent">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-6">
                    <a
                      href={`https://wa.me/212623636455?text=${encodeURIComponent(`Hi! I want to subscribe for ${plan.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Subscribe Now
                    </a>
                  </Button>
                  <ul className="space-y-3 text-sm">
                    {planFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 mb-6">
            {[
              { icon: '🔒', text: 'SSL Secured' },
              { icon: '⚡', text: 'Instant Activation' },
              { icon: '✅', text: '7-Day Guarantee' },
              { icon: '👥', text: '25,000+ Customers' },
              { icon: '🌍', text: '100+ Countries' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5">
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              <Link href="/connections">
                Looking for Multi-Screen? Get Started
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>

            {/* Payment Methods */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-xs text-muted-foreground">Secure payment via:</span>
              {/* PayPal */}
              <div className="bg-[#003087] text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1">
                <span className="text-[#009cde]">Pay</span><span className="text-[#012169]">Pal</span>
              </div>
              {/* Visa */}
              <div className="bg-[#1a1f71] text-white text-xs font-bold px-3 py-1.5 rounded-md tracking-widest">
                VISA
              </div>
              {/* Mastercard */}
              <div className="bg-white px-3 py-1.5 rounded-md flex items-center gap-0.5">
                <div className="w-5 h-5 rounded-full bg-[#eb001b]" />
                <div className="w-5 h-5 rounded-full bg-[#f79e1b] -ml-2.5 opacity-90" />
              </div>
              {/* Crypto */}
              <div className="bg-[#f7931a] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                ₿ Crypto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Get Your 4K Live IPTV in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-bold">
                  {index + 1}
                </div>
                <Card className="bg-background border-border p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-lg flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/tutorial">View Full Setup Guide →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Multi-Connection Feature */}
      <section id="connections" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Stream 4K IPTV on Multiple Screens at Once</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With 1 to 5 simultaneous connections, share your premium 4K IPTV experience with your entire family — on Firestick, Apple TV, Smart TV, phone, or PC — all streaming 4K UHD at the same time, no quality loss.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Family Sharing</h3>
                    <p className="text-sm text-muted-foreground">Share with up to 5 family members simultaneously</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">No Quality Loss</h3>
                    <p className="text-sm text-muted-foreground">Enjoy 4K streaming on all connected devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Secure Access</h3>
                    <p className="text-sm text-muted-foreground">Enterprise-grade encryption for all streams</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden border border-accent/20 shadow-lg shadow-accent/10 mb-6">
                <Image
                  src="/iptv-devices.png"
                  alt="Premium 4K IPTV – Stream on Multiple Devices with 4K UHD Quality"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  <Link href="/connections">
                    Get Started – Multi Connections
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Everything Included in Your IPTV Premium 4K Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every plan includes the full feature set of our premium 4K IPTV service — no tiers, no hidden limits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent/50 transition p-8">
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Categories */}
      <section id="channels" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">4K Live IPTV Channel Categories</h2>
            <p className="text-lg text-muted-foreground">
              40,000+ premium 4K IPTV channels organized across every genre imaginable
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {channelCategories.map((cat) => (
              <div key={cat.name} className="border border-border rounded-lg p-6 hover:border-accent/50 transition flex items-center gap-4">
                <span className="text-4xl leading-none">{cat.emoji}</span>
                <div>
                  <h3 className="font-bold text-foreground">{cat.name}</h3>
                  {cat.count && (
                    <p className="text-2xl font-bold text-accent mt-0.5">{cat.count}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Our 4K IPTV Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Real reviews from real subscribers of the official 4K Live IPTV service worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-background border-border p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get the Official 4K Live IPTV Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join 25,000+ happy subscribers of the best 4K IPTV service. 7-day money-back guarantee. Instant activation. Try free for 2 hours first — no credit card needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              <Link href="/#pricing">
                Get Started Today
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary/50 hover:bg-secondary/10">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const deviceCards = [
  { name: 'Smart TV', desc: 'Samsung, LG, Sony', icon: Tv, href: '/tutorial' },
  { name: 'Amazon Firestick 4K', desc: 'All Fire TV generations', icon: Play, href: '/tutorial' },
  { name: 'Android TV', desc: 'Google TV & Android', icon: Monitor, href: '/tutorial' },
  { name: 'Apple TV 4K', desc: 'tvOS 14+', icon: Shield, href: '/tutorial' },
  { name: 'iPhone & Android', desc: 'iOS & Android', icon: Smartphone, href: '/tutorial' },
  { name: 'PC / Mac', desc: 'Windows & macOS', icon: HardDrive, href: '/tutorial' },
  { name: 'MAG Box', desc: 'MAG 250–540', icon: Tv, href: '/tutorial' },
  { name: 'Enigma2', desc: 'Dreambox & Vu+', icon: Zap, href: '/tutorial' },
]

const plans = [
  { name: '1 Month', price: 18, period: 'mo', badge: null, popular: false },
  { name: '3 Months', price: 40, period: '3mo', badge: null, popular: false },
  { name: '6 Months', price: 65, period: '6mo', badge: null, popular: false },
  { name: '12 Months', price: 89, period: 'yr', badge: 'Most Popular', popular: true },
]

const planFeatures = [
  'SD / HD / FHD / 4K Quality',
  'Over 40,000 Live Channels',
  'Over 200,000 VOD Content',
  'Electronic Program Guide',
  '24/7 Support',
  '7-Day Money Back Guarantee',
  'Catch-Up TV & Replay Feature',
]

const steps = [
  {
    icon: Check,
    title: 'Choose Your Plan',
    description: 'Select the subscription plan that fits your needs. All plans include every premium feature.',
  },
  {
    icon: Shield,
    title: 'Confirm Order',
    description: 'Complete your order securely. We accept multiple payment methods for your convenience.',
  },
  {
    icon: Play,
    title: 'Enjoy Instantly',
    description: 'Start streaming immediately. Get access to all channels and content right away.',
  },
]

const mainFeatures = [
  {
    icon: Tv,
    title: '40,000+ Live Channels',
    description: 'Access an unmatched library of live TV channels from around the world. Sports, news, entertainment, movies, kids, and niche international content from 100+ countries.',
  },
  {
    icon: Play,
    title: '200,000+ VOD Content',
    description: 'Enjoy a massive on-demand library with the latest Hollywood blockbusters, TV series, documentaries, and classic films. New content added daily.',
  },
  {
    icon: Zap,
    title: '4K Ultra HD & HDR',
    description: 'Stream in stunning 4K Ultra HD resolution with HDR10 and Dolby Vision support. Experience cinema-quality picture on your TV with advanced video codecs.',
  },
  {
    icon: Shield,
    title: '99.95% Server Uptime',
    description: 'Our enterprise-grade server infrastructure is built for maximum reliability. Redundant servers across multiple data centers ensure your stream is always available.',
  },
  {
    icon: Users,
    title: 'Multi-Device & Family Plans',
    description: 'Use up to 5 simultaneous connections on a single subscription. Perfect for families who want to watch different content on different devices at the same time.',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Our dedicated support team is available around the clock via WhatsApp and email. Get help with setup, troubleshooting, and any questions within minutes.',
  },
  {
    icon: Globe,
    title: 'International Content',
    description: 'Channels from 100+ countries in English, French, Arabic, Spanish, Portuguese, German, Italian, and more. Stay connected to your home culture from anywhere.',
  },
  {
    icon: Clock,
    title: 'Electronic Program Guide',
    description: 'Browse the EPG to see what is on now and what is coming up next. Plan your viewing schedule and never miss your favorite shows.',
  },
  {
    icon: Wifi,
    title: 'Anti-Freeze Technology',
    description: 'Our proprietary anti-freeze technology detects and resolves buffering before it disrupts your viewing. Enjoy smooth, uninterrupted streaming every time.',
  },
  {
    icon: Clock,
    title: '7-Day Catch-Up TV',
    description: 'Missed your favourite show? Replay anything from the last 7 days across supported channels. Never miss a moment of your favourite content again.',
  },
  {
    icon: Check,
    title: 'Instant Activation',
    description: 'Your subscription is activated within minutes of payment confirmation, 24 hours a day, 7 days a week. No waiting, no delays — just instant access to the full premium 4K IPTV library.',
  },
]

const channelCategories = [
  { emoji: '🌍', name: '+50,000 Live Premium Channels Worldwide', count: '' },
  { emoji: '🏆', name: 'Sports', count: '20k+' },
  { emoji: '🎬', name: 'Movies & Series', count: '200,000+' },
  { emoji: '📰', name: 'News', count: '5k+' },
  { emoji: '👶', name: 'Kids', count: '150+' },
  { emoji: '🕹️', name: 'Gaming & eSports', count: '' },
]

const testimonials = [
  {
    name: 'John M.',
    location: 'Canada',
    review: 'Best 4K IPTV I have ever used. Running it on my Firestick 4K with IPTV Smarters Pro — crystal clear 4K UHD, zero buffering. Cancelled cable and never looked back.',
  },
  {
    name: 'Sarah K.',
    location: 'United States',
    review: 'This is the official 4K Live IPTV and the quality shows. I get all my favorite channels in premium 4K on my Apple TV 4K. Setup took 5 minutes and support was instant.',
  },
  {
    name: 'Mike T.',
    location: 'United Kingdom',
    review: 'Been using this premium 4K IPTV service for 8 months — rock solid uptime. Sports channels in 4K UHD are breathtaking. The best 4K IPTV provider I have tried by far.',
  },
  {
    name: 'Carlos R.',
    location: 'Spain',
    review: 'Absolutely love it! I switched from a local provider and the difference is night and day. 200,000+ VOD content, all the Spanish and international channels I need, all in 4K.',
  },
  {
    name: 'Fatima A.',
    location: 'France',
    review: 'The Arabic and French channels are perfect quality. My whole family uses 3 devices at the same time with zero issues. Customer support replied on WhatsApp in under 2 minutes.',
  },
  {
    name: 'James W.',
    location: 'Australia',
    review: 'I was skeptical at first but the free 2-hour trial convinced me immediately. Streams are butter smooth, even in 4K. The 12-month plan is incredible value — highly recommend.',
  },
]
