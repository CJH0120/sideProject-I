import MariaDB from '../../../../../lib/mariadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'node:stream/consumers'
import { withCatch } from 'util/withCatch'

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
    console.log(id)
    console.log(pw)
    const memberList = await mariaDB.query<Test[]>(
      `
              select *
              from Member
              where userID=? and userPW=?
          `,
      [id, pw],
    )
    if (!memberList?.length) throw { code: 401, message: '일치하는 계정이 없습니다.' }

    res.status(301).redirect('/')
  }
}

export default withCatch(handler)
