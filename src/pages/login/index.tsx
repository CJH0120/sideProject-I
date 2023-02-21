import Layout from 'components/layouts/Layouts'
import Style from '@/styles/Login.module.scss'
import classNames from 'classnames/bind'
import { NextPage } from 'next'
import IconDefault from 'components/icons/IconDefaultImg'
import IconLogo from 'components/icons/IconLogo'
const cx = classNames.bind(Style)
const Login: NextPage = () => {
  return (
    <section className={cx('login-wrap')}>
      <div className={cx('login')}>
        <div className={cx('login-head')}>
          <span className={cx('logo')}>
            <IconLogo className={cx('icon-logo')} />
          </span>
          <h1 className={cx('logo-text')}>Petty</h1>
        </div>
        <div className={cx('login-contnet')}>
          <div className={cx('login-input-wrap')}>
            <div className={cx('login-input')}>
              <label>
                <p>아이디</p>
                <input type={'text'} placeholder="아이디" />
              </label>
            </div>
            <div className={cx('login-input', 'p')}>
              <label>
                <p>비밀번호</p>
                <input type={'password'} placeholder="비밀번호" />
              </label>
            </div>
          </div>
          <div>ss</div>
          <div>ss</div>
        </div>
      </div>
    </section>
  )
}

export default Login
