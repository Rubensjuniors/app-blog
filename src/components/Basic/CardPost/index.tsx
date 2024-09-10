import Image from 'next/image'
import Link from 'next/link'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import {
  CardPostContainer,
  CardPostDescription,
  CardPostTitle,
  CardPostInfosExtra
} from './styles'

import { Icon, Tag } from '..'

import { PostProps } from './types'

const flexCenter = 'flex items-center'

const CardPost = ({
  description,
  publicationDate,
  tags,
  title,
  path,
  uid,
  image
}: PostProps) => {
  const isTagsClass =
    tags.length > 0 &&
    'before:w-[2px] before:h-8 before:bg-gray-750 before:rounded-full'

  const date = format(
    new Date(publicationDate ?? ''),
    'dd MMM yyyy',
    {
      locale: ptBR
    }
  )

  return (
    <CardPostContainer>
      <Link href={path ?? `/artigos/${uid}`} className="md:hover:brightness-75">
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
          <div className={`${!image && 'hidden'} h-52 sm:max-h-36 sm:max-w-36`}>
            <Image
              className="h-full rounded-md object-cover object-center"
              src={image}
              width={80}
              height={80}
              alt="foto de perfil"
              title="foto de perfil"
              priority
            />
          </div>

          <div className="w-full">
            <div className={`${flexCenter} w-full justify-between`}>
              <CardPostTitle>{title}</CardPostTitle>
            </div>

            <CardPostDescription>{description}</CardPostDescription>
          </div>
        </div>
      </Link>

      <CardPostInfosExtra>
        <ul className="items-center gap-4 flex">
          <li className="items-center gap-2 flex">
            <Icon id="calendarBlank-phosphor" />
            <span>{date}</span>
          </li>

          <li
            className={`flex items-center ${isTagsClass} hidden gap-5 sm:flex`}
          >
            {tags.map((tag, index) => {
              const limitTags = index < 3

              return limitTags && <Tag title={tag} key={index} />
            })}
          </li>
        </ul>
      </CardPostInfosExtra>
    </CardPostContainer>
  )
}

export default CardPost
