//create an about page component
import styles from '../styles/main.module.scss'
import { withRouter } from 'next/router'
import ArticleList from '../components/articlelist'
import {SearchBar} from '../components/searchBar'
import Pagination from '../components/pagination/Pagination'
import { useState, useEffect } from 'react'
import PerSixContainer from '../components/perSix/perSixContainer'
import { Title } from '@mui/icons-material'
import TitleCard from 'components/basic/titleCard'
import LoadingComponent from '../components/basic/loading'

const Search = (props) => {
  const data = props.data
  const count = props.count
  const pageNumber = props.pageNumber
  const url = `/search`
  const map = {};
  const sortedArray = data.sort((a, b) => (b.score > a.score) ? 1 : -1)
  const source = props.router.query.searchText

  //used for hydration error mismatch beteween server and client html
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
},[])
    return (
      <div className={styles.content_container}>
      <div style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div>
          <SearchBar />
        </div>
        <TitleCard title={`Showing results for ${source}`} /> 
        {hydrated ? <PerSixContainer articles={sortedArray} />: <LoadingComponent />}
        {hydrated && <ArticleList props={sortedArray} />}

        <Pagination props={{count: count, pageNumber: pageNumber, url:url, source: source}}/>

      </div>
      </div>
    );
  }
  export async function getServerSideProps(props) {
      const search = props.query.searchText
    // Fetch data from external API
 
      const pageNumber = props.query.pageNumber
      // const url = `http://localhost:3000/api/content-routes/search/${search}/${pageNumber}`
      const url = `https://stackyourprops.com/api/content-routes/search/${search}/${pageNumber}`
      const res = await fetch(url);
      const query = await res.json();
      const data = query.data
      const count = query.count

      return { props: { data: data, pageNumber: pageNumber, count: count } };
  }
export default withRouter(Search);
