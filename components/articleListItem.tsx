import Link from 'next/link'
import styles from './article_list.module.scss'
import { useState, useEffect } from 'react';
// create react component with typescript and props from parent component called data
export default function ArticleListItem({ props }) {
    const article = props
    const dateData = article.date_published

    const dateObject = new Date(Date.parse(dateData));
    const dateReadable = dateObject.toDateString();
    // const articleChoiceNumber = Math.floor(Math.random() * 4) + 1;
    const articleChoiceNumber = 1;
      
  return (
            <>
            {articleChoiceNumber == 1 ?
             <Link href={article.url} key={article.id}>
             <a 
             className={styles.full_list_with_pic} 
             style={{background: `rgba(0, 0, 0, 0.70) url(${article.image}) `, 
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
                         Published at: {dateReadable}
                     </div>
                 </div>   
             </a>    
         </Link>

         :
         <Link href={article.url} key={article.id}>
             <a 
             className={styles.full_list_with_pic} 
             style={{background: `black `,
            fontSize: '.5em',
            }}
             >   
                 <div  style={{padding: '.25em', textAlign:'left', fontSize:'1em', fontWeight: '900'}}>
                     <b style={{textAlign:'left', fontSize:'1em'}}>{article.source.toUpperCase()}</b>:  {article.title}
                     <div>
                         Published at: {dateReadable}
                     </div>
                     <div>
                        {article.body}
                     </div>
                 </div>   
             </a>    
         </Link>
        }
            </>
        )
    }