import Link from 'next/link'
import styles from '../styles/main.module.scss'

import { useState, useEffect } from 'react';
// create react component with typescript and props from parent component called data
export default function ArticleList({ data }) {
  return (
    <>
    <div className={styles.top_story_right_new}>Recent News</div>
        {data.map((article) => (
          <div key={article.id} >
              <Link href={article.url}>  
                  <a className={styles.title}><div className={styles.title_div}>{article.title}</div></a>   
              </Link>
          </div>
        ))}
    </>
  )}
