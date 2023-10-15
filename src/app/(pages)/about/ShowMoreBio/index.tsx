'use client'
import { useState } from 'react'

import { Icon } from '@/components/basic'

import { ShowMoreListProps } from '../types'

const ShowMoreList = ({ list, showIndice, textbutton }: ShowMoreListProps) => {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <>
      {list.map((text, index) => {
        const showMoreText = (index < showIndice && !showMore) || showMore
        return (
          showMoreText && (
            <p
              key={text}
              className="text-lg-xl mb-2 text-justify text-lg font-light"
            >
              {text}
            </p>
          )
        )
      })}
      <button
        className="cursor-pointer underline md:hover:text-red-300"
        onClick={() => setShowMore(!showMore)}
      >
        <span className="flex items-center gap-2">
          {showMore ? (
            <>
              {textbutton.less}
              <Icon id="caretUp-phosphor" iconSize={18} />
            </>
          ) : (
            <>
              {textbutton.more}
              <Icon id="caretDown-phosphor" iconSize={18} />
            </>
          )}
        </span>
      </button>
    </>
  )
}

export default ShowMoreList
