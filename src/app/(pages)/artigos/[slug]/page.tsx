import { allPosts } from 'contentlayer/generated'

import { Mdx } from '@/components/Basic'

const ArticlesPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const post = allPosts.find((post) => post.uid === slug)

  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
      <Mdx code={post?.body.code ?? ''} />
    </article>
  )
}

export default ArticlesPost
