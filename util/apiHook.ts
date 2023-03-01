import useSWR, { KeyedMutator, SWRConfiguration, BareFetcher } from 'swr'
import { ApiData } from '../interface'
import { fetcher } from './fetcher'
type Result<Data, Error> = {
  data?: Data
  isLoading: boolean
  isError?: Error
  mutate: KeyedMutator<Data>
}
const result = <Data, Error>(mutate: KeyedMutator<Data>, data?: Data, error?: Error): Result<Data, Error> => ({
  data,
  isLoading: !error && !data,
  isError: error,
  mutate,
})
const qs = (obj: { [key: string]: any }) => {
  const tmp = Object.entries(obj)
    .reduce<string[]>((p, [k, v]) => (v ? [...p, `${k}=${v}`] : p), [])
    .join('&')
  if (tmp) return '?' + tmp
  return ''
}

export const useMember = <Data = ApiData.Member, Error = any>(
  redirect?: string,
  id?: number,
  fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>,
) => {
  const { data, error, mutate } = useSWR<Data, Error>(`/api/v1/member${qs({ redirect, id })}`, fetcher, fetcherConfig)
  return result<Data, Error>(mutate, data, error)
}
