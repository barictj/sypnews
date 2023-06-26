//create a const compononent called perTagContainer that has a titleCard
import SourceTitleCard from '../basic/sourceTitleCard';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import styles from './per-source.module.scss';
import PerSourceTop from './perSourceTop';
import PerSourceRight from './perSourceRight';
import TitleCard from '../basic/titleCard';
import LoadingComponent from '../basic/loading';

export const PerSourceContainer = (props) => {
    const [readyData, setReadyData] = useState("");
    const [spliced, setSpliced] = useState("");
    const [tag, setTag] = useState(props.tag);
    const [tagData, setTagData] = useState([]);
    const [articles, setArticles] = useState(props.articles);
    useEffect(() => {
        articles.map((article) => {
            if(article.source.includes(tag)){
                setTagData(tagData => [...tagData, article]);
            }
        })
      }, [props.articles]); 
    return (
        <>
        <div>
            <SourceTitleCard title={tag} />
        </div>
        <div className={styles.per_tag_div}>
            
            {tagData.length > 0 ? 
            <>
            <PerSourceTop article={tagData[0]} />
            <PerSourceRight articles={tagData.splice(1,5)}/>
            </>
            :
            <LoadingComponent />
            }
            
        </div>
        </>
    );
}
export default PerSourceContainer;