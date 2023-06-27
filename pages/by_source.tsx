//create an about page component
import styles from '../styles/main.module.scss'
import { withRouter } from 'next/router'
import ArticleList from '../components/articlelist'
import {SearchBar} from '../components/searchBar'
import TitleCard from '../components/basic/titleCard'
import LoadingComponent from '../components/basic/loading'
import useVisibility from '../components/hooks/useVisibility'
const BySource = (props) => {
  const [ isVisible, currentElement ] = useVisibility<HTMLDivElement>(0);
console.log(isVisible, currentElement)
  const query = props.query.data
  const source = props.router.query.searchText
  const map = {};
    return (
      <div className={styles.content_container}>
      <div style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <TitleCard title={source} />
        <ArticleList props={query} />
      </div>
      {/* <div ref={currentElement} >{isVisible && <ArticleList props={query}/>}</div> */}
      </div>
    );
  }
  export async function getServerSideProps(props) {
      console.log(props.query.skipNumber)
      const skipNumber = props.query.skipNumber
      const search = props.query.searchText
    // Fetch data from external API
      const url = `https://stackyourprops.com/api/content-routes/source/${search}/${skipNumber}`

    //   const url = `http://localhost:3000/api/content-routes/source/${search}`
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      return { props: { query: data} };
    }
export default withRouter(BySource);
