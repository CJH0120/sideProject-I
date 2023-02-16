import React from 'react'
import Header from './Header'

type LayoutPorps = {
  header?: boolean
  children?: React.ReactNode
  footer?: boolean
}
const Layout = ({ children, footer, header }: LayoutPorps) => {
  return (
    <>
      {header && <Header />}
      <div>{children}</div>
      {footer && <div>푸터</div>}
    </>
  )
}

export default Layout
