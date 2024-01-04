import { getPost } from '@/services/prismic/Articles/request'

const ArticlesPost = async ({ params }: { params: { slugs: string }}) => {
  const post = await getPost(params.slugs)
  return (
    <>
      <pre>{post?.contentBody.title}</pre>
    </>
  )
}

export default ArticlesPost
