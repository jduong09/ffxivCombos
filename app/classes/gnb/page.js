import styles from '@/app/page.module.css';
import Image from 'next/image';
import TankPageCombos from '@/components/jobCombos/tank/tankPageCombos';
import DefensiveCooldowns from '@/components/jobCombos/tank/defensiveCooldown';

export default async function GunbreakerPage() {
  const normalArray = ["Keen Edge", "Brutal Shell", "Solid Barrel"];
  const burstArray = ["No Mercy", "Double Down", "Sonic Break", "Blasting Zone", "Gnashing Fang", "Jugular Rip","Rough Divide", "Savage Claw", "Abdomen Tear","Rough Divide", "Wicked Talon", "Eye Gouge", "Bloodfest", "Burst Strike", "Hypervelocity", "Burst Strike", "Hypervelocity"];
  const firstPack = ["Arm's Length", "Nebula", "Aurora", "Heart of Corundum"];
  const secondPack = ["Rampart", "Reprisal", "Aurora", "Heart of Corundum", "Camouflage"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/1/gunbreaker.png' alt="Icon for job Gunbreaker" />
          Gunbreaker Guide
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
        <TankPageCombos jobName='gunbreaker' normalArray={normalArray} burstArray={burstArray} />
        <DefensiveCooldowns jobName='gunbreaker' firstPack={firstPack} secondPack={secondPack} />
      </main>
    </div>
  )
}