import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>Landing Page</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <a className={styles.navListLink} href="/jobs">Jobs</a>
            </li>
            <li className={styles.navListItem}>
              <a className={styles.navListLink} href="/jobs">Fashion</a>
            </li>
            <li className={styles.navListItem}>
              <a className={styles.navListLink} href="/jobs">Housing</a>
            </li>
          </ul>
          <Image className={styles.headerNavImage} src={'/emotes/soppo_reveal_right.png'} width="299" height="422" />
        </nav>
      </header>
      <main className={styles.main}>
        <div>Edit Landing Page.</div>
      </main>
    </div>
  );
}
