import { faker, Faker } from '@faker-js/faker'
import Layout from 'components/layout/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const UserBlog = () => {
   const router = useRouter()
   const { id } = router.query
   const [arr, setArr] = useState<number[]>([])
   useEffect(() => {
      for (let i = 0; i < 5; i++) {
         setArr(arr => arr.concat(Number(faker.random.numeric())))
      }
   }, [])
   return (
      <Layout info header blogname={`${id}의 블로그`} image={faker.image.abstract()}>
         <div>
            <p>아이디{id}</p>
            {arr.map(v => (
               <Link href={`/blog/${id}/${v}`} key={v}>
                  <div>{v}</div>
               </Link>
            ))}
         </div>
      </Layout>
   )
}

export default UserBlog
