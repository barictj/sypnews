//create a functional component called top story that will display the top story props

import styles from './top_story.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import TopStoryRight from './topStoryRight';
import TopStory from './topStory';


export const TopStoryContainer = (props) => {
    const content = props.data;
    const splicedContent = content.splice(1, 7);
    const [toggle, setToggle] = useState(false);
    // console.log(splicedContent)
    return (
        <div className={styles.top_story_container_div}>
            <TopStory data={content[0]} />
            <TopStoryRight props={splicedContent} />
        </div>
    );
}
;
export default TopStoryContainer;