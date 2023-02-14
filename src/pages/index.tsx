import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import mango from "../../public/image/mango.jpg";
import classNames from "classnames";

export default function Home() {
  const cx = classNames.bind(styles);
  return (
    <>
      <Head>
        <title>망고</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.image}>
          <Image src={mango} layout="fill" alt="망고" />
        </div>
        <p>귀여운 망고</p>
        <p>젠킨스 테스트</p>
        <p>젠킨스 테스트2</p>
      </main>
    </>
  );
}
