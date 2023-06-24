//create a const compononent called perTagContainer that has a titleCard
import SourceTitleCard from '../basic/sourceTitleCard';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import styles from './per-source.module.scss';
import PerSourceTop from './perSourceTop';
import PerSourceRight from './perSourceRight';
import TitleCard from '../basic/titleCard';

export const PerSourceContainer = (props) => {
    const [readyData, setReadyData] = useState("");
    const [spliced, setSpliced] = useState("");
    const [tag, setTag] = useState(props.tag);
    const [tagData, setTagData] = useState([]);
    const [articles, setArticles] = useState(props.articles);
    useEffect(() => {
        let sortedData = articles.sort((a, b) => new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf())
        const newArray = sortedData.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
        newArray.map((article) => {
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
            <TitleCard title="Loading" />
            }
            
        </div>
        </>
    );
}
export default PerSourceContainer;