/* eslint-disable max-len */
import tw from 'tailwind-styled-components'

import { IPost } from '@/utils/types'

export const CardPostInfosExtra = tw.div`mt-2 flex items-center gap-5 text-gray-300 sm:mt-3`

export const CardPostInfosExtraDate = tw.div`flex items-center gap-2`

export const CardPostInfosExtraTags = tw.div<
  Pick<IPost, 'tags'>
>`flex hidden items-center gap-5 sm:flex ${({ tags }) => `
  ${
    tags.length > 0 &&
    'before:w-[2px] before:h-8 before:bg-gray-750 before:rounded-full'
  }
`} `
