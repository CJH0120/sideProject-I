import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import classNames from 'classnames'
import IconLogo from 'components/icons/IconLogo'
import Header from 'components/layouts/Header'

export default function Home() {
  const cx = classNames.bind(styles)
  return (
    <>
      <Header />
    </>
  )
}
