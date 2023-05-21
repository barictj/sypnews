import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { it } from 'node:test';
 
type Content = {
  title: string;
  body: string;
  id: string
};
 
export const getStaticProps: GetStaticProps<{
  content: [Content];
}> = async () => {
  // const res = await fetch('http://localhost:3000/api/content-routes');
  // const content = await res.json();
  // return { props: { content } };
  return { text:'here we are'}
};
 
export default function Page({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <>
  <h2><p>Content</p></h2>
  {/* {
    content.length > 0 ? content.map((item) => (<><div key={item.id}><h3>{item.title}</h3></div><div key={item.id}>{item.body}</div></>)) : <p>No Content</p>
  } */}
  <p >End of Articles</p>
  </>;
}
