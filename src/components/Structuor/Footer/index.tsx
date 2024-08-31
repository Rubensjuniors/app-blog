import { siteConfig } from '@/configs/site'

import LinksSociais from '@/components/Sociais'

import * as S from './style'

const Footer = () => (
  <S.Footer data-testid="footer-componente">
    <S.Wrapper>
      <div>
        <S.Title>{siteConfig.name}</S.Title>
        <S.Bio>{siteConfig.title}</S.Bio>
      </div>

      <LinksSociais />
    </S.Wrapper>

    <S.Copyright>{siteConfig.copyright}</S.Copyright>
  </S.Footer>
)

export default Footer
