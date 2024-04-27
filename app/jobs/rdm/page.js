import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/magicalRangedDps/combos';
import MagicalRangedDpsRoleActions from '@/components/jobCombos/magicalRangedDps/magicalRangedDpsRoleActions';


export default async function RedMagePage() {
  const normalArray = ["Verthunder", "Verfire", "Jolt", "Veraero", "Verstone"];
  const burstArray = ["Verthunder", "Verfire", "Jolt", "Veraero", "Verstone", "Corps-a-corps", "Riposte", "Zwerchhau", "Redoublement", "Displacement", "Fleche", "Acceleration", "Verthunder", "Verfire"];
  const dungeonPackArray = ["Embolden", "Scatter", "Acceleration", "Contre Sixte", "Impact"];
  const defensiveActions = ["Verraise"];
  const roleActions = ["Lucid Dreaming", "Surecast", "Swiftcast"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/RDM.svg' alt="Icon for job Red Mage" />
          Red Mage Guide
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
        <Combos jobName='red mage' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MagicalRangedDpsRoleActions jobName='red mage' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}