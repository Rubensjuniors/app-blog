export interface PostProps {
  image: string
  maximumToShow?: number
  title: string
  description: string
  tags: string[]
  publicationDate: string
  uid: string | number
}

export enum TYPES_POST_ICON {
  GYM = 'barbell-phosphor',
  CODE = 'code-phosphor'
}
