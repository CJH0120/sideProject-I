import { ChangeEvent, HTMLInputTypeAttribute, forwardRef } from 'react'
import { InputType } from 'zlib'
import Style from '@/styles/input.module.scss'
import classNames from 'classnames/bind'

type InputProps = {
  type?: HTMLInputTypeAttribute
  className?: string
  labelText?: string
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string
  errorMessage?: string
  passMessage?: string
  size?: 'S' | 'M' | 'L'
  removeIcon?: boolean
  iconClick?: (e: any) => void
}

const cx = classNames.bind(Style)
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      className,
      labelText,
      onBlur,
      onChange,
      placeholder,
      value,
      errorMessage,
      passMessage,
      size = 'M',
      removeIcon = false,
      iconClick,
    },
    ref,
  ) => {
    return (
      <div className={cx('input-wrapper', size, className)}>
        {labelText && <label className={cx('label')}>{labelText}</label>}
        <div className={cx('input-wrap')}>
          <input
            type={type}
            className={cx('input')}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            ref={ref}
          />
          {removeIcon && (
            <button className={cx('icon')} onClick={iconClick}>
              icon
            </button>
          )}
        </div>
        {errorMessage && <div className={cx('error-message')}>{errorMessage}</div>}
        {passMessage && <div className={cx('pass-message')}>{passMessage}</div>}
      </div>
    )
  },
)

export default Input

// const Input2 = forwardRef<HTMLInputElement,InputProps<T,E,P extends boolean>>(({ ...props }:InputProps<T,E,P>, ref) => {
//   return <input ref={ref} className={cx('input')} {...props} />
// })
