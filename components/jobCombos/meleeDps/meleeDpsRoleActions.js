import jobStyles from '@/app/jobs/job.module.css';
import { ffxivActions } from '@/app/api';

const MeleeDpsRoleActions = ({ jobName, defensiveActions, roleActions }) => {
  const listDefensiveActions = defensiveActions.map((actionName, idx) => {
    if (actionName === "Second Wind") {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['meleeDps']['Second Wind']['icon']['set']}/${ffxivActions.roleActions['meleeDps']['Second Wind']['icon']['id']}.png`} />
        </li>
      );
    } else if (actionName === 'Bloodbath') {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['meleeDps']['Bloodbath']['icon']['set']}/${ffxivActions.roleActions['meleeDps']['Bloodbath']['icon']['id']}.png`} />
        </li>
      );
    } else {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['id']}.png`} />
        </li>
      )
    }
  });

  const listRoleActions = roleActions.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['meleeDps'][actionName]['icon']['set']}/${ffxivActions.roleActions['meleeDps'][actionName]['icon']['id']}.png`} />
      </li>
    );
  })

  return (
    <div className={jobStyles.tankDefensiveActions}>
      <h2>Defensive and Role Actions</h2>
      <div>Feint should be used off cooldown, don't overlap it with our party members! True North should be used when you cannot attack from the correct position, for example when resolving a mechanic.</div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>Defensive Actions</h4>
        <ul className={jobStyles.listTankDefensive}>{listDefensiveActions}</ul>
        <div>
          Second Wind + Blood Bath + Job Mitigation
        </div>
      </div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>Role Actions</h4>
        <ul className={jobStyles.listTankDefensive}>{listRoleActions}</ul>
        <div>Feint + True North</div>
      </div>
    </div>
  )
}

export default MeleeDpsRoleActions;