import classNames from 'classnames/bind'
import React from 'react'
import Styles from '@/styles/Button.module.scss'
interface ButtonProps {
  border?: boolean
  color?: 'yellow' | 'white'
  Children: React.ReactNode
  Classname?: string
  size?: 'S' | 'M' | 'L'
}
const cx = classNames.bind(Styles)
const Button = React.forwardRef(({ Classname, Children, border = false, color = 'white', size = 'S' }: ButtonProps) => {
  return <button className={cx(Classname, border, color, size)}>{Children}</button>
})
export default Button
