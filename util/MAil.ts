import { NextApiResponse } from 'next'

export {}
const nodemailer = require('nodemailer')
export const sendMail = (res: NextApiResponse, email: string, link: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EM,
      pass: process.env.NEXT_PUBLIC_PW,
    },
  })

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EM,
    to: email,
    subject: 'Petty 인증메일입니다.',
    html: `
    
    <a href='http://3.37.40.96/user/auth/${link}' 
    target='_blank'>
   링크를 클릭하시면 가입 인증이 완료됩니다
    </a>
   
    `,
  }

  transporter.sendMail(mailOptions, (err: any) => {
    if (err) {
      res.status(500).json({ status: 'fail' })
    } else {
      res.status(200).redirect('/user/new/hello')
    }
  })
}
