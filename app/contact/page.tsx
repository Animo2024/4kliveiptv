import { Mail, MessageCircle, Clock, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ContactForm from '@/components/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us – 24/7 IPTV Support',
  description:
    'Contact 4K Live IPTV support 24/7 via WhatsApp or email. Get help with setup, billing, troubleshooting, and anything else. Fast response guaranteed.',
  alternates: { canonical: 'https://4kliveiptv.vip/contact' },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
            <p className="text-sm font-medium text-secondary">Always Here for You</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Contact <span className="text-accent">Support</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Our team is available 24 hours a day, 7 days a week. We typically respond within
            5 minutes.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <Card className="bg-card border-border hover:border-green-500/50 transition p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2">WhatsApp</h2>
              <p className="text-muted-foreground mb-2">Fastest response — usually under 5 min</p>
              <p className="text-accent font-semibold mb-6">+212 623-636455</p>
              <Button
                asChild
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <a
                  href="https://wa.me/212623636455"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start WhatsApp Chat
                </a>
              </Button>
            </Card>

            {/* Email */}
            <Card className="bg-card border-border hover:border-accent/50 transition p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Email</h2>
              <p className="text-muted-foreground mb-2">Response within 1–2 hours</p>
              <p className="text-accent font-semibold mb-6 text-sm break-all">
                itv4k.iptv.store@gmail.com
              </p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="mailto:itv4k.iptv.store@gmail.com">Send an Email</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Send Us a Message</h2>
          <p className="text-center text-muted-foreground mb-10">Fill in the form and we will get back to you within 1–2 hours.</p>
          <Card className="bg-background border-border p-8">
            <ContactForm />
          </Card>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What We Can Help With</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Headphones,
                title: 'Setup & Installation',
                desc: 'We will walk you through setting up IPTV on any device step by step.',
              },
              {
                icon: MessageCircle,
                title: 'Technical Support',
                desc: 'Buffering, freezing, login issues — we diagnose and fix problems fast.',
              },
              {
                icon: Clock,
                title: 'Billing & Orders',
                desc: 'Questions about your subscription, renewal, or payment? We have got you covered.',
              },
              {
                icon: Mail,
                title: 'General Questions',
                desc: 'Not sure which plan to choose? Want to know more about our service? Just ask.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 border border-border rounded-lg p-5 hover:border-accent/50 transition"
              >
                <item.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Support Hours</h2>
          <Card className="bg-card border-border p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-accent">24 / 7 / 365</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Our support team is available every day of the year, including weekends and holidays.
              We know streaming emergencies do not follow business hours.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-background rounded-lg p-4">
                <p className="font-semibold text-accent">WhatsApp</p>
                <p className="text-muted-foreground">Avg. 5 min response</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="font-semibold text-accent">Email</p>
                <p className="text-muted-foreground">Avg. 1–2 hour response</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
