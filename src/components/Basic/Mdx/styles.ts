/* eslint-disable max-len */
import tw from 'tailwind-styled-components'

export const MdxHeading = tw.h1` ${({ className }) => className} mt-4 text-3xl font-bold sm:text-4xl`

export const MdxHeadingLevel2 = tw.h2`${({ className }) => className} text-1xl mt-4 font-bold sm:text-2xl`

export const MdxText = tw.p`${({ className }) => className} mt-4 break-words leading-8 tracking-wider text-gray-300 sm:text-lg`

export const MdxStrong = tw.strong`${({ className }) => className} mt-4 break-words leading-8 tracking-wider text-red-300 sm:text-lg`

export const MdxExternalLink = tw.a`${({ className }) => className} mt-4 break-words leading-8 tracking-wider text-red-300 underline sm:text-lg`

export const MdxPre = tw.pre`${({ className }) => className} text-md mb-4 mt-6 overflow-x-auto rounded-lg p-4`

export const MdxCode = tw.code`${({ className }) => className} text-md relative flex rounded`

export const MdxListOl = tw.ol`${({ className }) => className} list-decimal p-4 pl-11`

export const MdxLi = tw.li`${({ className }) => className} break-words p-2 leading-8 tracking-wider text-gray-300 sm:text-lg`
