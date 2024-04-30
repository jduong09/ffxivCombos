import React from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';

const HeaderComponent = ({ jobAcronym, jobName }) => (
  <header>
    <h1>Soppo's Guide to FFXIV</h1>
    {jobName
    ? <h2>
      <img className='icon' src={`https://xivapi.com/cj/svg/ClassJob/${jobAcronym}.svg`} alt={`Icon for job ${jobName}`} />
      {`${jobName.charAt(0).toUpperCase() + jobName.slice(1)} Guide`}
    </h2>
    : <div></div>}
    <nav className={styles.nav}>
      <Image className={styles.emoteRevealLeft} src={'/emotes/soppo_reveal_left.png'} width="288" height="423" alt='emote reveal left' />
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <a className={styles.navListLink} href="/jobs">Jobs</a>
        </li>
        <li className={styles.navListItem}>
          <a className={styles.navListLink} href="/housing">Housing</a>
        </li>
        <li className={styles.navListItem}>
          <a className={styles.navListLink} href="/fashion">Fashion</a>
        </li>
      </ul>
      <Image className={styles.emoteRevealRight} src={'/emotes/soppo_reveal_right.png'} width="299" height="422" alt='emote reveal right' />
    </nav>
  </header>
)

export default HeaderComponent;