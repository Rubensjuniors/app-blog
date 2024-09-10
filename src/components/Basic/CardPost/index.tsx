/* eslint-disable max-len */
import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '..'

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

  return (
    <div className="border-2 border-transparent border-b-gray-600 py-4 last:border-0">
      <Link href={path ?? `/artigos/${uid}`} className="md:hover:brightness-75">
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
          <div
            className={`${!image && 'hidden'} h-52 sm:max-h-36 sm:max-w-36`}
          >
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
              <h1 className="line-clamp-2 text-xl font-bold sm:text-2xl">
                {title}
              </h1>
            </div>

            <p className="text-md mb-4 mt-2 line-clamp-3 break-all font-light tracking-wide text-gray-300 sm:mt-1 sm:line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </Link>

      <div className={`${flexCenter} mt-2 gap-5 text-gray-300 sm:mt-3`}>
        <ul className={`${flexCenter} gap-4`}>
          <li className={`${flexCenter} gap-2`}>
            <Icon id="calendarBlank-phosphor" />
            <span>{publicationDate}</span>
          </li>

          <li className={` ${flexCenter} ${isTagsClass} hidden gap-5 sm:flex`}>
            {tags.map((tag, index) => {
              const limitTags = index < 3

              return limitTags && <span key={index}>{tag}</span>
            })}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CardPost
