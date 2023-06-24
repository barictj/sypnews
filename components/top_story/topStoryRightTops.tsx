import Link from 'next/link'
import styles from './top_story.module.scss'
import { useState, useEffect } from 'react';
import TopStoryPhoto from './topStoryPhoto';
import { ListOfFour } from '../basic/listOfFour';
// create react component with typescript and props from parent component called data
export default function TopStoryRightTops({ props }) {
    const data = props
    const splicedData = data.slice(2, 6)
    const splicedDataTwo  = data.slice(6, 10)
  return (
    <div className={styles.top_stories_right_tops} >
        <div className={styles.top_stories_right_container}>
            <TopStoryPhoto props={data[0]} />
            <ListOfFour articles={splicedData} />
        </div>
        <div className={styles.top_stories_right_container}>
            <TopStoryPhoto props={data[1]} />
            <ListOfFour articles={splicedDataTwo} />
        </div>
    </div>
  )}
