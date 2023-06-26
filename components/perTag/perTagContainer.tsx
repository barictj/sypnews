//create a const compononent called perTagContainer that has a titleCard
import TitleCard from '../basic/titleCard';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import styles from './per-tag.module.scss';
import PerTagTop from './perTagTop';
import PerTagRight from './perTagRight';
import LoadingComponent from '../basic/loading';

export const PerTagContainer = (props) => {
    const [readyData, setReadyData] = useState("");
    const [spliced, setSpliced] = useState("");
    const [tag, setTag] = useState(props.tag);
    const [tagData, setTagData] = useState([]);
    const [articles, setArticles] = useState(props.articles);
    useEffect(() => {
        
        articles.map((article) => {
            if(article.title.includes(tag)){
                setTagData(tagData => [...tagData, article]);
            }
        })
      }, [props.articles]); 
    return (
        <>
        <div>
            <TitleCard title={tag} />
        </div>
        <div className={styles.per_tag_div}>
            
            {tagData.length > 0 ? 
            <>
            <PerTagTop article={tagData[0]} />
            <PerTagRight articles={tagData.splice(1,5)}/>
            </>
            :
            <LoadingComponent />
}
            
        </div>
        </>
    );
}