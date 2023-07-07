import Link from 'next/link'
import styles from './top_story.module.scss'
import { useState, useEffect } from 'react';
import TopStoryPhoto from './topStoryPhoto';
import { ListOfFour } from '../basic/listOfFour';
import LoadingComponent from '../basic/loading';
import TopRightRankings from './topRightRanks';
// create react component with typescript and props from parent component called data
export const TopStoryRightTops = ( props ) => {
    const data = props.data
    const rankings = props.rankings
    const weeklyRankings = props.weeklyRankings
    if(data.length > 0)  {
        const splicedData = data.slice(2, 7)
        const splicedDataTwo  = data.slice(8, 13)
      return (
        <div className={styles.top_stories_right_tops} >
            <div className={styles.top_stories_right_container}>
                <TopRightRankings rankings={rankings}  type={'Daily'} />
                <TopRightRankings rankings={weeklyRankings}  type={'Weekly'} />
            </div>
            <div className={styles.top_stories_right_container}>
                <TopStoryPhoto props={data[14]} />
                <ListOfFour articles={splicedData} />
            </div>
        </div>
      )
    }
    else{
        return(
            <div className={styles.top_stories_right_tops} style={{height: '400px', width: '45%'}}>
                <LoadingComponent />
            </div>
        )   
    }
}
export default TopStoryRightTops;