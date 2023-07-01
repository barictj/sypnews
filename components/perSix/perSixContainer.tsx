//create a const compononent called perTagContainer that has a titleCard
import SourceTitleCard from '../basic/sourceTitleCard';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import styles from './per-source.module.scss';
import PerSixTop from './perSixTop';
import PerSixRight from './perSixRight';
import TitleCard from '../basic/titleCard';
import LoadingComponent from '../basic/loading';

export const PerSixContainer = (props) => {
    
    const articles = props.articles.splice(0,6)
    return (
        <>
        
        <div className={styles.per_tag_div} style={{marginTop: '1em'}}>
            
            {articles.length > 0 ? 
            <>
            <PerSixTop article={articles[0]} />
            <PerSixRight articles={articles.splice(1,5)}/>
            </>
            :
            <LoadingComponent />
            }
            
        </div>
        </>
    );
}
export default PerSixContainer;