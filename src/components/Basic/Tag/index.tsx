import Link from 'next/link'

import * as S from './style'

export type TagProps = {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const Tag = ({ children, size = 'sm' }: TagProps) => (
  <Link href={`/artigos?topic=${children}`}>
    <S.Tag size={size}>{children}</S.Tag>
  </Link>
)

export default Tag
