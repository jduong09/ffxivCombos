import jobStyles from '@/app/jobs/job.module.css';
import { ffxivActions } from '@/app/api';

const DefensiveCooldowns = ({ jobName, firstPack, secondPack }) => {
  const listFirstPack = firstPack.map((actionName, idx) => {
    if (actionName === "Arm's Length") {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['tank']['Arm\'s Length']['icon']['set']}/${ffxivActions.roleActions['tank']['Arm\'s Length']['icon']['id']}.png`} />
        </li>
      )
    } else {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['id']}.png`} />
        </li>
      )
    }
  });

  const listSecondPack = secondPack.map((actionName, idx) => {
    if (actionName === 'Reprisal') {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['tank']['Reprisal']['icon']['set']}/${ffxivActions.roleActions['tank']['Reprisal']['icon']['id']}.png`} />
        </li>
      );
    } else if (actionName === 'Rampart') {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.roleActions['tank']['Rampart']['icon']['set']}/${ffxivActions.roleActions['tank']['Rampart']['icon']['id']}.png`} />
        </li>
      );
    } else {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['id']}.png`} />
        </li>
      )
    }
  })

  return (
    <div className={jobStyles.tankDefensiveActions}>
      <h2>Defensive Cooldowns</h2>
      <div>In dungeons, combine defensive cooldowns for each pack.</div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>First Pack</h4>
        <ul className={jobStyles.listTankDefensive}>{listFirstPack}</ul>
        <div>
          Arm's Length + Job Mitigation
        </div>
      </div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>Second Pack</h4>
        <ul className={jobStyles.listTankDefensive}>{listSecondPack}</ul>
        <div>Rampart + Reprisal + Job Mitigation</div>
      </div>
    </div>
  )
}

export default DefensiveCooldowns;