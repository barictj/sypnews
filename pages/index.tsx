import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import styles from '../styles/main.module.scss'
import ArticleList from 'components/articlelist';
import Layout from '../components/layout'
import TopStoryContainer from '../components/top_story/topStoryContainer'
import { useState, useEffect } from 'react';
import TopStoryRightTops from '../components/top_story/topStoryRightTops';
import { PerTagContainer } from '../components/perTag/perTagContainer';
import {ArticleListMin} from '../components/articlelistmin'
import LoadingComponent from '../components/basic/loading'
// import { BySourceDisplay } from '../components/bySourceDisplay';
import TitleCard from '../components/basic/titleCard';
import CatHeader from '../components/cat_header/catHeader';
import dynamic from 'next/dynamic'
const BySourceDisplay = dynamic(() => import('../components/bySourceDisplay'), {
  loading: () => <p><LoadingComponent /></p>,
})
const PerSourceContainer = dynamic(() => import('../components/perSource/perSourceContainer'), {
  ssr: false, loading: () => <p><LoadingComponent /></p>,
})

type Content = {
  title: string;
  body: string;
  id: string;
  url: string;
  image: string;
  date_published: string;
};
 
// export const getStaticProps: GetStaticProps<{
//   content: [Content];
// }> = async () => {
//   const res = await fetch('http://content-base.herokuapp.com/api/content-routes');
//   // const res = await fetch('http://localhost:3000/api/content-routes/');
//   const data = await res.json();
//   const content = data.data
//   return { props: { content } ,
//   revalidate: 10, // In seconds
// }
// };
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://content-base.herokuapp.com/api/content-routes`);
    // const res = await fetch('http://localhost:3000/api/content-routes/');

  const data = await res.json();
  const content = data.data
  // Pass data to the page via propsrs
    return { props: { content } };
}
export default function Page({
  content,
}: InferGetStaticPropsType<typeof getServerSideProps>)  {
  if (content.length > 0) {
    let final = []
      let contentCopy = [...content]
      const [readyData, setReadyData] = useState("");
      const [spliced, setSpliced] = useState([]);
      const [preBidenSpliced, setPreBidenSpliced] = useState([]);
      const [shuffled, setShuffled] = useState([]);
      let forSliced;
      useEffect(() => {
        let sortedData = content.sort((a, b) => new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf())
        const newArray = sortedData.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
        const length = newArray.length
        setReadyData(newArray)
        console.log(newArray.length)
        forSliced = newArray.slice(15, length)
        setSpliced(forSliced)
        console.log(forSliced.length)
      function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      }
      setShuffled(shuffle(spliced))
      }, [content]);
      console.log(spliced.length)
      return (
      <div className={styles.content_container}>
              {readyData.length > 0 && spliced.length > 0 ?
              <>
              <CatHeader articles={contentCopy} />
              <TopStoryContainer data={readyData} />
              <TitleCard title='Political Articles by Source' />
              <BySourceDisplay/>
              <PerTagContainer tag="Trump" articles={spliced} />
              <ArticleListMin props={spliced} />

              <PerSourceContainer tag="cnn" articles={spliced} />
              <ArticleListMin props={spliced} />
              <PerTagContainer tag="Biden" articles={spliced} />
              <ArticleListMin props={spliced} />

              <PerSourceContainer tag="nbcnews" articles={shuffled} />
              {/* <ArticleList props={spent} /> */}
              </>
              :
              <div className={styles.content_container}><LoadingComponent /></div>
              }
              
      </div>
      
          )
}
else {
  return (<div className={styles.content_container}><LoadingComponent /></div>)
}
}
Page.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}