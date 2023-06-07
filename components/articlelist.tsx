import Link from 'next/link'
import styles from './article_list.module.scss'
import { useState, useEffect } from 'react';
// create react component with typescript and props from parent component called data
export default function ArticleList({ props }) {
    const data = props
  return (
    <div className={styles.full_list}>
        {data.map((article) => (
            <Link href={article.url}>
                <a 
                className={styles.full_list_with_pic} 
                style={{background: `rgba(0, 0, 0, 0.80) url(${article.image}) `, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'darken',
                objectFit: 'cover',
                overflow: 'hidden',
                }}
                >   
                    <div key={article.id} >
                        {article.title}
                    </div>   
                </a>    
            </Link>
        ))}
    </div>
  )}