import * as S from './styles'

type EmptyProps = {
  children: React.ReactNode
}

const Empty = ({ children }: EmptyProps) => (
  <S.Container>
    <S.Content>{children}</S.Content>
  </S.Container>
)

export default Empty
