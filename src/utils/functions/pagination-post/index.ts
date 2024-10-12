import { MDX } from 'contentlayer/core'

type formattedPosts = {
  uid: string
  body: MDX,
  readingTime: number
  frontmatter: {
    title: string
    description: string
    date: string
    tags: string[] | any
    image: string
  }
}

export const paginationPosts = (
  posts: formattedPosts[],
  limit = 10,
  page = 1
) => {
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  return posts.slice(startIndex, endIndex)
}
