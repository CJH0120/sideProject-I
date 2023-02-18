import styles from '@/styles/Home.module.scss'
import classNames from 'classnames'
import Layout from 'components/layouts/Layouts'
import CardList from 'components/layouts/CardList'

export default function Home() {
  const cx = classNames.bind(styles)
  return (
    <Layout footer header>
      <CardList title="Today" />
      <CardList title="TimeLine" />
      <CardList title="Community" />
    </Layout>
  )
}
