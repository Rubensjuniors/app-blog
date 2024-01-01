import { AxiosInstance, Method } from 'axios'
import { SWRConfiguration } from 'swr'

export const DefaultOptions: SWRConfiguration = {
  revalidateOnFocus: false
}

export type useFetchProps = {
  path: string
  method?: Method
  swrOptions?: SWRConfiguration
  api: AxiosInstance
  params?: any
}