import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { it } from 'node:test';
import styles from '../styles/main.module.scss'
import Link from 'next/link'
type Content = {
  title: string;
  body: string;
  id: string;
  url: string;
};
 
export const getStaticProps: GetStaticProps<{
  content: [Content];
}> = async () => {
  const res = await fetch('http://content-base.herokuapp.com/api/content-routes');
  const content = await res.json();
  return { props: { content } };
};
 
export default function Page({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return <div className={styles.home}>
  <div className={styles.logofont}>SYP News</div>
  {
    content.length > 0 ? content.map((item) => (<><div key={item.id}><div className={styles.title}><Link href={item.url}>{item.title}</div></div><div key={item.id}>{item.body}</div></>)) : <p>No Content</p>
  }
  </div>;
}

