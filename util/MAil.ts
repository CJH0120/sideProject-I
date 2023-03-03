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
    to: 'avr0120@naver.com',
    subject: '메일의 제목',
    html: `<a href='http://localhost:3000/user/auth/${link}' 
    target='_blank'>
   url을 클릭하시면 가입 인증이 완료됩니다
 </a>`,
    text: '템플릿 정도가 아니고 단순히 텍스트 보낼때는 해당 값으로 보내도 됨',
  }

  transporter.sendMail(mailOptions, (err: any) => {
    if (err) {
      console.error(err)
      res.status(500).json({ status: 'fail' })
    } else {
      res.status(200).redirect('/user/new/hello')
    }
  })
}
