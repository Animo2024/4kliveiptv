import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '4K Live IPTV Blog – Setup Guides, Tips & Device Tutorials',
  description: 'The 4K Live IPTV blog: expert setup guides, device tutorials, and IPTV service comparisons. Learn how to stream 40,000+ channels in 4K on any device.',
  keywords: '4K live IPTV, IPTV blog, IPTV setup guide, 4K streaming, IPTV tutorials, best IPTV service',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://4kliveiptv.vip/blog' },
  openGraph: {
    title: '4K Live IPTV Blog – Setup Guides, Tips & Device Tutorials',
    description: 'Expert IPTV setup guides, device tutorials, and service comparisons. Stream 40,000+ channels in 4K.',
    url: 'https://4kliveiptv.vip/blog',
    type: 'website',
    siteName: '4K Live IPTV',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4K Live IPTV Blog – Setup Guides & Tutorials',
    description: 'Expert IPTV guides and device tutorials for the best 4K streaming experience.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://4kliveiptv.vip' },
    { '@type': 'ListItem', position: 2, name: '4K Live IPTV Blog', item: 'https://4kliveiptv.vip/blog' },
  ],
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">4K Live IPTV Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert 4K Live IPTV setup guides, device tutorials, and tips to get the best streaming experience on any device.
            </p>
          </div>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
              <li>/</li>
              <li className="text-foreground">Blog</li>
            </ol>
          </nav>

          {/* Posts grid */}
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 transition"
              >
                <div className={`flex flex-col sm:flex-row ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                  {/* Article image */}
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden sm:w-2/5 shrink-0">
                    <div className="relative h-52 sm:h-full min-h-[220px] w-full bg-muted">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>

                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-accent transition leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                    >
                      Read article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
