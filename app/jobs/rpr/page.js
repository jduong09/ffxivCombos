import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';

export default async function ReaperPage() {
  const normalArray = ["Slice", "Waxing Slice", "Infernal Slice"];
  const burstArray = ["Arcane Circle", "Shadow of Death", "Blood Stalk", "Gibbet", "Blood Stalk", "Gallows", "Enshroud", "Void Reaping", "Cross Reaping", "Void Reaping", "Cross Reaping", "Void Reaping"];
  const dungeonPackArray = ["Arcane Circle", "Whorl of Death", "Spinning Scythe", "Nightmare Scythe", "Grim Swathe", "Guillotine"];
  const defensiveActions = ["Second Wind", "Bloodbath", "Arcane Crest"];
  const roleActions = ["Feint", "True North"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/NIN.svg' alt="Icon for job Reaper" />
          Reaper Guide
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
        <Combos jobName='reaper' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='reaper' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}