import classStyles from '@/app/classes/classes.module.css';
import classPageStyles from '@/app/classes/classPage.module.css';
import { ffxivActions } from '@/app/api';

const PhysicalRangedDpsRoleActions = ({ jobName, defensiveActions, roleActions, jobSpecificActions }) => {
  const listDefensiveActions = defensiveActions.map((actionName, idx) => {
    if (actionName === "Second Wind") {
      return (
        <li key={idx}>
          <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['physicalRangedDps']['Second Wind']['icon']['set']}/${ffxivActions.roleActions['physicalRangedDps']['Second Wind']['icon']['id']}.png`} />
        </li>
      );
    } else {
      return (
        <li key={idx}>
          <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['id']}.png`} />
        </li>
      )
    }
  });

  const listRoleActions = roleActions.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['physicalRangedDps'][actionName]['icon']['set']}/${ffxivActions.roleActions['physicalRangedDps'][actionName]['icon']['id']}.png`} />
      </li>
    );
  });

  const listJobSpecificActions = jobSpecificActions.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['physicalRangedDps'][jobName][actionName]['icon']['id']}.png`} />
      </li>
    )
  });

  const renderJobSpecificDiv = () => {
    if (jobName === 'machinist') {
      return (
        <div>
          <span>Machinist has access to <b>Tactician</b>. This is a mitigation tool for the party, reducing damage by 10%. Use during raidwide attacks.<b>Dismantle</b> reduces the targets damage dealt by 10%, either use during tankbuster or raidewide.</span>
        </div>
      );
    } else if (jobName === 'bard') {
      return (
        <div>
          <span>Bard has a number of party buffs, from the three ballads to a party wide mitigation tool in <b>Troubadour</b>. Troubadour cannot be stacked with other physical ranged&apos;s mitigation, so Tactician and Shield Samba. <b>Nature&apos;s Minne</b> incrases HP recovery so use during raidwides for healers.</span>
          <span>The three ballads are <b>Army&apos;s Paeon</b>, <b>The Wanderer&apos;s Minuet</b>, and <b>Mage&apos;s Ballad</b>. <b>Mage&apos;s Ballad</b> is used outside of burst, <b>The Wanderer&apos;s Minuet</b> during burst, and <b>Army&apos;s Paeon</b> after. <b>Battle Voice</b> increases the parties hit rate and should be used during burst.</span>
          <span>The final action to talk about is <b>The Warden&apos;s Paean</b>. This will remove a detrimental effect from anyone, useful for removing doom if there is a healer that needs to heal or is dead.</span>
        </div>
      );
    } else {
      return (
        <div>
          <span>Talked about earlier, Dancer can designate a party member as a dance partner with <b>Closed Position</b>, buffing their damage and granting specific damage buffs with either <b>Standard Step</b> or <b>Technical Step</b>.</span>
          <span>For raidwides, dancer can use <b>Shield Samba</b>, but remember it does not offer extra mitigation if used when the party has received either Machinist&apos;s Tactician or Bards Troubadour.</span>
        </div>
      );
    }
  }

  return (
    <div className={classPageStyles.tankDefensiveActions}>
      <h2>Defensive and Role Actions</h2>
      <div>Peloton should be used off cooldown, don&apos;t overlap it with our party members! Head Graze should be used to interrupt a mechanic if tank has not used theirs.</div>
      <div className={classPageStyles.tankDefensivePacks}>
        <h4>Defensive Actions</h4>
        <ul className={classPageStyles.listTankDefensive}>{listDefensiveActions}</ul>
        <div>
          Second Wind + Job Mitigation
        </div>
      </div>
      <div className={classPageStyles.tankDefensivePacks}>
        <h4>Role Actions</h4>
        <ul className={classPageStyles.listTankDefensive}>{listRoleActions}</ul>
        <div>Peloton + Head Graze</div>
      </div>
      <div className={classPageStyles.dpsSpecificActions}>
        <h4>Job Specific Actions</h4>
        <ul className={classPageStyles.listTankDefensive}>{listJobSpecificActions}</ul>
        {renderJobSpecificDiv()}
      </div>
    </div>
  )
}

export default PhysicalRangedDpsRoleActions;