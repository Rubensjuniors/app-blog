import { getPrismicClient } from '@/services/prismic/PrismicRequest'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import moment from 'moment'

import { GetPostProps, Post } from './types'

export async function getPosts({ pageSize = 5, }: GetPostProps) {
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
      pageSize: pageSize,
    })
    const {
      results,
      next_page,
      prev_page,
      total_pages,
      total_results_size,
      page
    } = response

    const posts: Post[] = results?.map(post => {
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

    const latestPosts = posts.sort((post, b) => {
      return moment(b.publicationDate).diff(moment(post.publicationDate))
    })

    return {
      posts,
      next_page,
      prev_page,
      total_pages,
      total_results_size,
      page,
      latestPosts
    }
  } catch {
    throw new Error('Failed fetching Posts')
  }
}
