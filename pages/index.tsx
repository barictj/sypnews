import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import styles from '../styles/main.module.scss'
import ArticleList from 'components/articlelist';
import Layout from '../components/layout'
import TopStoryContainer from '../components/top_story/topStoryContainer'
import { useState, useEffect, useRef } from 'react';
import TopStoryRightTops from '../components/top_story/topStoryRightTops';
import { PerTagContainer } from '../components/perTag/perTagContainer';
import {ArticleListMin} from '../components/articlelistmin'
import LoadingComponent from '../components/basic/loading'
// import { BySourceDisplay } from '../components/bySourceDisplay';
import TitleCard from '../components/basic/titleCard';
import CatHeader from '../components/cat_header/catHeader';
import dynamic from 'next/dynamic'
import { TagTwoTone } from '@mui/icons-material';
import PerSixContainer from '../components/perSix/perSixContainer';

const BySourceDisplay = dynamic(() => import('../components/bySourceDisplay'), {
  loading: () => <><LoadingComponent /></>,
})
const PerSourceContainer = dynamic(() => import('../components/perSource/perSourceContainer'), {
  ssr: false, loading: () => <><LoadingComponent /></>,
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
  const tags = data.tags
  const content = data.data
  // Pass data to the page via propsrs
    return { props: { content, tags } };
}
export default function Page({
  content, tags
}: InferGetStaticPropsType<typeof getServerSideProps>)  {
  const [shuffled, setShuffled] = useState([]);
  const [startData, setStartData] = useState([]);
  const [dataForShuffle, setDataForShuffle] = useState([]);
  const [topTags, setTopTags] = useState([]);
  if (content.length > 0) {
    let final = []
      let contentCopy = [...content]
      let forTags = [...content]
      const [readyData, setReadyData] = useState("");
      const [spliced, setSpliced] = useState([]);
      useEffect(() => {
        let sortedData = content.sort((a, b) => new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf())
        const newArray = sortedData.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
        const length = newArray.length
        setReadyData(newArray)
        setSpliced(contentCopy.slice(10,150))
    }, [content]);

    useEffect(() => {

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
        if(spliced.length > 0){
          setShuffled(shuffle(spliced))
        }
       
  }, [spliced]);
  const topTags = []
  contentCopy.map((article) => {
              tags.map((tag) => {
                  if (article.title.toLowerCase().includes(tag.tag_name.toLowerCase())) {
                      topTags.push(tag)
                  }
              }
          )})

  
  const count = function (ary, classifier) {
      classifier = classifier || String;
      return ary.reduce(function (counter, item) {
          var p = classifier(item);
          counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
          return counter;
      }, {})
  };
  const countByTag = count(topTags, function (item) {
      return item.tag_name
  });
  const sorted:Array<{}> = Object.entries(countByTag).sort((a, b) => (b[1] as number) - (a[1] as number))
  
  const tagOne = sorted[0][0]
  const tagTwo = sorted[1][0]
  const tagOneCount = sorted[0][1]
  const tagTwoCount = sorted[1][1]
  console.log(tagOne, tagTwo, tagOneCount, tagTwoCount)
  
      return (
      <div className={styles.content_container}>
              {readyData.length > 0 && shuffled.length > 0  && sorted.length > 0 ?
              <>
              <CatHeader articles={readyData} tags={sorted} />
              <TopStoryContainer data={readyData} />
              <TitleCard title='Political Articles by Source' />
              <BySourceDisplay/>
              <PerTagContainer tag={tagOne} articles={shuffled} />

              <ArticleListMin props={shuffled} />
              <PerSourceContainer tag="cnn" articles={shuffled} />
              <ArticleListMin props={shuffled} />
              {tagTwoCount > 12 ? <PerTagContainer tag={tagTwo} articles={shuffled} /> : <PerSourceContainer tag='nbcnews' articles={shuffled} />}
              <ArticleListMin props={shuffled} />
              <PerSourceContainer tag="politico" articles={shuffled} />
              {/* <ArticleListMin props={shuffled} />
              <ArticleListMin props={shuffled} /> */}

              </>
              :
              <div className={styles.content_container} style={{textAlign: 'center', alignContent:'center', alignItems:'center'}}><LoadingComponent /></div>
              }
              
      </div>
      
          )
}
else {
    return (<div className={styles.content_container} style={{textAlign: 'center', alignContent:'center', alignItems:'center'}}><LoadingComponent /></div>)}}