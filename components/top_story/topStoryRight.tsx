import Link from 'next/link'
import styles from './top_story.module.scss'
import { useState, useEffect } from 'react';
// create react component with typescript and props from parent component called data
export default function TopStoryRight({ props }) {
    const data = props
  return (
    <div className={styles.top_stories_right}>
        <div className={styles.top_story_right_new}>Other New Stories</div>
          {data.map((article) => (
            <div key={article._id} className={styles.top_story_right_div}>
              <Link href={article.url}>  
                  <a className={styles.top_story_right_link}>{article.title}</a>   
              </Link>
            </div>
        ))}
        <div className={styles.top_story_right_new}></div>
    </div>
  )}
