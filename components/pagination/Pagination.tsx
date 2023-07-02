import next from 'next/types'
import styles from './pagination.module.scss'
import { parse } from 'path'
import Link from 'next/link'
import Router from 'next/router'
import { Source } from '@mui/icons-material'
//create compontent to paginate through articles

export const Pagination = ({ props }) => {
    let pageNumber
    if(props.pageNumber === undefined){
        pageNumber = 1
    }
    else{
        pageNumber = parseInt(props.pageNumber)
    }
    const totalPages = Math.round(props.count / 24)
    let nextPage1 = pageNumber + 1
    let nextPage2 = pageNumber + 2
    let nextPage3 = pageNumber + 3
    let prevPage1 = pageNumber - 1
    const count:Number = props.count
    const source = props.source
    const url = props.url
    const goNextPage1 = () => {
        Router.push({
            pathname: url,
            query: { searchText: source, pageNumber: nextPage1}
        });
    }
    const goNextPage2 = () => {
        Router.push({
            pathname: url,
            query: { searchText: source, pageNumber: nextPage2}
        });
    }
    const goNextPage3 = () => {
        Router.push({
            pathname: url,
            query: { searchText: source, pageNumber: nextPage3}
        });
    }
    const goLast = () => {
        Router.push({
            pathname: url,
            query: { searchText: source, pageNumber: totalPages}
        });
    }
    const goFirst = () => {
        Router.push({
            pathname: url,
            query: { searchText: source, pageNumber: 1}
        });
    }
    const goPrevPage = () => {
        Router.push({
            pathname: url,
            query: { searchText: source, pageNumber: prevPage1}
        });
    }
    return(
        <div className={styles.pagination_div}>
            {pageNumber > 1 ? <div className={styles.button_div}><a onClick={goFirst} className={styles.button}>1</a></div>:<div className={styles.button_div}></div>}
            {pageNumber  > 1 ? <div className={styles.button_div}><a onClick={goPrevPage} className={styles.button}>{"<"} </a></div>:<div className={styles.button_div}><a className={styles.inactive}>{"<"} </a></div>}
            {pageNumber < totalPages ? <div className={styles.button_div}><a onClick={goNextPage1} className={styles.button}>{pageNumber +1 === totalPages ? <>{">"}</>:<>{">"} </>}</a></div>:<div className={styles.button_div}><a className={styles.inactive}>{">"} </a></div>}
            {/* {nextPage1  < totalPages ? <div className={styles.button_div}><button onClick={goNextPage2}>{nextPage2}</button></div>:<div className={styles.button_div}></div>}
            {nextPage2  < totalPages ? <div className={styles.button_div}><button onClick={goNextPage3}>{nextPage3}</button></div>:<div className={styles.button_div}></div>} */}
            {pageNumber == totalPages ? <div className={styles.button_div}><a onClick={goLast} className={styles.button}>{totalPages}</a></div>:<div className={styles.button_div}></div>}
        </div>
    )
}

export default Pagination;