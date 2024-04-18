import React from 'react';
import styles from '../../page.module.css';
import jobStyles from '../job.module.css';
import PaladinCombos from '../../../components/jobCombos/paladin';
import Image from 'next/image';

export default async function PaladinHome() {
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/PLD.svg' />
          Paladin Guide
        </h2>
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
      <PaladinCombos />
    </div>
  )
}