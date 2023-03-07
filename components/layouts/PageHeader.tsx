import classNames from 'classnames/bind'
import Style from '@/styles/PageHeader.module.scss'
const cx = classNames.bind(Style)

interface PageHeaderPorps {
  title: string
}
const PageHeader = ({ title }: PageHeaderPorps) => {
  return <div className={cx('page-header')}>{title}</div>
}

export default PageHeader
