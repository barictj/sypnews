import Link from 'next/link'
import styles from './article_list.module.scss'
import { useState, useEffect } from 'react';
import ArticleListItem from './articleListItem';
// create react component with typescript and props from parent component called data
export const ArticleListTwo = ({ props }) => {
    const data = props
    console.log(data)
    if(data.length > 0 && data[0] != undefined) {
        return (
            <div className={styles.full_list} style={{width: '100%'}}>
                {data.map((article) => (
                    <Link href={article.url} key={article._id}>
                        <a 
                        className={styles.two_pic} 
                        style={{background: `rgba(0, 0, 0, 0.70) url(${article.image}) `, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'darken',
                        objectFit: 'cover',
                        overflow: 'hidden',
                        width: '50%',
                        }}
                        >   
                            <div  style={{padding: '.25em'}}>
                            <b>{article.source.toUpperCase()}</b>:  {article.title}
                            </div>   
                        </a>    
                    </Link>
                ))}
            </div>
          )
    }

  }

export default ArticleListTwo;