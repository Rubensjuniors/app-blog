import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

import { MDXComponents } from 'mdx/types'

import { Pre } from './components/pre'
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
  h3: ({ className = '', children, ...props }) => (
    <S.MdxHeadingLevel3 className={className} {...props}>
      {children}
    </S.MdxHeadingLevel3>
  ),
  h4: ({ className = '', children, ...props }) => (
    <S.MdxHeadingLevel4 className={className} {...props}>
    {children}
  </S.MdxHeadingLevel4>
  ),
  h5: ({ className = '', children, ...props }) => (
    <S.MdxHeadingLevel5 className={className} {...props}>
    {children}
  </S.MdxHeadingLevel5>
  ),
  h6: ({ className = '', children, ...props }) => (
    <S.MdxHeadingLevel6 className={className} {...props}>
      {children}
    </S.MdxHeadingLevel6>
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
  blockquote: ({ className = '', children, ...props }) => (
    <blockquote
      className={`mb-4 mt-6 border-l-2 border-slate-50 pl-6 font-normal italic text-gray-200 ${className}`}
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ className = '', children, ...props }) => (
    <Pre {...props} className={className}>
      {children}
    </Pre>
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
