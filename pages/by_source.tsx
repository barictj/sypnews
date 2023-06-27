//create an about page component
import styles from '../styles/main.module.scss'
import { withRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ArticleList from '../components/articlelist'
import {SearchBar} from '../components/searchBar'
import TitleCard from '../components/basic/titleCard'
import LoadingComponent from '../components/basic/loading'
import useVisibility from '../components/hooks/useVisibility'
const BySource = (props) => {
  const query = props.query.data.slice(0,25)
  const source = props.router.query.searchText
  const [skipNumber, setSkipNumber] = useState(0)
  const [articles, getArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const map = {};
    return (
      
      <div className={styles.content_container}>
      <div style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <TitleCard title={source} />
        <ArticleList props={query} />
      </div>
      </div>
    );
  }
  export async function getServerSideProps(props) {
      const skipNumber = props.query.skipNumber
      const search = props.query.searchText
    // Fetch data from external API
      const url = `https://stackyourprops.com/api/content-routes/source/${search}/${skipNumber}`

      const res = await fetch(url);
      const data = await res.json();
      return { props: { query: data} };
    }
export default withRouter(BySource);
