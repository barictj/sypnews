//create an about page component
import styles from '../styles/main.module.scss'
import { withRouter } from 'next/router'
import ArticleList from '../components/articlelist'
import {SearchBar} from '../components/searchBar'

const Search = (props) => {
  const query = props.query
  const map = {};
  const sortedArray = query.sort((a, b) => (b.score > a.score) ? 1 : -1)
    return (
      <div className={styles.content_container}>
      <div style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div>
          <SearchBar />
        </div>
        <ArticleList props={sortedArray} />
      </div>
      </div>
    );
  }
  export async function getServerSideProps(props) {
      const search = props.query.searchText
    // Fetch data from external API
      const url = `https://stackyourprops.com/api/content-routes/search/${search}`
      const res = await fetch(url);
      const data = await res.json();
    return { props: { query: data} };
  }
export default withRouter(Search);
