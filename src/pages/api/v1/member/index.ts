import { ApiData } from 'interface'
import MariaDB from 'lib/mariadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { withCatch } from 'util/withCatch'
import { withUser } from 'util/withUser'

const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const id = req.query.id
    const refineId = id ?? req.user.id

    if (!refineId) throw { code: 400, message: '사용자 정보가 없습니다.' }

    const memberList = await mariaDB.query<ApiData.Member[]>(
      `
        select id, userId, userPw, nickName
        from Member
        where id=?
      `,
      [refineId],
    )

    if (!memberList?.length) throw { code: 401, message: '일치하는 계정이 없습니다.' }
    res.json(memberList[0])
  }
}

export default withCatch(withUser(handler))
