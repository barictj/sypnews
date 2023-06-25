// create functional component to map through list of items and display them

import Link from 'next/link';
import styles from './list_of_four.module.scss';
import HoriontalHalfBorder from './horizontalHalfBorder';
import ListOfFourLink from './listOfFourLink';
export const ListOfFour = (props) => {
    const articles = props.articles;
    return (
        <div className={styles.list_item_container}>
            {articles.map((article) => (
                <ListOfFourLink article={article} />
            ))}
        </div>
    )
}