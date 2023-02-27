import classNames from 'classnames/bind'
import Styles from '@/styles/Header.module.scss'
import Head from 'next/head'
import IconLogo from 'components/icons/IconLogo'
import Button from 'components/control/Button'
import Link from 'next/link'
import IconHamburger from 'components/icons/IconHamburger'
import { useEffect, useState } from 'react'
import ToggleMenu from './ToogleMenu'

interface HeadPorps {
  meta?: string
  title?: string
  Nickname?: string
}

const cx = classNames.bind(Styles)
const Header = ({ meta = 'Petty', title = 'Petty', Nickname }: HeadPorps) => {
  const [isToggle, setIsToggle] = useState<boolean>(false)
  useEffect(() => {
    if (isToggle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isToggle])
  const category: string[] = ['Today', 'Best', 'TimeLine', 'Community']
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="우리들의 추억 저장소 , 키우는 애완동물의 추억을 공유해봐요" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={cx('header-wrap')}>
        <div className={cx('header')}>
          <div className={cx('list')}>
            <Link href="/">
              <div className={cx('header-logo')}>
                <IconLogo className={cx('logo')} />
                <span className={cx('logo-text')}>Petty</span>
              </div>
            </Link>
            <div className={cx('header-category')}>
              {category.map(v => (
                <div className={cx('category')} key={v}>
                  <Link href={`/${v.toLocaleLowerCase()}`}> {v}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className={cx('button-wrap')}>
            <Button
              icon={IconHamburger}
              Classname={cx('button-icon')}
              onClick={() => {
                setIsToggle(true)
              }}
            />

            {!Nickname ? (
              <>
                <Link href={'/login'}>
                  <Button size="M" border Classname={cx('btn', 'margin')}>
                    로그인
                  </Button>
                </Link>
                <Link href={'/user/new'}>
                  <Button size="M" border Classname={cx('btn')} color="yellow">
                    회원가입
                  </Button>
                </Link>
              </>
            ) : (
              <div className={cx('user')}>안녕하세요 {Nickname}</div>
            )}
          </div>
        </div>
      </header>
      {isToggle && <ToggleMenu setisToogle={setIsToggle} isToogle={isToggle} nickName={Nickname ?? ''} />}
    </>
  )
}
export default Header
