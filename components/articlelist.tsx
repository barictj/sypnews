import Link from 'next/link'
import styles from '../styles/main.module.scss'
// create react component with typescript and props from parent component called data
export default function ArticleList({ data }) {
    // sort data by date_published
    let sortedData = data.sort((a, b) => new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf()).slice(0, 50); 
    sortedData.map((article) => () => {console.log(article)})

    
  return (
    <div className={styles.content_container}>
        {sortedData.map((article) => (
        
          <div key={article.id} >
             <Link href={article.url}>
                <a><img src={article.image} className={styles.img}/></a>
            </Link>
              <Link href={article.url}>  
                  <a className={styles.title}><div className={styles.title_div}>{article.title}</div></a>   
              </Link>
          </div>
        ))}
    </div>
  )}
