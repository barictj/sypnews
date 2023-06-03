//create an about page component
import styles from '../styles/main.module.scss'
import { withRouter } from 'next/router'
import ArticleList from '../components/articlelist'

const Search = (props) => {
  const query = props.query
  const map = {};
  const newArray = query.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
  console.log('Search Page')
    return (
      <div className={styles.content_container} style={{marginTop: '65px', color: 'white'}}>
        Results
        <ArticleList data={newArray} />
      </div>
    );
  }


  export async function getServerSideProps(props) {
      const search = props.query.searchText
    // Fetch data from external API
      const url = `https://stackyourprops.com/api/content-routes/find/${search}`
      const res = await fetch(url);
      const data = await res.json();
    console.log('getServerSideProps')
    return { props: { query: data} };
  }
export default withRouter(Search);
