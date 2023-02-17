import classNames from 'classnames/bind'
import React from 'react'
import Styles from '@/styles/Button.module.scss'
type ButtonProps = {
  border?: boolean
  color?: 'yellow' | 'white'
  children?: React.ReactNode
  Classname?: string
  icon?: boolean
  size?: 'S' | 'M' | 'L'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
const cx = classNames.bind(Styles)
const Button = React.forwardRef(
  ({ onClick: handleClick = () => {}, icon = false, Classname, children, border = false, color = 'white', size = 'S' }: ButtonProps) => {
    const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      handleClick(e)
    }
    return (
      <button onClick={HandleClick} className={cx('button-wrap', Classname, border && 'border', color, size, icon && 'icon')}>
        {children}
      </button>
    )
  },
)
export default Button
