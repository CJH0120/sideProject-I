import styles from '@/styles/Home.module.scss'

import className from 'classnames/bind'
import Layout from 'components/layout/Layout'
import Link from 'next/link'

const cx = className.bind(styles)

export default function Home() {
   return (
      <Layout>
         <div>
            <Link href={'/blog'}>블로그로 이동</Link>
         </div>
         <div>
            <Link href={'/portfilo'}>포트폴리오 이동</Link>
         </div>
         <Link href={'/admin'}>어드민 이동</Link>
      </Layout>
   )
}
