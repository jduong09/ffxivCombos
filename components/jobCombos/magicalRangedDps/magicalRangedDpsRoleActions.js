import jobStyles from '@/app/jobs/job.module.css';
import { ffxivActions } from '@/app/api';

const MagicalRangedDpsRoleActions = ({ jobName, defensiveActions, roleActions, jobSpecificActions }) => {
  const listDefensiveActions = defensiveActions.map((actionName, idx) => {
    if (actionName === "Second Wind") {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['magicalRangedDps']['Second Wind']['icon']['set']}/${ffxivActions.roleActions['magicalRangedDps']['Second Wind']['icon']['id']}.png`} />
        </li>
      );
    } else {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['id']}.png`} />
        </li>
      )
    }
  });

  const listRoleActions = roleActions.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['magicalRangedDps'][actionName]['icon']['set']}/${ffxivActions.roleActions['magicalRangedDps'][actionName]['icon']['id']}.png`} />
      </li>
    );
  });

  const listJobSpecificActions = jobSpecificActions.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['id']}.png`} />
      </li>
    );
  });

  const renderJobSpecific = () => {
    if (jobName === 'red mage') {
      return (
        <div>
          <span>Red Mage is one of the dps classses with a raise, in <b>Verraise</b>. This will be crucial in resurrecting healers when they are downed.</span>
          <span>Red Mage has a party buff and self buff with <b>Embolden</b>. It will increase by 5%, so use during burst phase.</span>
          <span>Red Mage also has a nice party mitigation tool in <b>Magick Barrier</b>, which will reduce magic damage taken by self and party members by 10%, and incrase HP recovered by healing actions by 5%. Use during raidwide attacks.</span>
        </div>
      )
    } else if (jobName === 'summoner') {
      return (
        <div>
          <span>Summoner has a raise, which is important when when healers are down. Help your party with <b>Resurrection</b>.</span>
          <span><b>Searing Light</b> is a party damage buff, 3% for 30 seconds. Use during burst phase for maximum value.</span>
        </div>
      )
    } else {
      return (
        <div>
          <span>Black Mages job specific action to be talked about is <b>Ley Lines</b>. It will reduce spell cast time and recast time, auto-attack delay by 15% while the Black Mage is standing on the circle of power.</span>
          <span>Use this during burst phase to get in all the damage you can. You can use <b>Aetherial Manipulation</b> to teleport to any party member, and then use <b>Between the Lines</b> in order to teleport back to the Ley Line.</span>
        </div>
      )
    }
  };

  return (
    <div className={jobStyles.tankDefensiveActions}>
      <h2>Defensive and Role Actions</h2>
      <div>Peloton should be used off cooldown, don't overlap it with our party members! Head Graze should be used to interrupt a mechanic if tank has not used theirs.</div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>Defensive Actions</h4>
        <ul className={jobStyles.listTankDefensive}>{listDefensiveActions}</ul>
        <div>Job Mitigation</div>
      </div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>Role Actions</h4>
        <ul className={jobStyles.listTankDefensive}>{listRoleActions}</ul>
        <div>Lucid Dreaming + Surecast</div>
      </div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>Job Specific Actions</h4>
        <ul className={jobStyles.listTankDefensive}>{listJobSpecificActions}</ul>
        {renderJobSpecific()}
      </div>
    </div>
  )
}

export default MagicalRangedDpsRoleActions;