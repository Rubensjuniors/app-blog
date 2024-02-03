import { getPrismicClient } from '@/services/prismic/PrismicRequest'

export async function getFooterData() {
  try {
    const prismic = getPrismicClient()

    const response = await prismic?.getByType('footer', {
      fetch: ['footer.name', 'footer.description', 'footer.copyright'],
      pageSize: 1
    })

    const { results } = response

    const footer = {
      name: results[0].data.name,
      description: results[0].data.description,
      copyright: results[0].data.copyright
    }

    return footer
  } catch {
    throw new Error('Failed fetching Footer')
  }
}