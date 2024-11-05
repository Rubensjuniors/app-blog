import { Post } from 'contentlayer/generated'

import { slugify } from '../slugfy'

export const formatPosts = (posts: Post[]) => {
  const formattedPosts = posts.map((post) => ({
    uid: slugify(post.uid),
    body: post.body,
    readingTime: Math.ceil(post.readingTime.minutes),
    frontmatter: {
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags,
      image: post.image
    }
  }))

  return formattedPosts.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  )
}
