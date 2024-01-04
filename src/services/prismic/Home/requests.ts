import { getPrismicClient } from '@/services/prismic'

export async function getHomeData() {
  try {

    const prismic = getPrismicClient()

    const responseHome = await prismic?.getByType('home', {
      fetch: [
        'home.photo_profile',
        'home.title',
        'home.description',
        'home.latest_articles',
      ],
      pageSize: 100,
    })
    const { results } = responseHome
    const home = {
      photoProfile:{
        url:  results[0].data.photo_profile.url,
        width:  results[0].data.photo_profile.dimensions.width,
        heigth:  results[0].data.photo_profile.dimensions.heigth
      },
      title: results[0].data.title,
      description: results[0].data.description,
      latest_articles: results[0].data.latest_articles
    }

    return {
      home
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed fetching Home', error)
  }
}
