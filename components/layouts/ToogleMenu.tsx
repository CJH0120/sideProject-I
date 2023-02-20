import classNames from 'classnames/bind'
import Style from '@/styles/ToogleMemu.module.scss'
import { Dispatch, LegacyRef, SetStateAction, useEffect, useRef } from 'react'
import IconDefault from 'components/icons/IconDefaultImg'
import Link from 'next/link'
import Button from 'components/control/Button'
const cx = classNames.bind(Style)

interface ToggleMenuPorps {
  setisToogle: Dispatch<SetStateAction<boolean>>
  isToogle?: boolean
}
const ToggleMenu = ({ isToogle, setisToogle }: ToggleMenuPorps) => {
  const DivEL = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (isToogle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isToogle])
  const handleCloseModal = (e: MouseEvent) => {
    if (isToogle && !DivEL.current?.contains(e.target as HTMLElement)) {
      setisToogle(false)
    }
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
          <Link href={'/login'}>
            <Button border color="white" size="S" Classname={cx('btn')}>
              로그인
            </Button>
          </Link>

          <Link href={'/singup'}>
            <Button border color="yellow" size="S" Classname={cx('btn')}>
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ToggleMenu
