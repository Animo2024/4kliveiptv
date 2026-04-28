'use client'

import { useEffect, useState } from 'react'
import { Users } from 'lucide-react'

function useCountdown() {
  const getTarget = () => {
    if (typeof window === 'undefined') return new Date()
    const stored = localStorage.getItem('promo_end')
    if (stored) return new Date(stored)
    const target = new Date(Date.now() + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000)
    localStorage.setItem('promo_end', target.toISOString())
    return target
  }

  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 })

  useEffect(() => {
    const target = getTarget()
    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) {
        localStorage.removeItem('promo_end')
        setTimeLeft({ h: 0, m: 0, s: 0 })
        return
      }
      setTimeLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return timeLeft
}

export function CountdownTimer() {
  const { h, m, s } = useCountdown()
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="flex items-center justify-center gap-2 text-sm mb-6">
      <span className="text-muted-foreground">⏰ Offer ends in:</span>
      <div className="flex gap-1 font-mono font-bold">
        {[['h', h], ['m', m], ['s', s]].map(([label, val]) => (
          <span key={label as string} className="bg-card border border-border rounded px-2 py-0.5 text-accent tabular-nums">
            {pad(val as number)}<span className="text-[10px] text-muted-foreground ml-0.5">{label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function LiveVisitorCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(Math.floor(Math.random() * 18) + 12)
    const id = setInterval(() => {
      setCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(8, Math.min(35, prev + change))
      })
    }, 4000)
    return () => clearInterval(id)
  }, [])

  if (count === 0) return null

  return (
    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <Users className="w-3.5 h-3.5" />
      <span><strong className="text-foreground">{count} people</strong> viewing pricing right now</span>
    </div>
  )
}
