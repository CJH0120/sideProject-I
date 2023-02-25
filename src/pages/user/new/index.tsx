import Style from '@/styles/User.New.module.scss'
import classNames from 'classnames/bind'
import Input from 'components/control/Input'
import IconLogo from 'components/icons/IconLogo'
import { RefObject, useEffect, useRef, useState } from 'react'
const cx = classNames.bind(Style)

const New = () => {
  const [id, setId] = useState<string>('')
  return (
    <div className={cx('page-wrap')}>
      <div className={cx('new-wrap')}>
        <div className={cx('new-head-wrap')}>
          <div className={cx('new-head')}>
            <IconLogo className={cx('logo')} />
            <p className={cx('head-text')}>Petty</p>
          </div>
        </div>
        <form className={cx('form')}>
          <Input
            value={id}
            label
            labelText="이메일"
            iconClick={() => {
              setId('')
            }}
            onChange={e => {
              setId(e.target.value)
            }}
          />
        </form>
      </div>
    </div>
  )
}
export default New
