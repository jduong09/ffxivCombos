import jobStyles from '@/app/jobs/job.module.css';
import classPageStyles from '@/app/jobs/classPage.module.css';
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
  });

  const renderFirstPack = () => {
    if (jobName === "gunbreaker") {
      return (
        <div>Gunbreakers first pack will utilize Nebula + Arm's Length. We want to use our longest cooldowns first so they come after first boss. Once these two cooldowns go down, use an <b>Aurora</b> with Heart of Corundum.</div>
      )
    } else if (jobName === "paladin") {
      return (
        <div>Combine Sentinel with Arm's Length. Use one Holy Sheltron once sentinel buff has run out.</div>
      )
    } else if (jobName === "dark knight") {
      return (
        <div>Shadow Wall with Arm's Length. Use Oblation similar to Holy Sheltron, and use The Blackest Knight if necessary.</div>
      )
    } else {
      return (
        <div>This pull is up to the user. Depending on who you are playing with, healer-wise, you may want to wait to use skills. Say its a white mage, they will start with a 4 second stun. Following that stun, we can let ourselves get damaged very low and then use Bloodwhetting to heal ourselves back up. Bloodwhetting with Inner Release + Decimate will heal us back to full. Follow this up with Vengeance and Arm's Length to finish the pack.</div>
      )
    }
  }

  const renderSecondPack = () => {
    if (jobName === "gunbreaker") {
      return (
        <div>Second pack will use Rampart + Reprisal. Aurora stores 2 cooldowns of it max, so we should have 1 Aurora. Once those main cooldowns are down, lets use Heart of Corundum again and pair it with Camouflage</div>
      );
    } else if (jobName === "paladin") {
      return (
        <div>Paladin's second pack will consist of Rampart + Reprisal. Finish the pack with Holy Sheltron with Bulwark, and we should be able to mitigate this pack.</div>
      )
    } else if (jobName === "dark knight") {
      return (
        <div>Dark Knight will use Rampart + Reprisal on second pack. Once these mits are up, we can use Dark Missionary, and Oblation and The Blackest Night.</div>
      )
    } else {
      return (
        <div>Similar to the first pack, gauge what your healer is doing and you can use no mitigation until you drop low and want to get back to full health with bloodwhetting and AOE damage. Use equillibrium as necessary, and dont forget Rampart + Reprisal.</div>
      )
    }
  }

  return (
    <div className={classPageStyles.tankDefensiveActions}>
      <h2>Defensive Cooldowns</h2>
      <div>In dungeons, each boss has usually two major wall to walls before reaching it. The goal will be use enough mitigation to allow the healer to dps in each pull. Managing tank mitigation is key to tanking dungeons.</div>
      <div className={classPageStyles.tankDefensivePacks}>
        <h4>First Pack</h4>
        <ul className={classPageStyles.listTankDefensive}>{listFirstPack}</ul>
        {renderFirstPack()}
      </div>
      <div className={classPageStyles.tankDefensivePacks}>
        <h4>Second Pack</h4>
        <ul className={classPageStyles.listTankDefensive}>{listSecondPack}</ul>
        {renderSecondPack()}
      </div>
    </div>
  )
}

export default DefensiveCooldowns;