import tw from 'tailwind-styled-components'

export const HeaderStyles = tw.header`sticky left-0 top-0 z-10 flex items-center px-4 py-4 shadow-md backdrop-blur-lg sm:px-8 sm:py-5`
export const HeaderWrapperStyle = tw.div`flex w-full items-center justify-between lg:hidden`

export const ContainerSidemenuMobileStyle = tw.div`fixed left-0 top-0 z-30 flex min-h-screen w-full animate-slide-enter flex-col gap-10 overflow-hidden p-4 pt-6 backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden`
