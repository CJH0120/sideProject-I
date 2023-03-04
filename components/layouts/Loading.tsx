import Style from '@/styles/Loading.module.scss'
import classNames from 'classnames/bind'
import { RingLoader } from 'react-spinners'
import { useEffect } from 'react'
const cx = classNames.bind(Style)
const Loading = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])
  return (
    <div className={cx('Loading')}>
      <RingLoader color="#ffcc00" className={cx('spinner')} />
    </div>
  )
}

export default Loading
