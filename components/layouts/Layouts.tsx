import classNames from 'classnames/bind'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Style from '@/styles/Layouts.module.scss'
type LayoutPorps = {
  header?: boolean
  children?: React.ReactNode
  footer?: boolean
}
const Layout = ({ children, footer, header }: LayoutPorps) => {
  const cx = classNames.bind(Style)
  return (
    <>
      {header && <Header />}
      <main className={cx('layouts-wrap')}>
        <div className={cx('layouts-content')}>{children}</div>
      </main>
      {footer && <Footer />}
    </>
  )
}

export default Layout
