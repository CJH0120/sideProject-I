import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import useAuth from 'util/useAuth'
const Auth = () => {
  const { mailTest } = useAuth()
  const router = useRouter()
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!router.isReady) return
    const Handler = async () => {
      await mailTest(router.query.auth?.toString() ?? '', router.query.redirect?.toString())
    }
    Handler()
      .then(() => {
        alert('계정 인증이 완료 되었습니다. 로그인후 이용해주세요')
      })
      .catch(e => {
        alert(e.message)
        router.push('/')
      })
  }, [mailTest, router, router.isReady, router.query.auth])
}
export default Auth
