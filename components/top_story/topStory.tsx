//create a functional component called top story that will display the top story props

import styles from './top_story.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import LoadingComponent from '../basic/loading';

export const TopStory = (props) => {
    const content = props.data;
    const [toggle, setToggle] = useState(false);
    if(Object.keys(content).length > 0){
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
                            <h1 className={styles.header_one}>{content.source.toUpperCase()}: {content.title}</h1>
                        </a>
                    </Link>
                </div>
                <div className={styles.top_story_description}>
                    {content.body}
                </div>
            </>
    )}
    else{
        return(
            <><div className={styles.top_story_image_div} style={{height: '100px'}}>
           <LoadingComponent />
        </div>
        <div className={styles.top_story_title} style={{height: '100px'}}>
            <LoadingComponent />
        </div>
        <div className={styles.top_story_description} style={{height: '100px'}}>
            <LoadingComponent />
        </div></>
        )
    }
    ;
}
;
export default TopStory;