import styles from '@/styles/Home.module.scss'
import classNames from 'classnames'
import Layout from 'components/layouts/Layouts'
import CardList from 'components/layouts/CardList'
import useSWR from 'swr'
import { useEffect } from 'react'
export default function Home() {
  const cx = classNames.bind(styles)
  useEffect(() => {}, [])
  return (
    <Layout footer header>
      <CardList title="Today" />
      <CardList title="TimeLine" />
      <CardList title="Community" />
    </Layout>
  )
}
