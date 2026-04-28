import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '4K Live IPTV Multi-Screen – 1 to 5 Devices | From $18',
  description:
    'Official 4K Live IPTV multi-screen package. Stream on 1 to 5 devices at once. 40,000+ live channels, 4K UHD quality, instant activation. From $18/mo.',
  keywords: [
    '4k live iptv multi screen',
    '4k live iptv multi connections',
    '4k live iptv family package',
    '4k live iptv 5 devices',
    '4k live iptv multi device plan',
    'official 4k live iptv package',
  ],
  alternates: { canonical: 'https://4kliveiptv.vip/connections' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: '4K Live IPTV',
    title: '4K Live IPTV Multi-Screen Package – Stream on 1 to 5 Devices',
    description:
      'Official 4K Live IPTV multi-screen package. 40,000+ channels, 4K UHD, instant activation. From $18/mo.',
    url: 'https://4kliveiptv.vip/connections',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: '4K Live IPTV Multi-Screen Package' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@4kliveiptv',
    title: '4K Live IPTV Multi-Screen Package – 1 to 5 Devices',
    description: 'Official 4K Live IPTV multi-screen plans. 40,000+ channels from $18/mo. Instant activation.',
    images: ['/logo.png'],
  },
}

export default function ConnectionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
