import Head from "../../node_modules/next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <h1 className={styles.title}>
        Ig
        <span> news</span>
      </h1>
    </>
  );
}
