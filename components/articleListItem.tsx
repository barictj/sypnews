import Link from 'next/link'
import styles from './article_list.module.scss'
import { useState, useEffect } from 'react';
// create react component with typescript and props from parent component called data
export default function ArticleListItem({ props }) {
    const article = props
    const dateData = article.date_published
    let description;
    const dateObject = new Date(Date.parse(dateData));
    const dateReadable = dateObject.toDateString();
    const articleChoiceNumber = Math.floor(Math.random() * 3) + 1;
    if(article.body.length > 140){
        description = article.body.substring(0, 140) + '...';
    }
    else{
        description = article.body;
    }
    console.log(articleChoiceNumber)
  return (
            <>
            {articleChoiceNumber < 3 ?
             <Link href={article.url} key={article.id}>
             <a 
             className={styles.full_list_with_pic} 
             style={{background: `rgba(0, 0, 0, 0.75) url(${article.image}) `, 
             backgroundSize: 'cover', 
             backgroundPosition: 'center center',
             backgroundRepeat: 'no-repeat',
             backgroundBlendMode: 'darken',
             objectFit: 'cover',
             overflow: 'hidden',
             }}
             >   
                 <div  style={{padding: '.25em'}}>
                     <b>{article.source.toUpperCase()}</b>:  {article.title}
                     <div>
                         Published on: {dateReadable}
                     </div>
                 </div>   
             </a>    
         </Link>

         :
         <div className={styles.no_pic_div}>
            <Link href={article.url} key={article.id}>
                <a className={styles.no_pic_link}>
                <b>{article.source.toUpperCase()}</b>:{article.title}     
                </a>    
            </Link>
            <div className={styles.no_pic_description}>
                {description}
            </div>
            <div className={styles.no_pic_description}>
            <b>Published on</b>: {dateReadable} 
            </div>
         </div>
        }
            </>
        )
    }