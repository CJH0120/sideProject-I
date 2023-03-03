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
interface st {
  status: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { id, pw } = req.body
    const EmailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')

    const memberList = await mariaDB.query<any[]>(
      `
              select *
              from Member
              where userId=? and userPw=?
          `,
      [id, pw],
    )
    const nickNameList = await mariaDB.query<any[]>(
      `select *
      from Member
      where nickName=? and userPw=?`,
      [id, pw],
    )
    if (EmailRegex.test(id) ? !memberList?.length : !nickNameList?.length) throw { code: 401, message: '일치하는 계정이 없습니다.' }

    const statusCheck = await mariaDB.query<st[]>(
      `select status
      from Member
      where ${EmailRegex.test(id) ? 'userId' : 'nickName'}=? `,
      [id],
    )

    console.log(statusCheck)
    if (Number(statusCheck[0].status) === 0) throw { code: 401, message: '인증을 마무리해주세요' }

    const accessToken = jwt.sign(EmailRegex.test(id) ? { ...memberList[0] } : { ...nickNameList[0] }, process.env.NEXT_PUBLIC_KEY || '', {
      expiresIn: '1h',
    })
    const refreshToken = jwt.sign(EmailRegex.test(id) ? { ...memberList[0] } : { ...nickNameList[0] }, process.env.NEXT_PUBLIC_KEY || '', {
      expiresIn: '1d',
    })
    res.setHeader('Set-Cookie', [
      `accessToken=${accessToken}; max-age=3600; path=/; httpOnly;`,
      `refreshToken=${refreshToken}; max-age=86400; path=/; httpOnly;`,
    ])
    res.status(301).redirect('/')
  }
}

export default withCatch(handler)
