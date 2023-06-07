//create an about page component
import styles from '../styles/main.module.scss'
import { withRouter } from 'next/router'
import ArticleList from '../components/articlelist'
import {SearchBar} from '../components/searchBar'
const Search = (props) => {
  const query = props.query
  const map = {};
  const newArray = query.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
  const sortedArray = newArray.sort((a, b) => (b.matched > a.matched) ? 1 : -1)
    return (
      <div style={{marginTop: '75px', color: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div style={{width: '85%', textAlign:'left', fontSize:'1.4em', alignSelf:'center'}}>Search </div>
        <div style={{width: '85%', textAlign:'left', fontSize:'1.4em', alignSelf:'center'}}>SYP Politics</div>

          <div>
            <SearchBar />
          </div>
        <ArticleList props={sortedArray} />
      </div>
    );
  }


  export async function getServerSideProps(props) {
      const search = props.query.searchText
    // Fetch data from external API
      const url = `https://stackyourprops.com/api/content-routes/find/${search}`
      const res = await fetch(url);
      const data = await res.json();
    return { props: { query: data} };
  }
export default withRouter(Search);
