import { API, ApiData } from 'interface'
import MariaDB from 'lib/mariadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
import { withCatch } from 'util/withCatch'

const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { ids } = req.query
    const FindDetail = await mariaDB.query<ApiData.Page.PagesComm[]>(
      `
      SELECT  title,detail,regDate,nickName FROM Post p 
      Join Member 
      on p.MemberId  = Member.id 
      WHERE p.id =?;

          `,
      [ids],
    )
    if (FindDetail.length === 0) res.status(404).redirect('/404')
    res.status(200).json(FindDetail[0])
  }
}
export default withCatch(handler)
