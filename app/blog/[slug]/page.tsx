import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { ShareButtons } from '@/components/share-buttons'
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react'

const siteUrl = 'https://4kliveiptv.vip'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  const url = `${siteUrl}/blog/${slug}`
  const keywords = [
    'IPTV', '4K IPTV', post.category, '4K Live IPTV',
    ...post.title.split(' ').filter((w) => w.length > 4),
  ].join(', ')
  return {
    title: post.title,
    description: post.metaDescription,
    keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['4K Live IPTV'],
      tags: [post.category, 'IPTV', '4K streaming'],
      siteName: '4K Live IPTV',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@4kliveiptv',
      title: post.title,
      description: post.metaDescription,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const postUrl = `${siteUrl}/blog/${slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: '4K Live IPTV', url: siteUrl },
    publisher: {
      '@type': 'Organization',
      name: '4K Live IPTV',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    image: `${siteUrl}/blog/${slug}/opengraph-image`,
    articleSection: post.category,
    keywords: post.title,
    url: postUrl,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
    ],
  }

  const faqSchema = post.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-accent transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-accent transition">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5 text-xs text-muted-foreground">
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

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">{post.title}</h1>

          {/* Hero image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Share buttons */}
          <div className="mb-10 pb-8 border-b border-border">
            <ShareButtons title={post.title} url={postUrl} />
          </div>

          {/* Article body */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share buttons bottom */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Found this helpful? Share it:</p>
            <ShareButtons title={post.title} url={postUrl} />
          </div>

          {/* FAQ Section */}
          {post.faq.length > 0 && (
            <section className="mt-16 border-t border-border pt-10">
              <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faq.map((item, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-accent/30 bg-card p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Ready to start streaming?</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Get 40,000+ channels and 200,000+ VOD in 4K. Free 2-hour trial available.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition"
              >
                View Plans
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-sm hover:border-accent/50 transition"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
