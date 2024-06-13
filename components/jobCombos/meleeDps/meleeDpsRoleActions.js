import classStyles from '@/app/classes/classes.module.css';
import classPageStyles from '@/app/jobs/classPage.module.css';
import { ffxivActions } from '@/app/api';

const MeleeDpsRoleActions = ({ jobName, defensiveActions, roleActions, jobSpecificActions }) => {
  const listDefensiveActions = defensiveActions.map((actionName, idx) => {
    if (actionName === "Second Wind") {
      return (
        <li key={idx}>
          <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['meleeDps']['Second Wind']['icon']['set']}/${ffxivActions.roleActions['meleeDps']['Second Wind']['icon']['id']}.png`} />
        </li>
      );
    } else if (actionName === 'Bloodbath') {
      return (
        <li key={idx}>
          <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['meleeDps']['Bloodbath']['icon']['set']}/${ffxivActions.roleActions['meleeDps']['Bloodbath']['icon']['id']}.png`} />
        </li>
      );
    } else {
      return (
        <li key={idx}>
          <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['id']}.png`} />
        </li>
      )
    }
  });

  const listRoleActions = roleActions.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['meleeDps'][actionName]['icon']['set']}/${ffxivActions.roleActions['meleeDps'][actionName]['icon']['id']}.png`} />
      </li>
    );
  });

  const listJobSpecificActions = jobSpecificActions.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['id']}.png`} />
      </li>
    )
  });

  const renderJobSpecificDiv = () => {
    if (jobName === 'monk') {
      return (
        <div>
          <span>Monk has a few job abilities that help them. <b>Riddle of Earth</b> reduces damage taken. Use in raidwide. <b>Riddle of Fire</b> increaes damage dealt by 15% for 20 seconds. Use during burst phase. <b>Riddle of Wind</b> reduces auto attack delay by 50%.</span>
          <span><b>Brotherhood</b> increases damage for the party, and it gives a buff, Meditative Brotherhood that allows monks to open a chakra when using a skill under the buff. <b>Mantra</b> gives the party increase hp recovery via healing actions. Use during raidwide to help healers bring the party back to full.</span>
        </div>
      )
    } else if (jobName === 'ninja') {
      return (
        <div>
          <span>Ninja does not necessarily have a raidwide mitigation or party buff, but Ninjas will inflict a vulnerability on the enemy, usually boss to start the burst phase for the party. <b>Suiton</b> - <b>Trick Attack</b> - <b>Mug</b> will increase damage you do by 10% and increase the target's damage taken by 5%.</span>
        </div>
      )
    }  else if (jobName === 'dragoon') {
      return (
        <div>
          <span>Dragoon has a few party buffs. <b>Battle Litany</b> increases critical hit rate of party by 10%, use at start of burst. <b>Dragon Sight</b> allows the Dragoon to choose a party member and increase damage dealt for both, 10% for user and 5% for party member targeted. <b>Dragon Sight</b> also makes the dragon not have any positional requirements on attacks for those 20 seconds.</span>
        </div>
      )
    } else if (jobName === 'reaper') {
      return (
        <div>
          <span>Reaper has <b>Arcane Crest</b>. Grants a barrier to the reaper that when he is used up, it will grant a buff, Crest of Time Returned to the party. This will gradually restore the partys HP. Use during raidwide.</span>
          <span><b>Arcane Circle</b> is the damage buff for the party, use during burst phase.</span>
        </div>
      )
    }
  }

  return (
    <div className={classPageStyles.tankDefensiveActions}>
      <h2>Defensive and Role Actions</h2>
      <div>Feint should be used off cooldown, don't overlap it with our party members! True North should be used when you cannot attack from the correct position, for example when resolving a mechanic.</div>
      <div className={classPageStyles.tankDefensivePacks}>
        <h4>Defensive Actions</h4>
        <ul className={classPageStyles.listTankDefensive}>{listDefensiveActions}</ul>
        <div>
          Second Wind + Blood Bath + Job Mitigation
        </div>
      </div>
      <div className={classPageStyles.tankDefensivePacks}>
        <h4>Role Actions</h4>
        <ul className={classPageStyles.listTankDefensive}>{listRoleActions}</ul>
        <div>Feint + True North</div>
      </div>
      {jobSpecificActions.length ? 
      <div className={classPageStyles.dpsSpecificActions}>
        <h4>Job Specific Actions</h4>
        <ul className={classPageStyles.listTankDefensive}>{listJobSpecificActions}</ul>
        {renderJobSpecificDiv()}
      </div> : null}
    </div>
  )
}

export default MeleeDpsRoleActions;