import Style from '@/styles/Login.module.scss'
import classNames from 'classnames/bind'
import { NextPage } from 'next'
import IconLogo from 'components/icons/IconLogo'
import Button from 'components/control/Button'
import { useEffect } from 'react'
import Link from 'next/link'
const cx = classNames.bind(Style)

const Login: NextPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])
  return (
    <section className={cx('login-wrap')}>
      <div className={cx('login')}>
        <Link href={'/'} className={cx('login-head')}>
          <span className={cx('logo')}>
            <IconLogo className={cx('icon-logo')} />
          </span>
          <h1 className={cx('logo-text')}>Petty</h1>
        </Link>
        <div className={cx('login-contnet')}>
          <div className={cx('login-input-wrap')}>
            <div className={cx('login-input')}>
              <label className={cx('label-wrap')} htmlFor="inputId">
                이메일
              </label>

              <input type={'text'} placeholder="이메일" className={cx('input')} id="inputId" />
            </div>
            <div className={cx('login-input', 'p')}>
              <label className={cx('label-wrap')} htmlFor="inputpw">
                비밀번호
              </label>
              <input type={'password'} placeholder="비밀번호" id="inputpw" className={cx('input')} />
            </div>
          </div>
        </div>
        <div className={cx('find')}>뭐찾고 뭐찾고</div>
        <div className={cx('button-wrap')}>
          <Button
            Classname={cx('btn')}
            border
            color="yellow"
            onClick={() => {
              location.href = '/'
            }}
          >
            로그인
          </Button>
          <Button Classname={cx('btn')} border color="white">
            회원가입
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Login
