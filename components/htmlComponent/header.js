"use client";

import { useRef } from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import useWindowSize from './useWindowSize';

const HeaderComponent = ({ jobAcronym, jobName }) => {
  const btnNavOpen = useRef(false);
  const btnNavClose = useRef(false);
  const listHeaderRef = useRef(false);
  const size = useWindowSize();

  const handleOpenNav = (e) => {
    e.preventDefault();
    listHeaderRef.current.classList.remove('hide');
    btnNavClose.current.classList.remove('hide');
    btnNavOpen.current.classList.add('hide');
  }

  const handleCloseNav = (e) => {
    e.preventDefault();
    listHeaderRef.current.classList.add('hide');
    btnNavClose.current.classList.add('hide');
    btnNavOpen.current.classList.remove('hide');
  };

  return (
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
        <button ref={btnNavOpen} className={styles.navBtn} onClick={handleOpenNav}>
          <svg xmlns="http://www.w3.org/2000/svg" width='16' height='16' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        </button>
        <button ref={btnNavClose} className={`${styles.navBtn} hide`} onClick={handleCloseNav}>
          <svg xmlns="http://www.w3.org/2000/svg" width='16' height='16' viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
        </button>
        <ul ref={listHeaderRef} className={`${styles.navList} ${size.width < 576 ? 'hide' : ''}`}>
          <li className={styles.navListItem}>
            <a className={styles.navListLink} href="/classes">Classes</a>
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
  );
}
export default HeaderComponent;