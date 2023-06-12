import Link from 'next/link'
import styles from './by_source_display.module.scss'
import TitleCard from './basic/titleCard'
import { Title } from '@mui/icons-material'

//Create a navigagtion menu that includes a nextjs link to the about page
export  const BySourceDisplay = (props) => {
  return (
      <div className={styles.by_source_div}>
        
        <div className={styles.per_source_link}> 
              <Link href={{ pathname: '/by_source', query: { searchText: 'cnn' } }} >
                <a className={styles.per_source_link_a}>
                    Get all CNN Political                
                </a>
              </Link>
            
        </div>
        <div className={styles.per_source_link}> 
              <Link href={{ pathname: '/by_source', query: { searchText: 'nbcnews' } }} >
              <a className={styles.per_source_link_a}>
                    Get all NBCNews Political                
                </a>  
              </Link>
            
        </div>
        <div className={styles.per_source_link}> 
              {/* <Link href={{ pathname: '/by_source', query: { searchText: 'nbcnews' } }} >
                <a>
                    More is coming                
                </a>
              </Link> */}
              More coming soon
            
        </div>
      </div>
  )
}