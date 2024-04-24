import styles from '../../page.module.css';
import Image from 'next/image';
import TankPageCombos from '@/components/jobCombos/tank/tankPageCombos';
import DefensiveCooldowns from '@/components/jobCombos/tank/defensiveCooldown';

export default async function WarriorPage() {
  const normalArray = ["Heavy Swing", "Maim", "Storm's Eye"];
  const burstArray = ["Inner Release", "Primal Rend", "Fell Cleave", "Upheaval", "Fell Cleave","Onslaught", "Fell Cleave","Onslaught", "Infuriate", "Fell Cleave", "Heavy Swing", "Maim", "Storm's Eye"];
  const firstPack = ["Arm's Length", "Vengeance", "Bloodwhetting"];
  const secondPack = ["Rampart", "Reprisal", "Equilibrium", "Thrill of Battle"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/WAR.svg' alt="Icon for job Warrior" />
          Warrior Guide
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
        <TankPageCombos jobName='warrior' normalArray={normalArray} burstArray={burstArray} />
        <DefensiveCooldowns jobName='warrior' firstPack={firstPack} secondPack={secondPack} />
      </main>
    </div>
  )
}