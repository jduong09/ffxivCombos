import styles from "./page.module.css";
import Image from "next/image";
import landingPage from "@/app/landingPage.module.css";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>Landing Page</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <a className={styles.navListLink} href="/classes">Classes</a>
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
        <div>
          <div>
            <h1>From Sprout to Blossomed Player</h1>
            <h2>Soppos Guide is filled with dps combos, dungeons pack rotation advice, role action use and job glam.</h2>
          </div>
          <div>
            <Image id='img-struggling' src={'/emotes/soppo_sad_crop.png'} width='344' height='489' />
          </div>
        </div>
        <div className={landingPage.divStruggles}>
          <ul className={landingPage.listStruggles}>
            <li>
              <h3>Forgot Rotations?</h3>
            </li>
            <li>
              <h3>Bottom of Damage List?</h3>
            </li>
            <li>
              <h3>Always Floor Tank?</h3>
            </li>
          </ul>
          <a href='/classes'>Check out classes</a>
        </div>
      </main>
    </div>
  );
}
