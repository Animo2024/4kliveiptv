'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is 4K IPTV and how does it work?',
    answer:
      'IPTV (Internet Protocol Television) delivers TV channels and on-demand content through your internet connection instead of cable or satellite. Our 4K IPTV service streams ultra-high-definition content directly to your device using your broadband connection — no dish, no cable box required.',
  },
  {
    question: 'What devices are compatible with your IPTV service?',
    answer:
      'Our service works on Smart TVs (Samsung, LG, Sony), Amazon Firestick & Fire TV, Android TV / Google TV, Apple TV, iOS and Android smartphones and tablets, Windows and Mac computers, MAG boxes, and Enigma2 / Dreambox receivers.',
  },
  {
    question: 'How fast is activation after purchase?',
    answer:
      'Activation is instant. After completing your payment, you receive your subscription credentials within minutes via email, allowing you to start streaming immediately — 24 hours a day, 7 days a week.',
  },
  {
    question: 'Can I use the IPTV service on multiple devices simultaneously?',
    answer:
      'Yes! We offer plans with 1 to 5 simultaneous connections. Family plans allow multiple household members to watch different channels on different devices at the same time without any quality loss.',
  },
  {
    question: 'What channels are included in the subscription?',
    answer:
      'All plans include 40,000+ live channels covering sports, movies, news, entertainment, kids, and international content from over 100 countries. You also get access to 100,000+ VOD movies and TV series.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      "We offer a 7-day money-back guarantee on all plans instead of a free trial. This gives you a full week to test the service completely risk-free. If you're not satisfied for any reason, we'll refund your payment in full.",
  },
  {
    question: 'What internet speed do I need for 4K streaming?',
    answer:
      'For 4K Ultra HD streaming, we recommend at least 25 Mbps. For Full HD (1080p), 10 Mbps is sufficient. Standard definition content requires only 5 Mbps. A stable wired connection is recommended for best performance.',
  },
  {
    question: 'Do you offer customer support?',
    answer:
      'Yes, we provide 24/7 customer support via WhatsApp and email. Our expert team is available around the clock to help you with setup, troubleshooting, and any questions about your subscription.',
  },
]

const left = faqs.slice(0, 4)
const right = faqs.slice(4)

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => (
    <div className="border border-border rounded-lg overflow-hidden hover:border-accent/50 transition">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-card/50 transition"
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        aria-expanded={openIndex === index}
      >
        <span className="font-medium pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
            openIndex === index ? 'rotate-180' : ''
          }`}
        />
      </button>
      {openIndex === index && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  )

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">4K Live IPTV – Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the official 4K Live IPTV service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {left.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
          <div className="space-y-3">
            {right.map((faq, i) => (
              <FAQItem key={i + 4} faq={faq} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
