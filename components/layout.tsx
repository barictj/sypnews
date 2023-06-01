import Head from 'next/head'
import styles from '../styles/main.module.scss'
import {BurgerMenuButton} from './burgerMenuButton'
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
          <div className={styles.logo_div}>
            < div className={styles.logo_left}>
                SYP Politics
            </div>
            <div className={styles.logo_right}>
              <BurgerMenuButton />
            </div>
          </div>
              <>
                {children}
              </>
          
        </main>
    </>
  )
}