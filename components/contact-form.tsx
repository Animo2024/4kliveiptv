'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0A%0A${form.message}`
    window.location.href = `mailto:itv4k.iptv.store@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact from 4kliveiptv.vip')}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <CheckCircle className="w-14 h-14 text-accent" />
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-muted-foreground max-w-sm">Your email client opened with your message. We will reply within 1–2 hours.</p>
        <Button onClick={() => setSent(false)} variant="outline" className="mt-2">Send Another</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">Your Name</label>
          <input
            type="text"
            required
            placeholder="John Smith"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Email Address</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">Subject</label>
        <select
          value={form.subject}
          onChange={e => setForm({ ...form, subject: e.target.value })}
          className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition"
        >
          <option value="">Select a subject…</option>
          <option>I want to subscribe</option>
          <option>Request a free trial</option>
          <option>Setup & installation help</option>
          <option>Technical support</option>
          <option>Billing & payment</option>
          <option>General question</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">Message</label>
        <textarea
          required
          rows={5}
          placeholder="Describe your question or issue…"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition resize-none"
        />
      </div>
      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
        <Send className="w-4 h-4" />
        Send Message
      </Button>
    </form>
  )
}
