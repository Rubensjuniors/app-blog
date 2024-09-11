import tw from 'tailwind-styled-components'

export const CardPostContainer = tw.div`border-2 border-transparent border-b-gray-600 py-4 last:border-0`

export const CardPostLinkWrapper = tw.div`flex flex-col gap-2 sm:flex-row sm:gap-3`

export const CardPostTitle = tw.h1`line-clamp-2 text-xl font-bold sm:text-2xl`

export const CardPostDescription = tw.p`
text-md mb-4 mt-2 line-clamp-3 break-all font-light tracking-wide text-gray-300 sm:mt-1 sm:line-clamp-2`

export const CardPostInfosExtra = tw.div`items-center mt-2 flex gap-5 text-gray-300 sm:mt-3`
