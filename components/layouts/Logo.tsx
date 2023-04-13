import IconLogo from 'components/icons/IconLogo'
import Link from 'next/link'
import style from '@/styles/Logo.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)
const Logo = () => {
  return (
    <Link href={'/'}>
      <div className={cx('logo-wrap')}>
        <IconLogo className={cx('logo')} />
        <p className={cx('text')}>Petty</p>
      </div>
    </Link>
  )
}

export default Logo
