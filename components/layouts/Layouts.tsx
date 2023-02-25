import classNames from 'classnames/bind'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Style from '@/styles/Layouts.module.scss'
import { useMember } from 'util/apiHook'
type LayoutPorps = {
  header?: boolean
  children?: React.ReactNode
  footer?: boolean
}
const Layout = ({ children, footer, header }: LayoutPorps) => {
  const { data, isLoading } = useMember()
  console.log(data?.nickName)

  const cx = classNames.bind(Style)
  return (
    <>
      {!isLoading
        ? header && (
            <>
              <Header Nickname={data?.nickName ?? ''} />
              <main className={cx('layouts-wrap')}>
                <div className={cx('layouts-content')}>{children}</div>
              </main>
              {footer && <Footer />}
            </>
          )
        : null}
    </>
  )
}

export default Layout
