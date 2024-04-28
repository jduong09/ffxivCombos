import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';

export default async function SamuraiPage() {
  const normalArray = ["Hakaze", "Jinpu", "Shifu"];
  const burstArray = ["Hakaze", "Jinpu", "Shifu", "Hakaze", "Jinpu", "Higanbana", "Kasha", "Meikyo Shisui", "Shifu", "Yukikaze", "Midare Setsugekka", "Tsubame-gaeshi", "Kasha", "Ikishoten", "Ogi Namikiri", "Kaeshi: Namikiri", "Hissatsu: Shinten", "Hissatsu: Senei", "Hissatsu: Senei"];
  const dungeonPackArray = ["Fuko", "Mangetsu", "Fuko", "Oka", "Tenka Goken", "Tsubame-gaeshi", "Hissatsu: Kyuten", "Hissatsu: Kyuten", "Hissatsu: Guren"];
  const defensiveActions = ["Second Wind", "Bloodbath", "Third Eye"];
  const roleActions = ["Feint", "True North"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/SAm.svg' alt="Icon for job Samurai" />
          Samurai Guide
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
        <Combos jobName='samurai' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='samurai' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}