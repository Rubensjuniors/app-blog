import { createElement } from 'react'

import { TitleProps } from './types'

const Title = ({ children, level, className }: TitleProps) => {
  const TitleTag = level ? `h${level}` : 'span'
  const TitleTagProps = { children, className }

  return createElement(TitleTag, TitleTagProps)
}

Title.displayName = 'Title'

export default Title
