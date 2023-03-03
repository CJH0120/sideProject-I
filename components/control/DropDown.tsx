import Style from '@/styles/DropDown.module.scss'
import classNames from 'classnames/bind'
import useAuth from 'util/useAuth'

const cx = classNames.bind(Style)
export interface ListProps {
  list: string
  link: string
  onclik?: (e: React.MouseEvent) => void
}

export interface DropDownPros {
  size: 'S' | 'M' | 'L' | 'XL'
  list: ListProps[]
}

const DropDown = ({ list, size }: DropDownPros) => {
  return (
    <div className={cx('dropdown-wrap', size)}>
      {list.map(v => (
        <div className={cx('dropdown-content')} onClick={v?.onclik} key={v.list}>
          {v.list}
        </div>
      ))}
    </div>
  )
}

export default DropDown
