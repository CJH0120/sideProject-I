import { fetcher } from './fetcher'
const login = async (id: string, pw: string, redirect?: string) =>
  fetcher(`/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ id, pw, redirect }),
    redirect: 'follow',
  })
export default () => ({ login })
