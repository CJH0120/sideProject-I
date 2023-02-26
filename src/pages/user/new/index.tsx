import Style from '@/styles/User.New.module.scss'
import classNames from 'classnames/bind'
import Input from 'components/control/Input'
import IconLogo from 'components/icons/IconLogo'
import { RefObject, HTMLInputTypeAttribute, useRef, useState } from 'react'
const cx = classNames.bind(Style)
interface list {
  label?: string
  type?: HTMLInputTypeAttribute
}
const New = () => {
  const [id, setId] = useState<string>('')
  const test = useRef<HTMLInputElement | null>(null)
  const list: list[] = [
    { label: '이메일', type: 'text' },
    { label: '닉네임', type: 'text' },
    { label: '비밀번호', type: 'password' },
    { label: '비밀번호 확인', type: 'password' },
  ]
  return (
    <div className={cx('page-wrap')}>
      <div className={cx('new-wrap')}>
        <div className={cx('new-head-wrap')}>
          <div className={cx('new-head')}>
            <IconLogo className={cx('logo')} />
            <p className={cx('head-text')}>Petty</p>
          </div>
        </div>
        <div className={cx('input-wrap')}>
          {list.map(v => (
            <Input labelText={v.label} type={v.type} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default New
