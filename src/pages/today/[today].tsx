import Layout from 'components/layouts/Layouts'
import { GetServerSideProps, GetStaticPaths, NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GetToday, GetTodayDeatil } from 'util/apiHook'
import { ApiData } from 'interface'
import Loading from 'components/layouts/Loading'

const Today = ({ props }: any) => {
  const { data, isLoading } = GetTodayDeatil(props)
  const [datas, setData] = useState(data)
  useEffect(() => {
    setData(data!)
  }, [isLoading])
  console.log(!!data)
  return (
    <Layout footer header>
      {!data && <Loading />}
      <div dangerouslySetInnerHTML={{ __html: data?.detail ?? '' }} />
    </Layout>
  )
}

export default Today
export async function getStaticProps({ params }: any) {
  // const { data } = GetTodayDeatil(params.today)

  return {
    props: { props: params.today },
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}
