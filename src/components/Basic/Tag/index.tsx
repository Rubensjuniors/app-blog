import React from 'react'

import { TagButton } from './styles'

interface TagProps {
  title: string
  onCLick?: () => void
}

const Tag = ({ title }: TagProps) => <TagButton>{title}</TagButton>

export default Tag
