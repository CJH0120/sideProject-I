import CardList from 'components/layouts/CardList'
import Layout from 'components/layouts/Layouts'
import PageHeader from 'components/layouts/PageHeader'

import { Componets } from 'interface'
import { useEffect, useState } from 'react'
import { GetToday } from 'util/apiHook'

const Today = () => {
  const { data, isLoading } = GetToday()
  const [datas, setData] = useState<Componets.Items[]>(data ?? [])

  useEffect(() => {
    setData(data ?? [])
  }, [data, isLoading])
  return (
    <Layout header footer>
      <PageHeader title="오늘의 하루를 공유 해보세요" />
      {datas?.map((v, idx) => (
        <CardList item={v.item} title={v.title} key={idx} likes />
      ))}
    </Layout>
  )
}

export default Today
