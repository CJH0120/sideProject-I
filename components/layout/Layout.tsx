import classNames from 'classnames/bind'
import Style from '@/styles/layout.module.scss'
import { faker } from '@faker-js/faker'
import Image, { StaticImageData } from 'next/image'
const cx = classNames.bind(Style)
interface LayoutPorps {
   children?: React.ReactNode
   header?: boolean
   info?: boolean
   image?: string
   blogname?: string | string[]
}
const Layout = ({ blogname, children, header = false, info = false, image }: LayoutPorps) => {
   return (
      <div className={cx('layouts')}>
         {header && (
            <header className={cx('layout-header')}>
               <div className={cx('blog-title')}>{blogname ?? '블로그 타이틀'}</div>
               <div className={cx('blog-login')}>회원가입/로그인</div>
            </header>
         )}
         <div className={cx('layout-wrap')}>
            {info && (
               <div className={cx('blog-info')}>
                  {image && (
                     <>
                        <div className={cx('info-image')}>
                           <Image src={image} alt="이미지" height={120} width={120} className={cx('image')} />
                        </div>
                        <div>{blogname}</div>
                     </>
                  )}
               </div>
            )}
            <div className={cx('blog-content')}>
               <section>{children}</section>
            </div>
         </div>
      </div>
   )
}

export default Layout
