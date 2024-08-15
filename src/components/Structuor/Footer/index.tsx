import Icon from '@/components/Basic/Icon'

import { SOCIAIS } from '@/utils/constantes'

import * as S from './style'

const Footer = () => (
  <S.Footer data-testid="footer-componente">
    <S.Wrapper>
      <div>
        <S.Title>Rubens Junio</S.Title>
        <S.Bio>Software engenieer</S.Bio>
      </div>

      <S.List>
        {SOCIAIS.map((social) => (
          <li key={social.name}>
            <a href={social.url}>
              <Icon id={social.id} iconSize={32} />
            </a>
          </li>
        ))}
      </S.List>
    </S.Wrapper>

    <S.Copyright>
      Todos os direitos reseverdos © Rubens junio 2024
    </S.Copyright>
  </S.Footer>
)

export default Footer
