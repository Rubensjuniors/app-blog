import Link from 'next/link'

import * as S from './styles'

export type BackButtonProps = {
  hasImage?: boolean
}
const classeNextLink =
  'group flex cursor-pointer items-center gap-1 rounded-full bg-gray-700 p-2 text-gray-400'

export const BackButton = ({ hasImage }: BackButtonProps) => (
  <Link
    href="/"
    className={`${classeNextLink} ${hasImage && 'absolute left-2 top-2'}`}
  >
    <S.IcontContainer>
      <S.Icon size={20} />
    </S.IcontContainer>

    <S.Text>Voltar à listagem</S.Text>
  </Link>
)
