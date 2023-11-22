import Link from 'next/link'

import { PostTypes } from '@/ultils/types'

import { Icon } from '../basic'
import { PostProps, TYPES_POST_ICON } from './types'

const flexCenter = 'flex items-center'
const contentClass = 'flex flex-col gap-1 border-2 border-transparent border-b-gray-750 py-4 last:border-0 md:hover:brightness-75 transition-all'

const Post = ({
  author,
  description,
  publicationDate,
  tags,
  title,
  path,
  type,
  uid
}: PostProps) => {
  const getIconType = () => {
    if (type === PostTypes.GYM) {
      return <Icon id={TYPES_POST_ICON.GYM} classIcon="hidden md:inline-block" />
    }
    return <Icon id={TYPES_POST_ICON.CODE} classIcon="hidden md:inline-block" />

  }
  const isTagsClass = tags.length > 0 && 'before:w-[2px] before:h-8 before:bg-gray-750 before:rounded-full'

  return (
    <Link href={path ?? `/artigos/${uid}`} className={contentClass}>
      <div className={`${flexCenter} justify-between`}>
        <h1 className="text-xl sm:text-2xl font-bold line-clamp-1">{title}</h1>
        {getIconType()}
      </div>

      <p className="mb-4 text-md text-gray-300 font-light line-clamp-1 sm:line-clamp-2">{description}</p>

      <div className={`${flexCenter} gap-5 text-gray-300`}>
        <ul className={`${flexCenter} gap-4`}>
          <li className={`${flexCenter} gap-2`}>
            <Icon id="calendarBlank-phosphor" />
            <span>{publicationDate}</span>
          </li>

          <li className={`${flexCenter} gap-2`}>
            <Icon id="user-phosphor" />
            <span>{author}</span>
          </li>
        </ul>

        <ul
          className={`
          ${flexCenter}
          ${isTagsClass}
          gap-5 hidden md:flex
          `}>
          {tags.map((tag, index) => {
            const limitTags = index < 3

            return limitTags && <li key={tag} className="bg-gray-750 p-1 px-5 rounded-full text-sm">{tag}</li>
          }
          )}
        </ul>

      </div>
    </Link>
  )
}

export default Post
