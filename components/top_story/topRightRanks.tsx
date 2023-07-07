import styles from './ranker.module.scss';

export const TopRightRankings = (props) => {
    const rankings = props.rankings.count
    const readyRankings = rankings.sort((a, b) => b['count'] - a['count'])
    console.log(readyRankings)
    return(
        <div className={styles.top_right_rankings_div}>
            <div className={styles.header}>
                <h1 className={styles.header}>Presidential</h1>
                <h1 className={styles.header}>Press</h1>
                <h1 className={styles.header}>Power</h1>
                <h1 className={styles.header}>Rankings</h1>
            </div>
            <div style={{fontStyle:'italic', fontSize:'.5em', fontWeight:'600', margin:'1em'}}> *Number of Articles from the last day</div>
            <div className={styles.rankings_items}>
                {readyRankings.map((rank) => {
                    return(
                        <>
                        <div className={styles.ranking_item}>
                            {rank.candidate_party[0].toUpperCase()}:  {rank.candidate}
                        </div>
                        <div className={styles.ranking_item_count}>
                            {rank.count}
                        </div>
                        </>
                    
                    )
                })}
            </div>

        </div>
    )
}

export default TopRightRankings;