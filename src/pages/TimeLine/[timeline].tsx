import Layout from 'components/layouts/Layouts'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const TimeLine: NextPage = () => {
  const router = useRouter()
  const { timeline } = router.query
  return (
    <Layout footer header>
      <div>게시글 : {timeline}번</div>
    </Layout>
  )
}
export default TimeLine
