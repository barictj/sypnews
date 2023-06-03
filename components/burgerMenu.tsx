import Link from 'next/link'
import styles from '../styles/menu.module.scss'
import { SearchBar } from './searchBar'


//Create a navigagtion menu that includes a nextjs link to the about page
export  const BurgerMenu = (props) => {
  return (
      <div className={styles.menu}>
        <SearchBar setToggle={props.setToggle} />
        <div className={styles.menu_div}> 
              <Link href="/" >
                <div className={styles.menu_item}>
                  <a className={styles.menu_item_link} onClick={props.setToggle}>Home</a>
                </div>
              </Link>
            <Link href="/about">
              <div className={styles.menu_item}>
                <a className={styles.menu_item_link} onClick={props.setToggle}>About</a>
              </div>
            </Link>
        </div>
      </div>
  )
}