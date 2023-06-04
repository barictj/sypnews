//create a functional component called top story that will display the top story props

import styles from '../styles/topStory.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const TopStory = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={styles.top_story_div}>
            <div className={styles.top_story_image}>
                <Link href={`/story/${props.story.id}`}>
                    <a><Image src={props.story.image} alt={props.story.title} width={300} height={200} /></a>
                </Link>
            </div>
            <div className={styles.top_story_text}>
                <div className={styles.top_story_title}>
                    <Link href={`/story/${props.story.id}`}>
                        <a>{props.story.title}</a>
                    </Link>
                </div>
                <div className={styles.top_story_description}>
                    {props.story.description}
                </div>
                <div className={styles.top_story_author}>

                </div>
            </div>
        </div>
    );
}
;
