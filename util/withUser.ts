import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { NextHandler } from 'next-connect'
import MariaDB from '../lib/mariadb'
import { ApiData } from '../interface'

interface User {
  id: number
  [key: string]: any
}

declare module 'next' {
  interface NextApiRequest {
    user: User
  }
}

const mariaDB = MariaDB.getInstance()

const core = async (req: NextApiRequest, res: NextApiResponse) => {
  const { accessToken, refreshToken } = req.cookies
  if (!accessToken && !refreshToken) throw { code: 401, message: '인증 오류' }

  let payload: User = { id: -1 }
  let newAccessToken: string = ''
  let newRefreshToken: string = ''

  try {
    payload = jwt.verify(accessToken ?? '', process.env.NEXT_PUBLIC_KEY || '') as User
  } catch {
    try {
      payload = jwt.verify(refreshToken ?? '', process.env.NEXT_PUBLIC_KEY || '') as User
      if (!payload) throw { code: 401, message: '인증 불가' }

      payload = Object.keys(payload).reduce<User>((p, v) => refinePayload(p, v, payload), { id: -1 })

      newAccessToken = jwt.sign(payload, process.env.NEXT_PUBLIC_KEY || '', { expiresIn: '1h' })
      newRefreshToken = jwt.sign(payload, process.env.NEXT_PUBLIC_KEY || '', { expiresIn: '1d' })
    } catch {
      throw { code: 401, message: '인증 만료' }
    }
  }

  payload = Object.keys(payload).reduce<User>((p, v) => refinePayload(p, v, payload), { id: -1 })
  if (!payload) throw { code: 401, message: '인증 불가' }

  if (newAccessToken && newRefreshToken) {
    res.setHeader('Set-Cookie', [
      `accessToken=${newAccessToken}; max-age=86400; path=/; httpOnly;`,
      `refreshToken=${newRefreshToken}; max-age=604800; path=/; httpOnly;`,
    ])
  }

  req.user = payload

  const memberList = await mariaDB.query<ApiData.Member[]>(
    `
        select id, userId
        from member
        where id=?
    `,
    [req.user.id],
  )

  if (!memberList?.length) throw { code: 401, message: '일치하는 계정이 없습니다.' }
}

const refinePayload = <T extends Object>(p: T, v: string, payload: any): T => {
  if (v === 'iat' || v === 'exp') return p

  return {
    ...p,
    [v]: payload![v],
  }
}

export const withUser = (handler: (req: NextApiRequest, res: NextApiResponse) => any, isError: boolean = true) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    await core(req, res)
  } catch (err) {
    if (isError) {
      res.setHeader('Set-Cookie', [`accessToken=; max-age=-1; path=/; httpOnly;`, `refreshToken=; max-age=-1; path=/; httpOnly;`])
      if (req.query.redirect) return res.status(301).redirect(req.query.redirect.toString())
      return res.status(401).json(err)
    }
  }

  await handler(req, res)
}
