import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/utils/date'

import { Icon, Tag } from '..'

import * as S from './styles'
import { PostProps } from './types'

const CardPost = ({
  description,
  publicationDate,
  tags,
  title,
  uid,
  image
}: PostProps) => (
  <S.CardPostContainer>
    <Link href={`/artigos/${uid}`} className="md:hover:brightness-75">
      <S.CardPostLinkWrapper>
        <S.CardPostImageWrapper image={image}>
          <Image
            className="h-full w-full rounded-md object-cover object-center"
            src={image}
            width={80}
            height={80}
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

    <S.CardPostInfosExtra>
      <S.CardPostInfosExtraDate>
        <Icon id="calendarBlank-phosphor" />
        <span>{formatDate(publicationDate)}</span>
      </S.CardPostInfosExtraDate>

      <S.CardPostInfosExtraTags tags={tags}>
        {tags.map((tag, index) => {
          const limitTags = index < 3

          return limitTags && <Tag title={tag} key={index} />
        })}
      </S.CardPostInfosExtraTags>
    </S.CardPostInfosExtra>
  </S.CardPostContainer>
)

export default CardPost
