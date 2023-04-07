import Style from '@/styles/CardList.module.scss'
import classNames from 'classnames/bind'
import Button from 'components/control/Button'
import IconFillHeart from 'components/icons/IconFillHeart'
import IconHeart from 'components/icons/IconHeart'
import { Componets } from 'interface'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useMember } from 'util/apiHook'

const loaderProp = ({ src }: any) => {
  return src
}

const CardList = ({ item, title, header, likes }: Componets.CardItem) => {
  const { data, isLoading } = useMember()
  const [datas, setDate] = useState<Componets.Item[]>(item)
  const HandleIcon = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.nativeEvent.preventDefault()
  }
  const cx = classNames.bind(Style)
  return (
    <section className={cx('card-list-wrap')}>
      {header && (
        <div className={cx('card-list-head')}>
          <div className={cx('card-list-head-title')}>#{title}</div>
          <Link href={title?.toLocaleLowerCase()}>
            <Button color="white">전체보기</Button>
          </Link>
        </div>
      )}

      <div className={cx('card-list-item-wrap')}>
        {datas?.map((v, idx) => (
          <Link href={`/${title.toLocaleLowerCase()}/${v.id}`} key={v.id.toString() + v.image + idx}>
            <div className={cx('card-list-item')}>
              <div className={cx('card-image')}>
                <Image
                  src={v.image}
                  unoptimized
                  loader={loaderProp}
                  fill
                  placeholder="blur"
                  className={cx('image')}
                  style={{ objectFit: 'cover' }}
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  alt={'귀여운 우리 망고'}
                  loading="lazy"
                />
                {likes && data && <Button icon={IconHeart} iconSize={24} Classname={cx('icons')} onClick={HandleIcon} size="M" />}
              </div>
              <div className={cx('card-info')}>
                <p className={cx('card-title')}>{v.title}</p>
                {v.nickName && <p className={cx('card-title')}>{v.nickName}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
export default CardList
