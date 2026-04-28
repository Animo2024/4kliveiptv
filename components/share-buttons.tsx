'use client'

import { useState } from 'react'
import { Twitter, Facebook, Link2, MessageCircle } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  url: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const links = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted-foreground font-medium mr-1">Share:</span>

      <a
        href={links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium hover:border-accent/60 hover:text-accent transition"
      >
        <Twitter className="w-3.5 h-3.5" />
        X
      </a>

      <a
        href={links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium hover:border-accent/60 hover:text-accent transition"
      >
        <Facebook className="w-3.5 h-3.5" />
        Facebook
      </a>

      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium hover:border-accent/60 hover:text-accent transition"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        WhatsApp
      </a>

      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium hover:border-accent/60 hover:text-accent transition cursor-pointer"
      >
        <Link2 className="w-3.5 h-3.5" />
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  )
}
