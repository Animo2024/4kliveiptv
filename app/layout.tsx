import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Mail } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SalesNotification from '@/components/sales-notification'
import StickyMobileBar from '@/components/sticky-mobile-bar'
import CookieBanner from '@/components/cookie-banner'
import ScrollToTop from '@/components/scroll-to-top'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

const siteUrl = 'https://4kliveiptv.vip'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '4K Live IPTV – Premium Streaming | 40,000+ Channels',
    template: '%s | 4K Live IPTV',
  },
  description:
    'Best 4K IPTV subscription with 40,000+ live channels, 200,000+ VOD content, 4K Ultra HD quality & 99.95% uptime. Plans from $18/month. Instant activation.',
  keywords: [
    '4K IPTV',
    'IPTV subscription',
    'live IPTV',
    'buy IPTV',
    '4K streaming',
    'IPTV service',
    'best IPTV',
    'IPTV channels',
    'IPTV provider',
    'premium IPTV',
    'IPTV 2026',
  ],
  authors: [{ name: '4K Live IPTV', url: siteUrl }],
  creator: '4K Live IPTV',
  publisher: '4K Live IPTV',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: '4K Live IPTV',
    title: '4K Live IPTV – 40,000+ Channels, 200,000+ VOD',
    description:
      'Premium IPTV service with 40,000+ live channels, 200,000+ VOD, 4K Ultra HD, 99.95% uptime. Plans from $18/month.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: '4K Live IPTV – Premium Streaming Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4K Live IPTV – Premium 4K Streaming',
    description: '40,000+ live channels, 200,000+ VOD. Plans from $18/month. Instant activation.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '4K Live IPTV',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Premium IPTV service with 40,000+ live channels and 200,000+ VOD content in 4K Ultra HD quality.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+212623636455',
    email: 'itv4k.iptv.store@gmail.com',
    contactType: 'customer service',
    availableLanguage: ['English', 'French', 'Arabic'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '4K Live IPTV',
  url: siteUrl,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#111111] dark" style={{ colorScheme: 'dark' }}>
      <body className={`${geist.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SalesNotification />
        <StickyMobileBar />
        <CookieBanner />
        <ScrollToTop />
        {/* Email float */}
        <a
          href="mailto:itv4k.iptv.store@gmail.com"
          aria-label="Send us an email"
          className="fixed bottom-28 right-6 w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 hover:bg-accent/90 transition z-40"
        >
          <Mail className="w-6 h-6" />
        </a>
        {/* WhatsApp float */}
        <a
          href="https://wa.me/212623636455?text=Hi%20how%20Can%20i%20help%20you"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:bg-[#1ebe5d] transition z-40"
        >
          <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.829 1.781 6.86L2 30l7.34-1.754A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.354 1.04 1.074-4.242-.272-.435A11.46 11.46 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.344-.172-2.036-1.004-2.352-1.119-.316-.115-.546-.172-.776.172-.23.344-.89 1.119-1.09 1.349-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.022-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.562-.28-.673-.563-.582-.776-.593l-.66-.011c-.23 0-.603.086-.919.43-.316.344-1.205 1.177-1.205 2.869s1.234 3.328 1.406 3.557c.172.23 2.428 3.709 5.882 5.2.822.355 1.463.567 1.963.726.824.262 1.574.225 2.167.137.661-.099 2.036-.832 2.323-1.635.287-.803.287-1.491.2-1.635-.086-.144-.316-.23-.66-.402z"/>
          </svg>
        </a>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
