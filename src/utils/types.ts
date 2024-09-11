export interface IPost {
  image: string
  maximumToShow?: number
  title: string
  description: string
  tags: string[]
  publicationDate: string
  uid: string | number
  body: {
    code: string
  }
}
