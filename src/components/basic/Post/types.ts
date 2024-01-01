import { PostTypes } from '@/ultils/types'

export interface PostProps {
  type?: PostTypes
  maximumToShow?: number
  title: string
  description: string
  tags: string[]
  author: string
  publicationDate: string
  uid: string | number
  path?: string
}

export enum TYPES_POST_ICON {
  GYM = 'barbell-phosphor',
  CODE = 'code-phosphor',
}