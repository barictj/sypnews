import Head from 'next/head'
import styles from '../styles/main.module.scss'
import {BurgerMenuButton} from './burgerMenuButton'
import Link from 'next/link'
type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      
      <main className={styles.home}>
          <div className={styles.logo_div}>
            < div className={styles.logo_left}>
              <Link href="/" >
                <a className={styles.logo_left_a}>
                  <div>
                    <span style={{fontSize:'1.8em'}}>p</span>olicratic
                  </div>
                </a>
              </Link>
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