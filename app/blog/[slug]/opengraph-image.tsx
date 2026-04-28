import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog'

export const alt = '4K Live IPTV Blog'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const title = post?.title ?? '4K Live IPTV Blog'
  const category = post?.category ?? 'IPTV'
  const excerpt = post?.excerpt ?? 'The best IPTV service with 40,000+ channels in 4K.'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
          padding: '60px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#E63E5C',
          }}
        />

        {/* Background pattern dots */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 60,
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(230,62,92,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Category badge */}
        <div style={{ display: 'flex', marginBottom: '24px' }}>
          <div
            style={{
              background: '#E63E5C',
              color: '#fff',
              padding: '6px 18px',
              borderRadius: '999px',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 55 ? '46px' : '56px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '20px',
            maxWidth: '960px',
          }}
        >
          {title}
        </div>

        {/* Excerpt */}
        <div
          style={{
            fontSize: '20px',
            color: '#aaaaaa',
            lineHeight: 1.5,
            marginBottom: '40px',
            maxWidth: '800px',
            overflow: 'hidden',
            display: '-webkit-box',
          }}
        >
          {excerpt.length > 120 ? excerpt.slice(0, 120) + '…' : excerpt}
        </div>

        {/* Footer: logo + domain */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              background: '#E63E5C',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 900,
              letterSpacing: '-0.02em',
            }}
          >
            4K
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ fontSize: '22px', color: '#ffffff', fontWeight: 700 }}>
              4K Live IPTV
            </div>
            <div style={{ fontSize: '16px', color: '#666666' }}>4kliveiptv.vip</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
