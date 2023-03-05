import useSWR, { KeyedMutator, SWRConfiguration, BareFetcher } from 'swr'
import { ApiData, Componets } from '../interface'
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

//시작페이지 데이터 가져오기
export const GetIndex = <Data = Componets.Items[], Error = any>(
  redirect?: string,
  fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>,
) => {
  const { data, error, mutate } = useSWR<Data, Error>(`/api/v1/pages`, fetcher, fetcherConfig)
  return result<Data, Error>(mutate, data, error)
}

//Today
export const GetToday = <Data = Componets.Items[], Error = any>(fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>) => {
  const { data, error, mutate } = useSWR<Data, Error>(`/api/v1/pages/today`, fetcher, fetcherConfig)
  return result<Data, Error>(mutate, data, error)
}
export const GetTodayDeatil = <Data = ApiData.Page.PagesComm, Error = any>(
  id?: string,
  fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>,
) => {
  const { data, error, mutate } = useSWR<Data, Error>(`/api/v1/pages/today/detail/${id}`, fetcher, fetcherConfig)
  return result<Data, Error>(mutate, data, error)
}
