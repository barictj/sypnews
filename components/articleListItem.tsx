import Link from 'next/link'
import styles from './article_list.module.scss'
import { useState, useEffect } from 'react';
import LoadingComponent from './basic/loading';
// create react component with typescript and props from parent component called data
export default function ArticleListItem({ props }) {
    const article = props
    const dateData = article.date_published
    let description;

    //to make date readable in jsx
    const dateObject = new Date(Date.parse(dateData));
    const dateReadable = dateObject.toDateString();

    //choose between article with picture or without picture, 2/3 chance of article with picture
    const articleChoiceNumber = Math.floor(Math.random() * 3) + 1;
    if(article.body.length > 140){
        description = article.body.substring(0, 140) + '...';
    }
    else{
        description = article.body;
    }
  if(article) {
    //with picture and no description
    return (
        <>
        {articleChoiceNumber < 3 ?
         <Link href={article.url} key={article.id}>
         <a 
         className={styles.with_pic_link} 
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

     //Without Picture and include description and published date
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
}else{
    return(
        <LoadingComponent />
    )    
  }
}