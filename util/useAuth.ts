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
const logout = async (redirect?: string) => {
  fetcher(`/api/v1/auth/logout`, {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ redirect }),
    redirect: 'follow',
  })
}
const userTest = async (key: string, value: string, redirect?: string) =>
  fetcher(`/api/v1/user/usertest`, {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ key, value }),
    redirect: 'follow',
  })

const userNew = async (email: string, pw: string, nickName: string, redirect?: string) =>
  fetcher(`/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ email, pw, nickName, redirect }),
    redirect: 'follow',
  })

export default () => ({ login, ip, userTest, logout, userNew })
