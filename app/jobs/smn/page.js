import styles from '@/app/page.module.css';
import Image from 'next/image';
import Combos from '@/components/jobCombos/magicalRangedDps/combos';
import MagicalRangedDpsRoleActions from '@/components/jobCombos/magicalRangedDps/magicalRangedDpsRoleActions';


export default async function SummonerPage() {
  const normalArray = ["Ruin III", "Aethercharge", "Gemshine", "Summon Ruby"];
  const burstArray = ["Aethercharge", "Summon Ruby", "Summon Topaz", "Summon Emerald", "Energy Drain", "Energy Drain"];
  const dungeonPackArray = ["Outburst", "Precious Brilliance", "Summon Ruby", "Ruby Outburst", "Aethercharge", "Painflare", "Painflare", "Dreadwyrm Trance", "Astral Flare", "Deathflare"];
  const defensiveActions = ["Resurrection"];
  const roleActions = ["Lucid Dreaming", "Surecast", "Swiftcast"];
  return (
    <div>
      <header>
        <h1>Soppo's Guide to FFXIV</h1>
        <h2>
          <img className='icon' src='https://xivapi.com/cj/svg/ClassJob/SMN.svg' alt="Icon for job Summoner" />
          Summoner Guide
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
        <Combos jobName='summoner' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MagicalRangedDpsRoleActions jobName='summoner' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
    </div>
  )
}