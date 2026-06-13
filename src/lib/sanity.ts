import SanityClient from '@sanity/client'

const sanityConfig = {
  projectId: '87nuj250',
  dataset: 'production',
  apiVersion: '2026-06-12',
  useCdn: false,
  perspective: 'published',
}

export const sanityClient = new SanityClient(sanityConfig)

export async function getCreations() {
  const query = `*[_type == "creation"] | order(featured desc, year desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    services,
    year,
    status,
    featured,
    excerpt,
    "image": mainImage.asset->url,
    "alt": mainImage.alt,
    "gallery": gallery[]{
      "image": asset->url,
      "alt": alt
    },
    body,
    link,
    repo,
    seoTitle,
    seoDescription
  }`

  return sanityClient.fetch(query)
}

export async function getCreationBySlug(slug: string) {
  const query = `*[_type == "creation" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    services,
    year,
    status,
    featured,
    excerpt,
    "image": mainImage.asset->url,
    "alt": mainImage.alt,
    "gallery": gallery[]{
      "image": asset->url,
      "alt": alt
    },
    body,
    link,
    repo,
    seoTitle,
    seoDescription
  }`

  return sanityClient.fetch(query, {slug})
}
