import tw from 'tailwind-styled-components'

export const AboutContainer = tw.section`mt-3 flex flex-col items-center gap-4 sm:px-4`

export const ProfileCardWrapper = tw.div`relative flex w-full justify-start`

export const ProfileCardPhoto = tw.div`absolute top-16 ml-3 h-28 w-28 sm:top-14 sm:ml-6 sm:h-40 sm:w-40`

export const ProfileInfosWrapper = tw.div`flex flex-col gap-1 px-4 pb-4 sm:px-4 sm:pt-6`

export const ProfileInfoName = tw.h1`text-2xl font-bold sm:text-4xl`

export const ProfileInfoBio = tw.span`text-sm sm:text-lg`

export const AboutMeWrapper = tw.div`text-lg-xl flex flex-col items-start gap-2 text-lg font-light`

export const AboutMeText = tw.p`text-justify`
