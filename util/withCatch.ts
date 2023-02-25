import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'

export const withCatch = (handler: (req: NextApiRequest, res: NextApiResponse) => any) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    await handler(req, res)
  } catch (err:any) {
    res.status(err.code || 500).json(err)
  }
}

export const catchMiddleware = (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  try {
    next()
  } catch (err:any) {
    res.status(err.code || 500).json(err)
  }
}
