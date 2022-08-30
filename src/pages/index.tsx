import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.contentContainer}>
      <section>
        <span>👏 Hey, welcome</span>
        <h1>
          News about the <span>React </span> world.
        </h1>
        <p>
          Get access to all the publications <br />
          <span>for $9.99 / month</span>
        </p>
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" className={styles.hero} />
    </main>
  );
}
