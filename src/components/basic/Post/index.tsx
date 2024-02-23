import Image from 'next/image'
import Link from 'next/link'

import { PostTypes } from '@/ultils/types'

import { Icon, Tag } from '..'

import { PostProps, TYPES_POST_ICON } from './types'

const flexCenter = 'flex items-center'

const Post = ({
  author,
  description,
  publicationDate,
  tags,
  title,
  path,
  type,
  uid,
  coverPhoto
}: PostProps) => {
  const getIconType = () => {
    if (type === PostTypes.GYM) {
      return <Icon id={TYPES_POST_ICON.GYM} classIcon="hidden md:inline-block" />
    }
    return <Icon id={TYPES_POST_ICON.CODE} classIcon="hidden md:inline-block" />

  }
  const isTagsClass = tags.length > 0 && 'before:w-[2px] before:h-8 before:bg-gray-750 before:rounded-full'

  return (
    <div className="border-2 border-transparent border-b-gray-750 py-4 last:border-0">
      <Link href={path ?? `/artigos/${uid}`} className="md:hover:brightness-75">
        <div className="flex flex-col gap-2 sm1:gap-3 sm1:flex-row ">
          <div className={`${!coverPhoto.url && 'hidden'} h-52 sm1:max-w-[132px] sm1:max-h-[132px]`}>
            <Image
              className="h-full rounded-md object-cover object-center"
              src={coverPhoto?.url}
              alt={coverPhoto.alt}
              width={coverPhoto.dimensions.width}
              height={coverPhoto.dimensions.height}/>
          </div>

          <div className="w-full">
            <div className={`${flexCenter} justify-between w-full`}>
              <h1 className="text-xl sm:text-2xl font-bold line-clamp-2">{title}</h1>
              {getIconType()}
            </div>

            <p className="mb-4 mt-2 sm1:mt-1 text-md text-gray-300 font-light line-clamp-3 sm:line-clamp-2 break-all">{description}</p>
          </div>
        </div>
      </Link>

      <div className={`${flexCenter} gap-5 text-gray-300 mt-2 sm1:mt-3`}>
        <ul className={`${flexCenter} gap-4`}>
          <li className={`${flexCenter} gap-2`}>
            <Icon id="calendarBlank-phosphor" />
            <span>{publicationDate}</span>
          </li>

          <li className={`${flexCenter} gap-2`}>
            <Icon id="user-phosphor" />
            <span>{author ? author : 'Sem Author'}</span>
          </li>
        </ul>

        <ul
          className={`
        ${flexCenter}
        ${isTagsClass}
        gap-5 hidden sm1:flex
        `}>
          {tags.map((tag, index) => {
            const limitTags = index < 3

            return limitTags && <li key={tag}><Tag title={tag} /></li>
          }
          )}
        </ul>

      </div>
    </div>
  )
}

export default Post
