import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';

export default async function NinjaPage() {
  const normalArray = ["Spinning Edge", "Spinning Edge", "Aeolian Edge"];
  const burstArray = ["Hide", "Trick Attack", "Mug", "Huraijin", "Ten Chi Jin", "Chi", "Ten", "Jin", "Chi", "Kassatsu", "Ten", "Jin", "Dream Within a Dream", "Ten", "Chi"];
  const dungeonPackArray = ["Ten", "Jin", "Chi", "Death Blossom", "Hakke Mujinsatsu", "Hellfrog Medium", "Kassatsu", "Chi", "Ten"];
  const defensiveActions = ["Second Wind", "Bloodbath", "Shade Shift"];
  const roleActions = ["Feint", "True North"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/NIN.svg' alt="Icon for job Ninja" />
          Ninja Guide
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
        <Combos jobName='ninja' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='ninja' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}