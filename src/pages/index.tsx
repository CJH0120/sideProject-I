import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import classNames from 'classnames'
import Header from 'components/layouts/Header'
import Layout from 'components/layouts/Layouts'

export default function Home() {
  const cx = classNames.bind(styles)
  return (
    <Layout footer header>
      <div>레이아웃 테스트</div>

      <div>dd</div>
    </Layout>
  )
}
