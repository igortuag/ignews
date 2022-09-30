import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";
import Prismic from "@prismicio/client";

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
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "publication")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );
  
  return {
    props: {},
  };
}