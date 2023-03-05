import styles from '@/styles/Home.module.scss'
import classNames from 'classnames'
import Layout from 'components/layouts/Layouts'
import CardList from 'components/layouts/CardList'
import { useEffect, useState } from 'react'
import useAuth from 'util/useAuth'
import { GetCookie } from 'util/cookies'
import Router from 'next/router'
import { ApiData, Componets } from 'interface'
import { GetIndex } from 'util/apiHook'
import Loading from 'components/layouts/Loading'
export default function Home() {
  const { data, isLoading, mutate } = GetIndex()
  const [datas, setData] = useState<Componets.Items[]>(data ?? [])
  const cx = classNames.bind(styles)

  useEffect(() => {
    setData(data ?? [])
  }, [isLoading])
  const { ip } = useAuth()
  useEffect(() => {
    if (!GetCookie('MangoToken')) ip(Router.query.redirect?.toString())
  }, [ip])
  return (
    <Layout footer header>
      {isLoading && <Loading />}
      {datas?.map((v, idx) => (
        <CardList item={v.item} title={v.title} key={idx} likes header />
      ))}
    </Layout>
  )
}
