import Link from 'next/link'
import styles from './top_story.module.scss'
import { useState, useEffect } from 'react';
// create react component with typescript and props from parent component called data
export default function TopStoryRightTops({ props }) {
    const data = props
  return (
    <div className={styles.top_stories_right_tops}>
        {data.map((article) => (
            <Link href={article.url}>
                <a 
                className={styles.top_articles_with_pic} 
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
