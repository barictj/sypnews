//create a const compononent called perTagContainer that has a header
import styles from './per-tag.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link'
export const PerTagTop = (props) => {
    const article = props.article
    return (
            <Link href={article.url} key={article.id}>
                <a 
                className={styles.per_tag_image} 
                style={{background: `rgba(0, 0, 0, 0.60) url(${article.image}) `, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'darken',
                objectFit: 'cover',
                overflow: 'hidden',
                }}
                >   
                    <div  style={{padding: '1.25em'}}>
                        {article.source.toUpperCase()}:  {article.title}
                    </div>   
                </a>    
            </Link>
        
    );
}
export default PerTagTop;