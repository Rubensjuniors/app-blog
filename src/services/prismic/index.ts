/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Prismic from '@prismicio/client'

export default function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT!, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
  })
  return prismic
}