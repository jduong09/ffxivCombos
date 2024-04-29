import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';

export default async function MonkPage() {
  const normalArray = ["Bootshine", "True Strike", "Snap Punch"];
  const burstArray = ["Riddle of Earth", "Meditation", "Bootshine", "Steel Peak", "Six-sided Star", "Twin Snakes", "Snap Punch", "Dragon Kick"];
  const dungeonPackArray = ["Meditation", "Arm of the Destroyer", "Howling Fist", "Four-point Fury", "Rockbreaker"];
  const defensiveActions = ["Second Wind", "Bloodbath", "Riddle of Earth"];
  const roleActions = ["Feint", "True North"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/MNK.svg' alt="Icon for job Monk" />
          Monk Guide
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
          <Image className={styles.headerNavImage} src={'/emotes/soppo_reveal_right.png'} width="299" height="422" alt="Image of ffxiv character doing emote show right" />
        </nav>
      </header>
      <main>
        <Combos jobName='monk' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='monk' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}