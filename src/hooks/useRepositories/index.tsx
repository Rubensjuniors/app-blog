import { GithubRepos } from '@/app/(pages)/about/types'
import { GITHUB_API } from '@/config/requestRegister'
import useFetch from '@/hooks/useFetchSWR'

export default function useRepositories (page?:number) {

  const { data: repositories, isLoading, error } = useFetch<GithubRepos[]>({ path: '/repos', api: GITHUB_API, params: {
    per_page: 3,
    page: page
  } })

  const repos = repositories?.map((repo: GithubRepos) => {
    return {
      id: repo?.id,
      name: repo?.name,
      description: repo?.description,
      visibility: repo?.visibility,
      stargazers_count: repo?.stargazers_count,
      updated_at: repo?.updated_at,
      html_url: repo.html_url,
      language: repo?.language,,,
    }
  })

  return {
    repos,
    isLoading,
    error
  }

}
