import styles from '@/styles/Home.module.scss'
import classNames from 'classnames'
import Layout from 'components/layouts/Layouts'
import CardList from 'components/layouts/CardList'
import useSWR from 'swr'
import { useEffect } from 'react'
import useAuth from 'util/useAuth'
import { GetCookie } from 'util/cookies'
import Router from 'next/router'
import { useMember } from 'util/apiHook'
export default function Home() {
  const cx = classNames.bind(styles)

  const { ip } = useAuth()
  const { data } = useMember()
  useEffect(() => {
    if (!GetCookie('MangoToken')) ip(Router.query.redirect?.toString())
  }, [])
  console.log(data)
  return (
    <Layout footer header>
      <CardList title="Today" />
      <CardList title="TimeLine" />
      <CardList title="Community" />
    </Layout>
  )
}
