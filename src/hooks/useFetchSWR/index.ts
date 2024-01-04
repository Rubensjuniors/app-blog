import useSWR from 'swr'

import { DefaultOptions, useFetchProps } from './types'

export default function useFetch<Data = any, Erro = any>({
  path,
  method = 'get',
  swrOptions = DefaultOptions,
  api,
  params
}: useFetchProps){
  const { data, isLoading, error } = useSWR<Data, Erro>(
    path,
    async (url: string) => {
      const response = await api.request({
        method,
        url,
        params
      })
      return response.data
    },
    swrOptions
  )

  return {
    data, isLoading, error
  }
}