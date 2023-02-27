import MariaDB from 'lib/mariadb'
import { RowDataPacket } from 'mysql2'
import { NextApiRequest, NextApiResponse } from 'next'
import { withCatch } from 'util/withCatch'

interface userTestPorps extends RowDataPacket {
  count: string
}
const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { key, value } = req.body
    let memberTest = await mariaDB.query<userTestPorps[]>(
      `
      select ${key === 'email' ? 'userId' : 'nickName'}
       from  Member
        where ${key === 'email' ? 'userId' : 'nickName'}=? ;
            `,
      [value],
    )

    if (memberTest.length > 0) throw { code: 401, message: '중복된 아이디입니다.' }
    res.status(201).json(memberTest.length)
  }
}
export default withCatch(handler)
