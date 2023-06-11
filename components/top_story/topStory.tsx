//create a functional component called top story that will display the top story props

import styles from './top_story.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const TopStory = (props) => {
    const content = props.data;
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={styles.top_story_image_div}>
                <Link  href={content.url}>
                    <a>
                        <img src={content.image} alt={props.title} className={styles.top_story_image}/>
                    </a>
                </Link>
            </div>
            <div className={styles.top_story_title}>
                <Link  href={content.url}>
                    <a className={styles.top_story_title_link}>
                        {content.source.toUpperCase()}: {content.title}
                    </a>
                </Link>
            </div>
            <div className={styles.top_story_description}>
                {content.body}
            </div>
        </>
    );
}
;
export default TopStory;