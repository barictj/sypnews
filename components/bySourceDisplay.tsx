import Link from 'next/link'
import styles from './by_source_display.module.scss'


//Create a navigagtion menu that includes a nextjs link to the about page
export  const BySourceDisplay = (props) => {
  return (
      <div className={styles.by_source_div}>
        <div className=''> 
              <Link href={{ pathname: '/by_source', query: { searchText: 'cnn' } }} >
              CNN                
              </Link>
            
        </div>
        <div className=''> 
              <Link href={{ pathname: '/by_source', query: { searchText: 'nbcnews' } }} >
              NBC News                
              </Link>
            
        </div>
      </div>
  )
}