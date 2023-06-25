//create functional React compononent with typescript and props from parent component called dataimport Link from 'next/link'
import styles from './top_story.module.scss'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingComponent from 'components/basic/loading';
import { describe } from 'node:test';
// create react component with typescript and props from parent component called data
export default function TopStoryPhoto({ props }) {
    const article = props
    let description = ''
    
    if (Object.keys(article).length > 0) {
        if (article && article.body.length > 200) {
            description = article.body.substring(0, 200) + '...'
        }
        else if (article && article.body.length < 200) {
            description = article.body
        }
        else {
            description = 'Loading'
        }
        return (
            <>
            <Link href={article.url} key={article._id}>
            <a 
            className={styles.top_articles_with_pic} 
            style={{background: `rgba(0, 0, 0, 0.70) url(${article.image}) `, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'darken',
            objectFit: 'cover',
            overflow: 'hidden',
            }} >   
                <div  style={{padding: '.25em'}}>
                <b>{article.source.toUpperCase()}</b>:   {article.title}
                </div>   
            </a>    
        </Link>
            <div className={styles.top_story_right_description}>
                {description}
            </div>
            </>
        )
    }
    else{
        return(
            <div className={styles.top_articles_with_pic} style={{height: '300px'}}>
                <LoadingComponent />
            </div>
        )
    }
}