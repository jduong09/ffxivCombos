import React from 'react';
import styles from '@/app/page.module.css'
import classStyles from '@/app/classes/classes.module.css';
import classPageStyles from '@/app/classes/classPage.module.css';

import { ffxivActions } from '@/app/api';

const Combos = ({ jobName, normalArray, burstArray, dungeonPackArray }) => {
  const listItemsNormal = normalArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });
  const listItemsBurst = burstArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const listItemsDungeon = dungeonPackArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const renderBurstDiv = () => {
    if (jobName === "machinist") {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>2 Minute Window</h2>
            <div className={styles.info}>Machinist burst phase revolves around the skill <b>Wildfire</b>. For 10 seconds, you need to execute 6 actions for a total of 1440 potency. The 6 actions are usually <b>Heat Blast</b> and <b>Gauss Round</b>, because <b>Heat Blast</b> will reduce the recast time of <b>Gauss Round</b>.</div>
            <div className={styles.info}>Therefore we will either have 50 heat in the gauge in order to use <b>Hypercharge</b>, or we can use <b>Barrel Stabilizer</b> to increase our heat gauge by 50. Apply <b>Wildfire</b> to the target, and begin using Heat Round, and Gauss Round when you have one available. This should be enough to get maximum potency out of <b>Wildfire</b></div>
            <div className={styles.info}>Once the 10 seconds of <b>Wildfire</b> is up, we can use <b>Reassemble</b> with <b>Drill</b> during burst to guarentee maximum damage. Use <b>Chain Saw</b> and <b>Air Anchor</b> when it is off cooldown.</div>
            <div className={styles.info}>In burst phase we also want to activate our <b>Automaton Queen</b> when we have 100 battery.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-mch-burst" src="https://www.youtube.com/embed/oqsc8RRI3Wg?si=f12FLCZKpr9OB55y" title='Machinist burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    } else if (jobName === "bard") {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>2 Minute Window</h2>
            <div className={styles.info}>For Bard&apos;s burst, we want to utilize the correct Ballad to boost our party&apos;s damage. This will be <b>Battle Voice</b>, which increases direct hit rate of self and all nearby party members by 20% and <b>The Wanderer&apos;s Minuet</b>. This will grant the party increase critical hit rate.</div>
            <div className={styles.info}>While we are in this burst, Bard has access to their oGCDs, <b>Sidewinder</b> and <b>Empyreal Arrow</b> and <b>Blast Arrow</b>. Use 50 soul voice gauge in order to use <b>Apex Arrow</b>, and follow up with <b>Blast Arrow</b>.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-brd-burst" src="https://www.youtube.com/embed/eYUOzp5hfUM?si=wd_qrrHR29OjgqPH" title='Bard burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>2 Minute Window</h2>
            <div className={styles.info}>In burst phase, Dancer will need to maintain their standard finish buff. Start with <b>Devilment</b> to buff you and your dance partner. <b>Starfall Dance</b> to start, followed by <b>Technical Step</b>. Do the corresponding dances, and stop at 4 steps, and use <b>Technical Finish</b>.</div>
            <div className={styles.info}>Finishing this dance allows the use of <b>Tillana</b>. From here we can use <b>Fan Dance IV</b>, <b>Reverse Cascade</b>, <b>Fan Dance III</b>, or <b>Fountainfall</b>.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-dnc-burst" src="https://www.youtube.com/embed/mimsv3Th3WI?si=H0uenPl3ZlJVl7Mr" title='Dancer burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    }
  }

  const renderNormalDiv = () => {
    if (jobName === "machinist") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Machinist normal combo is <b>Split Shot</b> - <b>Slug Shot</b> - <b>Clean Shot</b>. Performing this combo will gradually increase the heat and battery gauge. In between this combo, Machinist should try to weave in the AOE attack <b>Ricochet</b> and ST attack <b>Gauss Round</b> for extra damage.</div>
            <div className={styles.info}>When not in burst, Machinist can use <b>Drill</b> once before it is needed for the burst phase. <b>Air Anchor</b> and <b>Chain Saw</b> fuel the battery gauge, and should be used when its immediately off cooldown.</div>
          </div>
        </div>
      )
    } else if (jobName === "bard") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Bard&apos;s normal combo is a combination of DoT attacks and one attack that can lead to another.<b>Heavy Shot</b> will be your ability to use normally, and there is a 20% chance of it granting Straight Shot Ready, allowing the use of <b>Straight Shot</b>. <b>Bloodletter</b> is an ability that has a maximum charge of 3, and is similar to Machinist&apos;s <b>Gauss Round</b>. Use when it is available.</div>
            <div className={styles.info}>Bard has two DoT attacks, <b>Venomous Bite</b> and <b>Windbite</b>. At higher levels, Bards can use <b>Iron Jaws</b> to reset the cooldown of the DoTs, but beforehand you will have to manually reapply both debuffs.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Dancer has a 1-2 combo, which can proc other buffs and use oGCDs. <b>Cascade</b> - <b>Fountain</b>. <b>Cascade</b> has a 50% chance of granting Silken Symmetry, allowing the use of <b>Reverse Cascade</b>. <b>Fountain</b> has a 50% chance of granting silken flow, allowing the use of <b>Fountainfall</b>. <b>Reverse Cascade</b> has a 50% chance of granting Fourfold Feather, which in turn allows <b>Fan Dance</b>.</div>
            <div className={styles.info}>The other key to Dancer&apos;s kit is dancing, of course. <b>Standard Step</b> will turn some actions to steps, and doing the correct steps will allow us to use <b>Standard Finish</b> and get max potency on an AOE attack, while granting the user and their dance partner a damage bonus.</div>
          </div>
        </div>
      )
    }
  }

  const renderDungeonDiv = () => {
    if (jobName === "machinist") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>In dungeons, our AOE will be <b>Spread Shot</b>/<b>Scatter Gun</b>. There is no combo action, but when we have casts of <b>Ricochet</b>, use them because it is an AOE attack.</div>
            <div className={styles.info}>Manage your heat gauge, and if you can afford it use <b>Hypercharge</b>, in order to then use <b>Auto Crossbow</b>. The AOE oGCD is <b>Bioblaster.</b></div>
          </div>
        </div>
      )
    } else if (jobName === "bard") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>For dungeon AOE&apos;s, Bard will use <b>Quick Knock</b>, with a 35% chance of becoming shadowbite ready, allowing the use of <b>Shadowbite</b>. Similar to <b>Bloodletter</b>, Bard can use <b>Rain of Death</b> when it is available.</div>
            <div className={styles.info}>Use <b>Mage&apos;s Ballad</b>, and hopefully the 80% chance to grant Repertoire, which will reduce the recast time of <b>Rain of Death</b>.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>Dancer&apos;s dungeon skills are similar to their single target skills. <b>Windmill</b> can grant Silken Symmetry, allowing the use of <b>Rising Windmill</b>, while <b>Bladeshower</b> can allow the use of <b>Bloodshower</b> through a 50% chance at getting the buff Silken Flow.</div>
            <div className={styles.info}>Dancer&apos;s <b>Standard Finisher</b> is an AOE attack, so make sure to use it on the enemy pack.</div>
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
  );
}

export default Combos;