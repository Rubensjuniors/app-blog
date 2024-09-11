import * as S from './styles'
import { CardProps } from './types'

const Card = ({ children, classNames, title }: CardProps) => (
  <S.CardStyle className={classNames}>
    {title && <S.CardTitle>{title}</S.CardTitle>}
    {children}
  </S.CardStyle>
)

export default Card
