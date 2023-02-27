import Style from '@/styles/User.New.module.scss'
import classNames from 'classnames/bind'
import Input from 'components/control/Input'
import IconLogo from 'components/icons/IconLogo'
import { Router } from 'next/router'
import { RefObject, HTMLInputTypeAttribute, useRef, useState } from 'react'
import useAuth from 'util/useAuth'
const cx = classNames.bind(Style)
interface list {
  label?: string
  type?: HTMLInputTypeAttribute
  name: string
  onBluer?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
interface NewState {
  email?: string
  pw?: string
  pwre?: string
  nickName?: string
}
const New = () => {
  const { userTest } = useAuth()
  const test = useRef<HTMLInputElement | null>(null)
  const [userSate, setUserState] = useState<NewState>({ email: '', nickName: '', pw: '', pwre: '' })
  const handlerUserTest = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    await userTest(name, value).catch(err => alert(err.message))
  }
  const list: list[] = [
    { label: '이메일', type: 'text', name: 'email', onBluer: handlerUserTest },
    { label: '닉네임', type: 'text', name: 'nickName', onBluer: handlerUserTest },
    { label: '비밀번호', type: 'password', name: 'pw' },
    { label: '비밀번호 확인', type: 'password', name: 'pwRe' },
  ]
  const handlerUserState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    // setUserState({ [name]: value })
  }

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
            <Input labelText={v.label} type={v.type} ref={test} onChange={handlerUserState} name={v.name} onBlur={v.onBluer} key={v.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default New
