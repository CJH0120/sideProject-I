import classNames from 'classnames/bind'
import React, { SVGProps, forwardRef } from 'react'
import Styles from '@/styles/Button.module.scss'
type ButtonProps = {
  border?: boolean
  color?: 'yellow' | 'white' | 'disable'
  Classname?: string
  size?: 'S' | 'M' | 'L' | 'XL'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & (
  | {
      children: React.ReactNode
      icon?: never
      iconSize?: never
    }
  | {
      children?: never
      icon: React.MemoExoticComponent<(props: React.SVGProps<SVGSVGElement>) => JSX.Element>
      iconSize: number
    }
)

const cx = classNames.bind(Styles)
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick: handleClick = () => {}, icon: Icon, iconSize, Classname, children, border = false, color = 'white', size = 'S' }, ref) => {
    const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      handleClick(e)
    }
    return (
      <button
        ref={ref}
        onClick={HandleClick}
        style={{ height: iconSize && iconSize + 5, width: iconSize && iconSize + 5 }}
        className={cx('button-wrap', Classname, border && 'border', color, size)}
      >
        {children}
        {!!Icon && <Icon fontSize={iconSize} />}
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button
