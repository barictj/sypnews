import Head from 'next/head'
import styles from '../styles/main.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  console.log("Layout")
  return (
    <>
      <Head>
        <title>SYP Politics</title>
      </Head>
      
      <main className={styles.home}>
      <div className={styles.logo_font}>SYP Politics</div>
          <>{children}</>
        </main>
    </>
  )
}