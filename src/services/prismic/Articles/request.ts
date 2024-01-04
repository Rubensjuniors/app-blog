/* eslint-disable no-console */
import { getPrismicClient } from '@/services/prismic'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export async function getArticlesData() {
  try {
    const prismic = getPrismicClient()

    const response = await prismic?.getByType('page_articles', {
      fetch: ['page_articles.my_articles', 'page_articles.search_tags'],
      pageSize: 100,
    })
    const { results } = response
    const articles = {
      title_my_articles: results[0].data.my_articles,
      search_tags: results[0].data.search_tags
    }

    return articles
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed fetching Articles', error)
  }
}

export async function getTagsData() {
  try{
    const prismic = getPrismicClient()

    const tags = await prismic?.getTags()
    return tags
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed fetching tags', error)
  }
}

export async function getPost(uid: string){
  try {

    const prismic = getPrismicClient()

    const response = await prismic?.getByUID('artigos', uid)

    const post = {
      id: response.id,
      first_publication_date: format(
        new Date(response.first_publication_date ?? ''),
        'dd MMM yyyy',
        {
          locale: ptBR,
        },
      ),
      last_publication_date: format(
        new Date(response.last_publication_date ?? ''),
        'dd MMM yyyy',
        {
          locale: ptBR,
        },
      ),
      tags: response.tags,
      contentBody: {
        title: response.data.title,
        description: response.data.description,
        author: response.data.author,
        banners: {
          cover: { ...response.data.cover },
          banner: { ...response.data.banner }
        },
        content: response?.data.content.map(
          (content: { heading: string; body: string[] }) => {
            return {
              heading: content.heading,
              body: [...content.body],
            }
          },
        ),

      }

    }

    return post
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed fetching Posts', error)
  }
}
