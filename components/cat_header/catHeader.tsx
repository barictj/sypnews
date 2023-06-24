//create component to map through articles and display title and body
import Link from 'next/link';
import styles from './cat_header.module.scss';
import { count } from 'console';
import {VerticalHalfBorder} from '../basic/verticalHalfBorder';
export const CatHeader = (props) => {
    const articles = props.articles
    const topTags = []
    articles.map((article) => {
        if (article.tags) {
            article.tags.map((tag) => {
                topTags.push(tag)
            })
        }
    })
    const count = function (ary, classifier) {
        classifier = classifier || String;
        return ary.reduce(function (counter, item) {
            var p = classifier(item);
            counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
            return counter;
        }, {})
    };
    const countByTag = count(topTags, function (item) {
        return item.tag_name
    });
    const sorted = Object.entries(countByTag).sort((a, b) => b[1] - a[1])
    console.log(sorted)
    
    return (
        <div className={styles.cat_head_div}>
            <div className={styles.cat_head_trend}>Trending:</div>
            <div className={styles.cat_head_item}>{sorted[0][0].charAt(0).toUpperCase() + sorted[0][0].slice(1)}</div>
            <VerticalHalfBorder />
            <div className={styles.cat_head_item}>{sorted[1][0].charAt(0).toUpperCase() + sorted[1][0].slice(1)}</div>
            <VerticalHalfBorder />
            <div className={styles.cat_head_item}>{sorted[2][0].charAt(0).toUpperCase() + sorted[2][0].slice(1)}</div>
            <VerticalHalfBorder />
            <div className={styles.cat_head_item}>{sorted[3][0]?sorted[3][0].charAt(0).toUpperCase() + sorted[3][0].slice(1):<></>}</div>
            <VerticalHalfBorder />
            <div className={styles.cat_head_item}>{sorted[4][0]?sorted[4][0].charAt(0).toUpperCase() + sorted[4][0].slice(1):<></>}</div>

        </div>
    )
}

export default CatHeader;