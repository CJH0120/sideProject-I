import Style from '@/styles/Login.module.scss'
import classNames from 'classnames/bind'
import { NextPage } from 'next'
import IconLogo from 'components/icons/IconLogo'
import Button from 'components/control/Button'
import { ReactEventHandler, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useAuth from 'util/useAuth'
import { useRouter } from 'next/router'
import Input, { InputProps } from 'components/control/Input'
import Loading from 'components/layouts/Loading'
const cx = classNames.bind(Style)
interface LoginType {
  email: string
  pw: string
}
const Login: NextPage = () => {
  const router = useRouter()
  const { login } = useAuth()
  const [isClick, setIsClick] = useState<boolean>(false)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])
  const [loginState, setLoginState] = useState<LoginType>({ email: '', pw: '' })
  const LoginRef = useRef<HTMLInputElement[]>([])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setLoginState(state => ({ ...state, [name]: value }))
  }

  const InputList: InputProps[] = [
    {
      name: 'email',
      type: 'text',
      label: '이메일 | 닉네임',
      placeholder: '가입하신 이메일 또는 닉네임을 입력해주세요',
      value: loginState.email,
      onChange: handleChange,
    },
    {
      name: 'pw',
      type: 'password',
      label: '비밀번호',
      placeholder: '가입하신 비밀번호를 입력하세요',
      value: loginState.pw,
      onChange: handleChange,
    },
  ]

  const handleLogin = async () => {
    if (!loginState.email) {
      LoginRef.current[0].focus()
      return
    }
    if (!loginState.pw) {
      LoginRef.current[1].focus()
      return
    }
    setIsClick(state => !state)
    await login(loginState.email, loginState.pw, router.query.redirect?.toString())
      .catch(err => alert(err.message))
      .then(() => {
        setIsClick(state => !state)
      })
  }

  const handlerLogin = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') handleLogin()
  }
  return (
    <section className={cx('login-wrap')} onKeyDown={handlerLogin}>
      {isClick && <Loading />}
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
              {InputList.map((v, idx) => (
                <Input
                  name={v.name}
                  key={v.name}
                  type={v.type}
                  value={v.value}
                  label={v.label}
                  placeholder={v.placeholder}
                  className={cx('test')}
                  onChange={v.onChange}
                  ref={el => {
                    if (el === null) return null
                    LoginRef.current[idx] = el
                    return LoginRef
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={cx('find')}>뭐찾고 뭐찾고</div>
        <div className={cx('button-wrap')}>
          <Button Classname={cx('btn')} border color="yellow" onClick={handleLogin}>
            로그인
          </Button>
          <Link href={'/user/new'} className={cx('a')}>
            <Button Classname={cx('btn')} border color="white">
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login
