import tw from 'tailwind-styled-components'

export const NavStyle = tw.nav`
sticky left-0 top-0 hidden max-h-screen w-[73px]
flex-col items-center justify-start gap-4 overflow-hidden
p-3 pt-5 duration-500 ease-in-out lg:flex lg:items-start
lg:p-1 lg:pt-5 lg:hover:w-56
`

export const ItemMenuWrapperStyle = tw.div`

`

export const ItemMenuStyle = tw.div`
flex
items-center
gap-7
font-bold
`