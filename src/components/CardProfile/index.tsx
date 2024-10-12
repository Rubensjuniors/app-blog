import Image from 'next/image'

import { siteConfig } from '@/configs/site'

import * as S from './styles'

const CardProfile = () => (
  <S.WrapperCard data-testid="intro-home">
    <S.Picture>
      <Image
        className="w-full rounded-full shadow-sm"
        src={siteConfig.photo}
        width={80}
        height={80}
        alt="foto de perfil"
        title="foto de perfil"
        priority
      />
    </S.Picture>

    <S.Title>{siteConfig.title}</S.Title>
    <S.Bio>{siteConfig.subtitle}</S.Bio>
  </S.WrapperCard>
)

export default CardProfile
