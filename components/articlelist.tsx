import Link from 'next/link'
import styles from '../styles/main.module.scss'
// create react component with typescript and props from parent component called data
export default function ArticleList({ data }) {
    // sort data by date_published
    let sortedData = data.sort((a, b) => new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf()); 
  return (
    <div>
        {sortedData.map((article) => (
          <div key={article.id} >
            <Link href={article.url}>
              <a><p>{article.title}</p></a>
            </Link>
            <Link href={article.url}>
              <div><img src={article.image} className={styles.img}/></div> 
            </Link>
          </div>
        ))}
    </div>
  )}
