import { Shield, Users, Zap, Globe, Award, HeartHandshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us – 13 Years of Premium IPTV Experience',
  description: 'Learn about 4K Live IPTV — 13+ years of experience delivering premium streaming to 50,000+ subscribers worldwide. Our mission, values, and team.',
  alternates: { canonical: 'https://4kliveiptv.vip/about' },
}

const stats = [
  { value: '13+', label: 'Years in Business' },
  { value: '50,000+', label: 'Active Subscribers' },
  { value: '100+', label: 'Countries Served' },
  { value: '99.95%', label: 'Server Uptime' },
]

const values = [
  {
    icon: Shield,
    title: 'Reliability First',
    desc: 'We invested heavily in redundant server infrastructure across multiple data centers to guarantee 99.95% uptime. Your stream never stops.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Quality',
    desc: 'We were among the first IPTV providers to offer true 4K Ultra HD with HDR support. We constantly upgrade our encoding infrastructure.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Obsessed',
    desc: 'Every decision we make is based on what is best for our subscribers. That is why we offer 24/7 support, free trials, and a 7-day money-back guarantee.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'We serve customers in 100+ countries with content in 30+ languages. Whether you are in Europe, North America, the Middle East, or Africa — we have you covered.',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    desc: 'Our multi-connection plans are designed for families. Up to 5 simultaneous streams means everyone in your household can watch what they want, when they want.',
  },
  {
    icon: Award,
    title: 'Trusted & Proven',
    desc: '13 years in the industry with zero data breaches, consistent 5-star support reviews, and a loyal customer base that keeps renewing year after year.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
            <p className="text-sm font-medium text-secondary">Our Story</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            About <span className="text-accent">4K Live IPTV</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We started in 2011 with a simple mission: make premium TV accessible to everyone, anywhere,
            on any device — without expensive contracts or satellite dishes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-accent mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              4K Live IPTV was founded in 2011 by a team of streaming technology enthusiasts who were
              frustrated with the high cost and limitations of traditional cable and satellite TV. We
              believed that the internet could deliver a better TV experience — more channels, better
              quality, and far more affordable.
            </p>
            <p>
              We started small, serving a few hundred subscribers across Europe and North Africa. Word
              spread quickly. By 2015, we had grown to 5,000 subscribers. By 2020, over 20,000. Today,
              we proudly serve <strong className="text-foreground">50,000+ active subscribers</strong> in
              more than 100 countries.
            </p>
            <p>
              Over 13 years, we have watched the industry evolve from SD streams on slow connections
              to true 4K Ultra HD with HDR on 1 Gbps fiber. We have always invested ahead of the curve
              — upgrading our server infrastructure, adding anti-freeze technology, launching catch-up TV,
              and expanding our channel library to <strong className="text-foreground">40,000+ live channels</strong> and
              <strong className="text-foreground"> 100,000+ VOD titles</strong>.
            </p>
            <p>
              Our commitment has never changed: deliver the best possible streaming experience at a
              price that makes premium TV accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Card key={i} className="bg-background border-border p-6 hover:border-accent/50 transition">
                <v.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join 50,000+ Happy Subscribers</h2>
          <p className="text-muted-foreground mb-8">
            13 years of experience. 7-day money-back guarantee. Free 2h trial available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/connections">View Plans</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary/50 hover:bg-secondary/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
