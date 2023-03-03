import MariaDB from 'lib/mariadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { withCatch } from 'util/withCatch'
import jwt from 'jsonwebtoken'
import { sendMail } from 'util/MAil'
const mariaDB = MariaDB.getInstance()
interface SelectProps {
  id: string
}
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
    const SelectId = await mariaDB.query<SelectProps[]>(
      `
      Select id from Member where userId=?
      `,
      [email],
    )
    let num = SelectId[0].id
    const obj = { id: SelectId[0].id }
    const Key = jwt.sign({ ...obj }, process.env.NEXT_PUBLIC_KEY || '')
    const InsertLink = await mariaDB.query<any[]>(
      `
      INSERT INTO MailAuth(userId,link)
      Values
      (?,?);
      `,
      [num, Key],
    )
    sendMail(res, email, Key)
    // res.status(301).redirect('/')
  }
}
export default withCatch(handler)
