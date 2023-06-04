import Link from 'next/link'
import styles from '../styles/main.module.scss'
import { useState, useEffect } from 'react';
// create react component with typescript and props from parent component called data
export default function ArticleList({ data }) {
    // sort data by date_published
    
    
    data.map((article) => (console.log(article))) 
    //create useEffect hook to set state of articles to sorted data
  return (
    <div className={styles.content_container}>
        {data.map((article) => (
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
