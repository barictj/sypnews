import Link from 'next/link'
import styles from './article_list.module.scss'
import { useState, useEffect } from 'react';
import ArticleListItem from './articleListItem';
// create react component with typescript and props from parent component called data
export default function ArticleList({ props }) {
    const data = props

      
  return (
    <div className={styles.full_list}>
        {data.map((article) => (
            <ArticleListItem props={article} key={article._id}/>
        ))}
    </div>
  )}