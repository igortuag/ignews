import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function SignInButton() {
  return (
    <button className={styles.signInButton}>
      <FaGithub />
      Sign in with Github
    </button>
  );
}
