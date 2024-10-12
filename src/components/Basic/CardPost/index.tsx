import Image from 'next/image'
import Link from 'next/link'

import InfosExtrasPost from '@/components/Articles/InfosExtrasPost'

import * as S from './styles'
import { PostProps } from './types'

const CardPost = ({
  description,
  publicationDate,
  tags,
  title,
  uid,
  image,
  readingTime
}: PostProps) => (
  <S.CardPostContainer>
    <Link
      prefetch={true}
      href={`/artigos/${uid}`}
      className="md:hover:brightness-75"
    >
      <S.CardPostLinkWrapper>
        <S.CardPostImageWrapper image={image}>
          <Image
            className="h-full w-full rounded-md object-cover object-center"
            src={image}
            width={1000}
            height={1000}
            alt="foto de perfil"
            title="foto de perfil"
            priority
          />
        </S.CardPostImageWrapper>

        <div className="w-full">
          <S.CardPostTitle>{title}</S.CardPostTitle>

          <S.CardPostDescription>{description}</S.CardPostDescription>
        </div>
      </S.CardPostLinkWrapper>
    </Link>

    <InfosExtrasPost publicationDate={publicationDate} tags={tags} readingTime={readingTime} />
  </S.CardPostContainer>
)

export default CardPost
