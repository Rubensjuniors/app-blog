import { PrismicImagemData } from '@/ultils/types'

export interface AboutData {
  photoProfile: PrismicImagemData
  banner: PrismicImagemData
  name: string
  bio: string
  sociais: {
    instagram: string
    github: string
    linkedin: string
  }
  content: [
    {
      title: string
      body: string[]
    }
  ]
}
