import tw from 'tailwind-styled-components'

export const Footer = tw.footer`
flex
w-full
flex-col
items-center
gap-10
border-t
border-gray-750
p-4
py-8
`
export const Wrapper = tw.div`
flex
w-full
items-start
justify-between
`

export const Title = tw.h1`
font-marck-script
text-3xl
md:text-4xl
`

export const Bio = tw.p`
md:text-md
mt-2
text-sm
font-light
`

export const List = tw.ul`
flex
items-center
gap-3
sm:mr-6
sm:gap-4
`

export const Copyright = tw.span`
md:text-md
text-sm
`
