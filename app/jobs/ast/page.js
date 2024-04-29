import styles from '@/app/page.module.css';
import Image from 'next/image';
import HealerCombo from '@/components/jobCombos/healer/healerCombo';
import DefensiveActions from '@/components/jobCombos/healer/defensiveActions';

export default async function AstrologianPage() {
  const normalArray = ["Combust III", "Malefic IV"];
  const firstPack = ["Earthly Star", "Aspected Benefic", "Exaltation", "Macrocosmos", "Microcosmos"];
  const secondPack = ["Aspected Benefic", "Neutral Sect", "Essential Dignity", "Celestial Intersection"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/AST.svg' alt="Icon for job Astrologian" />
          Astrologian Guide
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
        <HealerCombo jobName='astrologian' normalArray={normalArray} />
        <DefensiveActions jobName='astrologian' firstPack={firstPack} secondPack={secondPack} />
      </main>
    </div>
  )
}