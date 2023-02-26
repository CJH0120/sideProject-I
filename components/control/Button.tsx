import classNames from 'classnames/bind'
import React, { SVGProps, forwardRef } from 'react'
import Styles from '@/styles/Button.module.scss'
type ButtonProps = {
  border?: boolean
  color?: 'yellow' | 'white'
  children?: React.ReactNode
  Classname?: string
  icon?: React.MemoExoticComponent<(props: React.SVGProps<SVGSVGElement>) => JSX.Element>
  size?: 'S' | 'M' | 'L'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const cx = classNames.bind(Styles)
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick: handleClick = () => {}, icon: Icon, Classname, children, border = false, color = 'white', size = 'S' }, ref) => {
    const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      handleClick(e)
    }
    return (
      <button ref={ref} onClick={HandleClick} className={cx('button-wrap', Classname, border && 'border', color, size)}>
        {children}
        {!!Icon && <Icon />}
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button
