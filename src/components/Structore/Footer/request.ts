import { getPrismicClient } from '@/services/prismic'

export async function getFooterData() {
  const prismic = getPrismicClient()

  const response = await prismic?.getByType('footer', {
    fetch: [
      'home.name',
      'home.description',
      'home.copyright',
    ],
    pageSize: 10,
  })
  const { results } = response
  const footer = {
    name: results[0].data.name,
    description: results[0].data.description,
    copyright: results[0].data.copyright
  }

  return footer
}
