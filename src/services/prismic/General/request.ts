import { getPrismicClient } from '@/services/prismic/PrismicRequest'

export async function getGeneralData() {
  try {
    const prismic = getPrismicClient()

    const response = await prismic?.getByType('general', {
      fetch: ['general.sociais_links', 'general.menu'],
      pageSize: 1
    })

    const { results } = response

    const general = {
      sociaisLinks: results[0]?.data.sociais_links.map((content: {social_id: string, social_link: string}) => {
        return {
          id: content.social_id,
          link: content.social_link
        }
      }),
      menu: results[0]?.data.menu.map((content: { menu_id: string, menu_name: string, path: string }) => {
        return {
          id: content.menu_id,
          name: content.menu_name,
          path: content.path
        }
      })
    }

    return general
  } catch {
    throw new Error('Failed fetching General')
  }
}