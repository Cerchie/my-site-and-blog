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


export default function Home({ allPostsData }) {
  return (
    <Layout home>
<Head>
<title>Lucia Cerchie</title>
<link rel="icon" href="/favicon.ico" />
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Scrollytales</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="https://what-is-the-lsp.netlify.app/">Language Server Protocols</Link>
                <br />
          </li>
        </ul>
      </section>
    </Layout>
  );
}