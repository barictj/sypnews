//create component to map through articles and display title and body
import Link from 'next/link';
import styles from './cat_header.module.scss';
import {VerticalHalfBorder} from '../basic/verticalHalfBorder';
import { useState, useEffect } from 'react';
export const CatHeader = (props) => {
    const articles = props.articles
    const sorted = props.tags
    return (
        <div className={styles.cat_head_div}>
            <div className={styles.cat_head_trend}>Trending:</div>
            <div className={styles.cat_head_item}>{sorted[0]?sorted[0][0].toUpperCase():<></>}</div>
            <VerticalHalfBorder />
            <div className={styles.cat_head_item}>{sorted[1]?sorted[1][0].toUpperCase():<></>}</div>
            <VerticalHalfBorder />
            <div className={styles.cat_head_item}>{sorted[2]?sorted[2][0].toUpperCase():<></>}</div>
            <VerticalHalfBorder />
            <div className={styles.cat_head_item}>{sorted[3]?sorted[3][0].toUpperCase():<></>}</div>
            <VerticalHalfBorder />
            <div className={styles.cat_head_item}>{sorted[4]?sorted[4][0].toUpperCase():<></>}</div>
            <VerticalHalfBorder />
            <div className={styles.cat_head_item}>{sorted[5]?sorted[5][0].toUpperCase():<></>}</div>

        </div>
    )
}

export default CatHeader;