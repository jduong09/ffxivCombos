import styles from '../page.module.css';
import Image from 'next/image';

export default async function Housing() {
  return (
    <div>
      <header>
        <h1>Soppo&apos;s Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/PLD.svg' />
          Housing
        </h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <a className={styles.navListLink} href="/jobs">Jobs</a>
            </li>
            <li className={styles.navListItem}>
              <a className={styles.navListLink} href="/fashion">Fashion</a>
            </li>
            <li className={styles.navListItem}>
              <a className={styles.navListLink} href="/housing">Housing</a>
            </li>
          </ul>
          <Image className={styles.headerNavImage} src={'/emotes/soppo_reveal_right.png'} width="299" height="422" />
        </nav>
      </header>
      <main>
        <div>Housing Page</div>
      </main>
    </div>
  )
}