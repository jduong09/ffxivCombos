import jobStyles from '../../../app/jobs/job.module.css';
import { ffxivActions } from '@/app/api';

const DefensiveActions = ({ jobName, firstPack, secondPack }) => {
  const listFirstPack = firstPack.map((actionName, idx) => {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['id']}.png`} />
        </li>
      );
  });
  const listSecondPack = secondPack.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['id']}.png`} />
      </li>
    );
  })

  return (
    <div className={jobStyles.tankDefensiveActions}>
      <h2>Defensive Cooldowns</h2>
      <div>In dungeons, combine defensive cooldowns for each pack.</div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>First Pack</h4>
        <ul className={jobStyles.listTankDefensive}>{listFirstPack}</ul>
        <div>Longest CDs First</div>
      </div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>Second Pack</h4>
        <ul className={jobStyles.listTankDefensive}>{listSecondPack}</ul>
        <div>Remaining CDs</div>
      </div>
    </div>
  )
}

export default DefensiveActions;