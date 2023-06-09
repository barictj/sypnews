import styles from './ranker.module.scss';

export const TopRightRankings = (props) => {
    const rankings = props.rankings.count
    const type = props.type
    const readyRankings = rankings.sort((a, b) => b['count'] - a['count'])
    console.log(props)
    return(
        <div className={styles.top_right_rankings_div}>
            <div className={styles.header}>
                <h1 className={styles.header}>Presidential</h1>
                <h1 className={styles.header}>Press</h1>
                <h1 className={styles.header}>Power</h1>
                <h1 className={styles.header}>{type}</h1>
                <h1 className={styles.header}>Rankings</h1>
            </div>
            <div style={{fontStyle:'italic', fontSize:'.5em', fontWeight:'600', margin:'1em'}}> *Number of Articles from the last day</div>
            <div className={styles.rankings_items}>
                {readyRankings.map((rank) => {
                    return(
                        <>
                        <div className={styles.ranking_item_count}>
                            {rank.count}
                        </div>
                        <div className={styles.ranking_item}>
                            {rank.party[0].toUpperCase()}  :   <span style={{marginLeft:'.5em'}}></span>  {rank.candidate}
                        </div>
                        
                        </>
                    
                    )
                })}
            </div>

        </div>
    )
}

export default TopRightRankings;