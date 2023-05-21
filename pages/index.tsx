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
  const res = await fetch('http://content-base.herokuapp.com/api/content-routes');
  const content = await res.json();
  return { props: { content } };
};
 
export default function Page() {
  return <div>Hi</div>
}
