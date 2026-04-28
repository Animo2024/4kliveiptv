'use client'

import { useEffect, useState } from 'react'
import { X, Tv } from 'lucide-react'

const notifications = [
  { name: 'James R.', country: 'United Kingdom', flag: '🇬🇧', plan: '12 Months', time: '2 minutes ago' },
  { name: 'Sofia M.', country: 'France', flag: '🇫🇷', plan: '6 Months', time: '5 minutes ago' },
  { name: 'Carlos D.', country: 'Spain', flag: '🇪🇸', plan: '3 Months', time: '8 minutes ago' },
  { name: 'Ahmed K.', country: 'Morocco', flag: '🇲🇦', plan: '12 Months', time: 'just now' },
  { name: 'David L.', country: 'United States', flag: '🇺🇸', plan: '6 Months', time: '1 minute ago' },
  { name: 'Marie T.', country: 'Belgium', flag: '🇧🇪', plan: '12 Months', time: '3 minutes ago' },
  { name: 'Omar B.', country: 'Netherlands', flag: '🇳🇱', plan: '1 Month', time: '6 minutes ago' },
  { name: 'Luca F.', country: 'Italy', flag: '🇮🇹', plan: '3 Months', time: 'just now' },
  { name: 'Emma W.', country: 'Canada', flag: '🇨🇦', plan: '12 Months', time: '4 minutes ago' },
  { name: 'Hassan A.', country: 'Saudi Arabia', flag: '🇸🇦', plan: '6 Months', time: '7 minutes ago' },
  { name: 'Nina S.', country: 'Germany', flag: '🇩🇪', plan: '12 Months', time: '2 minutes ago' },
  { name: 'Kevin P.', country: 'Australia', flag: '🇦🇺', plan: '3 Months', time: 'just now' },
]

export default function SalesNotification() {
  const [current, setCurrent] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout>
    let hideTimer: ReturnType<typeof setTimeout>

    const show = () => {
      const index = Math.floor(Math.random() * notifications.length)
      setCurrent(index)
      setVisible(true)

      hideTimer = setTimeout(() => {
        setVisible(false)
        showTimer = setTimeout(show, Math.random() * 6000 + 6000)
      }, 5000)
    }

    showTimer = setTimeout(show, 3000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (current === null) return null

  const n = notifications[current]

  return (
    <div
      className={`fixed bottom-28 left-4 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-card border border-border rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 max-w-xs">
        <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
          <Tv className="w-5 h-5 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold leading-tight truncate">
            {n.flag} {n.name} <span className="font-normal text-muted-foreground">from {n.country}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Subscribed to <span className="text-accent font-medium">{n.plan}</span> · {n.time}
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-muted-foreground hover:text-foreground flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
