import { NextApiRequest, NextApiResponse } from 'next'
import { withCatch } from 'util/withCatch'
import { withUser } from 'util/withUser'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', [`accessToken=; max-age=-1; path=/; httpOnly;`, `refreshToken=; max-age=-1; path=/; httpOnly;`])
    res.status(301).redirect(req.body.redirect ?? '/')
  }
}

export default withCatch(withUser(handler))
