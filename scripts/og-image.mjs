import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const dir = path.dirname(fileURLToPath(import.meta.url))
const svg = await readFile(path.join(dir, 'og-image.svg'))

await sharp(svg, { density: 96 })
  .resize(1200, 630)
  .png()
  .toFile(path.join(dir, '..', 'public', 'og-image.png'))

console.log('public/og-image.png written')