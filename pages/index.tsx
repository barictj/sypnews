import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { it } from 'node:test';
import styles from '../styles/main.module.scss'
import Link from 'next/link'
import ArticleList from 'components/articlelist';


type Content = {
  title: string;
  body: string;
  id: string;
  url: string;
  image: string;
  date_published: string;
};
 
export const getStaticProps: GetStaticProps<{
  content: [Content];
}> = async () => {
  const res = await fetch('http://content-base.herokuapp.com/api/content-routes');
  // const res = await fetch('http://localhost:3000/api/content-routes');
  const content = await res.json();
  return { props: { content } ,
  revalidate: 10, // In seconds
}
};
 


export default function Page({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (<div className={styles.home}>
  <div className={styles.logofont}>SYP Politics</div>
  <ArticleList data={content} />
  </div>
  )
}