//create an about page component
import styles from '../styles/main.module.scss'
import { withRouter } from 'next/router'
import ArticleList from '../components/articlelist'
import {SearchBar} from '../components/searchBar'

const BySource = (props) => {
  const query = props.query
  const map = {};
  const newArray = query.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
  const sortedArray = newArray.sort((a, b) => (b.matched > a.matched) ? 1 : -1)
    return (
      <div className={styles.content_container}>
      <div style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <ArticleList props={sortedArray} />
      </div>
      </div>
    );
  }
  export async function getServerSideProps(props) {
      const search = props.query.searchText
    // Fetch data from external API
    //   const url = `https://stackyourprops.com/api/content-routes/source/${search}`

      const url = `http://localhost:3000/api/content-routes/source/${search}`
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
    return { props: { query: data} };
  }
export default withRouter(BySource);
