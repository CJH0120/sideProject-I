import Style from '@/styles/CardList.module.scss'
import classNames from 'classnames/bind'
import Button from 'components/control/Button'
import { image, commerce, random } from 'faker/locale/ko'
import { Componets } from 'interface'
import Image, { ImageLoader } from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Mango from '../../public/image/mango.jpg'

const loaderProp = ({ src }: any) => {
  return src
}

const CardList = ({ Item, title }: Componets.CardList) => {
  const [data, setDate] = useState<Componets.CardItem[]>(Item)
  useEffect(() => {}, [])
  const cx = classNames.bind(Style)
  return (
    <section className={cx('card-list-wrap')}>
      <div className={cx('card-list-head')}>
        <div className={cx('card-list-head-title')}>#{title}</div>
        <Link href={title.toLocaleLowerCase()}>
          <Button color="white">전체보기</Button>
        </Link>
      </div>
      <div className={cx('card-list-item-wrap')}>
        {data?.map((v, idx) => (
          <Link href={`/${title.toLocaleLowerCase()}/${v.id}`} key={v.id.toString() + v.image + idx}>
            <div className={cx('card-list-item')}>
              <div className={cx('card-image')}>
                <Image
                  src={v.image}
                  unoptimized
                  loader={loaderProp}
                  fill
                  className={cx('image')}
                  style={{ objectFit: 'cover' }}
                  alt={'귀여운 우리 망고'}
                  loading="lazy"
                />
              </div>
              <p className={cx('card-title')}>{v.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
export default CardList
