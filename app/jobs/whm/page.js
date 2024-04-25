import styles from '../../page.module.css';
import Image from 'next/image';
import HealerCombo from '@/components/jobCombos/healer/healerCombo';
import DefensiveActions from '@/components/jobCombos/healer/defensiveActions';

export default async function WhiteMagePage() {
  const normalArray = ["Dia", "Glare III", "Assize"];
  const firstPack = ["Asylum", "Regen", "Benediction", "Aquaveil", "Divine Benison", "Temperance"];
  const secondPack = ["Asylum", "Regen", "Divine Benison", "Afflatus Solace", "Litury of the Bell"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/WHM.svg' alt="Icon for job White Mage" />
          White Mage Guide
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
        <HealerCombo jobName='white mage' normalArray={normalArray} />
        <DefensiveActions jobName='white mage' firstPack={firstPack} secondPack={secondPack} />
      </main>
    </div>
  )
}