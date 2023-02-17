import classNames from 'classnames/bind'
import Style from '@/styles/Footer.module.scss'
const cx = classNames.bind(Style)
const Footer = () => {
  return (
    <footer className={cx('footer-wrap')}>
      <div className={cx('footer-content')}>
        <div className={cx('footer-item')}>여기엔</div>
        <div className={cx('footer-item')}>뭘 넣어야</div>
        <div className={cx('footer-item')}>될까요?</div>
      </div>
    </footer>
  )
}

export default Footer
