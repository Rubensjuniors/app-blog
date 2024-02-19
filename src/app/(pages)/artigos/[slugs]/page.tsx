import Link from 'next/link'

import { getPost } from '@/services/prismic'

const ArticlesPost = async ({ params }: { params: { slugs: string }}) => {
  const post = await getPost(params.slugs)
  return (
    <>
      <Link href="/">Voltar </Link>
      <pre>{post?.contentBody.title}</pre>
    </>
  )
}

export default ArticlesPost
