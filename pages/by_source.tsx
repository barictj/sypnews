//create an about page component
import styles from '../styles/main.module.scss'
import { withRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ArticleList from '../components/articlelist'
import {SearchBar} from '../components/searchBar'
import TitleCard from '../components/basic/titleCard'
import LoadingComponent from '../components/basic/loading'
import useVisibility from '../components/hooks/useVisibility'
import Pagination from '../components/pagination/Pagination'
import PerSixContainer from '../components/perSix/perSixContainer'
import Head from 'next/head'
const BySource = (props) => {
  const data = props.data
  const source = props.router.query.searchText
  const pageNumber:Number = props.pageNumber
  let count:Number = props.count
  const url = `/by_source`

  //used for hydration error mismatch beteween server and client html
  const [hydrated, setHydrated] = useState(false);
useEffect(() => {
    setHydrated(true);
},[])

  // const map = {};
  if(data.length > 0) {
    return (
      <>
      <Head>
        <title>Top {source.toUpperCase()} political news from CNN  | Policratic.com</title>
        <meta name="description" content={`Top ${source.toUpperCase()} political news from including Donald Tump and President Biden | Policratic`} />
        <meta property="og:title" content={`Top ${source.toUpperCase()} political news | Policratic`}/>
      </Head>
      <div className={styles.content_container}>
      <div style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <TitleCard title={source} />
        {hydrated ? <PerSixContainer articles={data} />:<LoadingComponent />}
       {hydrated && <ArticleList props={data} /> }
        <Pagination props={{count: count, pageNumber: pageNumber, url:url, source: source}}/>
      </div>
      </div>
      </>
    );}
    else {
      return (
        <LoadingComponent />
      )
    }
  }
  export async function getServerSideProps(props) {
      const pageNumber = props.query.pageNumber
      const search = props.query.searchText
    // Fetch data from external API
      const url = `https://stackyourprops.com/api/content-routes/source/${search}/${pageNumber}`
      // const url = `http://localhost:3000/api/content-routes/source/${search}/${pageNumber}`
      const res = await fetch(url);
      const query = await res.json();
      const data = query.data
      const page = query.pageNumber
      const count = query.count

      return { props: { data: data, pageNumber: pageNumber, count: count } };
    }
export default withRouter(BySource);
