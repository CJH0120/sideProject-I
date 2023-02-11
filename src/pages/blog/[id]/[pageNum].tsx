import { useRouter } from 'next/router'

const DetailPage = () => {
   const router = useRouter()
   const { pageNum, id } = router.query
   return (
      <div>
         <p>{id}</p>
         <p>{pageNum}</p>
      </div>
   )
}

export default DetailPage
