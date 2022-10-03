import Link from "next/link";
import { useRouter } from "next/router";
import SignInButton from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  const { asPath } = useRouter()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Link href="/" className={styles.active}>
            <a>Home</a>
          </Link>

          <Link href="/posts" prefetch>
            <a>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
