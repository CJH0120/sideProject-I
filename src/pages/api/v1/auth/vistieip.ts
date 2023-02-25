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
  const { ipAdress } = req.body
  if (req.method === 'POST') {
    if (!req.cookies.MangoToken) {
      const rest = await mariaDB
        .query<any[]>(
          `insert into visiteIp(ip)
      values
      (?)
      ON DUPLICATE  KEY update
      regDate=  NOW(),
      count = count +1;
            `,
          [ipAdress],
        )
        .then(() => {
          res.setHeader('Set-Cookie', [`MangoToken=success; max-age=21600; path=/; `])
        })
    }
  }
  res.status(200).json(true)
}

export default withCatch(handler)
