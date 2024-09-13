import Image from 'next/image'
import Link from 'next/link'

import { allPosts } from 'contentlayer/generated'

import InfosExtrasPost from '@/components/Articles/InfosExtrasPost'
import { Icon, Mdx } from '@/components/Basic'

import * as S from './styles'

const ArticlesPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const post = allPosts.find((post) => post.uid === slug)
  const hasImage = Boolean(post?.image)

  return (
    <S.ArticlesWrapper>
      <Link
        href="/"
        className={`${hasImage && 'absolute left-2 top-2'} rounded-full bg-gray-700 p-2`}
      >
        <Icon id="arrowLeft-phosphor" iconSize={24} />
      </Link>
      {hasImage && (
        <S.ArticleWrapperBanner data-testid="banner-post">
          <Image
            className="h-full w-full object-cover object-center"
            src={post?.image ?? ''}
            alt={`Banner post ${post?.title}`}
            width={1000}
            height={1000}
            priority
          />
        </S.ArticleWrapperBanner>
      )}

      <S.ArticleContentWrapper>
        <S.ArticleTitle>{post?.title}</S.ArticleTitle>
        <S.ArticleDescription>{post?.description}</S.ArticleDescription>

        <InfosExtrasPost
          publicationDate={post?.date ?? ''}
          tags={post?.tags ?? ['']}
        />

        <Mdx code={post?.body.code ?? ''} />
      </S.ArticleContentWrapper>
    </S.ArticlesWrapper>
  )
}

export default ArticlesPost
