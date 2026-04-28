'use client'

import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-card border-t border-border px-4 py-3 flex items-center justify-between gap-3 shadow-xl">
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 text-accent flex-shrink-0" />
        <p className="text-xs font-medium leading-tight">
          🔥 Plans from <span className="text-accent font-bold">$18/mo</span> — Instant activation
        </p>
      </div>
      <Link
        href="/#pricing"
        className="shrink-0 bg-accent text-accent-foreground text-xs font-bold px-4 py-2 rounded-full hover:bg-accent/90 transition whitespace-nowrap"
      >
        Subscribe Now
      </Link>
    </div>
  )
}
