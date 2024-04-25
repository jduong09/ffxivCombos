import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';

export default async function DragoonPage() {
  const normalArray = ["True Thrust", "Vorpal Thrust", "Full Thrust"];
  const burstArray = ["Battle Litany", "Lance Charge", "Life Surge", "Stardiver", "True Thrust", "High Jump", "Mirage Dive", "Vorpal Thrust", "Disembowel", "Jump", "Chaos Thrust", "Wheeling Thrust", "Fang and Claw"];
  const dungeonPackArray = ["Battle Litany", "Dragonfire Dive", "Geirskogul", "Nastrond", "Life Surge", "Stardiver", "Nastrond", "Nastrond"];
  const defensiveActions = ["Second Wind", "Bloodbath"];
  const roleActions = ["Feint", "True North"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/DRG.svg' alt="Icon for job Dragoon" />
          Dragoon Guide
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
        <Combos jobName='dragoon' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='dragoon' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}