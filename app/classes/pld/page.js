import styles from '@/app/page.module.css';
import Image from 'next/image';
import TankPageCombos from '@/components/jobCombos/tank/tankPageCombos';
import DefensiveCooldowns from '@/components/jobCombos/tank/defensiveCooldown';

export default async function PaladinPage() {
  const normalArray = ["Fast Blade", "Riot Blade", "Royal Authority"];
  const burstArray = ["Fight or Flight", "Holy Spirit", "Expiacion", "Circle of Scorn", "Requiescat", "Intervene", "Goring Blade", "Confiteor", "Intervene", "Blade of Faith", "Blade of Truth", "Blade of Valor", "Atonement", "Atonement"];
  const firstPack = ["Arm's Length", "Sentinel", "Holy Sheltron"];
  const secondPack = ["Rampart", "Reprisal", "Bulwark", "Holy Sheltron"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/PLD.svg' alt="Icon for job Gunbreaker" />
          Paladin Guide
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
        <TankPageCombos jobName='paladin' normalArray={normalArray} burstArray={burstArray} />
        <DefensiveCooldowns jobName='paladin' firstPack={firstPack} secondPack={secondPack} />
      </main>
    </div>
  )
}