import Style from '@/styles/Login.module.scss'
import classNames from 'classnames/bind'
import { NextPage } from 'next'
import IconLogo from 'components/icons/IconLogo'
import Button from 'components/control/Button'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useAuth from 'util/useAuth'
import { useRouter } from 'next/router'
const cx = classNames.bind(Style)

const Login: NextPage = () => {
  const router = useRouter()
  const { login } = useAuth()
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])
  const [id, setId] = useState<string>('')
  const [pw, setPw] = useState<string>('')
  const IdEl = useRef<HTMLInputElement>(null)
  const PwEl = useRef<HTMLInputElement>(null)
  const EmailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  const InputBox = [{}]
  const handelLogin = async () => {
    if (EmailRegex.test(id)) {
      IdEl.current?.focus()
      alert('이메일 형식으로 ')
      return
    }
    if (!pw) {
      PwEl.current?.focus()
      return
    }
    await login(id, pw, router.query.redirect?.toString()).catch(err => alert(err.message))
  }
  const handelChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value)
  }
  const handelChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.currentTarget.value)
  }
  return (
    <section className={cx('login-wrap')}>
      <div className={cx('login')}>
        <div className={cx('login-head')}>
          <Link href={'/'} className={cx('link')}>
            <span className={cx('logo')}>
              <IconLogo className={cx('icon-logo')} />
            </span>
            <h1 className={cx('logo-text')}>Petty</h1>
          </Link>
        </div>
        <div className={cx('login-contnet')}>
          <div className={cx('login-input-wrap')}>
            <div className={cx('login-input')}>
              <label className={cx('label-wrap')} htmlFor="inputId">
                이메일
              </label>

              <input type={'text'} placeholder="이메일" className={cx('input')} id="inputId" ref={IdEl} onChange={handelChangeId} />
            </div>
            <div className={cx('login-input', 'p')}>
              <label className={cx('label-wrap')} htmlFor="inputpw">
                비밀번호
              </label>
              <input type={'password'} placeholder="비밀번호" id="inputpw" className={cx('input')} ref={PwEl} onChange={handelChangePw} />
            </div>
          </div>
        </div>
        <div className={cx('find')}>뭐찾고 뭐찾고</div>
        <div className={cx('button-wrap')}>
          <Button Classname={cx('btn')} border color="yellow" onClick={handelLogin}>
            로그인
          </Button>
          <Button Classname={cx('btn')} border color="white">
            <Link href={'/user/new'}> 회원가입</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Login
