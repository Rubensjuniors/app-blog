import Image from 'next/image'

import { siteConfig } from '@/configs/site'

import { Card } from '@/components/Basic'
import LinksSociais from '@/components/Sociais'

import { aboutMetext } from './constants'
import * as S from './styles'

const About = () => (
  <S.AboutContainer>
    <Card classNames="card-spacing w-full">
      <S.ProfileCardWrapper>
        <Image
          className="h-32 w-[948px] object-cover sm:h-36 sm:rounded-t-lg"
          src={siteConfig.banner}
          alt="banner"
          width={500}
          height={500}
          priority
        />
        <S.ProfileCardPhoto>
          <Image
            className="h-full w-full rounded-full object-cover shadow-md"
            src={siteConfig.photo}
            alt={'my photo of profile'}
            width={500}
            height={500}
            priority
          />
        </S.ProfileCardPhoto>
      </S.ProfileCardWrapper>

      <LinksSociais classNames="flex items-center justify-end px-4 pb-1 pt-4" />

      <S.ProfileInfosWrapper>
        <S.ProfileInfoName>{siteConfig.name}</S.ProfileInfoName>
        <S.ProfileInfoBio>{siteConfig.bio}</S.ProfileInfoBio>
      </S.ProfileInfosWrapper>
    </Card>

    <Card
      title={'Sobre Mim'}
      classNames="w-full p-4 flex flex-col items-start gap-2"
    >
      <S.AboutMeWrapper>
        {aboutMetext.map((text) => (
          <S.AboutMeText key={text}>{text}</S.AboutMeText>
        ))}
      </S.AboutMeWrapper>
    </Card>
  </S.AboutContainer>
)

export default About
