'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl px-4 py-4 md:py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
          🍪 We use cookies to improve your experience and analyse site traffic. By clicking{' '}
          <strong className="text-foreground">Accept</strong>, you consent to our use of cookies.{' '}
          <Link href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="text-xs font-medium px-4 py-2 rounded-full border border-border hover:bg-card/80 transition text-muted-foreground"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-xs font-bold px-5 py-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
