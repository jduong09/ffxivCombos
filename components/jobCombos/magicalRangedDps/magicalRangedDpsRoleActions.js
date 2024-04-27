import jobStyles from '@/app/jobs/job.module.css';
import { ffxivActions } from '@/app/api';

const MagicalRangedDpsRoleActions = ({ jobName, defensiveActions, roleActions }) => {
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
  })

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
    </div>
  )
}

export default MagicalRangedDpsRoleActions;