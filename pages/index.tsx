import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ynamdar clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src="https://cdn.ynamdar.com/ynamdar/images/popup_banner/tm_c97f08ad-de23-4f5e-ab7b-7280943ed6fb.jpg" alt="Vercel Logo" width={500} height={700} />
    </div>
  )
}
