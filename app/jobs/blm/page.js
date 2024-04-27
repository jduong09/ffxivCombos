import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/magicalRangedDps/combos';
import MagicalRangedDpsRoleActions from '@/components/jobCombos/magicalRangedDps/magicalRangedDpsRoleActions';


export default async function BlackMagePage() {
  const normalArray = ["Blizzard III", "Blizzard IV", "Fire IV"];
  const burstArray = ["Sharpcast", "Ley Lines", "Thunder IV", "Blizzard III", "Blizzard IV", "Fire IV", "Fire IV", "Fire IV", "Paradox", "Fire IV", "Amplifier", "Xenoglossy", "Fire IV", "Despair", "Xenoglossy", "Blizzard III", "Thunder III"];
  const dungeonPackArray = ["Sharpcast", "Thunder IV", "Triplecast", "Blizzard III", "Blizzard IV", "High Fire II", "High Fire II", "High Fire II", "High Fire II", "Foul", "Manafont", "High Fire II", "Thunder IV", "Flare"];
  const defensiveActions = ["Manaward"];
  const roleActions = ["Lucid Dreaming", "Surecast", "Swiftcast"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/BLM.svg' alt="Icon for job Black Mage" />
          Black Mage Guide
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
        <Combos jobName='black mage' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MagicalRangedDpsRoleActions jobName='black mage' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}