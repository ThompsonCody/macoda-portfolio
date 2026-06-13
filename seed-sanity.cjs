// This script seeds the Sanity dataset with creation documents based on the data defined in src/data/creations.ts.
// !!!! this is a one-time migration script and should not be rerun casually because it may upload duplicate image assets. Do not change the script logic

const fs = require('fs')
const path = require('path')
const SanityClient = require('@sanity/client')

const envPath = path.join(__dirname, '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) return
    const [key, ...rest] = trimmed.split('=')
    const value = rest.join('=').trim()
    if (key && value && process.env[key] === undefined) {
      process.env[key] = value
    }
  })
}

if (!process.env.SANITY_AUTH_TOKEN) {
  throw new Error('SANITY_AUTH_TOKEN must be set in Mac Oda/.env.local')
}

const client = new SanityClient({
  projectId: '87nuj250',
  dataset: 'production',
  apiVersion: '2026-06-12',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
})

const dataPath = path.join(__dirname, 'src', 'data', 'creations.ts')
const rawData = fs.readFileSync(dataPath, 'utf8')
const cleanedData = rawData
  .replace(/export type Creation = [\s\S]*?};\s*/m, '')
  .replace(/export const creations\s*:\s*Creation\[\]\s*=/, 'const creations =')
  .replace(/export const creations\s*=/, 'const creations =')

const loadCreations = new Function(`"use strict"; ${cleanedData}; return creations;`)
const creations = loadCreations()

if (!Array.isArray(creations)) {
  throw new Error('Failed to load creations from src/data/creations.ts')
}

const resolveLocalImage = (imagePath) => {
  if (!imagePath) return null
  const normalized = imagePath.replace(/^\//, '')
  const candidates = [
    path.join(__dirname, normalized),
    path.join(__dirname, 'public', normalized),
  ]
  const filePath = candidates.find((candidate) => fs.existsSync(candidate))
  if (!filePath) {
    throw new Error(`Image file not found for path ${imagePath}. Checked:
  ${candidates.join('\n  ')}`)
  }
  return filePath
}

const uploadImageAsset = async (filePath) => {
  console.log(`Uploading image ${path.basename(filePath)} from ${filePath}`)
  const stream = fs.createReadStream(filePath)
  const asset = await client.assets.upload('image', stream, {
    filename: path.basename(filePath),
  })
  console.log(`  Uploaded asset ${asset._id}`)
  return asset
}

const createImageRef = (asset, altText) => ({
  _type: 'image',
  asset: {
    _type: 'reference',
    _ref: asset._id,
  },
  alt: altText || '',
})

const run = async () => {
  console.log('Starting Sanity seed for creations...')

  for (const creation of creations) {
    const docId = `creation-${creation.slug}`
    console.log(`\nProcessing creation: ${creation.slug} (${creation.title})`)

    const mainImagePath = resolveLocalImage(creation.image)
    const mainAsset = await uploadImageAsset(mainImagePath)
    const mainImage = createImageRef(mainAsset, creation.alt)

    const gallery = Array.isArray(creation.gallery)
      ? await Promise.all(
          creation.gallery.map(async (item, index) => {
            const galleryPath = resolveLocalImage(item.image)
            const asset = await uploadImageAsset(galleryPath)
            return createImageRef(asset, item.alt)
          })
        )
      : []

    const doc = {
      _id: docId,
      _type: 'creation',
      title: creation.title,
      slug: { current: creation.slug },
      category: creation.category,
      services: creation.services || [],
      year: creation.year || '',
      status: creation.status || '',
      featured: creation.featured || false,
      excerpt: creation.excerpt || '',
      mainImage,
      gallery,
      body: creation.body || [],
      link: creation.link || '',
      repo: creation.repo || '',
      seoTitle: creation.seoTitle || '',
      seoDescription: creation.seoDescription || '',
    }

    await client.createOrReplace(doc)
    console.log(`  Created or replaced document ${docId}`)
  }

  const created = await client.fetch('*[_type == "creation"]{_id, title, "slug": slug.current}')
  console.log(`\nSanity query result: ${created.length} creation document(s) found`)
  created.forEach((item) => {
    console.log(`  ${item._id} — ${item.title} — ${item.slug}`)
  })
}

run().catch((error) => {
  console.error('Sanity seed failed:', error)
  process.exit(1)
})
