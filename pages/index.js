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
<link rel="icon" href="/ctrl.png" />
</Head>
<h1>Developer. Teacher. Tinkerer.</h1>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Latest from the <Link href="/bloghome">Blog</Link></h2>
        <ul className={utilStyles.list}>
          {allPostsData.slice(0, 3).map(({ id, date, title }) => (
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
          <li className={utilStyles.listItem}>
            <Link href="https://spring-physics-in-animejs.netlify.app/">Spring Physics in Anime.js</Link>
                <br />
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Other Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
          `git cherry pick` <Link href="https://github.com/Cerchie/git-cherry-pick-tutorial">tutorial</Link>
                <br />
          </li>
          <li className={utilStyles.listItem}>
          Install <Link href="https://www.npmjs.com/package/learnclis">this npm package </Link>to learn about Command Line Interfaces.
                <br />
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Highlighted <Link href="/talkhome">Talks</Link></h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="https://www.youtube.com/watch?v=LwzMLILuDXs">Navigating Large Repositories</Link> - Upstream 2023
                <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://www.youtube.com/live/L_Q-U3HzHBY?si=os5s4i0fOkthgc6p">Turning Our Perspective Upside Down</Link> - THAT Wisconson Keynote 2023
                <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://youtu.be/Gg2v5fOeiZ8?si=FsnljUFIo2RcFS7u">Getting Started With Apache Kafka® For JS Devs</Link> - Certified Fresh Events 2023
                <br />
          </li>
        </ul>
      </section>
    </Layout>
  );
}