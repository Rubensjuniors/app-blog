/* eslint-disable max-len */
import tw from 'tailwind-styled-components'

export const MdxHeading = tw.h1` ${({ className }) => className} mt-4 text-3xl font-bold sm:text-4xl`

export const MdxHeadingLevel2 = tw.h2`${({ className }) => className} text-2xl mt-4 font-bold sm:text-3xl`
export const MdxHeadingLevel3 = tw.h3`${({ className }) => className} text-xl mt-4 font-bold sm:text-2xl`
export const MdxHeadingLevel4 = tw.h4`${({ className }) => className} text-xl mt-4 font-bold`
export const MdxHeadingLevel5 = tw.h5`${({ className }) => className} text-lg mt-4 font-bold`
export const MdxHeadingLevel6 = tw.h6`${({ className }) => className} text-base mt-4 font-bold`

export const MdxText = tw.p`${({ className }) => className} mt-4 break-words leading-8 tracking-wider text-gray-300 sm:text-lg`

export const MdxStrong = tw.strong`${({ className }) => className} mt-4 break-words leading-8 tracking-wider text-red-300 sm:text-lg`

export const MdxExternalLink = tw.a`${({ className }) => className} mt-4 break-words leading-8 tracking-wider text-red-300 underline sm:text-lg`

export const MdxCode = tw.code`${({ className }) => className} text-md relative flex rounded`

export const MdxListOl = tw.ol`${({ className }) => className} list-decimal p-4 pl-11`

export const MdxLi = tw.li`${({ className }) => className} break-words p-2 leading-8 tracking-wider text-gray-300 sm:text-lg`
