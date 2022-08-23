import styles from "../../styles/home.module.scss";
import { Head } from "next/document";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ig.news</title>
      </Head>

      <h1 className={styles.title}>
        Ig
        <span> news</span>
      </h1>
    </div>
  );
}
