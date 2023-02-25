import { getCookieParser } from 'next/dist/server/api-utils'
import cookies, { GetCookie } from './cookies'
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

const ip = async (redirect?: string) => {
  fetch('https://geolocation-db.com/json/')
    .then(v => v.json())
    .then(res =>
      fetcher(`/api/v1/auth/vistieip`, {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ redirect, ipAdress: res.IPv4 }),
        redirect: 'follow',
      }),
    )
}

export default () => ({ login, ip })
