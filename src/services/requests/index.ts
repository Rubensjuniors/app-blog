/* eslint-disable no-console */
import { getPrismicClient } from '@/services/prismic'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export async function getPosts() {
  try {
    const prismic = getPrismicClient()

    const response = await prismic?.getByType('artigos', {
      fetch: [
        'artigos.title',
        'artigos.description',
        'artigos.author',
        'artigos.type_post',
      ],
      page: 1 ,
      pageSize: 5,
    })
    const { results, next_page, prev_page, total_pages, total_results_size, page } = response

    const posts = results?.map(post => {
      return {
        id: post.id,
        typePost: post.data.type_post,
        slug: post.uid,
        publicationDate: format(new Date(post.first_publication_date ?? ''), 'dd MMM yyyy', {
          locale: ptBR,
        }),
        title: post.data.title,
        description: post.data.description,
        author: post.data.author,
        tags: post.tags
      }
    })

    return { posts, next_page, prev_page, total_pages, total_results_size, page }
  } catch (err) {
    console.error('Ocorreu um erro:', err)
  } finally {
    console.log('Success')
  }
}