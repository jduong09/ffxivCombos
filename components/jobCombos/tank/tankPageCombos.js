import styles from '@/app/page.module.css';
import classStyles from '@/app/classes/classes.module.css';
import classPageStyles from '@/app/classes/classPage.module.css';
import { ffxivActions } from '@/app/api';

const TankPageCombos = ({ jobName, normalArray, burstArray, dungeonArray }) => {

  const listItemsNormal = normalArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const listItemsBurst = burstArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const listItemsDungeon = dungeonArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const renderBurstDiv = () => {
    if (jobName === "gunbreaker") {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>Gunbreaker: 2 Minute Window</h2>
            <div className={styles.info}>The key to Gunbreaker&apos;s burst combo is having 3 cartridges in the powder gauge. You obtain 1 cartridge for each 1-2-3 combo, and 3 cartridges for using the skill &apos;Bloodfest&apos;. The goal is to either have <b>BloodFest</b> ready when <b>No Mercy</b> is coming off cooldown, or to have 3 cartridges in the powder gauge already prepared.</div>
            <div className={styles.info}>Once you are prepared to enter the burst, you use <b>No Mercy</b> followed by either <b>Double Down</b> or <b>Gnashing Fang</b> combo. In this burst, we need to use our oGCDs <b>Sonic Break</b> <b>Blasting Zone</b> <b>Bow Shock</b>.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-gnb-burst" src="https://www.youtube.com/embed/a4ol8v9lw4o?si=PyBhwRsxcQB9mSZF" title='Gunbreaker burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      );
    } else if (jobName === "paladin") {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>2 Minute Window</h2>
            <div className={styles.info}>For Paladin, we want to optimize our burst by timing our 1-2-3 combo to finish right before <b>Fight or Flight</b> comes off cooldown. This will give us 1 free use of <b>Holy Spirit</b> to start our burst window. This will also give us 3 atonements to use at the end of the burst window.</div>
            <div className={styles.info}>If done correctly, we should fit our whole combo in and finish with 2 of the 3 atonements used in the burst window.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/AvB_DOtMS_4?si=TwYz0LxMiJM2lIuk" frameBorder={0} title='Paladin burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    } else if (jobName === "dark knight") {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>2 Minute Window</h2>
            <div className={styles.info}>Dark Knight&apos;s burst window requires you to have the buff Darkside up. This means that we need MP, because we will use <b>Edge of Darkness</b> (3000 MP).</div>
            <div className={styles.info}>Once we have Darkside up, we can start our burst window. Burn through our MP with Edge of Darkness Spam, weaving in our oGCDs (Carve and Spit & Bloodspiller). Then we can use Delirium to get 3 non-mp costing bloodspillers.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-drk-burst" src="https://www.youtube.com/embed/GkLCR61dSAc?si=tKE8DoNzRMFqBoWw" title='Dark Knight burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>2 Minute Window</h2>
            <div className={styles.info}>Warriors burst window is fairly simple. It&apos;s called Fell Cleave spam. We will start by buffing our damage with <b>Inner Release</b>. Follow that up with our biggest potency attack, <b>Primal Rend</b>.</div>
            <div className={styles.info}>Using Inner Release, we execute 3 <b>Fell Cleaves</b>, follow that up with a upheaval, and then use Infuriate to increase our beast gauge and execute the upgraded Fell Cleave, <b>Inner Chaos</b>.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-war-burst" src="https://www.youtube.com/embed/ADRDxNlwfqE?si=eP6RRKhI8Tv1Kcy8" title='Warrior burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    }
  }

  const renderNormalDiv = () => {
    if (jobName === "gunbreaker") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Gunbreaker&apos;s normal combo of <b>Keen Edge</b> - <b>Brutal Shell</b> - <b>Solid Barrel</b> is simple enough. Using this combo gives the Gunbreaker a barrier, and also restores their own hp. The other benefit of the 1-2-3 combo is at the combo action of Solid barrel will add a cartridge to your powder gauge for when you need it in burst phase.</div>
            <div className={styles.info}>A couple of things to remember when playing gunbreaker. We should always be using our 1-2-3 combo while not in burst phase. If we are ever going to be capped on cartridges, remember to use <b>Burst Strike</b> followed by <b>Hypervelocity</b>. Finally, one of our defensive mitigation skills, <b>Heart of Stone</b> (<b>Heart of Corundum</b> at higher levels). When using either ability while under the buff <b>Brutal Shell</b> from the 1-2-3 combo, we can give the effects to another party member.</div>
          </div>
        </div>
      )
    } else if (jobName === "paladin") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Paladin&apos;s normal combo at early levels does not grant any buffs or benefits. When <b>Royal Authority</b> is unlocked at level 60, finishing the <b>Fast Blade</b> - <b>Riot Blade</b> - <b>Royal Authority</b> combo grants Paladin 3 stacks of <b>Sword Oath</b> and <b>Divine Might</b>.</div>
            <div className={styles.info}>The 3 stacks of Sword&apos;s Oath grant the Paladin the ability to use <b>Atonement</b>, a GCD attack that will restore MP. The other buff we get is Divine Might, will will allow us to use one <b>Holy Spirit</b> or <b>Holy Circle</b> without the cast time, making those spells instant for one attack.</div>
            <div className={styles.info}>In general, use atonement when it is available, and always use your instant cast of <b>Holy Spirit</b> or <b>Holy Circle</b></div>
          </div> 
        </div>
      )
    } else if (jobName === "dark knight") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Dark Knight&apos;s 1-2-3 combo of <b>Hard Slash</b> - <b>Syphon Strike</b> - <b>Souleater</b> restore both HP and MP, while increasing the Blood Gauge by 20 for one successful combo.</div>
            <div className={styles.info}>Due to how MP expensive Dark Knight&apos;s damage output is, it is important to do the combo correctly. When Dark Knight&apos;s Blood Gauge has reached 50, we can cast <b>Bloodspiller</b>.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}><b>Heavy Swing</b> - <b>Maim</b> - <b>Storm&apos;s Path</b> grants the Warrior 30 Beast Gauge, and restores their own HP by a potency of 250.</div>
            <div className={styles.info}>The Beast Gauge will be used for the burst combo, where we use a bunch of Fell Cleave&apos;s. Outside of the normal 1-2-3 combo, there is a 1-2-3 combo that will grant the user increased damage, which is <b>Heavy Swing</b> - <b>Maim</b> - <b>Storm&apos;s Eye</b>.</div>
            <div className={styles.info}>Finishing this combo gives the Warrior <b>Surging Tempest</b>, granting increased damage by 10% for 30 seconds. We can do this combo twice and max the duration to 60 seconds.</div>
          </div>
        </div>
      )
    }
  }

  const renderDungeonDiv = () => {
    if (jobName === "gunbreaker") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>During dungeons, Gunbreaker has access to <b>Demon Slice</b> and <b>Demon Slaughter</b>. Fulfilling this combo will give the Gunbreaker a cartridge to your powder gauge.</div>
            <div className={styles.info}>With our cartridge, we can use <b>Fated Circle</b> for 1 cartridge, and <b>Double Down</b> for 2 cartridges.</div>
            <div className={styles.info}>Weave in <b>Bow Shock</b> to add a DoT to enemies during dungeon packs.</div>
          </div>
        </div>
      )
    } else if (jobName === "paladin") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>In dungeons we will primarily using our AOEs, <b>Total Eclipse</b> and <b>Prominence</b>. Use <b>Spirits Within</b>/<b>Expiacion</b> and <b>Circle of Scorn</b> when these abilities are off cooldown.</div>
            <div className={styles.info}>Finish the combo of <b>Prominence</b> grants Paladin one stack of Divine Might, allowing for a third AOE attack, <b>Holy Circle</b> to be used with no mana cost.</div>
            <div className={styles.info}>In endgame content, Paladin has access to <b>Requiescat</b>, which grants 4 stacks of Requiescat. This makes all Confiteor combo actions and spells requires no cast time, allowing us to utilize the Blade combo.</div>
          </div>
        </div>
      )
    } else if (jobName === "dark knight") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>Dark Knight has access to <b>Unleash</b>, followed by <b>Stalwart Soul</b>. Due to Dark Knight&apos;s use of mana for their oGCD&apos;s, Stalwart Soul will restore mp.</div>
            <div className={styles.info}><b>Flood of Darkness</b> is Dark&apos;s Knight ability to spam when you have the mana for it. It will grant Darkside, increase damage dealt by 10%, extended up to a duration of 60 seconds.</div>
            <div className={styles.info}>The blood gauge gives us access to <b>Quietus</b>, 200 potency for 50 blood gauge.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>Warrior has access to abilities that will heal the Warrior in dungeon wall to walls if used in combination with the skill <b>Bloodwhetting</b>. Because much of the mitigation for Warrior comes from <b>Bloodwhetting</b> and healing, we can utilize this ability when our health is low, and maximize healing to full.</div>
            <div className={styles.info}>Warrior uses <b>Overpower</b> and <b>Mythril Tempest</b>, granting Surging Tempest, increasing damage dealt by 10%, up to 60 seconds. This will also increase beast gauge by 20.</div>
            <div className={styles.info}>With the beast gauge, warrior can use <b>Decimate</b>, which will cost 50 beast gauge. This can be upgraded to <b>Chaotic Cyclone</b> using <b>Infuriate</b>.</div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={classPageStyles.divMainContainer}>
      {renderBurstDiv()}
      {renderNormalDiv()}
      {renderDungeonDiv()}
    </div>
  )
}

export default TankPageCombos;