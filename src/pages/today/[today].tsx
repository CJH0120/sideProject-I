import Layout from 'components/layouts/Layouts'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Today: NextPage = () => {
  const router = useRouter()
  const { today } = router.query
  return (
    <Layout footer header>
      <div>게시글 : {today}번</div>
    </Layout>
  )
}
export default Today
