import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/physicalRangedDps/combos';
import PhysicalRangedDpsRoleActions from '@/components/jobCombos/physicalRangedDps/physicalRangedDpsRoleActions';


export default async function DancerPage() {
  const normalArray = ["Cascade", "Fountain"];
  const burstArray = ["Cascade", "Reverse Cascade", "Fan Dance", "Fan Dance III", "Cascade", "Fountain", "Fountainfall", "Fan Dance II"];
  const dungeonPackArray = ["Windmill", "Bladeshower", "Windmill", "Rising Windmill", "Fan Dance II", "Fan Dance III"];
  const defensiveActions = ["Second Wind", "Shield Samba"];
  const roleActions = ["Peloton", "Head Graze"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/DNC.svg' alt="Icon for job Dancer" />
          Dancer Guide
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
        <Combos jobName='dancer' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <PhysicalRangedDpsRoleActions jobName='dancer' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}