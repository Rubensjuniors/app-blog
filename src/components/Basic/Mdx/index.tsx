import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

import { MDXComponents } from 'mdx/types'

import * as S from './styles'

import '@/assets/styles/mdx.css'

const components: MDXComponents = {
  h1: ({ className = '', children, ...props }) => (
    <S.MdxHeading className={className} {...props}>
      {children}
    </S.MdxHeading>
  ),
  h2: ({ className = '', children, ...props }) => (
    <S.MdxHeadingLevel2 className={className} {...props}>
      {children}
    </S.MdxHeadingLevel2>
  ),
  p: ({ className = '', children, ...props }) => (
    <S.MdxText className={className} {...props}>
      {children}
    </S.MdxText>
  ),
  strong: ({ className = '', children, ...props }) => (
    <S.MdxStrong className={className} {...props}>
      {children}
    </S.MdxStrong>
  ),
  a: ({ className = '', children, ...props }) => (
    <S.MdxExternalLink target="_blank" className={className} {...props}>
      {children}
    </S.MdxExternalLink>
  ),
  img: ({ className = '', ...props }) => (
    <picture>
      <Image
        className={`${className} w-full rounded-sm`}
        src={props?.src ?? ''}
        width={1100}
        height={1100}
        alt={props?.alt ?? ''}
        title={props?.alt ?? ''}
      />
    </picture>
  ),
  pre: ({ className = '', children, ...props }) => (
    <S.MdxPre className={className} {...props}>
      {children}
    </S.MdxPre>
  ),
  code: ({ className = '', children, ...props }) => (
    <S.MdxCode className={className} {...props}>
      {children}
    </S.MdxCode>
  ),
  ol: ({ className = '', children, ...props }) => (
    <S.MdxListOl className={className} {...props}>
      {children}
    </S.MdxListOl>
  ),
  li: ({ className = '', children, ...props }) => (
    <S.MdxLi className={className} {...props}>
      {children}
    </S.MdxLi>
  )
}

type MdxProps = {
  code: string
}

const Mdx = ({ code = '' }: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <div>
      <Component components={components} />
    </div>
  )
}

export default Mdx
