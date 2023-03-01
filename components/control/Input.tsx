import { ChangeEvent, HTMLInputTypeAttribute, forwardRef, useState, useRef, useEffect } from 'react'
import Style from '@/styles/input.module.scss'
import classNames from 'classnames/bind'
import Button from './Button'
import IconRemove from 'components/icons/iconRemove'

export type InputProps = {
  type?: HTMLInputTypeAttribute
  className?: string
  label?: string
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string
  errorMessage?: string
  errorState?: boolean
  passMessage?: string
  size?: 'S' | 'M' | 'L'
  removeIcon?: boolean
  iconClick?: () => void
  name: string
}
const cx = classNames.bind(Style)
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      className,
      label,
      onBlur,
      onChange,
      placeholder,
      value,
      errorMessage,
      passMessage,
      size = 'M',
      removeIcon = true,
      name,
      iconClick,
      errorState,
    },
    ref,
  ) => {
    const [isClick, setIsClick] = useState<boolean>(false)
    const DivEl = useRef<HTMLDivElement>(null)

    const handleInput = ({ target }: MouseEvent) => {
      if (!isClick && DivEl.current?.contains(target as HTMLDivElement)) setIsClick(true)
      else if (isClick && DivEl.current?.contains(target as HTMLDivElement)) setIsClick(true)
      else {
        setIsClick(false)
      }
    }
    useEffect(() => {
      window.addEventListener('click', handleInput)
      return () => {
        window.removeEventListener('click', handleInput)
      }
    }, [])

    return (
      <div className={cx('input-wrapper', size, className)} ref={DivEl}>
        {label && (
          <label className={cx('label', isClick && 'act')} htmlFor={name}>
            {label}
          </label>
        )}
        <div className={cx('input-wrap')}>
          <input
            type={type}
            id={name}
            className={cx('input', isClick && 'act')}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={value}
            ref={ref}
            name={name}
          />
          {removeIcon && isClick && (
            <Button iconSize={16} icon={IconRemove} Classname={cx('icons', isClick && 'act')} onClick={iconClick} />
          )}
        </div>
        {errorState && <div className={cx('error-message')}>{errorMessage}</div>}
        {passMessage && <div className={cx('pass-message')}>{passMessage}</div>}
      </div>
    )
  },
)

export default Input
Input.displayName = 'Input'
// const Input2 = forwardRef<HTMLInputElement,InputProps<T,E,P extends boolean>>(({ ...props }:InputProps<T,E,P>, ref) => {
//   return <input ref={ref} className={cx('input')} {...props} />
// })
