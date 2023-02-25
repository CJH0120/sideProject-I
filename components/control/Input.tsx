import test from 'node:test'
import { type } from 'os'
import { ChangeEvent, HTMLInputTypeAttribute, LegacyRef, MouseEvent, MouseEventHandler } from 'react'
import { InputType } from 'zlib'
import Style from '@/styles/input.module.scss'
import classNames from 'classnames/bind'
import IconRemove from 'components/icons/iconRemove'
import Button from './Button'

type InputProps<T, E, P = boolean> = {
  type?: HTMLInputTypeAttribute
  className?: string
  label?: T
  labelText?: string
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string
  isError?: E
  errorMessage?: string
  isPass?: P
  passMeaage?: string
  size?: 'S' | 'M' | 'L'
  removeIcon?: boolean
  iconClick: (e: any) => void
} & (T extends true ? Labeling : unknown) &
  (E extends true ? Error : unknown) &
  (P extends true ? Pass : unknown)

type Labeling = {
  labelText: string
}
type Error = {
  errorMessage: string
}
type Pass = {
  passMessage: string
}
const cx = classNames.bind(Style)
const Input = <T, E, P extends boolean>({
  labelText,
  type = 'text',
  className,
  onBlur = () => {},
  onChange = () => {},
  label,
  placeholder,
  errorMessage,
  isError,
  isPass,
  passMeaage,
  size = 'M',
  removeIcon = true,
  iconClick = () => {},
  ...props
}: InputProps<T, E, P>) => {
  return (
    <div className={cx('input-comm-wrap', size)}>
      {label && <label className={cx('label')}>{labelText}</label>}
      <div className={cx('input-wrap')}>
        {removeIcon && <IconRemove className={cx('icons')} onClick={iconClick} />}
        <input type={type} onChange={onChange} {...props} onBlur={onBlur} className={cx('input')}></input>
        {isError && <p>{errorMessage}</p>}
        {isPass && <p>{passMeaage}</p>}
      </div>
    </div>
  )
}

export default Input
