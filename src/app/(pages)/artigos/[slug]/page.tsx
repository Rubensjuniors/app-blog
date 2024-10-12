import Image from 'next/image'
import { notFound } from 'next/navigation'

import { PostService } from '@/services/postServices'

import InfosExtrasPost from '@/app/(pages)/artigos/components/InfosExtrasPost'
import { Mdx } from '@/components/Basic'

import { BackButton } from '../../../../components/Basic/BackButton'
import * as S from './styles'

const ArticlesPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const post = PostService.getByUid(slug)
  const hasImage = Boolean(post?.frontmatter.image)

  if (!post) {
    notFound()
  }

  return (
    <S.ArticlesWrapper>
      <BackButton hasImage={hasImage} />
      {hasImage && (
        <S.ArticleWrapperBanner data-testid="banner-post">
          <Image
            className="h-full w-full object-cover object-center"
            src={post?.frontmatter.image ?? ''}
            alt={`Banner post ${post?.frontmatter.title}`}
            width={1000}
            height={1000}
            priority
          />
        </S.ArticleWrapperBanner>
      )}

      <S.ArticleContentWrapper>
        <S.ArticleTitle>{post?.frontmatter.title}</S.ArticleTitle>
        <S.ArticleDescription>
          {post?.frontmatter.description}
        </S.ArticleDescription>

        <InfosExtrasPost
          publicationDate={post?.frontmatter.date ?? ''}
          tags={post?.frontmatter.tags ?? ['']}
          readingTime={post.readingTime}
        />

        <Mdx code={post?.body.code ?? ''} />
      </S.ArticleContentWrapper>
    </S.ArticlesWrapper>
  )
}

export default ArticlesPost
