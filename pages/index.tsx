import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import styles from '../styles/main.module.scss'
import ArticleList from 'components/articlelist';
import Layout from '../components/layout'

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
  const res = await fetch(`http://content-base.herokuapp.com/api/content-routes`);
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
  return (
            <ArticleList data={content} />
          )
}
else {
  return (<div className={styles.home}>Nothin</div>)
}
}

Page.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}