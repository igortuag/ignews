import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>Mar 10, 2021</time>
            <strong>Getting started with Next.js</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptates quas voluptatibus quae
              necessitatibus voluptate quibusdam quidem quos. Quisquam, quae
              voluptates. Quisquam, quae voluptates.
            </p>
          </a>
          <a>
            <time>Mar 10, 2021</time>
            <strong>Getting started with Next.js</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptates quas voluptatibus quae
              necessitatibus voluptate quibusdam quidem quos. Quisquam, quae
              voluptates. Quisquam, quae voluptates.
            </p>
          </a>
          <a>
            <time>Mar 10, 2021</time>
            <strong>Getting started with Next.js</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptates quas voluptatibus quae
              necessitatibus voluptate quibusdam quidem quos. Quisquam, quae
              voluptates. Quisquam, quae voluptates.
            </p>
          </a>
          <a>
            <time>Mar 10, 2021</time>
            <strong>Getting started with Next.js</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptates quas voluptatibus quae
              necessitatibus voluptate quibusdam quidem quos. Quisquam, quae
              voluptates. Quisquam, quae voluptates.
            </p>
          </a>
          <a>
            <time>Mar 10, 2021</time>
            <strong>Getting started with Next.js</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptates quas voluptatibus quae
              necessitatibus voluptate quibusdam quidem quos. Quisquam, quae
              voluptates. Quisquam, quae voluptates.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
}