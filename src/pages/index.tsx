import styles from '@/styles/Home.module.scss'
import classNames from 'classnames'
import Layout from 'components/layouts/Layouts'
import CardList from 'components/layouts/CardList'
import { useEffect } from 'react'
import useAuth from 'util/useAuth'
import { GetCookie } from 'util/cookies'
import Router from 'next/router'
export default function Home() {
  const cx = classNames.bind(styles)

  const { ip } = useAuth()
  useEffect(() => {
    if (!GetCookie('MangoToken')) ip(Router.query.redirect?.toString())
  }, [])

  return (
    <Layout footer header>
      <CardList title="Today" />
      <CardList title="TimeLine" />
      <CardList title="Community" />
    </Layout>
  )
}
