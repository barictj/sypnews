//create an about page component
import styles from '../styles/main.module.scss'
import { withRouter } from 'next/router'
import ArticleList from '../components/articlelist'

const Search = (props) => {
  const query = props.query
  const map = {};
  const newArray = query.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
  const sortedArray = newArray.sort((a, b) => (a.match > b.match) ? 1 : -1)
    return (
      <div style={{marginTop: '75px', color: 'white'}}>
        <h2>Results</h2>
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
    return { props: { query: data} };
  }
export default withRouter(Search);
