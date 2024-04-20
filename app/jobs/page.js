import styles from '../page.module.css';
import Image from 'next/image';

export default function Jobs() {
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          Jobs
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
      <main className={styles.main}>
        <div>
          <h2>Tanks</h2>
          <ul>
            <li><a href="/jobs/pld">Paladin</a></li>
            <li><a href="/jobs/war">Warrior</a></li>
            <li><a href="/jobs/gnb">Gunbreaker</a></li>
            <li><a href="/jobs/drk">Dark Knight</a></li>
          </ul>
        </div>
        <div>
          <h2>Healers</h2>
          <ul>
            <li><a href="/jobs/sch">Scholar</a></li>
            <li><a href="/jobs/whm">White Mage</a></li>
            <li><a href="/jobs/ast">Astrologian</a></li>
            <li><a href="/jobs/sge">Sage</a></li>
          </ul>
        </div>
        <div>
          <h2>Ranged DPS</h2>
          <ul>
            <li><a href="/jobs/blm">Black Mage</a></li>
            <li><a href="/jobs/smn">Summoner</a></li>
            <li><a href="/jobs/mch">Machinist</a></li>
            <li><a href="/jobs/dnc">Dancer</a></li>
            <li><a href="/jobs/rdm">Red Mage</a></li>
          </ul>
        </div>
        <div>
          <h2>Melee DPS</h2>
          <ul>
            <li><a href="/jobs/sam">Samurai</a></li>
            <li><a href="/jobs/nin">Ninja</a></li>
            <li><a href="/jobs/mnk">Monk</a></li>
            <li><a href="/jobs/drg">Dragoon</a></li>
          </ul>
        </div>
      </main>
    </div>
  )
}