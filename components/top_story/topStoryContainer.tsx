//create a functional component called top story that will display the top story props

import styles from './top_story.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import TopStoryRight from './topStoryRight';
import TopStory from './topStory';
import TopStoryRightTops from './topStoryRightTops';


export const TopStoryContainer = (props) => {
    const content = props.data;
    const splicedContent = content.splice(5, 10);
    const topTwo = content.splice(1, 4);
    const [toggle, setToggle] = useState(false);
    return (
            <>
                {content.length > 0 ? 
                <div className={styles.top_story_container_div}>
                    <TopStory data={content[0]} />
                    <TopStoryRightTops props={topTwo} />
                    
                </div>
                :
                <div>LOADING</div>
                }
            </>
        )}
;
export default TopStoryContainer;