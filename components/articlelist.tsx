import Link from 'next/link'
import styles from '../styles/main.module.scss'
// create react component with typescript and props from parent component called data
export default function ArticleList({ data }) {
  return (
    <div>
        {data.map((article) => (
          <div key={article.id} >
            <Link href={article.url}>
              <div>{article.title}</div>
            </Link>
            <Link href={article.url}>
              <div><img src={article.image} className={styles.img}/></div> 
            </Link>
          </div>
        ))}
    </div>
  )}
