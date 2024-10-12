import tw from 'tailwind-styled-components'

export const Container = tw.div`
  mt-4
  rounded-lg
  border-[1px]
  border-gray-700
`

export const Header = tw.div`
  flex
  w-full
  justify-between
  rounded-t-lg
  border-gray-700
  bg-gray-800
  px-4
  py-2
`

export const PreTag = tw.pre`
text-md mb-4 overflow-x-auto rounded-lg mt-0 p-4
`