import MariaDB from '../../../../../lib/mariadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { withCatch } from 'util/withCatch'
const mariaDB = MariaDB.getInstance()
interface resProps {
  userId: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { key } = req.body

    const MailAuthList = await mariaDB.query<resProps[]>(
      ` select userId
      from MailAuth
      where  status = 0 and link = ? ;`,
      [key],
    )
    if (!MailAuthList.length) throw { code: 401, message: '일치하는 정보가없습니다' }
    console.log(MailAuthList.length)

    const findUser = MailAuthList[0].userId

    const ChangeStatus = await mariaDB.query<any[]>(
      `
        UPDATE Member
        SET status=1 WHERE  id =?;

          `,
      [findUser],
    )
    const ChangeStatus2 = await mariaDB.query<any[]>(
      `
        UPDATE MailAuth
        SET status=1 WHERE  userId =?;

          `,
      [findUser],
    )
  }
  res.status(301).redirect('/')
}

export default withCatch(handler)
