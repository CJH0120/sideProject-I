import Style from '@/styles/CardList.module.scss'
import classNames from 'classnames/bind'
import Button from 'components/control/Button'
import { image, commerce, random } from 'faker/locale/ko'
import Image, { ImageLoader } from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Mango from '../../public/image/mango.jpg'
type CardListProps = {
  title: string
}

interface CardItem {
  image: string
  title: string
  id: number
}
const loaderProp = ({ src }: any) => {
  return src
}
const Dummy: CardItem[] = [
  { image: random.image(), title: commerce.productName(), id: 1 },
  { image: random.image(), title: commerce.productName(), id: 12 },
  { image: random.image(), title: commerce.productName(), id: 13 },
  { image: random.image(), title: commerce.productName(), id: 14 },
]
const CardList = ({ title }: CardListProps) => {
  const [data, setDate] = useState<CardItem[]>()
  useEffect(() => {
    setDate(Dummy)
  }, [])
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
                  style={{ objectFit: 'cover' }}
                  alt={'귀여운 우리 망고'}
                  loading="lazy"
                />
              </div>
              <p className={cx('card-title')}>레이아웃 테스트 두글자 말 줄임{v.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
export default CardList
