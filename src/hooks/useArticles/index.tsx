import { useSearchParams } from 'next/navigation'

import { PostService } from '@/services/postServices'

import { paginationPages } from '@/utils/functions/pagination-page'

const useArticles = () => {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page'))
  const currentPage = page === 0 ? 1 : page
  const { posts, numbPages } = PostService.getAll({
    currentPage
  })
  const { prevPage, nextPage } = paginationPages(currentPage)

  return {
    currentPage,
    prevPage,
    nextPage,
    posts,
    numbPages
  }
}

export default useArticles
