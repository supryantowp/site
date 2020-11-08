import Head from 'next/head';

import styles from '@/styles/Home.module.css';

const homePage = () => (
  <div className={styles.container}>
    <Head>
      <title>Supryanto Widadi Putra</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Helo</h1>
  </div>
)

export default homePage
