import * as S from './styles'

export type BackButtonProps = {
  hasImage?: boolean
}

export const BackButton = ({ hasImage }: BackButtonProps) => (
  <S.Link href="/" hasImage={hasImage}>
    <S.IcontContainer>
      <S.Icon size={20} />
    </S.IcontContainer>

    <S.Text>Voltar à listagem</S.Text>
  </S.Link>
)
