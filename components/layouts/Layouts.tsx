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

  const cx = classNames.bind(Style)
  return (
    <>
      {!isLoading ? (
        header && (
          <>
            <Header Nickname={data?.userNickName ?? ''} />
            <main className={cx('layouts-wrap')}>
              <div className={cx('layouts-content')}>{children}</div>
            </main>
            {footer && <Footer />}
          </>
        )
      ) : (
        <></>
      )}
    </>
  )
}

export default Layout
