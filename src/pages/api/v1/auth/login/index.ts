import MariaDB from '../../../../../../lib/mariadb'
import { NextApiRequest, NextApiResponse } from 'next'

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
              from member
              where userID=? and userPW=?
          `,
      [id, pw],
    )
    if (!memberList?.length) throw { code: 401, message: '일치하는 계정이 없습니다.' }

    res.status(200).json({ message: `로그인 테스트 안녕하세요 ${id}님!` })
  }
}

export default handler
