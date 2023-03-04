import Layout from 'components/layouts/Layouts'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Community: NextPage = () => {
  const router = useRouter()
  const { community } = router.query
  return (
    <Layout footer header>
      <div>게시글 : {community}번</div>
    </Layout>
  )
}
export default Community
