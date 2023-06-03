import Link from 'next/link'
import styles from '../styles/main.module.scss'
import { useState, useEffect } from 'react';
// create react component with typescript and props from parent component called data
export default function ArticleList({ data }) {
    // sort data by date_published
    const [articles, setArticles] = useState([])
    let sortedData = data.sort((a, b) => new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf())
    const newArray = sortedData.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
    useEffect(() => {
        setArticles(newArray)
    }, [data])

    //create useEffect hook to set state of articles to sorted data
  return (
    <div className={styles.content_container}>
        {articles.map((article) => (
          <div key={article.id} >
             <Link href={article.url}>
                <a><img src={article.image} className={styles.img} key={article.id}/></a>
            </Link>
              <Link href={article.url}>  
                  <a className={styles.title}><div className={styles.title_div}>{article.title}</div></a>   
              </Link>
          </div>
        ))}
    </div>
  )}
