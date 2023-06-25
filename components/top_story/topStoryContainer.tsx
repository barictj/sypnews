//create a functional component called top story that will display the top story props

import styles from './top_story.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import TopStory from './topStory';
import TopStoryRightTops from './topStoryRightTops';
import ArticleListTwo from '../articlelisttwo';
import LoadingComponent from '../basic/loading';
export const TopStoryContainer = (props) => {
    const content = props.data;
    const testObj ={}
    const [toggle, setToggle] = useState(false);
    if(content.length > 0 ){
        const top = content[0];
        const topTwo = [content[1], content[2]]
        const topRight = content.slice(3)  
        return (
            <>
                
                <div className={styles.top_story_container_div}>
                    <div className={styles.top_story_div}>
                        <TopStory data={top} />
                        <ArticleListTwo props={topTwo} />
                    </div>
                    <TopStoryRightTops props={topRight} />
                    
                </div>
                
                
                
            </>
        )}
    else{
        return(
            <div className={styles.top_story_container_div} style={{height: '300px', width: '100%'}}>
                <LoadingComponent />
            </div>
    
        )
       
    } 
}    
;
export default TopStoryContainer;