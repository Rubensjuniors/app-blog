export interface AboutProps {
  props: {
    name: string
  }
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
