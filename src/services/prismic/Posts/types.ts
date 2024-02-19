import { PostTypes } from '@/ultils/types'

export type GetPostProps = {
  pageSize?: number
}

export interface coverPhoto {
    url: string
    dimensions: {
      width: number
      height:number
    }
    alt: string
}

export interface Post {
  id: string
  typePost: PostTypes
  slug: string | null
  publicationDate: string
  title: string
  description: string
  author: string
  tags: string[]
  coverPhoto: coverPhoto
}

export interface GetPostData {
  posts: Post[]
  next_page: string | null
  prev_page: string | null
  total_pages: number
  total_results_size: number
  page: number
  latestPosts: Post[]
}
