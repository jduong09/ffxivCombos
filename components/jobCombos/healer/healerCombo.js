import React from 'react';
import classStyles from '@/app/classes/classes.module.css';
import classPageStyles from '@/app/classes/classPage.module.css';
import { ffxivActions } from '@/app/api';

const HealerCombo = ({ jobName, normalArray }) => {
  const listItemsNormal = normalArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const renderDamageCombo = () => {
    if (jobName === "scholar") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <h2>DoT + GCD Combo</h2>
          <div className={classPageStyles.divInfo}>
            <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
            <div>Scholar&apos;s damage is very simple. Add the DOT <b>Biolysis</b> and then use Broil. We can use <b>Aetherflow</b> to get 3 stacks to expend on <b>Energy Drain</b> if we don&apos;t need mitigation. I like to save one stack of Aetherflow for Sacred Soil.</div>
          </div>
        </div>
      )
    } else if (jobName === "white mage") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <h2>DoT + GCD Combo</h2>
          <div className={classPageStyles.divInfo}>
            <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
            <div>White Mage has a couple additional damage attacks outside of the normal DoT + GCD Combo. We can use <b>Assize</b> to do AOE damage and gain mana back. Also after using 3 stacks of either <b>Afflatus Solace</b> or <b>Afflatus Rapture</b>, we can use a <b>Afflatus Misery</b> for a potency of 1240.</div>
          </div>
        </div>
      )
    } else if (jobName === "astrologian") {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <h2>DoT + GCD Combo</h2>
          <div className={classPageStyles.divInfo}>
            <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
            <div>Astrologian&apos;s DoT is Combust III. The GCD is <b>Malefic II</b>. <b>Minor Arcana</b> will either draw either Lord of Crowns or the Lady of Crowns. For damage purposes, you will want to pull the Lord of Crowns card.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <h2>DoT + GCD Combo</h2>
          <div className={classPageStyles.divInfo}>
            <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
            <div>Sage combines <b>Eukrasian Dosis</b> with <b>Dosis</b>. The best part of Sage is <b>Kardia</b>. Using <b>Dosis</b> on enemies will heal the person that has <b>Kardia</b>. PLEASE USE <b>Kardia</b> ON TANKS.</div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {renderDamageCombo()}
    </div>
  );
}

export default HealerCombo;