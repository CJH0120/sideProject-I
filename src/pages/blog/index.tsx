import Link from 'next/link'
import { faker } from '@faker-js/faker'
import Layout from 'components/layout/Layout'
const Blog = () => {
   return (
      <Layout header>
         <div>
            <h1>블로그 메인</h1>
            <Link href={`/blog/${faker.name.firstName()}`}>
               <p>이동</p>
            </Link>
         </div>
      </Layout>
   )
}

export default Blog
