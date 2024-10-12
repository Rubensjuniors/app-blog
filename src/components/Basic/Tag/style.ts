import tw from 'tailwind-styled-components'

import { TagProps } from './'

export const Tag = tw.p<Pick<TagProps, 'size'>>`
  rounded-2xl
  bg-gray-750
  px-3
  py-1
  font-normal
  capitalize
  text-gray-200
  transition-colors
  duration-300
  hover:text-red-300

  ${({ size }) => `
    text-${size}
  `}
`