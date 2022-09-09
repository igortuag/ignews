import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession } from "next-auth/react";

import styles from "./styles.module.scss";

export default function SignInButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button className={styles.signInButton}>
        <FaGithub color="#04d361" />
        {session.user.name}
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    );
  }

  return (
    <button className={styles.signInButton} onClick={() => signIn("github")}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
