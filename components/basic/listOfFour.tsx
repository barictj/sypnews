// create functional component to map through list of items and display them

import Link from 'next/link';
import styles from './list_of_four.module.scss';
import HoriontalHalfBorder from './horizontalHalfBorder';
export const ListOfFour = (props) => {
    const articles = props.articles;
    return (
        <div className={styles.list_item_container}>
            {articles.map((article) => (
                <div key={article._id} className={styles.list_item_li}>
                    <Link href={article.url}>
                        <a className={styles.list_item_link}>
                            {article.source.toUpperCase()}: {article.title}
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}