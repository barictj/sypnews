import styles from './title_card.module.scss'
import { useState } from 'react';
// create a const compononent called title card that has a title from props
export const TitleCard = (props) => {
    const [title, setTitle] = useState(props.title);
    return (
        <div className={styles.title_card}>
            <div className={styles.title_text}>
                {props.title.toUpperCase()} 
            </div>
        </div>
    );
};
export default TitleCard;
