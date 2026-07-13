import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sharp from 'sharp'
import { resolve } from 'path'
import { writeFile } from 'fs/promises'

function profilePlugin() {
  const SIZE = 512

  const SRC = resolve('public/avatar_v2.jpg')

  async function generateCircular() {
    const { width, height } = await sharp(SRC).metadata()
    const size = Math.min(width, height)

    const circle = Buffer.from(
      `<svg><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="white"/></svg>`,
    )

    return sharp(SRC)
      .resize(SIZE, SIZE, { fit: 'cover', position: 'center' })
      .composite([{ input: circle, blend: 'dest-in' }])
      .png()
      .toBuffer()
  }

  return {
    name: 'profile-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/profile.png') {
          try {
            const buffer = await generateCircular()
            res.setHeader('Content-Type', 'image/png')
            res.setHeader('Content-Length', buffer.length)
            res.statusCode = 200
            res.end(buffer)
          } catch (err) {
            console.error('Failed to generate profile.png:', err)
            res.statusCode = 500
            res.end('Internal Server Error')
          }
        } else {
          next()
        }
      })
    },
    async closeBundle() {
      const outDir = resolve('dist')
      const buffer = await generateCircular()
      await writeFile(resolve(outDir, 'profile.png'), buffer)
      console.log('✓ Generated dist/profile.png (circular avatar)')
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), profilePlugin()],
})
