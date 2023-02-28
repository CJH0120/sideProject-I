import classNames from 'classnames/bind'
import Style from '@/styles/ToogleMemu.module.scss'
import { Dispatch, LegacyRef, SetStateAction, useEffect, useRef } from 'react'
import IconDefault from 'components/icons/IconDefaultImg'
import Link from 'next/link'
import Button from 'components/control/Button'
import useAuth from 'util/useAuth'
const cx = classNames.bind(Style)

interface ToggleMenuPorps {
  setisToogle: Dispatch<SetStateAction<boolean>>
  isToogle?: boolean
  nickName: string
}
const ToggleMenu = ({ isToogle, setisToogle, nickName }: ToggleMenuPorps) => {
  const DivEL = useRef<HTMLDivElement | null>(null)
  const { logout } = useAuth()
  useEffect(() => {
    if (isToogle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isToogle])
  const handleCloseModal = (e: MouseEvent) => {
    if (isToogle && !DivEL.current?.contains(e.target as HTMLElement)) {
      setisToogle(false)
    }
  }
  const handelLogout = async () => {
    await logout()
  }
  useEffect(() => {
    window.addEventListener('mousedown', handleCloseModal)
    return () => {
      window.removeEventListener('mousedown', handleCloseModal)
    }
  })
  return (
    <div className={cx('toogle-wrap')}>
      <div className={cx('toogle-content')} ref={DivEL}>
        <div className={cx('toogle-head')}>
          <h1 className={cx('head-logo')}>Petty</h1>
          <p className={cx('head-desc')}>
            우리들의 <b> 추억 </b> 저장소
          </p>
        </div>
        <div className={cx('head-btn')}>
          {!nickName ? (
            <>
              <Link href={'/login'}>
                <Button border color="white" size="L" Classname={cx('btn')}>
                  로그인
                </Button>
              </Link>
              <Link href={'/user/new'}>
                <Button border color="yellow" size="L" Classname={cx('btn')}>
                  회원가입
                </Button>
              </Link>
            </>
          ) : (
            <div className={cx('login-default')}>
              <div className={cx('default-head')}>
                <div className={cx('image-nick')}>
                  <div className={cx('image')}>
                    <IconDefault className={cx('icon')} />
                  </div>
                  <p className={cx('nickName')}>{nickName}</p>
                </div>
                <div className={cx('btn-wrap')}>
                  <Button border size="L" color="yellow">
                    마아페이지
                  </Button>
                  <Button border size="L" onClick={handelLogout}>
                    로그아웃
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ToggleMenu
