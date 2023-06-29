import Link from 'next/link'
import styles from './article_list.module.scss'
import { useState, useEffect } from 'react';
import ArticleListItem from './articleListItem';
// Component to map articles out to articlelistitem
export default function ArticleList({ props }) {
  const data = props
  
  return (
    <div className={styles.full_list}>
        {data.map((article) => (
            <ArticleListItem props={article} key={article._id}/>
        ))}
    </div>
  )}