import { Check, Download, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '4K Live IPTV Setup Guide – Firestick, Apple TV & More',
  description:
    'Official 4K Live IPTV setup guide. Step-by-step: install 4K Live IPTV on Firestick 4K, Apple TV 4K, Smart TV, Android, iPhone & PC. Ready in minutes.',
  keywords: [
    '4k live iptv setup guide',
    '4k live iptv install firestick',
    '4k live iptv apple tv setup',
    '4k live iptv smarters pro',
    '4k live iptv android setup',
    '4k live iptv how to install',
    'official 4k live iptv tutorial',
  ],
  alternates: { canonical: 'https://4kliveiptv.vip/tutorial' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: '4K Live IPTV',
    title: '4K Live IPTV Setup Guide – Firestick, Apple TV & All Devices',
    description:
      'Official 4K Live IPTV setup guide. Install on Firestick 4K, Apple TV 4K, Smart TV, Android, iPhone and PC in minutes.',
    url: 'https://4kliveiptv.vip/tutorial',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: '4K Live IPTV Setup Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@4kliveiptv',
    title: '4K Live IPTV Setup Guide – Install on Any Device in Minutes',
    description: 'Step-by-step 4K Live IPTV setup for Firestick 4K, Apple TV 4K, Smart TV, Android & iPhone.',
    images: ['/logo.png'],
  },
}

const setupGuides = [
  {
    emoji: '📦',
    device: 'Android Box / Android TV',
    steps: [
      { text: 'Open Google Play Store', sub: null },
      { text: 'Search and install IPTV Smarters Pro or TiviMate', sub: null },
      { text: 'Open the app → Click Login with Xtream Codes API', sub: null },
      { text: 'Enter your Username, Password, and Server URL', sub: null },
      { text: 'Click Login — your channels will load instantly', sub: null },
    ],
    alternative: {
      title: 'Alternative (APK install via IBO Pro)',
      steps: [
        'Install the Downloader app from the Play Store',
        'Open Downloader and enter code: 481220 OR use URL: https://iboproapp.com/ibopro.apk',
        'Download & install IBO Pro Player',
        'Open the app → Add your IPTV details and connect',
      ],
    },
  },
  {
    emoji: '🔥',
    device: 'Amazon Firestick / Fire TV',
    steps: [
      { text: 'Go to Settings → My Fire TV → Developer Options', sub: null },
      { text: 'Enable Apps from Unknown Sources', sub: null },
      { text: 'Install the Downloader app from the Amazon Store', sub: null },
      { text: 'Open Downloader and enter code: 481220 OR URL: https://iboproapp.com/ibopro.apk', sub: null },
      { text: 'Install IBO Pro Player', sub: null },
      { text: 'Open → Login with your IPTV credentials', sub: null },
    ],
    alternative: null,
  },
  {
    emoji: '💻',
    device: 'Windows PC',
    steps: [
      { text: 'Download and install IPTV Smarters Pro', sub: null },
      { text: 'Open the app and choose Xtream Codes Login', sub: null },
      { text: 'Enter your Username, Password, and Server URL', sub: null },
      { text: 'Click Login — all channels will load', sub: null },
    ],
    alternative: {
      title: 'Alternative (VLC Media Player)',
      steps: [
        'Download and install VLC Media Player (free)',
        'Go to Media → Open Network Stream',
        'Paste your M3U playlist URL and click Play',
      ],
    },
  },
  {
    emoji: '🍏',
    device: 'MacBook (macOS)',
    steps: [
      { text: 'Install VLC Media Player from videolan.org', sub: null },
      { text: 'Open VLC → File → Open Network', sub: null },
      { text: 'Paste your M3U playlist URL', sub: null },
      { text: 'Click Open — streaming starts immediately', sub: null },
    ],
    alternative: null,
  },
  {
    emoji: '📱',
    device: 'iPhone / iPad',
    steps: [
      { text: 'Open the App Store', sub: null },
      { text: 'Install IPTV Smarters Player Lite or GSE Smart IPTV', sub: null },
      { text: 'Open the app and add your playlist using Xtream Codes or M3U URL', sub: null },
      { text: 'Save — channels will load within seconds', sub: null },
    ],
    alternative: null,
  },
  {
    emoji: '📺',
    device: 'LG Smart TV (WebOS)',
    steps: [
      { text: 'Open LG Content Store', sub: null },
      { text: 'Install Smart IPTV or SS IPTV', sub: null },
      { text: 'Open the app and upload your playlist using your TV\'s MAC address', sub: null },
      { text: 'Restart the app — all channels will appear', sub: null },
    ],
    alternative: null,
  },
  {
    emoji: '📦',
    device: 'MAG Box',
    steps: [
      { text: 'Go to Settings → System Settings → Servers → Portals', sub: null },
      { text: 'Add your Portal URL provided after purchase', sub: null },
      { text: 'Save and Restart the device', sub: null },
      { text: 'Channels will load automatically on startup', sub: null },
    ],
    alternative: null,
  },
]

