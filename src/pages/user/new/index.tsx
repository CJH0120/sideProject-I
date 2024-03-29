import Style from '@/styles/User.New.module.scss'
import classNames from 'classnames/bind'
import Button from 'components/control/Button'
import Input, { InputProps } from 'components/control/Input'
import IconLogo from 'components/icons/IconLogo'
import Loading from 'components/layouts/Loading'
import Logo from 'components/layouts/Logo'
import Link from 'next/link'
import { Router } from 'next/router'
import { MutableRefObject, HTMLInputTypeAttribute, useRef, useState, useEffect } from 'react'
import { RingLoader } from 'react-spinners'
import useAuth from 'util/useAuth'
const cx = classNames.bind(Style)

interface NewState {
  email: string
  pw: string
  pwRe: string
  nickName: string
}
interface errState {
  email?: boolean
  pw?: boolean
  pwRe?: boolean
  nickName?: boolean
}
const New = () => {
  const { userTest, userNew } = useAuth()
  const [errState, setErrState] = useState<errState>({ email: false, nickName: false, pw: false, pwRe: false })
  const [userSate, setUserState] = useState<NewState>({ email: '', nickName: '', pw: '', pwRe: '' })
  const RefArr = useRef<HTMLInputElement[]>([])
  const [allState, setAllState] = useState<boolean>(false)
  const [isClick, setIsClick] = useState<boolean>(false)
  const HandleSign = async () => {
    if (allState) {
      setIsClick(state => !state)
      userNew(userSate?.email, userSate.pw, userSate.nickName).then(() => {
        alert('회원가입을 환영합니다.')
      })
    }
  }
  useEffect(() => {
    if (
      !errState.email &&
      !errState.nickName &&
      userSate.email &&
      userSate.nickName &&
      userSate.pw.length > 5 &&
      userSate.pw === userSate.pwRe
    ) {
      setAllState(r => true)
    } else {
      setAllState(r => false)
    }
  }, [errState, userSate])
  const handlerUserTest = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    if (name === 'email' ? regExp.test(value) : value.length > 1) {
      await userTest(name, value)
        .catch(err => {
          err ? setErrState(errstate => ({ ...errstate, [name]: true })) : setErrState(errstate => ({ ...errstate, [name]: false }))
        })
        .finally(() => {
          setUserState({ ...userSate, [name]: value })
        })
    } else {
      setErrState(errstate => ({ ...errstate, [name]: true }))
    }
  }
  const handlerUserState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    if (name === 'pw') {
      let regPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/
      setErrState(errstate => ({ ...errstate, [name]: name === 'pw' ? !regPass.test(value) : userSate.pw !== value }))
    }

    // setUserState({ [name]: value })
    setUserState(userstae => ({ ...userstae, [name]: value }))
  }
  useEffect(() => {
    userSate.pwRe && setErrState(errState => ({ ...errState, pwRe: userSate.pw !== userSate.pwRe }))
    !userSate.pw && setErrState(errstate => ({ ...errstate, pw: false }))
    !userSate.pwRe && setErrState(errstate => ({ ...errstate, pwRe: false }))
  }, [userSate])
  const IconClick = (name?: string, idx?: number) => {
    RefArr.current[idx ?? 0].value = ''
    setUserState(userstae => ({ ...userstae, [name ?? 'name']: undefined }))
  }
  const list: InputProps[] = [
    {
      label: '이메일',
      type: 'text',
      name: 'email',
      onChange: handlerUserTest,
      errorState: errState.email ?? false,
      errorMessage: '형식에 맞지 않거나 중복된 이메일 주소 입니다',
      value: userSate.email,
      placeholder: '이메일을 입력해주세요',
      iconClick: () => {
        return IconClick()
      },
    },
    {
      label: '닉네임',
      type: 'text',
      name: 'nickName',
      onChange: handlerUserTest,
      placeholder: '2글자 이상 입력해주세요',
      errorState: errState.nickName ?? false,
      errorMessage: '형식에 맞지 않거나 중복된 닉네임 입니다.',
      value: userSate.nickName,
      iconClick: () => {
        IconClick('nickName')
      },
    },
    {
      label: '비밀번호',
      type: 'password',
      name: 'pw',
      onChange: handlerUserState,
      errorState: errState.pw ?? false,
      errorMessage: '영문 ,숫자 조합으로 6자리 이상 입력해주세요.',
      placeholder: '영문 ,숫자 조합으로 6자리 이상 입력해주세요.',

      value: userSate.pw,
      iconClick: () => {
        IconClick()
      },
    },
    {
      label: '비밀번호 확인',
      type: 'password',
      name: 'pwRe',
      onChange: handlerUserState,
      errorState: errState.pwRe ?? false,
      errorMessage: '비밀번호가 일치하지 않습니다.',
      value: userSate.pwRe,
      iconClick: () => {
        IconClick()
      },
    },
  ]

  return (
    <div className={cx('page-wrap')}>
      {isClick && <Loading />}
      <div className={cx('new-wrap')}>
        <Logo />
        <div className={cx('input-wrap')}>
          {list.map((v, idx) => (
            <Input
              label={v.label}
              type={v.type}
              placeholder={v.placeholder}
              value={v.value}
              ref={el => {
                if (el === null) return null
                RefArr.current[idx] = el
                return RefArr
              }}
              name={v.name}
              onBlur={v.onBlur}
              key={v.name}
              onChange={v.onChange}
              errorMessage={v.errorMessage}
              errorState={v.errorState}
              iconClick={() => {
                IconClick(v.name, idx)
              }}
            />
          ))}
        </div>
        <div className={cx('btn-wrap', isClick && 'act')}>
          <Button border size="XL" color={allState ? 'yellow' : 'disable'} onClick={HandleSign}>
            가입하기
          </Button>
        </div>
      </div>
    </div>
  )
}
export default New
