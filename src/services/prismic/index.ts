// import * as prismic from '@prismicio/client'

// export default function getPrismicClient(req?: unknown) {
//   const prismica = prismic.client(process.env.PRISMIC_API_ENDPOINT!, {
//     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
//     req,
//   })
//   return prismica
// }

import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

export function getPrismicClient({
  previewData,
  req
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT!, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    
  })

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}