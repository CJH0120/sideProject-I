import classNames from 'classnames/bind'
import Styles from '@/styles/Header.module.scss'
import Head from 'next/head'
import IconLogo from 'components/icons/IconLogo'

interface HeadPorps {
  meta?: string
  title?: string
}

const cx = classNames.bind(Styles)
const Header = ({ meta = 'Petty', title = 'Petty' }: HeadPorps) => {
  const category: string[] = ['test1', 'test2', 'test3', 'test4']
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={cx('header-wrap')}>
        <div className={cx('list')}>
          <div className={cx('header-logo')}>
            <IconLogo className={cx('logo')} />
            <span className={cx('logo-text')}>Petty</span>
          </div>
          <div className={cx('header-category')}>
            {category.map(v => (
              <div className={cx('category')} key={v}>
                {v}
              </div>
            ))}
          </div>
        </div>
        <div>asds</div>
      </header>
    </>
  )
}
export default Header
