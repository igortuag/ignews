import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn } from "next-auth/react";

import styles from "./styles.module.scss";

export default function SignInButton() {
  const isUserLoggedIn = true;

  if (isUserLoggedIn) {
    return (
      <button className={styles.signInButton}>
        <FaGithub color="#04d361" />
        Igor Tuag
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    );
  }

  return (
    <button className={styles.signInButton} onClick={() => signIn()}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
