import React from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';

const HeaderComponent = ({ jobAcronym, jobName }) => (
  <header>
    <h1>Soppo's Guide to FFXIV</h1>
    <h2>
      <img className='icon' src={`https://xivapi.com/cj/svg/ClassJob/${jobAcronym}.svg`} alt={`Icon for job ${jobName}`} />
      {`${jobName.charAt(0).toUpperCase() + jobName.slice(1)} Guide`}
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
)

export default HeaderComponent;