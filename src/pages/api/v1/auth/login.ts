import MariaDB from '../../../../../lib/mariadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { withCatch } from 'util/withCatch'
import jwt from 'jsonwebtoken'
const mariaDB = MariaDB.getInstance()
interface Test {
  id: number
  userID: string
  userPW?: string
  userName: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { id, pw } = req.body
    const memberList = await mariaDB.query<Test[]>(
      `
              select *
              from Member
              where userId=? and userPw=?
          `,
      [id, pw],
    )
    if (!memberList?.length) throw { code: 401, message: '일치하는 계정이 없습니다.' }
    const accessToken = jwt.sign({ ...memberList[0] }, process.env.NEXT_PUBLIC_KEY || '', { expiresIn: '1h' })
    const refreshToken = jwt.sign({ ...memberList[0] }, process.env.NEXT_PUBLIC_KEY || '', { expiresIn: '1d' })
    res.setHeader('Set-Cookie', [
      `accessToken=${accessToken}; max-age=3600; path=/; httpOnly;`,
      `refreshToken=${refreshToken}; max-age=86400; path=/; httpOnly;`,
    ])
    res.status(301).redirect('/')
  }
}

export default withCatch(handler)
