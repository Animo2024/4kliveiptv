/// <reference types="node" />
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

function addHeadingIds(html: string): string {
  return html.replace(/<(h[2-6])>([\s\S]*?)<\/h\1>/g, (_, level, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
    return `<h${level} id="${id}">${inner}</h${level}>`
  })
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  readTime: string
  excerpt: string
  metaDescription: string
  faq: { question: string; answer: string }[]
  content: string
  image: string
}

export interface BlogPostMeta extends Omit<BlogPost, 'content'> {}

function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR).filter((f: string) => f.endsWith('.md')).map((f: string) => f.replace(/\.md$/, ''))
}

export function getAllPosts(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const file = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8')
      const { data } = matter(file)
      return {
        slug,
        title: data.title ?? '',
        date: data.date ?? '',
        category: data.category ?? '',
        readTime: data.readTime ?? '',
        excerpt: data.excerpt ?? '',
        metaDescription: data.metaDescription ?? '',
        faq: data.faq ?? [],
        image: `/blog/${slug}.jpg`,
      } as BlogPostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content: rawContent } = matter(file)
  const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(rawContent)
  const html = addHeadingIds(
    processed.toString()
      .replace(/<table/g, '<div class="table-wrap"><table')
      .replace(/<\/table>/g, '</table></div>')
  )
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    category: data.category ?? '',
    readTime: data.readTime ?? '',
    excerpt: data.excerpt ?? '',
    metaDescription: data.metaDescription ?? '',
    faq: data.faq ?? [],
    content: html,
    image: `/blog/${slug}.jpg`,
  }
}
