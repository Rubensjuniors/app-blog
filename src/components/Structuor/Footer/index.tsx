import { allProfiles } from 'contentlayer/generated'

import LinksSociais from '@/components/Sociais'

import * as S from './style'

const Footer = () => {
  const { name, work } = allProfiles.map((profile) => profile)[0]

  return (
    <S.Footer data-testid="footer-componente">
      <S.Wrapper>
        <div>
          <S.Title>{name}</S.Title>
          <S.Bio>{work}</S.Bio>
        </div>

        <LinksSociais />
      </S.Wrapper>

      <S.Copyright>
        Todos os direitos reseverdos © Rubens junio 2024
      </S.Copyright>
    </S.Footer>
  )
}

export default Footer
