import { API, ApiData, Componets } from 'interface'
import MariaDB from 'lib/mariadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { withCatch } from 'util/withCatch'

const mariaDB = MariaDB.getInstance()
interface Item {
  image: string
  title: string
  id: string
}
interface Items {
  title: string
  item: Item[]
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const FindToday = await mariaDB.query<ApiData.Page.Index[]>(
      `
      SELECT PostId,image,title,name,memberId, nickName FROM  PostSimple ps  
      Join Post p 
      Join category C
      Join Member 
      on ps.PostId = p.id and p.CategoryId  =C.id  and p.MemberId  =Member.id  
      WHERE  p.CategoryId = 1 
      ORDER BY regDate DESC
      LIMIT 16
        ;
        `,
    )

    const ab = FindToday.reduce((prev: Componets.Items[], curr) => {
      const find = prev.find(v => v.title === curr.name)
      !find
        ? prev.push({ title: curr.name, item: [{ id: curr.PostId, image: curr.image, title: curr.title, nickName: curr.nickName }] })
        : find.item.push({ id: curr.PostId, image: curr.image, title: curr.title, nickName: curr.nickName })

      return prev
    }, [])

    res.status(200).json(ab)
  }
}
export default withCatch(handler)
