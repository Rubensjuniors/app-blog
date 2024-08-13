import tw from 'tailwind-styled-components'

export const HeaderStyles = tw.header`
  bg-gray-800
  z-10
  py-4
  px-4
  sticky
  top-0
  left-0
  backdrop-blur-lg
  shadow-md
`

export const ContainerHeaderStyles = tw.div`
  flex
  justify-between
  items-center
  mx-auto
  my-0
  max-w-screen-xl
`

export const NavStyles = tw.nav`
  hidden
  sm:flex
  gap-5
  font-bold
  items-center
  max-w-md
`
export const MenuMobileContainer = tw.div`
animate-slide-enter fixed left-0 top-0 z-30
flex min-h-screen w-full flex-col gap-10 overflow-hidden
p-4 pt-6 backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden
`
