import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <main>
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

      <img src="/iamges/avatar.svg" alt="Girl coding" />
    </main>
  );
}