const apps = [
  { name: 'IBO Pro Player', platform: 'Android / Firestick', rating: '⭐ Recommended' },
  { name: 'TiviMate', platform: 'Android / Firestick', rating: '⭐ Best for Firestick' },
  { name: 'IPTV Smarters Pro', platform: 'All platforms', rating: '⭐ Most Universal' },
  { name: 'GSE Smart IPTV', platform: 'iOS / Android', rating: '⭐ Best for iPhone' },
  { name: 'Smart IPTV (SIPTV)', platform: 'Samsung / LG TV', rating: '⭐ Best for Smart TV' },
  { name: 'VLC Media Player', platform: 'PC / Mac', rating: '⭐ Best Free Option' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://4kliveiptv.vip' },
    { '@type': 'ListItem', position: 2, name: '4K Live IPTV Setup Guide', item: 'https://4kliveiptv.vip/tutorial' },
  ],
}

const tutorialSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '4K Live IPTV Setup Guide – How to Install on Firestick, Apple TV & Smart TV',
  description:
    'Official 4K Live IPTV setup guide. Step-by-step instructions to install 4K Live IPTV on Amazon Firestick 4K, Apple TV 4K, Android TV, Smart TV, iPhone, and PC in minutes.',
  supply: [{ '@type': 'HowToSupply', name: 'Active 4K Live IPTV subscription' }],
  tool: [
    { '@type': 'HowToTool', name: 'IPTV Smarters Pro 4K' },
    { '@type': 'HowToTool', name: 'TiviMate' },
    { '@type': 'HowToTool', name: 'IBO Pro Player' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Choose a plan', text: 'Select a premium 4K IPTV plan on our pricing page.' },
    { '@type': 'HowToStep', name: 'Receive credentials', text: 'Get your M3U URL or Xtream Codes login via WhatsApp or email within minutes.' },
    { '@type': 'HowToStep', name: 'Install player', text: 'Install IPTV Smarters Pro 4K or TiviMate on your Firestick 4K, Apple TV 4K, or Android device.' },
    { '@type': 'HowToStep', name: 'Start streaming', text: 'Enter your credentials and enjoy 40,000+ channels in 4K UHD quality instantly.' },
  ],
}

export default function TutorialPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tutorialSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
            <p className="text-sm font-medium text-secondary">✅ Official 4K Live IPTV Setup Guide</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-accent">4K Live IPTV</span> Setup Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The official <strong>4K Live IPTV setup guide</strong> — install your subscription on Amazon Firestick 4K, Apple TV 4K, Smart TV, Android, iPhone, or PC in minutes. Step-by-step, zero technical knowledge needed.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Get Your 4K Live IPTV Running in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Check, step: '1', title: 'Purchase a Plan', desc: 'Choose a plan on our pricing page and complete your order.' },
              { icon: Download, step: '2', title: 'Get Your Credentials', desc: 'Receive your M3U URL or Xtream Codes login via WhatsApp or email within minutes.' },
              { icon: Play, step: '3', title: 'Start Streaming', desc: 'Enter your credentials in any IPTV player and start watching immediately.' },
            ].map((item) => (
              <Card key={item.step} className="bg-background border-border p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Apps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Best Apps to Use with 4K Live IPTV</h2>
            <p className="text-muted-foreground">These free players give you the best experience with your 4K Live IPTV subscription</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {apps.map((app) => (
              <div key={app.name} className="border border-border rounded-lg p-5 hover:border-accent/50 transition">
                <h3 className="font-bold mb-1">{app.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{app.platform}</p>
                <span className="text-xs text-accent">{app.rating}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Guides */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">4K Live IPTV Setup Guide – By Device</h2>
          <div className="space-y-8">
            {setupGuides.map((guide) => (
              <Card key={guide.device} className="bg-background border-border overflow-hidden">
                <div className="p-6 border-b border-border flex items-center gap-3">
                  <span className="text-2xl">{guide.emoji}</span>
                  <h3 className="text-xl font-bold">{guide.device}</h3>
                </div>
                <div className="p-6">
                  <ol className="space-y-3">
                    {guide.steps.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed">{step.text}</span>
                      </li>
                    ))}
                  </ol>

                  {guide.alternative && (
                    <div className="mt-6 border border-accent/20 bg-accent/5 rounded-lg p-4">
                      <p className="text-sm font-semibold text-accent mb-3">👉 {guide.alternative.title}</p>
                      <ol className="space-y-2">
                        {guide.alternative.steps.map((step, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="text-muted-foreground text-sm leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">4K Live IPTV Troubleshooting Tips</h2>
          <div className="space-y-4">
            {[
              {
                issue: 'Channels are buffering or freezing',
                fix: 'Check your internet speed (minimum 25 Mbps for 4K). Try switching to a wired Ethernet connection for better stability. Restart your router and IPTV player.',
              },
              {
                issue: 'Credentials not working',
                fix: 'Double-check that you copied the username, password, and server URL exactly as sent. Contact support if the issue persists.',
              },
              {
                issue: 'Some channels show "No Signal"',
                fix: 'Some channels may be temporarily down for maintenance. Try refreshing your playlist. If the problem continues, contact support and we will resolve it quickly.',
              },
              {
                issue: 'EPG (program guide) is not loading',
                fix: 'In your IPTV player settings, find the EPG URL option and enter the EPG URL provided in your welcome message. Allow 5–10 minutes for the guide to load.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-accent mb-2">{item.issue}</h3>
                <p className="text-sm text-muted-foreground">{item.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Need Help Setting Up Your 4K Live IPTV?</h2>
          <p className="text-muted-foreground mb-8">
            Our 24/7 support team will walk you through your 4K Live IPTV setup step by step via WhatsApp — on any device.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/212623636455" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="border-secondary/50 hover:bg-secondary/10">
              <Link href="/#pricing">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
