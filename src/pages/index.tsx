import styles from '@/styles/Home.module.scss'
import classNames from 'classnames'
import Layout from 'components/layouts/Layouts'
import CardList from 'components/layouts/CardList'
import { useEffect } from 'react'
import useAuth from 'util/useAuth'
import { GetCookie } from 'util/cookies'
import Router from 'next/router'
import { Componets } from 'interface'
export default function Home() {
  const cx = classNames.bind(styles)
  interface IndexPros {
    title: string
  }
  let dummy1 = 'https://i.ibb.co/W5N2jjS/Kakao-Talk-20230217-224442620.jpg'
  let dummy2 = 'https://i.ibb.co/KNwpYKb/Kakao-Talk-20230305-022702945-01.jpg '
  let dummy3 = 'https://i.ibb.co/hV3QT5M/Kakao-Talk-20230305-022702945-02.jpg'
  let dummy4 = 'https://i.ibb.co/BV2CcB1/Kakao-Talk-20230305-022702945-03.jpg'
  let dummy5 = 'https://i.ibb.co/9n1f8Yv/Kakao-Talk-20230305-022702945-04.jpg'
  let dummy6 = 'https://i.ibb.co/3W5jzPp/Kakao-Talk-20230305-022702945-05.jpg'
  let dummy7 = `https://i.ibb.co/ftKLQMm/Kakao-Talk-20230305-022702945-06.jpg`
  let dummy8 = `https://i.ibb.co/Dgh0bZD/Kakao-Talk-20230305-022702945-07.jpg`
  let dummy9 = `https://i.ibb.co/C8XD0vK/Kakao-Talk-20230305-022702945-08.jpg`
  let dummy10 = `https://i.ibb.co/cC5cmTc/Kakao-Talk-20230305-022702945-09.jpg`
  let dummy11 = `https://i.ibb.co/jM7WdJ6/Kakao-Talk-20230305-022702945-10.jpg`
  let dummy12 = `https://i.ibb.co/d7Xzd10/Kakao-Talk-20230305-022702945-11.jpg`
  let dummy13 = `https://i.ibb.co/Qj5CvpD/Kakao-Talk-20230305-022702945-12.jpg`
  let dummy14 = `https://i.ibb.co/1s5XGkw/Kakao-Talk-20230305-022702945-13.jpg`
  let dummy15 = `https://i.ibb.co/TMQB2x1/Kakao-Talk-20230305-022702945-14.jpg`
  let dummy16 = `https://i.ibb.co/bNYwskM/Kakao-Talk-20230305-022702945-15.jpg`
  let dummy17 = `https://i.ibb.co/MpYJ2gG/Kakao-Talk-20230305-022702945-16.jpg`
  let dummy18 = `https://i.ibb.co/CQnSW4X/Kakao-Talk-20230305-022702945-17.jpg`
  let dummy19 = `https://i.ibb.co/CPbKgGq/Kakao-Talk-20230305-022702945-18.jpg`
  let dunny20 = `https://i.ibb.co/tzjYv6C/Kakao-Talk-20230305-022702945.jpg`

  const IndexList: Componets.CardList[] = [
    {
      title: 'Today',
      Item: [
        { id: 2, image: dummy1, title: '망고는망고' },
        { id: 2, image: dummy2, title: '망고는망고' },
        { id: 2, image: dummy3, title: '망고는망고' },
        { id: 2, image: dummy4, title: '망고는망고' },
      ],
    },
    {
      title: 'TimeLine',
      Item: [
        { id: 2, image: dummy5, title: '망고는망고' },
        { id: 2, image: dummy6, title: '망고는망고' },
        { id: 2, image: dummy7, title: '망고는망고' },
        { id: 2, image: dummy8, title: '망고는망고' },
      ],
    },
    {
      title: 'Community',
      Item: [
        { id: 2, image: dummy9, title: '망고는망고' },
        { id: 2, image: dummy10, title: '망고는망고' },
        { id: 2, image: dummy11, title: '망고는망고' },
        { id: 2, image: dummy12, title: '망고는망고' },
      ],
    },
  ]
  const { ip } = useAuth()
  useEffect(() => {
    if (!GetCookie('MangoToken')) ip(Router.query.redirect?.toString())
  }, [ip])

  return (
    <Layout footer header>
      {IndexList.map((v, idx) => (
        <CardList Item={v.Item} title={v.title} key={idx} />
      ))}
    </Layout>
  )
}
