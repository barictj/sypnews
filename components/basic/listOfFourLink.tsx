// create functional component to map through list of items and display them

import Link from 'next/link';
import styles from './list_of_four.module.scss';
import HoriontalHalfBorder from './horizontalHalfBorder';
export const ListOfFourLink = (props) => {
    const article = props.article;
    let title = ''
    if (article.title.length > 95) {
        title = article.title.substring(0, 95) + '...'
    }
    else{
        title = article.title
    }
    
    return (
        <div className={styles.list_item_li} >
            <Link href={article.url} >
                <a className={styles.list_item_link} >
                    {article.source.toUpperCase()}: {title}
                </a>
            </Link>
        </div>
    )
}
export default ListOfFourLink;