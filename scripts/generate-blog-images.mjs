import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'blog')

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

const articles = [
  {
    slug: 'best-4k-iptv',
    prompt: '4K ultra HD television streaming cinematic dark background glowing blue red screen futuristic technology broadcast channels',
  },
  {
    slug: 'iptv-for-fire-tv-stick-4k',
    prompt: 'Amazon Fire TV Stick streaming device plugged into modern 4K television dark living room technology setup cinematic',
  },
  {
    slug: 'best-iptv-for-apple-tv-4k',
    prompt: 'Apple TV 4K sleek device on entertainment center dark cinematic background streaming technology premium',
  },
  {
    slug: 'formuler-z11-pro-max-iptv',
    prompt: 'IPTV set top box media player device dark cinematic background red accent glowing technology professional streaming',
  },
]

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    const protocol = url.startsWith('https') ? https : http

    const request = protocol.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        fs.unlinkSync(dest)
        download(res.headers.location, dest).then(resolve).catch(reject)
        return
      }
      if (res.statusCode !== 200) {
        file.close()
        fs.unlinkSync(dest)
        reject(new Error(`HTTP ${res.statusCode} for ${url}`))
        return
      }
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
    })

    request.on('error', (err) => {
      fs.unlinkSync(dest)
      reject(err)
    })

    request.setTimeout(60000, () => {
      request.destroy()
      reject(new Error('Request timed out'))
    })
  })
}

async function generateAll() {
  for (const article of articles) {
    const dest = path.join(OUTPUT_DIR, `${article.slug}.jpg`)
    if (fs.existsSync(dest)) {
      console.log(`⏭  Skipping ${article.slug} (already exists)`)
      continue
    }

    const encodedPrompt = encodeURIComponent(article.prompt)
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=630&nologo=true&model=flux`

    console.log(`⏳ Generating image for: ${article.slug}`)
    try {
      await download(url, dest)
      console.log(`✅ Saved: public/blog/${article.slug}.jpg`)
    } catch (err) {
      console.error(`❌ Failed ${article.slug}: ${err.message}`)
    }

    // Small delay between requests to be polite
    await new Promise((r) => setTimeout(r, 2000))
  }

  console.log('\n🎉 Done! Images saved to public/blog/')
}

generateAll()
