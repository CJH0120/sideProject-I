import classNames from 'classnames/bind'
import Style from '@/styles/ToogleMemu.module.scss'
import { Dispatch, LegacyRef, SetStateAction, useEffect, useRef } from 'react'
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
      document.body.style.overflow = 'scroll'
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
    <div className={cx('toogle-wrap', isToogle && 'active')}>
      <div className={cx('toogle-content')} ref={DivEL}>
        asd
      </div>
    </div>
  )
}

export default ToggleMenu
