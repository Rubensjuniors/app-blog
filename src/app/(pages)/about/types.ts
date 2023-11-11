import { PrismicImagemData } from '@/ultils/types'

export interface AboutProps {
  props: {
    name: string
  }
}

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
export interface GithubRepos {
id: number
name: string
html_url: string
description: string
updated_at: string
stargazers_count: number
visibility: string
language: string
}

export interface ShowMoreListProps {
  list: [{
    title: string
    body: string[]
}]
}
