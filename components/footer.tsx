import Link from 'next/link'
import { Tv, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Tv className="w-6 h-6 text-accent" />
              <span className="font-bold text-lg">4K Live IPTV</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium IPTV service with 13+ years of industry experience delivering exceptional
              4K streaming quality to customers worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link href="/#pricing" className="hover:text-accent transition">Pricing</Link></li>
              <li><Link href="/connections" className="hover:text-accent transition">Multi Connections</Link></li>
              <li><Link href="/#channels" className="hover:text-accent transition">Channels</Link></li>
              <li><Link href="/tutorial" className="hover:text-accent transition">Setup Guide</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition">Blog</Link></li>
              <li><Link href="/about" className="hover:text-accent transition">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="mailto:itv4k.iptv.store@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                itv4k.iptv.store@gmail.com
              </a>
              <a
                href="https://wa.me/212623636455"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                +212 623-636455
              </a>
              <Link href="/contact" className="hover:text-accent transition block">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-accent transition">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-accent transition">Refund Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright © {new Date().getFullYear()} 4kliveiptv.vip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
