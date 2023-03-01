import MariaDB from 'lib/mariadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { withCatch } from 'util/withCatch'

const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, pw, nickName } = req.body

    const memberList = await mariaDB.query<any[]>(
      `
        INSERT  into Member (userId,userPw,nickName)
        values
        (?,?,?);
            `,
      [email, pw, nickName],
    )
    res.status(301).redirect('/')
  }
}
export default withCatch(handler)
