//create component to map through articles and display title and body
import Link from 'next/link';
import styles from './per-tag.module.scss';

export const PerTagRight = (props) => {
    const articles = props.articles
    return (
        <div className={styles.per_tag_right}>
            {articles.map((article) => (
                <Link href={article.url}>
                    <a className={styles.per_tag_link_a} key={article.id}>
                        <div className={styles.per_tag_link}>
                            {article.source.toUpperCase()}:  {article.title} 
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default PerTagRight;