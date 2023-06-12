import Link from 'next/link'
import styles from '../styles/menu.module.scss'
import { SearchBar } from './searchBar'
import { BySourceMenu } from './bySourceMenu'

//Create a navigagtion menu that includes a nextjs link to the about page
export  const BurgerMenu = (props) => {
  return (
      <div className={styles.menu}
      style={{background: `rgba(0, 0, 0, 0.80) url(/images/capital.jpg)` , 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'darken',
                objectFit: 'cover',
                overflow: 'hidden',}}
        >
        <SearchBar setToggle={props.setToggle} />
        <div className={styles.menu_div}> 
              <Link href="/" >
                <div className={styles.menu_item} onClick={props.setToggle}>
                  <a className={styles.menu_item_link}>Home</a>
                </div>
              </Link>
            <Link href="/about" >
              <div className={styles.menu_item} onClick={props.setToggle}>
                <a className={styles.menu_item_link} >About</a>
              </div>
            </Link>
            <h2 style={{color: 'white', textAlign:'center', marginTop:'1em'}}>By Source</h2>
            <BySourceMenu setToggle={props.setToggle} />
        </div>
      </div>
  )
}