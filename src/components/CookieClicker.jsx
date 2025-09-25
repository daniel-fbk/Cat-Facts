import styles from "../styles/CookieClicker.module.css";
import { useState } from "react";

export default function CookieClicker() {
  const [cookies, setCookies] = useState(0);

  const gainCookies = () => {
    setCookies(cookies + 1);
  };

  return (
    <>
      <h2 className={styles.counter}>{cookies} Kjeks</h2>
      <img onClick={gainCookies} src="/cookie.png" alt="Image of a cookie" />
    </>
  );
}
