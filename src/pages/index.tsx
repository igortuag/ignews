import { GetServerSideProps } from "next";
import SubscribeButton from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>
          News about the <span>React </span> world.
        </h1>
        <p>
          Get access to all the publications <br />
          <span>for $9.99 / month</span>
        </p>
        <SubscribeButton />
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1LdBoGDh99IwFTOfPZHwDbhd", {
    expand: ["product"],
  });

  return { props: {} };
};
