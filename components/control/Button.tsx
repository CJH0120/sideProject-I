import classNames from 'classnames/bind'
import React from 'react'
import Styles from '@/styles/Button.module.scss'
type ButtonProps = {
  border?: boolean
  color?: 'yellow' | 'white'
  children?: React.ReactNode
  Classname?: string
  size?: 'S' | 'M' | 'L'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
const cx = classNames.bind(Styles)
const Button = React.forwardRef(
  ({ onClick: handleClick = () => {}, Classname, children, border = false, color = 'white', size = 'S' }: ButtonProps) => {
    const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      handleClick(e)
    }
    return (
      <button onClick={handleClick} className={cx('button-wrap', Classname, border && 'border', color, size)}>
        {children}
      </button>
    )
  },
)
export default Button
