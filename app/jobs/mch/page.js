import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/physicalRangedDps/combos';
import PhysicalRangedDpsRoleActions from '@/components/jobCombos/physicalRangedDps/physicalRangedDpsRoleActions';


export default async function MachinistPage() {
  const normalArray = ["Split Shot", "Slug Shot", "Clean Shot"];
  const burstArray = ["Automaton Queen", "Barrel Stabilizer", "Wildfire", "Hypercharge", "Reassemble", "Drill", "Heat Blast", "Heat Blast", "Gauss Round", "Heat Blast", "Heat Blast", "Gauss Round", "Gauss Round", "Air Anchor", "Chain Saw"];
  const dungeonPackArray = ["Spread Shot", "Reassemble", "Bioblaster", "Ricochet", "Hypercharge", "Auto Crossbow", "Auto Crossbow", "Auto Crossbow", "Auto Crossbow", "Auto Crossbow", "Ricochet", "Ricochet"];
  const defensiveActions = ["Second Wind", "Tactician", "Dismantle"];
  const roleActions = ["Peloton", "Head Graze"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/MCH.svg' alt="Icon for job machinist" />
          Machinist Guide
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
        <Combos jobName='machinist' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <PhysicalRangedDpsRoleActions jobName='machinist' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}