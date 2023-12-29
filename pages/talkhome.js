import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/Home.module.css';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Blog() {
  return (
    <Layout blog>
<Head>
<title>Talks</title>
<link rel="icon" href="/ctrl.png" />
</Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Talks</h2>
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
          <li className={utilStyles.listItem}>
            <Link href="https://www.youtube.com/live/klvt1xUArmU?si=hXi-lL48FpuyQ5SF&t=10952"> Let's Get Started With Apache Kafka® for Python Developers</Link> - WeAreDevelopers Live 2023
                <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://youtu.be/F_a9EGbsyKQ?si=-Yfp0BmDI19cnbtN">Data is Fun-damental: The Basics of Apache Kafka®</Link> - Virtual Coffee Lunch'n'Learn 2022
                <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://youtu.be/mUt0vojFyXY?si=DRtOjHXCNZ925iBY">Getting Started With GraphQL</Link> - Virtual Coffee Lunch'n'Learn 2021
                <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://www.confluent.io/events/kafka-summit-london-2023/a-hitchhikers-guide-to-apache-kafka-r/">A Hitchhiker's Guide to Apache Kafka®</Link> - Kafka Summit London 2023
                <br />
          </li>

        </ul>
      </section>
    </Layout>
  );
}