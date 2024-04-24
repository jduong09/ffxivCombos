import styles from '../../page.module.css';
import Image from 'next/image';
import TankPageCombos from '@/components/jobCombos/tank/tankPageCombos';
import DefensiveCooldowns from '@/components/jobCombos/tank/defensiveCooldown';

export default async function DarkKnightPage() {
  const normalArray = ["Hard Slash", "Syphon Strike", "Souleater"];
  const burstArray = ["Edge of Shadow", "Edge of Shadow", "Edge of Shadow", "Blood Weapon", "Delirium", "Bloodspiller", "Salted Earth", "Bloodspiller", "Salt and Darkness","Bloodspiller", "Carve and Spit","Edge of Shadow",];
  const firstPack = ["Arm's Length", "Shadow Wall", "The Blackest Night"];
  const secondPack = ["Rampart", "Reprisal", "Oblation", "The Blackest Night"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/DRK.svg' alt="Icon for job Dark Knight" />
          Dark Knight Guide
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
        <TankPageCombos jobName='dark knight' normalArray={normalArray} burstArray={burstArray} />
        <DefensiveCooldowns jobName='dark knight' firstPack={firstPack} secondPack={secondPack}  />
      </main>
    </div>
  )
}