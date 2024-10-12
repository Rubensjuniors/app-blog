import { allPosts } from 'contentlayer/generated'

import { formatPosts } from '@/utils/functions/format-post'
import { paginationPosts } from '@/utils/functions/pagination-post'

type GetPostAllParams = {
  limit?: number
  currentPage?: number
}

export const PostService = {
  getAll: ({ limit = 5, currentPage = 1 }: GetPostAllParams = {}) => {
    const formattedPosts = formatPosts(allPosts)
    const numbPages = Math.ceil(formattedPosts.length / limit)
    const paginatePosts = paginationPosts(formattedPosts, limit, currentPage)

    return {
      posts: paginatePosts,
      numbPages,
      currentPage
    }
  },
  getByUid: (uid: string) => {
    const formattedPosts = formatPosts(allPosts)
    const post = formattedPosts.find((post) => post.uid === uid)

    return post
  }
}
