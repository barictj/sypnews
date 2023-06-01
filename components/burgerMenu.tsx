import Link from 'next/link'
import styles from '../styles/main.module.scss'
import { useState } from 'react'



//Create a navigagtion menu that includes a nextjs link to the about page
export default function BurgerMenu() {
  return (
      <div className={styles.menu}>
        <div className={styles.menu_div}> 
            <div className={styles.menu_item}>
              <Link href="/" >
                  <a className={styles.menu_item_link}>Home</a>
              </Link>
            </div>
          <div className={styles.menu_item}>
            <Link href="/about">
                <a className={styles.menu_item_link}>About</a>
            </Link>
          </div>
        </div>
      </div>
  )
}