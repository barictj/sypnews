import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import styles from '../styles/main.module.scss'
import ArticleList from 'components/articlelist';
import Layout from '../components/layout'
import TopStoryContainer from '../components/top_story/topStoryContainer'
import { useState, useEffect } from 'react';
import TopStoryRightTops from '../components/top_story/topStoryRightTops';
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
  // const res = await fetch(`http://content-base.herokuapp.com/api/content-routes`);
    const res = await fetch('http://localhost:3000/api/content-routes/');

  const data = await res.json();
  const content = data.data
  // Pass data to the page via propsrs
    return { props: { content } };
}
export default function Page({
  content,
}: InferGetStaticPropsType<typeof getServerSideProps>)  {
  if (content.length > 0) {
      const [readyData, setReadyData] = useState("");
      const [spliced, setSpliced] = useState("");
      console.log(content.length)
      useEffect(() => {
        let sortedData = content.sort((a, b) => new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf())
        const newArray = sortedData.filter((v,i,a)=>a.findIndex(v2=>(v2.title===v.title))===i)
        const length = newArray.length
        setReadyData(newArray)
        setSpliced(newArray.splice(11, length))
      }, [content]); 
    return (
    <div className={styles.content_container}>
            {readyData.length > 0 ?
            <>
            <TopStoryContainer data={readyData} />
            <ArticleList props={spliced} />
            </>
            :
            <div>Nothing</div>
            }
            
    </div>
          )
}
else {
  return (<div className={styles.content_container}>Nothin</div>)
}
}
Page.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}