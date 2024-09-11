import tw from 'tailwind-styled-components'

import { PostProps } from './types'

export const CardPostContainer = tw.div`border-2 border-transparent border-b-gray-600 py-4 last:border-0`

export const CardPostLinkWrapper = tw.div`flex flex-col gap-2 sm:flex-row sm:gap-3`

export const CardPostImageWrapper = tw.div<Pick<PostProps, 'image'>>`
h-52
sm:max-h-36
sm:max-w-36

${({ image }) => `
  ${!image && 'hidden'}
`}
`

export const CardPostTitle = tw.h1`line-clamp-2 text-xl font-bold sm:text-2xl`

export const CardPostDescription = tw.p`
text-md mb-4 mt-2 line-clamp-3 break-all font-light tracking-wide text-gray-300 sm:mt-1 sm:line-clamp-2`

export const CardPostInfosExtra = tw.div`items-center mt-2 flex gap-5 text-gray-300 sm:mt-3`

export const CardPostInfosExtraDate = tw.div`flex items-center gap-2`

export const CardPostInfosExtraTags = tw.div<Pick<PostProps, 'tags'>>`
 flex
 items-center
 hidden
 gap-5
 sm:flex

 ${({ tags }) => `
  ${tags.length > 0 &&
    'before:w-[2px] before:h-8 before:bg-gray-750 before:rounded-full'}
`}
`
