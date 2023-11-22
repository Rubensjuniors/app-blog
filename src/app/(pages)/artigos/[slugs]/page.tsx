import { getPost } from '../request'

const ArticlesPost = async ({ params }: { params: { slugs: string }}) => {
  const post = await getPost(params.slugs)
  return (
    <>
      <pre>{params.slugs}</pre>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  )
}

export default ArticlesPost
