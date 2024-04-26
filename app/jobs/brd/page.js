import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/physicalRangedDps/combos';
import PhysicalRangedDpsRoleActions from '@/components/jobCombos/physicalRangedDps/physicalRangedDpsRoleActions';


export default async function BardPage() {
  const normalArray = ["Windbite", "Venomous Bite", "Heavy Shot", "Straight Shot"];
  const burstArray = ["Raging Strikes", "Battle Voice", "Empyreal Arrow", "Barrage", "Straight Shot", "Sidewinder", "Heavy Shot", "Straight Shot", "Bloodletter", "Bloodletter", "Bloodletter"];
  const dungeonPackArray = ["Venomous Bite", "Windbite", "Quick Nock", "Quick Nock", "Quick Nock", "Shadowbite", "Rain of Death", "Rain of Death", "Rain of Death", "Apex Arrow"];
  const defensiveActions = ["Second Wind", "Troubadour"];
  const roleActions = ["Peloton", "Head Graze"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/MCH.svg' alt="Icon for job machinist" />
          Bard Guide
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
        <Combos jobName='bard' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <PhysicalRangedDpsRoleActions jobName='bard' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}