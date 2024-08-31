import Image from 'next/image'

import { siteConfig } from '@/configs/site'

import { Card } from '@/components/Basic'
import LinksSociais from '@/components/Sociais'

import * as S from './page.styles'

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
  </S.AboutContainer>
)

export default About
