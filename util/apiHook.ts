import { KeyedMutator } from 'swr'
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

//로그인
