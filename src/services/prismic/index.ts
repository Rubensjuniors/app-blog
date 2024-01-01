import { DEV } from '@/ultils/types'
import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

export function getPrismicClient({
  previewData,
  req
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT!, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions:
      process.env.NODE_ENV === DEV.PRODUCTION
        ? { next: { tags: ['prismic'], revalidate: 60 * 60 }, cache: 'force-cache' }
        : { next: { revalidate: 50 * 5 } },
  })

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}