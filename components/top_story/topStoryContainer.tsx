//create a functional component called top story that will display the top story props

import styles from './top_story.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import TopStoryRight from './topStoryRight';
import TopStory from './topStory';
import TopStoryRightTops from './topStoryRightTops';
import ArticleListTwo from '../articlelisttwo';

export const TopStoryContainer = (props) => {
    const content = props.data;
    const topTwo = content.splice(1, 2);
    console.log(topTwo.length)
    const topFour = content.splice(3,6);
    const [toggle, setToggle] = useState(false);
    return (
            <>
                {content.length > 0 ? 
                <div className={styles.top_story_container_div}>
                    <div className={styles.top_story_div}>
                        <TopStory data={content[0]} />
                        <ArticleListTwo props={content} />
                    </div>
                    <TopStoryRightTops props={topFour} />
                    
                </div>
                :
                <div>LOADING</div>
                }
            </>
        )}
;
export default TopStoryContainer;