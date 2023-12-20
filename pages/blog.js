import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/Home.module.css';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Blog({ allPostsData }) {
  return (
    <Layout blog>
<Head>
<title>Blog Posts</title>
<link rel="icon" href="/ctrl.png" />
</Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
   <li className={utilStyles.listItem} key={id}>
   <Link href={`/posts/${id}`}>{title}</Link>
   <br />
   <small className={utilStyles.lightText}>
     <Date dateString={date} />
   </small>
 </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}