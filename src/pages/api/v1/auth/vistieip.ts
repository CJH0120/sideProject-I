import MariaDB from 'lib/mariadb'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { useState } from 'react'
import { fetcher } from 'util/fetcher'
import { withCatch } from 'util/withCatch'

const mariaDB = MariaDB.getInstance()

interface ipType {
  protocol41: boolean
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    if (!req.cookies.MangoToken) {
      const rest = await fetcher('https://geolocation-db.com/json/').then(r =>
        mariaDB
          .query<any[]>(
            `insert into visiteIp(ip)
      values
      (?)
      ON DUPLICATE  KEY update
      regDate=  NOW(),
      count = count +1;
            `,
            [r.IPv4],
          )
          .then(() => {
            res.setHeader('Set-Cookie', [`MangoToken=success; max-age=3600; path=/; httpOnly;`])
            res.status(301).json(true)
          }),
      )
    } else {
      res.status(301).json(true)
    }
  }
}

export default withCatch(handler)
