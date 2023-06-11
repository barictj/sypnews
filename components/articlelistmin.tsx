import Link from 'next/link'
import styles from './article_list.module.scss'
import { useState, useEffect } from 'react';
import ArticleListItem from './articleListItem';
// create react component with typescript and props from parent component called data
export const ArticleListMin = ({ props }) => {
    const data = props.splice(0, 6)

  return (
    <div className={styles.full_list}>
        {data.map((article) => (
            <ArticleListItem props={article} />
        ))}
    </div>
  )}

export default ArticleListMin;